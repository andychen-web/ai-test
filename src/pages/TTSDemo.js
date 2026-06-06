import { useState, useEffect, useRef, useCallback } from "react";

const QUALITY_KEYWORDS = [
  "neural", "natural", "premium", "enhanced", "wavenet",
  "studio", "polyglot", "journey", "news", "aria", "jenny",
  "guy", "davis", "tony", "jane", "jason",
];

function scoreVoice(voice) {
  const name = voice.name.toLowerCase();
  let score = 0;
  for (const kw of QUALITY_KEYWORDS) {
    if (name.includes(kw)) score += 10;
  }
  if (!voice.localService) score += 5; // remote/cloud voices tend to be higher quality
  if (voice.lang.startsWith("en")) score += 2;
  return score;
}

function getVoiceLabel(voice) {
  const name = voice.name.toLowerCase();
  const isNeural = QUALITY_KEYWORDS.some((kw) => name.includes(kw));
  return `${voice.name} (${voice.lang})${isNeural ? " ✨" : ""}`;
}

const SAMPLE_TEXT =
  "Welcome! This page demonstrates natural text-to-speech. Type anything you'd like to hear, then press Play.";

export default function TTSDemo() {
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [text, setText] = useState(SAMPLE_TEXT);
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);
  const [speaking, setSpeaking] = useState(false);
  const [paused, setPaused] = useState(false);
  const [noGoodVoice, setNoGoodVoice] = useState(false);
  const utteranceRef = useRef(null);

  const loadVoices = useCallback(() => {
    const available = window.speechSynthesis.getVoices();
    if (!available.length) return;

    const englishVoices = available.filter((v) => v.lang.startsWith("en"));
    const pool = englishVoices.length ? englishVoices : available;
    const sorted = [...pool].sort((a, b) => scoreVoice(b) - scoreVoice(a));

    // If the best voice scores 0 it's likely robotic — bail out
    if (scoreVoice(sorted[0]) === 0) {
      setNoGoodVoice(true);
      return;
    }

    setVoices(sorted);
    setSelectedVoice((prev) => prev ?? sorted[0]);
  }, []);

  useEffect(() => {
    if (!("speechSynthesis" in window)) {
      setNoGoodVoice(true);
      return;
    }
    loadVoices();
    window.speechSynthesis.addEventListener("voiceschanged", loadVoices);
    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", loadVoices);
      window.speechSynthesis.cancel();
    };
  }, [loadVoices]);

  function speak() {
    if (!selectedVoice || !text.trim()) return;
    window.speechSynthesis.cancel();

    const utter = new SpeechSynthesisUtterance(text);
    utter.voice = selectedVoice;
    utter.rate = rate;
    utter.pitch = pitch;
    utter.onstart = () => { setSpeaking(true); setPaused(false); };
    utter.onend = () => { setSpeaking(false); setPaused(false); };
    utter.onerror = () => { setSpeaking(false); setPaused(false); };
    utteranceRef.current = utter;
    window.speechSynthesis.speak(utter);
  }

  function togglePause() {
    if (paused) {
      window.speechSynthesis.resume();
      setPaused(false);
    } else {
      window.speechSynthesis.pause();
      setPaused(true);
    }
  }

  function stop() {
    window.speechSynthesis.cancel();
    setSpeaking(false);
    setPaused(false);
  }

  if (noGoodVoice) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <p className="text-2xl mb-2">🔇</p>
          <p className="text-gray-600 font-medium">
            No high-quality TTS voices found on this browser/device.
          </p>
          <p className="text-gray-400 text-sm mt-1">
            Try Chrome or Edge on desktop for the best experience.
          </p>
        </div>
      </div>
    );
  }

  const bestVoiceName = voices[0]?.name ?? "";

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8 space-y-6">

        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">🎙️ Text to Speech</h1>
          {bestVoiceName && (
            <p className="text-sm text-indigo-500 mt-1">
              Best voice detected: <span className="font-medium">{bestVoiceName}</span>
            </p>
          )}
        </div>

        {/* Text input */}
        <textarea
          className="w-full border border-gray-200 rounded-xl p-4 text-gray-700 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
          rows={6}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something to read aloud…"
        />

        {/* Voice selector */}
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
            Voice
          </label>
          <select
            className="w-full border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
            value={selectedVoice?.name ?? ""}
            onChange={(e) =>
              setSelectedVoice(voices.find((v) => v.name === e.target.value))
            }
          >
            {voices.map((v) => (
              <option key={v.name} value={v.name}>
                {getVoiceLabel(v)}
              </option>
            ))}
          </select>
        </div>

        {/* Sliders */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
              Speed — {rate.toFixed(1)}×
            </label>
            <input
              type="range" min="0.5" max="2" step="0.1"
              value={rate}
              onChange={(e) => setRate(parseFloat(e.target.value))}
              className="w-full accent-indigo-500"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
              Pitch — {pitch.toFixed(1)}
            </label>
            <input
              type="range" min="0.5" max="2" step="0.1"
              value={pitch}
              onChange={(e) => setPitch(parseFloat(e.target.value))}
              className="w-full accent-indigo-500"
            />
          </div>
        </div>

        {/* Controls */}
        <div className="flex gap-3">
          {!speaking ? (
            <button
              onClick={speak}
              disabled={!text.trim() || !selectedVoice}
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white font-semibold py-3 rounded-xl transition"
            >
              ▶ Play
            </button>
          ) : (
            <>
              <button
                onClick={togglePause}
                className="flex-1 bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-xl transition"
              >
                {paused ? "▶ Resume" : "⏸ Pause"}
              </button>
              <button
                onClick={stop}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 rounded-xl transition"
              >
                ⏹ Stop
              </button>
            </>
          )}
        </div>

        {speaking && !paused && (
          <p className="text-center text-sm text-indigo-400 animate-pulse">
            Speaking…
          </p>
        )}
      </div>
    </div>
  );
}
