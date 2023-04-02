import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

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

  const onContactTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onGroupContainer4Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupContainer6Click = useCallback(() => {
    navigate("/my-profile");
  }, [navigate]);

  const onHomeClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[3393px] text-left text-xl text-black">
      <div className="absolute top-[249px] left-[668px] text-26xl">
        About Volunteer Time
      </div>
      <div className="absolute top-[340px] left-[278px] leading-[30px] font-adobe-gothic-std inline-block w-[1365px] h-[89px]">
        <p className="m-0">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <p className="m-0">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <p className="m-0">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <p className="m-0">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <p className="m-0">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit
        </p>
      </div>
      <div className="absolute top-[1484px] left-[278px] leading-[30px] font-adobe-gothic-std inline-block w-[1365px] h-[89px]">
        <p className="m-0">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div className="z-10 absolute top-[509px] left-[114px] w-[1692px] h-[870px]">
        <img
          className="z-0 absolute h-[calc(93%_-_25px)] w-[calc(95%_-_1px)] top-[110px] right-[27px] bottom-[25px] left-[98px] rounded-11xl max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/about-2.png"
        />
        <img
          className="absolute h-[calc(100%_-_73px)] w-[calc(100%_-_97px)] top-[73px] right-[0px] bottom-[0px] left-[97px] rounded-11xl max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/about-1.png"
        />
      </div>
      <div className="absolute top-[1393px] left-[801px] text-26xl">
        Our mission
      </div>
      <div className="absolute top-[2067px] left-[140px] leading-[30px] font-adobe-gothic-std inline-block w-[537px] h-[75px]">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam
      </div>
      <div className="absolute top-[2621px] left-[140px] leading-[30px] font-adobe-gothic-std inline-block w-[537px] h-[75px]">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam
      </div>
      <div className="absolute top-[2067px] left-[692px] leading-[30px] font-adobe-gothic-std inline-block w-[537px] h-[75px]">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam
      </div>
      <div className="absolute top-[2621px] left-[692px] leading-[30px] font-adobe-gothic-std inline-block w-[537px] h-[75px]">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam
      </div>
      <div className="absolute top-[2067px] right-[89px] leading-[30px] font-adobe-gothic-std inline-block w-[537px] h-[75px]">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam
      </div>
      <div className="absolute top-[2621px] right-[89px] leading-[30px] font-adobe-gothic-std inline-block w-[537px] h-[75px]">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam
      </div>
      <div className="absolute top-[2006.5px] left-[139.5px] text-3xl [-webkit-text-stroke:1px_#707070]">
        Why Volunteer Abroad With us?
      </div>
      <img
        className="absolute top-[1628px] right-[130px]  w-[470px] h-[357px] "
        alt=""
        src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/b7be4f6d-a4d0-4fcf-aefa-acf77e716faa_1680406446519298381?Expires=-62135596800&Signature=S8x-7d44rcRwm8bkrY4I2bW3fi5YJzegWQ7rOsGVeBmnL1s-tm4JDRh5BL3zYd5l5NpkF1nK-1zD~1TaLb5bR2rnO5eIqAP7fIavGJ4bIGRyzSHcDXMoVCm-pIiJeVpl76t7oeHB5ZIF36EEVTS5JYlpi9K6OTkI4v16hznYPKTGn-J-5kXhCfZ07CDK22b0umI6r4Aw6ErnPjbBkM9ifdNlH0kvJpMvBHFhqSAOsqGLbYTtfYD1dapTnM9O88uigbSYjYHcJKax9e1s~uwcLobhxJYwNWzl337smCxu3UmewSYh48KnVfHCWTs6xe3SlWc~Mt0D1Nh61l8UlR355A__&Key-Pair-Id=K1P54FZWCHCL6J"
      />
      <img
        className="absolute top-[1628px] left-[140px] rounded-31xl w-[530px] h-[357px] object-cover"
        alt=""
        src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/dfbee3e1-5233-4135-9be7-7fc12bc5d749_1680406446519421275?Expires=-62135596800&Signature=s7p~R0yakt3t19yk1St1oUC-q5CPwvDM18-2CGMJdyr6C~3gtrnBEpIf~db2xoKxJOdnl-JrSICwMkzGOOYlaHKNzzs9n-FOkMgZnP8OGvOvMMXOG3ALxZ9ak4R4jtGVOUlNhd6TzuxkE21xgLqkPsR2gpcexPYPV6QOdefRAV6Mo6rSiV-i71J64xORMoOqGZnuQIl8oHmvhFLaocnYBAAnnas6AmLgR4iIRmBhAY10KSA~z1DNXd0vyd6Svzkg8lCKznIziGJdqfNeGY6frKEctz8e3kv2f2KoWSkP8I~BeUuw4YiRNJ4PKY6guO7gWnVcE44eDfnO89iE5b-tmw__&Key-Pair-Id=K1P54FZWCHCL6J"
      />
      <img
        className="absolute top-[1628px] left-[695px] rounded-31xl w-[530px] h-[357px] object-cover"
        alt=""
        src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/3480b6be-ea7c-49c9-8e4c-78f033da5e00_1680406446519515959?Expires=-62135596800&Signature=HSrOmzusmNu3rP9ZviwZmn~-aCa2nd95TECckh-dZHAUQ61TqMXPsb7BE61LS3OzCytSdGhHH8lkB7MW9FflyrzWtexKQOwJfXGZpDnMNa3vpPDNOm42NereIldTbhAI7xvF2L6A3NY0aCWJ0QEqcoBdzEeB40JsRO~s9hmSB7FdRgW~4AwXiRQSOrfIi4ipu3ew9KXzwZ6EXzzjKpOVub9lvqgCfBUEtIkrnezSleyutuzq0S3Ij1TXeBbR2D2Em9-LXn4d~7tYHSjDEIS51ytNoyiUdehTEm~Qx-aJRQ-8CN57IkqtaeOKlKOUYVBAwrkBz9qf5WWdtxVerfgfmQ__&Key-Pair-Id=K1P54FZWCHCL6J"
      />
      <img
        className="absolute top-[2182px] left-[700px] rounded-31xl w-[530px] h-[357px] object-cover"
        alt=""
        src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/9819d009-d798-4acf-8be8-3427414b8e00_1680406446519605403?Expires=-62135596800&Signature=oQD3bvgKcThQBEk--MAChxgstsqq3U91EmUc6CNVzUerfNDffmUw15rBSKZPoYTQ9yFsOVvmShYTSzmnS9K53lru5wz~35SRAziiKLMX5jAByLvuuMpo1qHgbQxcVccDSUAu0u14x9gU~mu~FOzddrWW3IrdN2r08zMROaSwBmv~4rmhiUX3ElFIPId2io7vA6XRO00eqiRXprvSywSPy~tUSRKTNr4TFTmbrQiybI9Xuq6jur028fVPd8WSD5gogc11hSLB-6xJTSZtF-qyj0fCnECmlzq0Oe5sS5llNOHuEEx6GlIeFH6CN9mHOav7Piq5eRLZFHGveebG3u-IeQ__&Key-Pair-Id=K1P54FZWCHCL6J"
      />
      <img
        className="absolute top-[2182px] left-[140px] rounded-31xl w-[530px] h-[357px] object-cover"
        alt=""
        src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/7b8da74a-1621-4d70-ab79-ac7e83477723_1680406446519705239?Expires=-62135596800&Signature=qw26PcpMGxHFOR5kdq2acaSYVg4JNQHDGc-Enr9xY7MvHJfPamiOnyOkejAsDKA26~F4AYpy3QBudBuq6DM9MlC3iTilHiVsXNtZ-KIwwADmMLPYS3hD7AcInqvI7Lf4aoiCfVQAkEzz6MnLuGbZOEajFg9FfpMvMc4ElU-lz~YwhLFwEleTS2hgkcgwLtAvlto4eXvRqFY3morlE2ldNKMPNcxy4lSIniWj1pM48FEIzefhfCVpghdtTXCVTL6sEtMHkWHZV~veISsQKlzFpayJy8TwneP~BIQViIVE8-xBTlzfvW7LUJTKW85mJApalwhFrewbQ6RMTfp3WY7ysg__&Key-Pair-Id=K1P54FZWCHCL6J"
      />
      <div className="absolute top-[2006.5px] left-[731.5px] text-3xl [-webkit-text-stroke:1px_#707070]">{`Ethical & Responsible Volunteering`}</div>
      <div className="absolute top-[2006.5px] left-[1447.5px] text-3xl [-webkit-text-stroke:1px_#707070]">
        Our impact
      </div>
      <div className="absolute top-[2560.5px] left-[228.5px] text-3xl [-webkit-text-stroke:1px_#707070]">
        How Is VT So Affordable?
      </div>
      <div className="absolute top-[2560.5px] left-[882.5px] text-3xl [-webkit-text-stroke:1px_#707070]">
        Our Awards
      </div>
      <div className="absolute top-[2560.5px] left-[1415.5px] text-3xl [-webkit-text-stroke:1px_#707070]">
        Our Core Values
      </div>
      <img
        className="absolute top-[2182px] right-[130px] w-[470px] h-[357px] "
        alt=""
        src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/77682643-f7f7-4c0d-9ddf-0b85ed180031_1680406446519813718?Expires=-62135596800&Signature=jQ2UWhjhxSjuUBbN8ZOu0TZN0BpVXTifWWl8xLQtnPkcTrdby4Okek6AQVvoZRdOsh2M6GHBmD9nRgbMpwArG6KwBT1hZD9lEoQ9D-kpfCFdU3FuEnvSSQ1aTINfT665JqSy2WnWU4lHcUMgspTErZnimXiPmfXLB4uy1bSfG-X-uzD-e8CTWY3AG3rcyRfKQ8HMna8FZem~R5i~oJbi5ZAv09h4Sl9e~WmlPDuJJLGTZ4rmjvUM3l0kISMgA~hCkBDZ~K3fm~cx0W-z4jgfirjJiGEZyXH3sR6J81nRVQCGs8G49evFXHxT0eVi3H~Gs1ovlefXjueEh2FbD086SQ__&Key-Pair-Id=K1P54FZWCHCL6J"
      />
      <div className="absolute bottom-[-20px] left-[0px] w-[1920px] h-[580px] text-26xl">
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
      <div className="absolute top-[0px] left-[0px] w-[1920px] h-[164px] text-3xl">
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px]">
            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gold" />
            <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_329px)]">
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
              onClick={onGalleryTextClick}
            >
              Gallery
            </div>
            <div
              className="absolute top-[calc(50%_-_10px)] right-[310px] cursor-pointer"
              onClick={onContactTextClick}
            >
              Contact
            </div>
            <div
              className="absolute top-[calc(50%_-_31.03px)] left-[33.53px] w-[399.47px] h-[61.53px] cursor-pointer text-26xl"
              onClick={onGroupContainer4Click}
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
        <div
          className="absolute top-[calc(50%_-_16.78px)] right-[54px] w-[170px] h-10 cursor-pointer text-xl font-adobe-gothic-std"
          onClick={onGroupContainer6Click}
        >
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
      {/* <div className="absolute top-[164px] left-[0px] bg-cornsilk w-[1920px] h-[46px]" />
      <div
        className="absolute top-[180px] left-[140px] font-adobe-gothic-std cursor-pointer"
        onClick={onHomeClick}
      >{`Home  >  About`}</div> */}
    </div>
  );
};

export default About;
