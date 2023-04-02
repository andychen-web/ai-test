import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [isSendUsAMessageOpen, setSendUsAMessageOpen] = useState(false);
  const navigate = useNavigate();

  const openSendUsAMessage = useCallback(() => {
    setSendUsAMessageOpen(true);
  }, []);

  const closeSendUsAMessage = useCallback(() => {
    setSendUsAMessageOpen(false);
  }, []);

  const onAboutTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onDestinationTextClick = useCallback(() => {
    navigate("/destination");
  }, [navigate]);

  const onProjectFocusTextClick = useCallback(() => {
    navigate("/our-focus");
  }, [navigate]);

  const onTripTypeTextClick = useCallback(() => {
    navigate("/trip-type");
  }, [navigate]);

  const onGalleryTextClick = useCallback(() => {
    navigate("/gallery");
  }, [navigate]);

  const onGroupContainer10Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupContainer12Click = useCallback(() => {
    navigate("/my-profile");
  }, [navigate]);

  const onHomeClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  return (
    <>
      <div className="relative bg-white w-full h-[2807px] text-left text-9xl text-black font-adobe-gothic-std">
        <div className="absolute top-[264px] left-[174px] w-[1572px] h-[629px] font-lithos-pro">
          {/* <img
            className="absolute h-[calc(100%_-_26px)] w-[calc(100%_-_69px)] top-[26px] right-[0px] bottom-[0px] left-[69px] rounded-11xl max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/44d907e2-6b9d-4e2e-9edc-3427737840e3_1680406762676977940?Expires=-62135596800&Signature=WsAbNBJxqBScGOMZo1Wb0YHV0ZIesiO6nDHASMeELUceMbmw-RaGJirCc0AVWxfWqTXOFHMCOM6BZvm1f7a88coZTM~p43AnayZrRovGUhAkzAcPor7xp2CM9y2208uQISRlFBKWhP1tJNVVo6-6Tg4l~sRenBND1uSnSmyhwTBUGJI6ZfXn06MwX1IheUKin6RJkDFvWRgYE70ATGbGV218Rg~7i1rL2YxcaV~-Bl38fThr84XaWnTNhfEcaFdTnqHFPykwoCZXuEGJXAeXYQfi3hC5dFccSqNtQBJLs2LfZMuXpKHvFZoNNb3~8SvfWKLB9ibhkJYWonyWfwEIiQ__&Key-Pair-Id=K1P54FZWCHCL6J"
          /> */}
          <div className="absolute h-[calc(100%_-_72px)] w-[calc(100%_-_70px)] top-[0px] right-[70px] bottom-[72px] left-[0px] rounded-11xl bg-thistle-100 shadow-[30px_30px_0px_#6c63ff] box-border border-[8px] border-solid border-black" />
          <div className="absolute top-[calc(50%_-_84.5px)] left-[82px] leading-[42px] font-adobe-gothic-std inline-block w-[683px] h-[97px]">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut .
          </div>
          <div className="absolute top-[calc(50%_-_192.5px)] left-[86px] text-26xl">
            Ask question to our team!
          </div>
          <img
            className="absolute top-[64px] right-[127px] rounded-11xl w-[625px] h-[428px] object-cover"
            alt=""
            src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/618545fb-afb2-4e30-a1cd-8c957fbbf39b_1680406762677165787?Expires=-62135596800&Signature=BdwB6OhvUv7ay17Wrz9amFhy77EUqNkByKdNLI1DT2gP747piR~UmYYTPvBVNCuhXKNDjUdD23yJ7v9CvhZmVrCK9dm3geGicCWm4NMZYCkELOSnB2gHEQXOmFtcf09JSwVx~Fy-t7AQImmurtMmKf8q41Q8tgYHThPw6~fAdz60TVFunn4NEKo9ROj8Zjkj3hxCiXnuhLx-AjPGAXbddIUz13htjjsjsZf8VaQdgdQW~fDredSVVYKDco-PYCTIAXZGHQsjq0QToAJzVgxJoa1Nu4M7zwHGdbTy9yYzf39tZ8Ge4V8tpmFnyQ53igx~kh151mwr6E6Xum1SYcDpdg__&Key-Pair-Id=K1P54FZWCHCL6J"
          />
          <div
            className="absolute top-[calc(50%_+_94.5px)] left-[calc(50%_-_250px)] w-[209px] h-16 cursor-pointer text-center"
            onClick={openSendUsAMessage}
          >
            <div className="absolute h-[calc(100%_+_8px)] w-[calc(100%_+_8px)] top-[-8px] right-[0px] bottom-[0px] left-[-8px] rounded-4xl bg-springgreen shadow-[5px_5px_0px_#000] box-border border-[8px] border-solid border-black" />
            <div className="absolute top-[calc(50%_-_19.25px)] left-[calc(50%_-_48.06px)]">
              Contact
            </div>
          </div>
        </div>
        <div className="absolute top-[963px] left-[174px] w-[1572px] h-[629px] font-lithos-pro">
          {/* <img
            className="absolute h-[calc(100%_-_26px)] w-[calc(100%_-_69px)] top-[26px] right-[0px] bottom-[0px] left-[69px] rounded-11xl max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/rectangle-548@2x.png"
          /> */}
          <div className="absolute h-[calc(100%_-_72px)] w-[calc(100%_-_70px)] top-[0px] right-[70px] bottom-[72px] left-[0px] rounded-11xl bg-paleturquoise shadow-[30px_30px_0px_#6c63ff] box-border border-[8px] border-solid border-black" />
          <div className="absolute top-[calc(50%_-_84.5px)] left-[82px] leading-[42px] font-adobe-gothic-std inline-block w-[683px] h-[97px]">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut .
          </div>
          <div className="absolute top-[72px] left-[86px] text-26xl">
            <p className="m-0">{`Need help choosing a `}</p>
            <p className="m-0">program?</p>
          </div>
          <img
            className="absolute top-[64px] right-[127px] rounded-11xl w-[625px] h-[428px] object-cover"
            alt=""
            src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/4f400892-5498-49ce-b5d3-cd83707aca1e_1680406762677271817?Expires=-62135596800&Signature=S1YaEtCP67eUgbgEzCaonnnoN5mOzZ7ud36pXHwD3TN5ZLQgBNEFYk~q7Yq6XnOFk2YnUhzSSsrcfa1KZT3FhIQOYI0-4sM72CiJXAB2l01PRE7mr7oInHVL8Pk9kZ49rA~ILtwGCBMJbL5pr4ogiXXad1j~bAz43IxZvUNvn3DMrq1LDMgo7X9q~R827g6PeyLz-gKDI~j2PrrgL1AqAY6QzjItCQnc5eU0GvNWBTNONZ2aWwdD0Xs3jfnYOBPGwWF2PFJvbgfyGi0LMFLnulVoYfEC4ChdzJvdK4TXj8NElvJX0bygPPWY31LPgtQ6It5B~qSkotKWCHHHs-hntA__&Key-Pair-Id=K1P54FZWCHCL6J"
          />
          <div className="absolute top-[calc(50%_+_94.5px)] left-[calc(50%_-_250px)] w-[209px] h-16 text-center">
            <div className="absolute h-[calc(100%_+_8px)] w-[calc(100%_+_8px)] top-[-8px] right-[0px] bottom-[0px] left-[-8px] rounded-4xl bg-gold shadow-[5px_5px_0px_#000] box-border border-[8px] border-solid border-black" />
            <div className="absolute top-[calc(50%_-_19.25px)] left-[calc(50%_-_48.06px)]">
              Contact
            </div>
          </div>
        </div>
        <div className="absolute top-[1721.5px] left-[139.5px] text-26xl font-lithos-pro [-webkit-text-stroke:1px_#707070]">
          Speak with us!
        </div>
        <div className="absolute top-[1863px] left-[140px] w-[250px] h-[193px]">
          <img
            className="absolute w-[calc(100%_+_10px)] top-[0px] right-[-10px] left-[0px] rounded-11xl max-w-full overflow-hidden h-[135px] object-cover"
            alt=""
            src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/dbd6ea42-e406-4ba7-8623-49b3e49650ac_1680406762677387203?Expires=-62135596800&Signature=I1KosqR1y2xD9somiQxhUBS2MKrMZvxn1jVsD163LT1376fRF~xRDB6OC5FX9GdqvaSB-CatQ6RNUdEFgSVCH~0xK9XkAxJk2nxZn7aXDLaYA1EZyqazVKspjASBR0HKpH~VAFhCkcfJ1uV3b~MvqOrpAQX8YJ~~XjvX7X6mYctm4rbNulxLVNcuTU2EjJAjGDqTdU0cqd7f0JKj7gj4n~JLiAFCYAUELLmILVeIcM9vDDtwSpkwtdCcXeEkaVqAOl4Ah8oaTbR2rF2BOdv4VDppMTiBNPZdxwpJzrYNmhLmZwG~nI5kd3Fz0O~pwn-eg46XZO-mMmrm6kwrCbZR5g__&Key-Pair-Id=K1P54FZWCHCL6J"
          />
          <div className="absolute bottom-[0.5px] left-[16px] leading-[30px] [-webkit-text-stroke:1px_#707070]">
            +61 2102981171
          </div>
        </div>
        <div className="absolute top-[1863px] left-[486px] w-[250px] h-[193px]">
          <img
            className="absolute w-[calc(100%_+_10px)] top-[0px] right-[-10px] left-[0px] rounded-11xl max-w-full overflow-hidden h-[135px] object-cover"
            alt=""
            src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/08a7b46f-c5cd-4a5e-ad0b-f5c7a4ca56e3_1680406762677484084?Expires=-62135596800&Signature=qmbqa83TIjnKmFLLJQy6rY3HAHh~dNO1U6V8ixJqyUmXCwoLPKBD7QZaDykU5XWikUlgw9UqI3zq-NZ1h-siYAIrOOb4TaIKJj0-fdVn~23OJKAcxcLjbSSIjJ2ObT4HNX6hTqPOHCp4d2UiHFR1EUpSKuNmtjXMs2gFN9OK~S4iVq1GTSdlFIHBtPpgUO~Sj3Ktq0bGGtO37TsT~4UJOYw1lvvxmiwjkF67PfWobPt87cseyjJgT6qWNsnahYgHLGaJvTxVJLlKIsFr~Hbx4B5W0W8ocLmnbJd6bNkFUd~6vhyzpb2Q5RBqs26P821S8jR~HH1tW-E-7HYeisFQIg__&Key-Pair-Id=K1P54FZWCHCL6J"
          />
          <div className="absolute bottom-[0.5px] left-[32px] leading-[30px] [-webkit-text-stroke:1px_#707070]">
            +64 23192847
          </div>
        </div>
        <div className="absolute top-[1863px] left-[832px] w-[250px] h-[193px]">
          <img
            className="absolute w-[calc(100%_+_10px)] top-[0px] right-[-10px] left-[0px] rounded-11xl max-w-full overflow-hidden h-[135px] object-cover"
            alt=""
            src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/6a753a81-d741-4be8-af5d-70967cca3400_1680406762677577558?Expires=-62135596800&Signature=Uhj8D-cJVHAp8FK7dk4TXzHTjcI5TnMYUk6YGEaI6KihjhYr2-bw0BlEp3Sz1OiSMOeUr3qkM7-4TM5uCHZV~Ft6I5LkCkE7Akqa11PcOtDFHR~Y8AjkNAb6dpObMrOKVnVaQdltEyjpOpL5UcjgfUQVnozGlfchocwA-1aJun08wS9kMkqT01rk04wwYu9Xn88aXC4g49v9lGIM0XHNly5C~Bu0UT6yWCnlU2rvh~5sj9sD~CgEmyvvyhG~Wdrwse3D1gOLSkhCNf-jJLGnG~zvuOA0ZpuAD58Xz2GYrj90WUhNbeQgZDf3q3kC-bst17fScvfrtRvbu98AUQOYHw__&Key-Pair-Id=K1P54FZWCHCL6J"
          />
          <div className="absolute bottom-[0.5px] left-[32px] leading-[30px] [-webkit-text-stroke:1px_#707070]">
            +44 23919283
          </div>
        </div>
        <div className="absolute top-[1863px] left-[1155px] rounded-11xl w-[250px] h-[193px]  bg-cover bg-no-repeat bg-[top]">
          <img
            className="absolute w-[calc(100%_+_10px)] top-[0px] right-[-10px] left-[0px] rounded-11xl max-w-full overflow-hidden h-[135px] object-cover"
            alt=""
            src="/Image 42.png"
          />
          <div className="absolute bottom-[0.5px] left-[calc(50%_-_85px)] leading-[30px] [-webkit-text-stroke:1px_#707070]">
            +1 98276822
          </div>
        </div>
        <div className="absolute top-[1863px] right-[140px] w-[250px] h-[193px]">
          <img
            className="absolute w-[calc(100%_+_10px)] top-[0px] right-[-10px] left-[0px] rounded-11xl max-w-full overflow-hidden h-[135px] object-cover"
            alt=""
            src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/5864ba96-5baf-48df-a625-9a898cedd83d_1680406762677749680?Expires=-62135596800&Signature=lmGTx-fxa08Y-2ZyFFfNDZ8vy1rJG8gAxhJdHXwuKPB1MdiT0lcqc9AZzs4lGSFq4phkVACIYJeOQPafZAsXLkk9tWOX29WIyg71BFinpIHT4vp11VPnfgXdFWqJebrtGRno8GX-mV5~3DdhmdQ65SQAgTvLn~s9z10TF4HtlT5b6z-HDYsCXksnY5QcFUAiwonPW4j9DDbjbK4JPawlkeThrpnuu36-swcIVUuPjW-pL2jOjQpvJXN8s2iS78kBitVphaDd24cgpjvExIWO7qWNtSZKOwOMRDqwcOKrBqSQfCvjI~wSWw~aruFC2n8cQq9WBivYV7YKNbZjs9lYgA__&Key-Pair-Id=K1P54FZWCHCL6J"
          />
          <div className="absolute bottom-[0.5px] left-[calc(50%_-_85px)] leading-[30px] [-webkit-text-stroke:1px_#707070]">
            +1 91231455
          </div>
        </div>
        <div className="absolute bottom-[0px] left-[0px] w-[1920px] h-[580px] text-26xl font-lithos-pro">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gold">
            <img
              className="absolute bottom-[47px] left-[calc(50%_+_27px)] rounded-6xl w-[67px] h-[67px] object-cover"
              alt=""
              src="/icons8youtube30@2x.png"
            />
            <img
              className="absolute bottom-[46px] left-[calc(50%_-_348px)] w-[67px] h-[68px] object-cover"
              alt=""
              src="/icons8twitter30@2x.png"
            />
            <img
              className="absolute bottom-[46px] left-[calc(50%_-_158px)] w-[67px] h-[68px] object-cover"
              alt=""
              src="/icons8instagram30@2x.png"
            />
            <img
              className="absolute bottom-[47px] left-[calc(50%_+_217px)] w-[67px] h-[67px] object-cover"
              alt=""
              src="/icons8facebook50@2x.png"
            />
          </div>
          <div className="absolute top-[54.97px] left-[262px] w-[399.47px] h-[61.53px]">
            <div className="absolute right-[-1px] bottom-[0px]">{`Volunteer Time `}</div>
            <img
              className="absolute h-[calc(100%_-_3.47px)] top-[0px] bottom-[3.47px] left-[0px] max-h-full w-[64.24px]"
              alt=""
              src="/path-188.svg"
            />
          </div>
          <div className="absolute w-[calc(100%_-_516px)] top-[calc(50%_-_110px)] right-[258px] left-[258px] h-[268px] text-3xl">
            <div className="absolute h-full top-[0px] left-[0px] leading-[66px] inline-block w-[375px]">
              <p className="m-0">SIGN UP AS AN ORGANIZATION</p>
              <p className="m-0">ABOUT US</p>
              <p className="m-0">PRESS</p>
            </div>
            <div className="absolute h-[calc(100%_-_90px)] top-[0px] right-[-1px] leading-[66px] inline-block w-[301px]">
              <p className="m-0">COOKIE POLICY</p>
              <p className="m-0">PRIVACY TERMS</p>
              <p className="m-0">LEGAL DISCLOSURE</p>
            </div>
            <div className="absolute h-[calc(100%_-_72px)] top-[0px] left-[calc(50%_-_113px)] leading-[66px] inline-block w-[301px]">
              <p className="m-0">HELP CENTER</p>
              <p className="m-0">BLOG</p>
              <p className="m-0">{`TERMS & CONDITIONS`}</p>
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[0px] w-[1920px] h-[164px] text-3xl font-lithos-pro">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px]">
            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px]">
              <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gold" />
              <div
                className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_329px)] cursor-pointer"
                onClick={onAboutTextClick}
              >
                About
              </div>
              <div
                className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_192px)] cursor-pointer"
                onClick={onDestinationTextClick}
              >
                Destination
              </div>
              <div
                className="absolute top-[calc(50%_-_10px)] left-[calc(50%_+_18px)] cursor-pointer"
                onClick={onProjectFocusTextClick}
              >
                Project Focus
              </div>
              <div
                className="absolute top-[calc(50%_-_10px)] left-[calc(50%_+_248px)] cursor-pointer"
                onClick={onTripTypeTextClick}
              >
                Trip type
              </div>
              <div
                className="absolute top-[calc(50%_-_10px)] left-[calc(50%_+_419px)] cursor-pointer"
                // onClick={onGalleryTextClick}
              >
                Gallery
              </div>
              <div className="absolute top-[calc(50%_-_10px)] right-[310px]">
                Contact
              </div>
              <div
                className="absolute top-[calc(50%_-_31.03px)] left-[33.53px] w-[399.47px] h-[61.53px] cursor-pointer text-26xl"
                // onClick={onGroupContainer10Click}
              >
                <div className="absolute right-[-1px] bottom-[0px]">{`Volunteer Time `}</div>
                <img
                  className="absolute h-[calc(100%_-_3.47px)] top-[0px] bottom-[3.47px] left-[0px] max-h-full w-[64.24px]"
                  alt=""
                  src="/path-188.svg"
                />
              </div>
            </div>
          </div>
          <div className="absolute top-[calc(50%_-_16.78px)] right-[54px] w-[170px] h-10 cursor-pointer text-xl font-adobe-gothic-std">
            <img
              className="absolute h-full w-[calc(100%_-_130px)] top-[0px] right-[130px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
              alt=""
              src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/2daef3f8-37e5-42ef-8632-b4fa5fac0c07_1680406425151800647?Expires=-62135596800&Signature=svQbKUslL2LE1Kcz4uxiSgJbW7Vt3JSudaB~DlqeA~0WKNDHKeLhYK1VYUucQ10iDCLx3bMEDHbi4xkLCTSrJpcwRPN98-nn0NADg1zND0G2BpFjK2dKR7thxdCiw0qOMFgFXOCRZTGxGrAaRHNN6VTwicPt2ZGwSFCgU0ev53~NcsQeETMCWoZvDHRJsGCiK83cBFS6bJhXz4kzpgqccZhvfYig7hhx6LNo1qdfg1tLUfzS3e6AMGTP-7yQQjcylPRlMuTFtDzv7F3yaRgGjEb-LUQOw--J4XefJgcUbg3X~BhknuLyCxC6VlHw1dQyy-iBlbqJFyIuvsJ-v26fRg__&Key-Pair-Id=K1P54FZWCHCL6J"
            />
            <div className="absolute top-[calc(50%_-_10.22px)] right-[10px]">
              Hello! Esme
            </div>
          </div>
        </div>
        <div className="absolute top-[164px] left-[0px] bg-cornsilk w-[1920px] h-[46px]" />
        <div
          className="absolute top-[180px] left-[140px] text-xl cursor-pointer"
          onClick={onHomeClick}
        >{`Home  > Contact`}</div>
      </div>
      {isSendUsAMessageOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSendUsAMessage}
        >
          <SendUsAMessage onClose={closeSendUsAMessage} />
        </PortalPopup>
      )}
    </>
  );
};

export default Contact;
