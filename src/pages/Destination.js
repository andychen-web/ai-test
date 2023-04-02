import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Destination = () => {
  const navigate = useNavigate();

  const onAboutTextClick = useCallback(() => {
    navigate("/");
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

  const onGroupContainer69Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupContainer71Click = useCallback(() => {
    navigate("/my-profile");
  }, [navigate]);

  const onComponent1932Click = useCallback(() => {
    navigate("/nz-result");
  }, [navigate]);

  const onScrollGroup2Click = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[4886px] text-left text-2xl text-black font-lithos-pro">
      <div className="absolute top-[164px] left-[0px] bg-cornsilk w-[1920px] h-[46px]" />
      <img
        className="absolute top-[586px] left-[140px] w-[1596.5px] h-[653.08px] mix-blend-multiply"
        alt=""
        src="/Group 1002.png"
      />
      <div className="absolute top-[249px] left-[570px] text-26xl">{`Volunteer Abroad Programs `}</div>
      <div className="absolute top-[340px] left-[201px] text-xl leading-[30px] font-adobe-gothic-std inline-block w-[1519px] h-[116px]">
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
      <div className="absolute top-[1523px] left-[201px] text-xl leading-[30px] font-adobe-gothic-std inline-block w-[1519px] h-[116px]">
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
        {/* <p className="m-0">
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
        </p> */}
      </div>
      {/* <img
        className="absolute top-[901.82px] left-[1015.3px] w-[28.11px] h-[39.6px]"
        alt=""
        src="/ic-place-24px2.svg"
      />
      <div className="absolute top-[949.18px] left-[986.86px] text-3xl">
        Africa
      </div>
      <img
        className="absolute top-[740.37px] left-[448.75px] w-[28.11px] h-[39.6px]"
        alt=""
        src="/ic-place-24px2.svg"
      />

      <img
        className="absolute top-[704.43px] left-[1002.75px] w-[28.11px] h-[39.6px]"
        alt=""
        src="/ic-place-24px2.svg"
      /> */}
      <div className="absolute top-[751.37px] left-[971.75px] text-3xl">
        Europe
      </div>
      <div className="absolute top-[765.16px] left-[1201.75px] w-[276px] h-[359.63px] text-6xl">
        <div className="absolute top-[0px] left-[calc(50%_-_36px)] w-[46px] h-[74.57px]"></div>
        <div className="absolute h-[calc(100%_-_67.63px)] w-full top-[67.63px] right-[0px] bottom-[0px] left-[0px] opacity-[0] text-xl font-adobe-gothic-std">
          <img
            className="absolute h-[calc(100%_+_3px)] w-[calc(100%_+_3px)] top-[0px] right-[-3px] bottom-[-3px] left-[0px] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/path-1921.svg"
          />
          <div className="absolute top-[18.87px] left-[calc(50%_-_88.5px)] w-[109px] h-9">
            <div className="absolute top-[calc(50%_-_7px)] right-[0px] w-[53px] h-5">
              <div className="absolute top-[0px] left-[0px]">China</div>
            </div>
            <img
              className="absolute h-full top-[0px] bottom-[0px] left-[0px] max-h-full w-9 object-cover"
              alt=""
              src="/mask-group-9@2x.png"
            />
          </div>
          <div className="absolute top-[calc(50%_-_73.13px)] left-[calc(50%_-_88.5px)] w-[147px] h-9">
            <div className="absolute h-[calc(100%_-_16px)] top-[8px] right-[0px] bottom-[8px] w-[91px]">
              <div className="absolute top-[3px] left-[0px]">Indonesia</div>
            </div>
            <img
              className="absolute h-full top-[0px] bottom-[0px] left-[0px] rounded-27xl max-h-full w-9 object-cover"
              alt=""
              src="/image-20@2x.png"
            />
          </div>
          <div className="absolute top-[calc(50%_-_21.13px)] left-[calc(50%_-_88.5px)] w-[159px] h-9">
            <div className="absolute top-[calc(50%_-_9.8px)] right-[0px] w-[103px] h-[22px]">
              <div className="absolute top-[3px] left-[0px]">Philippines</div>
            </div>
            <img
              className="absolute h-full top-[0px] bottom-[0px] left-[0px] rounded-27xl max-h-full w-9 object-cover"
              alt=""
              src="/image-21@2x.png"
            />
          </div>
          <div className="absolute top-[calc(50%_+_30.87px)] left-[calc(50%_-_88.5px)] w-[123px] h-9">
            <div className="absolute top-[calc(50%_-_7.8px)] right-[-1px]">
              Taiwan
            </div>
            <img
              className="absolute h-full top-[0px] bottom-[0px] left-[0px] rounded-27xl max-h-full w-9 object-cover"
              alt=""
              src="/image-22@2x.png"
            />
          </div>
          <div className="absolute bottom-[27.13px] left-[calc(50%_-_88.5px)] w-[134px] h-9">
            <div className="absolute top-[calc(50%_-_7px)] right-[-1px]">
              Vietnam
            </div>
            <img
              className="absolute h-full top-[0px] bottom-[0px] left-[0px] rounded-27xl max-h-full w-9 object-cover"
              alt=""
              src="/image-23@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[1432px] left-[464px] text-26xl">
        See the world. Make a difference.
      </div>
      <div className="absolute top-[2050px] left-[295px] text-26xl text-center">
        Explore the animals project in this region!
      </div>
      <div className="absolute top-[2128px] left-[140px] text-xl font-adobe-gothic-std text-center">{`Are you fascinated by wild animals? Work for an animal conservation project abroad. `}</div>
      <div className="absolute bottom-[-7px] left-[0px] w-[1920px] h-[580px] text-26xl">
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
      <div className="absolute top-[2218px] left-[139.79px] w-[527.14px] h-[975.6px]">
        <img
          className="absolute h-[calc(100%_+_10px)] w-[calc(100%_+_10px)] top-[0px] right-[-10px] bottom-[-10px] left-[0px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/path-268.svg"
        />
        <img
          className="absolute w-full top-[calc(50%_-_119.98px)] right-[0px] left-[0px] max-w-full overflow-hidden h-[78.68px]"
          alt=""
          src="/path-184.svg"
        />
        <div className="absolute top-[calc(50%_-_94.8px)] left-[61px] tracking-[0.04px]">{`Whale Research & Conservation`}</div>
        <img
          className="absolute top-[calc(50%_+_47.21px)] right-[71.79px] w-[19.67px] h-[18.05px]"
          alt=""
          src="/ic-favorite-24px.svg"
        />
        <div className="absolute w-[calc(100%_-_97.14px)] top-[calc(50%_-_12.8px)] right-[50.14px] left-[47px] h-[47px] text-mini font-adobe-gothic-std">
          <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-[102px]">
            <img
              className="absolute top-[0px] left-[calc(50%_-_8px)] w-[22px] h-[22px]"
              alt=""
              src="/ic-local-taxi-24px.svg"
            />
            <div className="absolute bottom-[0px] left-[0px]">
              Airport shuttle
            </div>
          </div>
          <div className="absolute h-[calc(100%_-_1px)] top-[0px] bottom-[1px] left-[calc(50%_-_73px)] w-[35px]">
            <img
              className="absolute w-[calc(100%_-_13.36px)] top-[0px] right-[6.36px] left-[7px] max-w-full overflow-hidden h-[19.67px]"
              alt=""
              src="/ic-local-dining-24px.svg"
            />
            <div className="absolute bottom-[0px] left-[0px]">Food</div>
          </div>
          <div className="absolute h-[calc(100%_-_1.02px)] top-[0.02px] bottom-[1px] left-[calc(50%_-_0px)] w-[31px]">
            <img
              className="absolute w-[calc(100%_-_9.36px)] top-[0px] right-[4.78px] left-[4.59px] max-w-full overflow-hidden h-[15.3px]"
              alt=""
              src="/ic-wifi-24px.svg"
            />
            <div className="absolute bottom-[0px] left-[0px]">WIFI</div>
          </div>
          <div className="absolute h-full top-[0px] bottom-[0px] left-[calc(50%_+_65px)] w-[58px]">
            <img
              className="absolute top-[0px] left-[calc(50%_-_9px)] w-[22px] h-[15px]"
              alt=""
              src="/ic-local-hotel-24px.svg"
            />
            <div className="absolute bottom-[0px] left-[0px]">Housing</div>
          </div>
          <div className="absolute h-[calc(100%_-_0.02px)] top-[0.02px] right-[0px] bottom-[0px] w-[55px]">
            <img
              className="absolute top-[0px] left-[calc(50%_-_9.89px)] w-[21.64px] h-[23.6px]"
              alt=""
              src="/ic-insert-invitation-24px.svg"
            />
            <div className="absolute bottom-[0px] left-[0px]">2 weeks</div>
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_74.14px)] top-[calc(50%_+_65.2px)] left-[37px] text-xl leading-[30px] font-adobe-gothic-std inline-block h-[169px]">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit
        </div>
        <div className="absolute bottom-[155.24px] left-[calc(50%_-_87.53px)] w-[70px] h-[27px] text-xl">
          <div className="absolute top-[0px] left-[0px]">{`4.5 (34) `}</div>
        </div>
        <div className="absolute w-[calc(100%_-_75.14px)] right-[38.14px] bottom-[53.6px] left-[37px] h-[62px] text-center text-8xl">
          <div className="absolute h-full top-[0px] right-[0px] bottom-[0px] w-[206px]">
            <div className="absolute h-[calc(100%_+_1px)] w-full top-[0px] right-[0px] bottom-[-1px] left-[0px] rounded-4xl bg-violet shadow-[5px_5px_0px_#000] box-border border-[5px] border-solid border-black" />
            <div className="absolute top-[calc(50%_-_20px)] left-[calc(50%_-_58px)]">
              See detail
            </div>
          </div>
          <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-[206px]">
            <div className="absolute h-[calc(100%_+_1px)] w-full top-[0px] right-[0px] bottom-[-1px] left-[0px] rounded-4xl bg-springgreen shadow-[5px_5px_0px_#000] box-border border-[5px] border-solid border-black" />
            <div className="absolute top-[calc(50%_-_21px)] left-[calc(50%_-_35px)]">
              Apply
            </div>
          </div>
        </div>
        <img
          className="absolute bottom-[154.56px] left-[42.29px] w-[118.7px] h-[24.24px]"
          alt=""
          src="/ratingstars.svg"
        />
        <img
          className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[64.91px]"
          alt=""
          src="/path-310.svg"
        />
        <div className="absolute top-[14px] left-[30px] w-[107px] h-7 flex flex-row items-end gap-[12px]">
          <img
            className="relative w-[39px] h-[19px] shrink-0 object-cover"
            alt=""
            src="/image-13@2x.png"
          />
          <div className="relative">Tonga</div>
        </div>
        <img
          className="absolute w-[calc(100%_-_0.14px)] top-[60px] right-[0.14px] left-[0px] max-w-full overflow-hidden h-[313px] object-cover"
          alt=""
          src="/rectangle-555@2x.png"
        />
        <div className="absolute bottom-[156.6px] left-[calc(50%_+_82.43px)]">
          $350/week
        </div>
      </div>
      <div className="absolute top-[2218px] left-[696.43px] w-[527.36px] h-[975.6px]">
        <img
          className="absolute h-[calc(100%_+_10px)] w-[calc(100%_+_9.78px)] top-[0px] right-[-9.78px] bottom-[-10px] left-[0px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/path-268.svg"
        />
        <img
          className="absolute w-[calc(100%_-_0.22px)] top-[calc(50%_-_119.98px)] right-[0.22px] left-[0px] max-w-full overflow-hidden h-[78.68px]"
          alt=""
          src="/path-184.svg"
        />
        <div className="absolute top-[calc(50%_-_94.8px)] left-[calc(50%_-_139.32px)] tracking-[0.04px]">
          panda reserve project
        </div>
        <img
          className="absolute top-[calc(50%_+_47.21px)] right-[72.01px] w-[19.67px] h-[18.05px]"
          alt=""
          src="/ic-favorite-24px.svg"
        />
        <div className="absolute w-[calc(100%_-_97.36px)] top-[calc(50%_-_12.8px)] right-[50px] left-[47.36px] h-[47px] text-mini font-adobe-gothic-std">
          <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-[102px]">
            <img
              className="absolute top-[0px] left-[calc(50%_-_8px)] w-[22px] h-[22px]"
              alt=""
              src="/ic-local-taxi-24px.svg"
            />
            <div className="absolute bottom-[0px] left-[0px]">
              Airport shuttle
            </div>
          </div>
          <div className="absolute h-[calc(100%_-_1px)] top-[0px] bottom-[1px] left-[calc(50%_-_74px)] w-[35px]">
            <img
              className="absolute w-[calc(100%_-_13px)] top-[0px] right-[6px] left-[7px] max-w-full overflow-hidden h-5"
              alt=""
              src="/ic-local-dining-24px1.svg"
            />
            <div className="absolute bottom-[0px] left-[0px]">Food</div>
          </div>
          <div className="absolute h-[calc(100%_-_1.02px)] top-[0.02px] bottom-[1px] left-[calc(50%_-_1px)] w-[31px]">
            <img
              className="absolute top-[0px] right-[4.13px] w-[21.64px] h-[15.3px]"
              alt=""
              src="/ic-wifi-24px.svg"
            />
            <div className="absolute bottom-[0px] left-[0px]">WIFI</div>
          </div>
          <div className="absolute h-full top-[0px] bottom-[0px] left-[calc(50%_+_65px)] w-[58px]">
            <img
              className="absolute top-[0px] left-[calc(50%_-_9px)] w-[21.64px] h-[15px]"
              alt=""
              src="/ic-local-hotel-24px1.svg"
            />
            <div className="absolute bottom-[0px] left-[0px]">Housing</div>
          </div>
          <div className="absolute h-[calc(100%_-_0.02px)] top-[0.02px] right-[0px] bottom-[0px] w-[55px]">
            <img
              className="absolute top-[0px] left-[calc(50%_-_10.24px)] w-[21.64px] h-[23.6px]"
              alt=""
              src="/ic-insert-invitation-24px.svg"
            />
            <div className="absolute bottom-[0px] left-[0px]">1 weeks</div>
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_74.36px)] top-[calc(50%_+_65.2px)] left-[37.36px] text-xl leading-[30px] font-adobe-gothic-std inline-block h-[169px]">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit
        </div>
        <div className="absolute bottom-[155.24px] left-[calc(50%_-_87.64px)] w-[70px] h-[27px] text-xl">
          <div className="absolute top-[0px] left-[0px]">{`4.8 (24) `}</div>
        </div>
        <div className="absolute w-[calc(100%_-_76.36px)] right-[39px] bottom-[53.6px] left-[37.36px] h-[62px] text-center text-8xl">
          <div className="absolute h-full top-[0px] right-[0px] bottom-[0px] w-[205px]">
            <div className="absolute h-[calc(100%_+_1px)] w-[calc(100%_+_1px)] top-[0px] right-[-1px] bottom-[-1px] left-[0px] rounded-4xl bg-violet shadow-[5px_5px_0px_#000] box-border border-[5px] border-solid border-black" />
            <div className="absolute top-[calc(50%_-_20px)] left-[calc(50%_-_57.5px)]">
              See detail
            </div>
          </div>
          <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-[206px]">
            <div className="absolute h-[calc(100%_+_1px)] w-full top-[0px] right-[0px] bottom-[-1px] left-[0px] rounded-4xl bg-springgreen shadow-[5px_5px_0px_#000] box-border border-[5px] border-solid border-black" />
            <div className="absolute top-[calc(50%_-_21px)] left-[calc(50%_-_35px)]">
              Apply
            </div>
          </div>
        </div>
        <img
          className="absolute bottom-[154.56px] left-[42.29px] w-[118.7px] h-[24.24px]"
          alt=""
          src="/ratingstars.svg"
        />
        <img
          className="absolute w-[calc(100%_-_0.22px)] top-[0px] right-[0.22px] left-[0px] max-w-full overflow-hidden h-[64.91px]"
          alt=""
          src="/path-310.svg"
        />
        <img
          className="absolute w-[calc(100%_-_0.36px)] top-[60px] right-[0px] left-[0.36px] max-w-full overflow-hidden h-[313px] object-cover"
          alt=""
          src="/rectangle-5551@2x.png"
        />
        <div className="absolute bottom-[156.6px] left-[calc(50%_+_82.68px)]">
          $260/week
        </div>
      </div>
      <div className="absolute top-[2218px] right-[139.79px] w-[527.43px] h-[975.6px]">
        <img
          className="absolute h-[calc(100%_+_10px)] w-[calc(100%_+_9.71px)] top-[0px] right-[-10px] bottom-[-10px] left-[0.29px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/path-268.svg"
        />
        <img
          className="absolute w-[calc(100%_-_0.29px)] top-[calc(50%_-_119.98px)] right-[0px] left-[0.29px] max-w-full overflow-hidden h-[78.68px]"
          alt=""
          src="/path-184.svg"
        />
        <div className="absolute top-[calc(50%_-_93.8px)] left-[calc(50%_-_135.71px)] tracking-[0.04px]">
          Restoring Asia's roar
        </div>
        <img
          className="absolute top-[calc(50%_+_47.21px)] right-[71.79px] w-[19.67px] h-[18.05px]"
          alt=""
          src="/ic-favorite-24px.svg"
        />
        <div className="absolute w-[calc(100%_-_97.43px)] top-[calc(50%_-_12.8px)] right-[50.43px] left-[47px] h-[47px] text-mini font-adobe-gothic-std">
          <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-[102px]">
            <img
              className="absolute top-[0px] left-[calc(50%_-_7px)] w-[21.64px] h-[22px]"
              alt=""
              src="/ic-local-taxi-24px1.svg"
            />
            <div className="absolute bottom-[0px] left-[0px]">
              Airport shuttle
            </div>
          </div>
          <div className="absolute h-[calc(100%_-_1px)] top-[0px] bottom-[1px] left-[calc(50%_-_73px)] w-[35px]">
            <img
              className="absolute w-[calc(100%_-_13px)] top-[0px] right-[6px] left-[7px] max-w-full overflow-hidden h-5"
              alt=""
              src="/ic-local-dining-24px1.svg"
            />
            <div className="absolute bottom-[0px] left-[0px]">Food</div>
          </div>
          <div className="absolute h-[calc(100%_-_1.02px)] top-[0.02px] bottom-[1px] left-[calc(50%_-_0px)] w-[31px]">
            <img
              className="absolute w-[calc(100%_-_9.36px)] top-[0px] right-[4.49px] left-[4.88px] max-w-full overflow-hidden h-[15.3px]"
              alt=""
              src="/ic-wifi-24px.svg"
            />
            <div className="absolute bottom-[0px] left-[0px]">WIFI</div>
          </div>
          <div className="absolute h-full top-[0px] bottom-[0px] left-[calc(50%_+_66px)] w-[58px]">
            <img
              className="absolute top-[0px] left-[calc(50%_-_10px)] w-[22px] h-[15px]"
              alt=""
              src="/ic-local-hotel-24px.svg"
            />
            <div className="absolute bottom-[0px] left-[0px]">Housing</div>
          </div>
          <div className="absolute h-[calc(100%_-_0.02px)] top-[0.02px] right-[0px] bottom-[0px] w-[55px]">
            <img
              className="absolute top-[0px] left-[calc(50%_-_9.6px)] w-[21.64px] h-[23.6px]"
              alt=""
              src="/ic-insert-invitation-24px.svg"
            />
            <div className="absolute bottom-[0px] left-[0px]">2 weeks</div>
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_74.43px)] top-[calc(50%_+_65.2px)] left-[38px] text-xl leading-[30px] font-adobe-gothic-std inline-block h-[169px]">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit
        </div>
        <div className="absolute bottom-[155.24px] left-[calc(50%_-_87.38px)] w-[70px] h-[27px] text-xl">
          <div className="absolute top-[0px] left-[0px]">{`4.4 (14) `}</div>
        </div>
        <div className="absolute w-[calc(100%_-_76.43px)] right-[38.43px] bottom-[53.6px] left-[38px] h-[62px] text-center text-8xl">
          <div className="absolute h-full top-[0px] right-[0px] bottom-[0px] w-[205px]">
            <div className="absolute h-[calc(100%_+_1px)] w-[calc(100%_+_1px)] top-[0px] right-[-1px] bottom-[-1px] left-[0px] rounded-4xl bg-violet shadow-[5px_5px_0px_#000] box-border border-[5px] border-solid border-black" />
            <div className="absolute top-[calc(50%_-_20px)] left-[calc(50%_-_57.5px)]">
              See detail
            </div>
          </div>
          <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-[205px]">
            <div className="absolute h-[calc(100%_+_1px)] w-[calc(100%_+_1px)] top-[0px] right-[-1px] bottom-[-1px] left-[0px] rounded-4xl bg-springgreen shadow-[5px_5px_0px_#000] box-border border-[5px] border-solid border-black" />
            <div className="absolute top-[calc(50%_-_21px)] left-[calc(50%_-_34.5px)]">
              Apply
            </div>
          </div>
        </div>
        <img
          className="absolute bottom-[154.56px] left-[42.58px] w-[118.7px] h-[24.24px]"
          alt=""
          src="/ratingstars.svg"
        />
        <img
          className="absolute w-[calc(100%_-_0.29px)] top-[0px] right-[0px] left-[0.29px] max-w-full overflow-hidden h-[64.91px]"
          alt=""
          src="/path-310.svg"
        />
        <img
          className="absolute w-[calc(100%_-_0.43px)] top-[60px] right-[0.43px] left-[0px] max-w-full overflow-hidden h-[313px] object-cover"
          alt=""
          src="/rectangle-5552@2x.png"
        />
        <div className="absolute bottom-[156.6px] left-[calc(50%_+_82.29px)]">
          $250/week
        </div>
      </div>
      <div className="absolute bottom-[687.29px] left-[139.79px] w-[527.14px] h-[975.6px]">
        <img
          className="absolute h-[calc(100%_+_10px)] w-[calc(100%_+_10px)] top-[0px] right-[-10px] bottom-[-10px] left-[0px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/path-268.svg"
        />
        <img
          className="absolute w-full top-[calc(50%_-_119.98px)] right-[0px] left-[0px] max-w-full overflow-hidden h-[78.68px]"
          alt=""
          src="/path-184.svg"
        />
        <div className="absolute top-[calc(50%_-_93.91px)] left-[61px] tracking-[0.04px]">
          Project WILD Activity “Oh Deer!”
        </div>
        <img
          className="absolute top-[calc(50%_+_47.21px)] right-[71.79px] w-[19.67px] h-[18.05px]"
          alt=""
          src="/ic-favorite-24px.svg"
        />
        <div className="absolute w-[calc(100%_-_97.14px)] top-[calc(50%_-_12.91px)] right-[50.14px] left-[47px] h-[47px] text-mini font-adobe-gothic-std">
          <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-[102px]">
            <img
              className="absolute top-[0px] left-[calc(50%_-_8px)] w-[22px] h-[22px]"
              alt=""
              src="/ic-local-taxi-24px.svg"
            />
            <div className="absolute bottom-[0px] left-[0px]">
              Airport shuttle
            </div>
          </div>
          <div className="absolute h-[calc(100%_-_1px)] top-[0px] bottom-[1px] left-[calc(50%_-_73px)] w-[35px]">
            <img
              className="absolute w-[calc(100%_-_13.36px)] top-[0px] right-[6.36px] left-[7px] max-w-full overflow-hidden h-5"
              alt=""
              src="/ic-local-dining-24px2.svg"
            />
            <div className="absolute bottom-[0px] left-[0px]">Food</div>
          </div>
          <div className="absolute h-[calc(100%_-_1.12px)] top-[0.12px] bottom-[1px] left-[calc(50%_-_0px)] w-[31px]">
            <img
              className="absolute w-[calc(100%_-_9.36px)] top-[0px] right-[4.78px] left-[4.59px] max-w-full overflow-hidden h-[15.3px]"
              alt=""
              src="/ic-wifi-24px.svg"
            />
            <div className="absolute bottom-[0px] left-[0px]">WIFI</div>
          </div>
          <div className="absolute h-full top-[0px] bottom-[0px] left-[calc(50%_+_65px)] w-[58px]">
            <img
              className="absolute top-[0px] left-[calc(50%_-_9px)] w-[22px] h-[15px]"
              alt=""
              src="/ic-local-hotel-24px.svg"
            />
            <div className="absolute bottom-[0px] left-[0px]">Housing</div>
          </div>
          <div className="absolute h-[calc(100%_-_0.12px)] top-[0.12px] right-[0px] bottom-[0px] w-[55px]">
            <img
              className="absolute top-[0px] left-[calc(50%_-_9.89px)] w-[21.64px] h-[23.6px]"
              alt=""
              src="/ic-insert-invitation-24px.svg"
            />
            <div className="absolute bottom-[0px] left-[0px]">2 weeks</div>
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_74.14px)] top-[calc(50%_+_65.09px)] left-[37px] text-xl leading-[30px] font-adobe-gothic-std inline-block h-[169px]">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit
        </div>
        <div className="absolute bottom-[155.24px] left-[calc(50%_-_87.53px)] w-[70px] h-[27px] text-xl">
          <div className="absolute top-[0px] left-[0px]">{`4.6 (12) `}</div>
        </div>
        <div className="absolute w-[calc(100%_-_75.14px)] right-[38.14px] bottom-[52.71px] left-[37px] h-[63px] text-center text-8xl">
          <div className="absolute h-full top-[0px] right-[0px] bottom-[0px] w-[206px]">
            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-4xl bg-violet shadow-[5px_5px_0px_#000] box-border border-[5px] border-solid border-black" />
            <div className="absolute top-[calc(50%_-_20.5px)] left-[calc(50%_-_58px)]">
              See detail
            </div>
          </div>
          <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-[206px]">
            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-4xl bg-springgreen shadow-[5px_5px_0px_#000] box-border border-[5px] border-solid border-black" />
            <div className="absolute top-[calc(50%_-_21.5px)] left-[calc(50%_-_35px)]">
              Apply
            </div>
          </div>
        </div>
        <img
          className="absolute bottom-[154.56px] left-[42.29px] w-[118.7px] h-[24.24px]"
          alt=""
          src="/ratingstars.svg"
        />
        <img
          className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[64.91px]"
          alt=""
          src="/path-310.svg"
        />
        <img
          className="absolute w-[calc(100%_-_0.14px)] top-[59.89px] right-[0.14px] left-[0px] max-w-full overflow-hidden h-[313px] object-cover"
          alt=""
          src="/rectangle-5554@2x.png"
        />
        <div className="absolute bottom-[156.71px] left-[calc(50%_+_82.43px)]">
          $380/week
        </div>
      </div>
      <div className="absolute bottom-[687.29px] left-[696.43px] w-[527.36px] h-[975.6px]">
        <img
          className="absolute h-[calc(100%_+_10px)] w-[calc(100%_+_9.78px)] top-[0px] right-[-9.78px] bottom-[-10px] left-[0px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/path-268.svg"
        />
        <img
          className="absolute w-[calc(100%_-_0.22px)] top-[calc(50%_-_119.98px)] right-[0.22px] left-[0px] max-w-full overflow-hidden h-[78.68px]"
          alt=""
          src="/path-184.svg"
        />
        <div className="absolute top-[calc(50%_-_94.91px)] left-[77.36px] tracking-[0.04px]">{`Butterfly Sanctuary Project `}</div>
        <img
          className="absolute top-[calc(50%_+_47.21px)] right-[72.01px] w-[19.67px] h-[18.05px]"
          alt=""
          src="/ic-favorite-24px.svg"
        />
        <div className="absolute w-[calc(100%_-_97.36px)] top-[calc(50%_-_12.91px)] right-[50px] left-[47.36px] h-[47px] text-mini font-adobe-gothic-std">
          <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-[102px]">
            <img
              className="absolute top-[0px] left-[calc(50%_-_8px)] w-[22px] h-[22px]"
              alt=""
              src="/ic-local-taxi-24px.svg"
            />
            <div className="absolute bottom-[0px] left-[0px]">
              Airport shuttle
            </div>
          </div>
          <div className="absolute h-[calc(100%_-_1px)] top-[0px] bottom-[1px] left-[calc(50%_-_74px)] w-[35px]">
            <img
              className="absolute w-[calc(100%_-_13px)] top-[0px] right-[6px] left-[7px] max-w-full overflow-hidden h-5"
              alt=""
              src="/ic-local-dining-24px1.svg"
            />
            <div className="absolute bottom-[0px] left-[0px]">Food</div>
          </div>
          <div className="absolute h-[calc(100%_-_1.12px)] top-[0.12px] bottom-[1px] left-[calc(50%_-_1px)] w-[31px]">
            <img
              className="absolute top-[0px] right-[4.13px] w-[21.64px] h-[15.3px]"
              alt=""
              src="/ic-wifi-24px.svg"
            />
            <div className="absolute bottom-[0px] left-[0px]">WIFI</div>
          </div>
          <div className="absolute h-full top-[0px] bottom-[0px] left-[calc(50%_+_65px)] w-[58px]">
            <img
              className="absolute top-[0px] left-[calc(50%_-_9px)] w-[21.64px] h-[14.75px]"
              alt=""
              src="/ic-local-hotel-24px2.svg"
            />
            <div className="absolute bottom-[0px] left-[0px]">Housing</div>
          </div>
          <div className="absolute h-[calc(100%_-_0.12px)] top-[0.12px] right-[0px] bottom-[0px] w-[55px]">
            <img
              className="absolute top-[0px] left-[calc(50%_-_10.24px)] w-[21.64px] h-[23.6px]"
              alt=""
              src="/ic-insert-invitation-24px.svg"
            />
            <div className="absolute bottom-[0px] left-[0px]">3 weeks</div>
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_74.36px)] top-[calc(50%_+_65.09px)] left-[37.36px] text-xl leading-[30px] font-adobe-gothic-std inline-block h-[169px]">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit
        </div>
        <div className="absolute bottom-[155.24px] left-[calc(50%_-_87.64px)] w-[70px] h-[27px] text-xl">
          <div className="absolute top-[0px] left-[0px]">{`4.1 (38) `}</div>
        </div>
        <div className="absolute w-[calc(100%_-_75.36px)] right-[38px] bottom-[52.71px] left-[37.36px] h-[63px] text-center text-8xl">
          <div className="absolute h-full top-[0px] right-[0px] bottom-[0px] w-[206px]">
            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-4xl bg-violet shadow-[5px_5px_0px_#000] box-border border-[5px] border-solid border-black" />
            <div className="absolute top-[calc(50%_-_20.5px)] left-[calc(50%_-_58px)]">
              See detail
            </div>
          </div>
          <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-[206px]">
            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-4xl bg-springgreen shadow-[5px_5px_0px_#000] box-border border-[5px] border-solid border-black" />
            <div className="absolute top-[calc(50%_-_21.5px)] left-[calc(50%_-_35px)]">
              Apply
            </div>
          </div>
        </div>
        <img
          className="absolute bottom-[154.56px] left-[42.29px] w-[118.7px] h-[24.24px]"
          alt=""
          src="/ratingstars.svg"
        />
        <img
          className="absolute w-[calc(100%_-_0.22px)] top-[0px] right-[0.22px] left-[0px] max-w-full overflow-hidden h-[64.91px]"
          alt=""
          src="/path-310.svg"
        />
        <img
          className="absolute w-[calc(100%_-_0.36px)] top-[59.89px] right-[0px] left-[0.36px] max-w-full overflow-hidden h-[313px] object-cover"
          alt=""
          src="/rectangle-5555@2x.png"
        />
        <div className="absolute bottom-[156.71px] left-[calc(50%_+_82.68px)]">
          $220/week
        </div>
      </div>
      <div className="absolute right-[139.79px] bottom-[687.29px] w-[527.43px] h-[975.6px]">
        <img
          className="absolute h-[calc(100%_+_10px)] w-[calc(100%_+_9.71px)] top-[0px] right-[-10px] bottom-[-10px] left-[0.29px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/path-268.svg"
        />
        <img
          className="absolute w-[calc(100%_-_0.29px)] top-[calc(50%_-_119.98px)] right-[0px] left-[0.29px] max-w-full overflow-hidden h-[78.68px]"
          alt=""
          src="/path-184.svg"
        />
        <div className="absolute top-[calc(50%_-_94.91px)] left-[77px] tracking-[0.04px]">{`Elephant Orphanage Project `}</div>
        <img
          className="absolute top-[calc(50%_+_47.21px)] right-[71.79px] w-[19.67px] h-[18.05px]"
          alt=""
          src="/ic-favorite-24px.svg"
        />
        <div className="absolute w-[calc(100%_-_97.43px)] top-[calc(50%_-_12.91px)] right-[50.43px] left-[47px] h-[47px] text-mini font-adobe-gothic-std">
          <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-[102px]">
            <img
              className="absolute top-[0px] left-[calc(50%_-_7px)] w-[21.64px] h-[21.64px]"
              alt=""
              src="/ic-local-taxi-24px2.svg"
            />
            <div className="absolute bottom-[0px] left-[0px]">
              Airport shuttle
            </div>
          </div>
          <div className="absolute h-[calc(100%_-_1px)] top-[0px] bottom-[1px] left-[calc(50%_-_73px)] w-[35px]">
            <img
              className="absolute w-[calc(100%_-_13px)] top-[0px] right-[6px] left-[7px] max-w-full overflow-hidden h-5"
              alt=""
              src="/ic-local-dining-24px1.svg"
            />
            <div className="absolute bottom-[0px] left-[0px]">Food</div>
          </div>
          <div className="absolute h-[calc(100%_-_1.12px)] top-[0.12px] bottom-[1px] left-[calc(50%_-_0px)] w-[31px]">
            <img
              className="absolute w-[calc(100%_-_9.36px)] top-[0px] right-[4.49px] left-[4.88px] max-w-full overflow-hidden h-[15.3px]"
              alt=""
              src="/ic-wifi-24px1.svg"
            />
            <div className="absolute bottom-[0px] left-[0px]">WIFI</div>
          </div>
          <div className="absolute h-full top-[0px] bottom-[0px] left-[calc(50%_+_66px)] w-[58px]">
            <img
              className="absolute top-[0px] left-[calc(50%_-_10px)] w-[22px] h-[15px]"
              alt=""
              src="/ic-local-hotel-24px.svg"
            />
            <div className="absolute bottom-[0px] left-[0px]">Housing</div>
          </div>
          <div className="absolute h-[calc(100%_-_0.12px)] top-[0.12px] right-[0px] bottom-[0px] w-[55px]">
            <img
              className="absolute top-[0px] left-[calc(50%_-_9.6px)] w-[21.64px] h-[23.6px]"
              alt=""
              src="/ic-insert-invitation-24px.svg"
            />
            <div className="absolute bottom-[0px] left-[0px]">2 weeks</div>
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_74.43px)] top-[calc(50%_+_65.09px)] left-[38px] text-xl leading-[30px] font-adobe-gothic-std inline-block h-[169px]">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit
        </div>
        <div className="absolute bottom-[155.24px] left-[calc(50%_-_87.38px)] w-[70px] h-[27px] text-xl">
          <div className="absolute top-[0px] left-[0px]">{`4.8 (11) `}</div>
        </div>
        <div className="absolute w-[calc(100%_-_76.43px)] right-[38.43px] bottom-[52.71px] left-[38px] h-[63px] text-center text-8xl">
          <div className="absolute h-full top-[0px] right-[0px] bottom-[0px] w-[205px]">
            <div className="absolute h-full w-[calc(100%_+_1px)] top-[0px] right-[-1px] bottom-[0px] left-[0px] rounded-4xl bg-violet shadow-[5px_5px_0px_#000] box-border border-[5px] border-solid border-black" />
            <div className="absolute top-[calc(50%_-_20.5px)] left-[calc(50%_-_57.5px)]">
              See detail
            </div>
          </div>
          <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-[206px]">
            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-4xl bg-springgreen shadow-[5px_5px_0px_#000] box-border border-[5px] border-solid border-black" />
            <div className="absolute top-[calc(50%_-_21.5px)] left-[calc(50%_-_35px)]">
              Apply
            </div>
          </div>
        </div>
        <img
          className="absolute bottom-[154.56px] left-[42.58px] w-[118.7px] h-[24.24px]"
          alt=""
          src="/ratingstars.svg"
        />
        <img
          className="absolute w-[calc(100%_-_0.29px)] top-[0px] right-[0px] left-[0.29px] max-w-full overflow-hidden h-[64.91px]"
          alt=""
          src="/path-310.svg"
        />
        <img
          className="absolute w-[calc(100%_-_0.43px)] top-[59.89px] right-[0.43px] left-[0px] max-w-full overflow-hidden h-[313px] object-cover"
          alt=""
          src="/rectangle-5553@2x.png"
        />
        <div className="absolute bottom-[156.71px] left-[calc(50%_+_82.29px)]">
          $450/week
        </div>
        <div className="absolute top-[13.34px] left-[29.79px] w-[97.14px] h-[32.19px] flex flex-row items-end gap-[12px]">
          <img
            className="relative w-[39.34px] h-[26.15px] shrink-0 object-cover"
            alt=""
            src="/image-47@2x.png"
          />
          <div className="relative w-[46px] h-7 shrink-0 mb-1">
            <div className="absolute top-[0px] left-[0px]">India</div>
          </div>
        </div>
      </div>
      <div className="absolute top-[2235px] left-[736.28px] w-[114.34px] h-[30.8px] flex flex-row items-end gap-[12px]">
        <img
          className="relative w-[39.34px] h-[26.16px] shrink-0 object-cover"
          alt=""
          src="/image-45@2x.png"
        />
        <div className="relative w-[63px] h-7 shrink-0 mb-[3px]">
          <div className="absolute top-[0px] left-[0px]">CHINA</div>
        </div>
      </div>
      <div className="absolute top-[2231px] left-[1297.1px] w-[139.34px] h-[31.88px] flex flex-row items-end gap-[12px]">
        <img
          className="relative w-[39.34px] h-[26.19px] shrink-0 object-cover"
          alt=""
          src="/image-46@2x.png"
        />
        <div className="relative w-[88px] h-7 shrink-0 mb-1">
          <div className="absolute top-[0px] left-[0px]">Myanmar</div>
        </div>
      </div>
      <img
        className="absolute top-[2234.4px] left-[603.98px] w-[41.38px] h-[36.46px]"
        alt=""
        src="/component-167--1.svg"
      />
      <img
        className="absolute top-[3239.51px] left-[603.98px] w-[41.38px] h-[36.46px]"
        alt=""
        src="/component-167--1.svg"
      />
      <img
        className="absolute top-[2234.4px] left-[1160.63px] w-[41.38px] h-[36.46px]"
        alt=""
        src="/component-167--1.svg"
      />
      <img
        className="absolute top-[3239.51px] left-[1160.63px] w-[41.38px] h-[36.46px]"
        alt=""
        src="/component-167--1.svg"
      />
      <img
        className="absolute top-[2234.4px] right-[161.35px] w-[41.38px] h-[36.46px]"
        alt=""
        src="/component-167--1.svg"
      />
      <img
        className="absolute top-[3239.51px] right-[161.35px] w-[41.38px] h-[36.46px]"
        alt=""
        src="/component-167--1.svg"
      />
      <div className="absolute top-[3235px] left-[172.1px] w-[97.34px] h-[31.96px] flex flex-row items-end gap-[12px]">
        <img
          className="relative w-[39.34px] h-[26.15px] shrink-0 object-cover"
          alt=""
          src="/image-47@2x.png"
        />
        <div className="relative w-[46px] h-7 shrink-0 mb-1">
          <div className="absolute top-[0px] left-[0px]">India</div>
        </div>
      </div>
      <div className="absolute top-[3237px] left-[725.93px] w-[128.85px] h-[29.01px]">
        <div className="absolute top-[0px] right-[-1px]">mEXICO</div>
        <img
          className="absolute bottom-[0px] left-[0px] w-[39.34px] h-[22.25px] object-cover"
          alt=""
          src="/image-48@2x.png"
        />
      </div>
      <div className="absolute top-[0px] left-[0px] w-[1920px] h-[164px] text-3xl">
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px]">
            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gold" />
            <div
              className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_329px)] cursor-pointer"
              onClick={onAboutTextClick}
            >
              About
            </div>
            <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_192px)]">
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
              onClick={onGroupContainer69Click}
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
      <div className="absolute top-[1709px] right-[136px] w-[196.01px] h-[287px] text-center text-8xl">
        <div className="absolute w-full top-[calc(50%_-_143.5px)] right-[0px] left-[0%] h-[287px]">
          <img
            className="absolute h-[calc(100%_-_81.2px)] w-[calc(100%_+_10px)] top-[0px] right-[-10px] bottom-[81.2px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/group-606@2x.png"
          />
          <div className="absolute bottom-[1px] left-[calc(50%_-_48px)]">
            <p className="m-0">South</p>
            <p className="m-0">America</p>
          </div>
        </div>
      </div>
      <div
        className="absolute top-[1709px] left-[1347.57px] w-[195.21px] h-[241.73px] cursor-pointer text-center text-8xl"
        onClick={onComponent1932Click}
      >
        <img
          className="absolute h-[calc(100%_-_42.51px)] w-[calc(100%_+_10px)] top-[0px] right-[-10px] bottom-[42.51px] left-[0px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group-607.svg"
        />
        <div className="absolute bottom-[0px] left-[calc(50%_-_48.6px)]">
          Oceania
        </div>
      </div>
      <div className="absolute top-[1709px] left-[1107.24px] w-[195.21px] h-[281.42px] text-center text-8xl">
        <div className="absolute h-[calc(100%_-_1px)] w-full top-[0px] right-[0px] bottom-[1px] left-[0px]">
          <img
            className="absolute h-[calc(100%_-_81.2px)] w-[calc(100%_+_10px)] top-[0px] right-[-10px] bottom-[81.2px] left-[0px] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group-604.svg"
          />
          <div className="absolute bottom-[0px] left-[calc(50%_-_48.8px)]">
            <p className="m-0">North</p>
            <p className="m-0">America</p>
          </div>
        </div>
      </div>
      <div className="absolute top-[1709px] left-[866px] w-[196px] h-[242px] text-center text-8xl">
        <img
          className="absolute h-[calc(100%_-_42.51px)] w-[calc(100%_+_9.61px)] top-[0px] right-[-9.61px] bottom-[42.51px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/group-605@2x.png"
        />
        <div className="absolute bottom-[0px] left-[calc(50%_-_43px)]">
          Europe
        </div>
      </div>
      <div className="absolute top-[1709px] left-[624.54px] w-[195.21px] h-[241.73px] text-center text-8xl">
        <img
          className="absolute h-[calc(100%_-_42.51px)] w-[calc(100%_+_10px)] top-[0px] right-[-10px] bottom-[42.51px] left-[0px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group-608.svg"
        />
        <div className="absolute bottom-[0px] left-[35.4px]">Antarctica</div>
      </div>
      <div className="absolute top-[1709px] left-[385.21px] w-[195.21px] h-[239.73px] text-center text-8xl">
        <img
          className="absolute h-[calc(100%_-_40.51px)] w-[calc(100%_+_10px)] top-[0px] right-[-10px] bottom-[40.51px] left-[0px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group-603.svg"
        />
        <div className="absolute bottom-[0px] left-[calc(50%_-_26.4px)]">
          Asia
        </div>
      </div>
      <div className="absolute top-[1709px] left-[143px] w-[195.21px] h-[241.73px] text-center text-8xl">
        <img
          className="absolute h-[calc(100%_-_36.51px)] w-[calc(100%_+_10px)] top-[0px] right-[-10px] bottom-[36.51px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/path-183@2x.png"
        />
        <div className="absolute bottom-[0px] left-[calc(50%_-_34.61px)] w-[68px] h-9">
          <div className="absolute top-[0px] left-[0px]">Africa</div>
        </div>
      </div>
      <div className="absolute top-[1014.21px] right-[86px] w-[276px] h-[353.27px] text-6xl">
        <div className="absolute top-[0px] left-[calc(50%_-_51px)] w-[71px] h-[71.57px]"></div>
        <div className="absolute h-[calc(100%_-_63.27px)] w-full top-[63.27px] right-[0px] bottom-[0px] left-[0px] opacity-[0] text-xl font-adobe-gothic-std">
          <img
            className="absolute h-[calc(100%_+_3px)] w-[calc(100%_+_3px)] top-[0px] right-[-3px] bottom-[-3px] left-[0px] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/path-192.svg"
          />
          <div className="absolute top-[17px] left-[calc(50%_-_86px)] w-[139px] h-9">
            <img
              className="absolute h-full top-[0px] bottom-[0px] left-[0px] rounded-lg max-h-full w-9 object-cover"
              alt=""
              src="/image-16@2x.png"
            />
            <div className="absolute top-[calc(50%_-_7px)] right-[-1px]">
              Australia
            </div>
          </div>
          <div className="absolute top-[calc(50%_-_70px)] left-[calc(50%_-_86px)] w-[84px] h-9">
            <img
              className="absolute h-full top-[0px] bottom-[0px] left-[0px] rounded-lg max-h-full w-9 object-cover"
              alt=""
              src="/image-18@2x.png"
            />
            <div className="absolute top-[calc(50%_-_11px)] right-[0px] w-7 h-[23px]">
              <div className="absolute top-[3px] left-[0px]">Fiji</div>
            </div>
          </div>
          <div className="absolute top-[calc(50%_-_18px)] left-[calc(50%_-_86px)] w-[124px] h-9">
            <img
              className="absolute h-full top-[0px] bottom-[0px] left-[0px] rounded-lg max-h-full w-9 object-cover"
              alt=""
              src="/image-14@2x.png"
            />
            <div className="absolute top-[calc(50%_-_7px)] right-[-1px]">
              Kiribati
            </div>
          </div>
          <div className="absolute top-[calc(50%_+_34px)] left-[calc(50%_-_86px)] w-[114px] h-9">
            <img
              className="absolute h-full top-[0px] bottom-[0px] left-[0px] rounded-lg max-h-full w-9 object-cover"
              alt=""
              src="/image-15@2x.png"
            />
            <div className="absolute top-[calc(50%_-_8px)] right-[-1px]">
              Tonga
            </div>
          </div>
          <div className="absolute bottom-[23px] left-[calc(50%_-_86px)] w-44 h-9">
            <img
              className="absolute h-full top-[0px] bottom-[0px] left-[0px] rounded-lg max-h-full w-9 object-cover"
              alt=""
              src="/image-17@2x.png"
            />
            <div className="absolute top-[calc(50%_-_7px)] right-[-1px]">
              New Zealand
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
