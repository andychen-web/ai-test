import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
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
    <div className="relative bg-white w-full h-[5777px] text-left text-8xl text-black font-lithos-pro">
      <div className="absolute top-[4586px] left-[509px] text-26xl">
        We make it safe and easy for you!
      </div>
      <div className="absolute bottom-[667px] left-[275px] w-[1370px] h-[350px] text-11xl">
        <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-[280px]">
          <img
            className="absolute h-[calc(100%_-_60px)] w-[calc(100%_+_10px)] top-[0px] right-[-10px] bottom-[60px] left-[0px] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group-632.svg"
          />
          <div className="absolute bottom-[0px] left-[31px]">Eco friendly</div>
        </div>
        <div className="absolute h-full top-[0px] bottom-[0px] left-[calc(50%_-_147px)] w-[287px]">
          <img
            className="absolute w-[calc(100%_+_3px)] top-[0px] right-[-10px] left-[7px] max-w-full overflow-hidden h-[290px]"
            alt=""
            src="/group-633.svg"
          />
          <div className="absolute bottom-[0px] left-[0px]">
            Flexible Booking
          </div>
        </div>
        <div className="absolute h-full top-[0px] right-[0px] bottom-[0px] w-[280px]">
          <img
            className="absolute h-[calc(100%_-_60px)] w-[calc(100%_+_10px)] top-[0px] right-[-10px] bottom-[60px] left-[0px] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group-634.svg"
          />
          <div className="absolute bottom-[0px] left-[9px]">
            fee free refund
          </div>
        </div>
      </div>
      <div className="absolute top-[869px] left-[813px] text-xl font-segoe-ui text-dimgray inline-block w-[301px] h-[300px]">
        548
      </div>
      <img
        className="absolute top-[829px] left-[512.25px] w-5 h-5"
        alt=""
        src="/ellipse-18.svg"
      />
      <img
        className="absolute top-[829px] left-[616.55px] w-5 h-5"
        alt=""
        src="/ellipse-18.svg"
      />
      <img
        className="absolute top-[829px] left-[668.7px] w-5 h-5"
        alt=""
        src="/ellipse-18.svg"
      />
      <img
        className="absolute top-[829px] left-[565.41px] w-5 h-5"
        alt=""
        src="/ellipse-19.svg"
      />
      <img
        className="absolute top-[837.41px] left-[591.79px] w-0 h-[3.19px]"
        alt=""
        src="/path-189.svg"
      />
      <img
        className="absolute top-[837.41px] left-[611.09px] w-0 h-[3.19px]"
        alt=""
        src="/path-189.svg"
      />
      <img
        className="absolute top-[1011px] left-[75px] w-[1787px] h-[526px]"
        alt=""
        src="/path-307.svg"
      />
      <div className="absolute top-[1013px] left-[75px] rounded-t-11xl rounded-b-none bg-turquoise box-border w-[1778px] h-[106px] border-[5px] border-solid border-black" />
      <div className="absolute top-[1180px] right-[136px] w-[196.01px] h-[287px] text-center">
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
      <div className="absolute top-[1180px] left-[1347.57px] w-[195.21px] h-[241.73px] cursor-pointer text-center">
        <img
          className="absolute h-[calc(100%_-_42.51px)] w-[calc(100%_+_10px)] top-[0px] right-[-10px] bottom-[42.51px] left-[0px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group-607.svg"
        />
        <div className="absolute bottom-[0px] left-[calc(50%_-_48.6px)]">
          Oceania
        </div>
      </div>
      <div className="absolute top-[1180px] left-[1107.24px] w-[195.21px] h-[281.42px] text-center">
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
      <div className="absolute top-[1180px] left-[866px] w-[196px] h-[242px] text-center">
        <img
          className="absolute h-[calc(100%_-_42.51px)] w-[calc(100%_+_9.61px)] top-[0px] right-[-9.61px] bottom-[42.51px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/group-605@2x.png"
        />
        <div className="absolute bottom-[0px] left-[calc(50%_-_43px)]">
          Europe
        </div>
      </div>
      <div className="absolute top-[1180px] left-[624.54px] w-[195.21px] h-[241.73px] text-center">
        <img
          className="absolute h-[calc(100%_-_42.51px)] w-[calc(100%_+_10px)] top-[0px] right-[-10px] bottom-[42.51px] left-[0px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group-608.svg"
        />
        <div className="absolute bottom-[0px] left-[35.4px]">Antarctica</div>
      </div>
      <div className="absolute top-[1180px] left-[385.21px] w-[195.21px] h-[239.73px] text-center">
        <img
          className="absolute h-[calc(100%_-_40.51px)] w-[calc(100%_+_10px)] top-[0px] right-[-10px] bottom-[40.51px] left-[0px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group-603.svg"
        />
        <div className="absolute bottom-[0px] left-[calc(50%_-_26.4px)]">
          Asia
        </div>
      </div>
      <div className="absolute top-[1180px] left-[143px] w-[195.21px] h-[241.73px] text-center">
        <img
          className="absolute h-[calc(100%_-_36.51px)] w-[calc(100%_+_10px)] top-[0px] right-[-10px] bottom-[36.51px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/path-183@2x.png"
        />
        <div className="absolute bottom-[0px] left-[calc(50%_-_34.61px)] w-[68px] h-9">
          <div className="absolute top-[0px] left-[0px]">Africa</div>
        </div>
      </div>
      <div className="absolute top-[1035px] left-[127px] text-26xl">Region</div>
      <div className="absolute top-[1112.46px] left-[67.5px] box-border w-[1785px] h-4 border-t-[8px] border-solid border-black" />
      <div className="absolute top-[1050px] left-[565.5px] text-9xl">
        WHERE you would like to WORK FOR VOLUNTEER?
      </div>
      <div className="absolute bottom-[-7660.5px] left-[75px] w-[5588px] h-[11820px]">
        <img
          className="absolute h-[4.45%] w-[31.98%] top-[0%] right-[68.02%] bottom-[95.55%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/path-308.svg"
        />
        <div className="absolute top-[155px] left-[221px] w-[1335px] h-[361px]">
          <div className="absolute top-[0px] left-[0px] w-[195px] h-[281px]">
            <img
              className="absolute h-[calc(100%_-_76px)] w-[calc(100%_+_10px)] top-[0px] right-[-10px] bottom-[76px] left-[0px] rounded-4xl max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/rectangle-177@2x.png"
            />
            <div className="absolute w-[calc(100%_-_29px)] bottom-[0px] left-[15px] inline-block h-[63px]">
              Education
            </div>
          </div>
          <div className="absolute h-[calc(100%_-_3px)] top-[0px] bottom-[3px] left-[calc(50%_-_357.21px)] w-[269px]">
            <img
              className="absolute w-[calc(100%_-_64px)] top-[0px] right-[27px] left-[37px] max-w-full overflow-hidden h-[205px] object-cover"
              alt=""
              src="/path-311@2x.png"
            />
            <div className="absolute w-[calc(100%_+_1px)] bottom-[0px] left-[0px] whitespace-pre-wrap inline-block h-[143px]">
              <p className="m-0">{`Conserve the environment &`}</p>
              <p className="m-0">{`protect animals       `}</p>
            </div>
          </div>
          <div className="absolute h-full top-[0px] bottom-[0px] left-[calc(50%_-_13.86px)] w-[314px]">
            <img
              className="absolute w-[calc(100%_-_109px)] top-[0px] right-[49px] left-[60px] rounded-4xl max-w-full overflow-hidden h-[205px] object-cover"
              alt=""
              src="/rectangle-1771@2x.png"
            />
            <div className="absolute w-[calc(100%_+_1px)] bottom-[0px] left-[0px] inline-block h-[143px]">{`Improve health & wellbeing`}</div>
          </div>
          <div className="absolute h-full top-[0px] right-[0px] bottom-[0px] w-[326px]">
            <img
              className="absolute w-[calc(100%_-_121px)] top-[0px] right-[55px] left-[66px] max-w-full overflow-hidden h-[205px] object-cover"
              alt=""
              src="/path-312@2x.png"
            />
            <div className="absolute w-[calc(100%_+_1px)] bottom-[0px] left-[0px] inline-block h-[143px]">
              Support community development
            </div>
          </div>
        </div>
        <div className="absolute top-[96.4px] left-[-7.5px] box-border w-[1785px] h-4 border-t-[8px] border-solid border-black" />
        <img
          className="absolute top-[1.5px] left-[0px] w-[1778px] h-[105px]"
          alt=""
          src="/path-309.svg"
        />
        <div className="absolute top-[22px] left-[52px] text-26xl">
          Project Type
        </div>
        <div className="absolute top-[36.5px] left-[502.5px] text-9xl">
          WHAT PROJECT WOULD YOU LIKE TO WORK WITH?
        </div>
        <div className="absolute right-[0px] bottom-[0px] w-[1335px] h-[361px]">
          <div className="absolute top-[0px] left-[0px] w-[195px] h-[281px]">
            <img
              className="absolute h-[calc(100%_-_76px)] w-[calc(100%_+_10px)] top-[0px] right-[-10px] bottom-[76px] left-[0px] rounded-4xl max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/rectangle-177@2x.png"
            />
            <div className="absolute w-[calc(100%_-_29px)] bottom-[0px] left-[15px] inline-block h-[63px]">
              Education
            </div>
          </div>
          <div className="absolute h-[calc(100%_-_3px)] top-[0px] bottom-[3px] left-[calc(50%_-_357.21px)] w-[269px]">
            <img
              className="absolute w-[calc(100%_-_64px)] top-[0px] right-[27px] left-[37px] max-w-full overflow-hidden h-[205px] object-cover"
              alt=""
              src="/path-311@2x.png"
            />
            <div className="absolute w-[calc(100%_+_1px)] bottom-[0px] left-[0px] whitespace-pre-wrap inline-block h-[143px]">
              <p className="m-0">{`Conserve the environment &`}</p>
              <p className="m-0">{`protect animals       `}</p>
            </div>
          </div>
          <div className="absolute h-full top-[0px] bottom-[0px] left-[calc(50%_-_13.86px)] w-[314px]">
            <img
              className="absolute w-[calc(100%_-_109px)] top-[0px] right-[49px] left-[60px] rounded-4xl max-w-full overflow-hidden h-[205px] object-cover"
              alt=""
              src="/rectangle-1771@2x.png"
            />
            <div className="absolute w-[calc(100%_+_1px)] bottom-[0px] left-[0px] inline-block h-[143px]">{`Improve health & wellbeing`}</div>
          </div>
          <div className="absolute h-full top-[0px] right-[0px] bottom-[0px] w-[326px]">
            <img
              className="absolute w-[calc(100%_-_121px)] top-[0px] right-[55px] left-[66px] max-w-full overflow-hidden h-[205px] object-cover"
              alt=""
              src="/path-312@2x.png"
            />
            <div className="absolute w-[calc(100%_+_1px)] bottom-[0px] left-[0px] inline-block h-[143px]">
              Support community development
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[2395px] left-[140px] w-[527.14px] h-[975.6px] text-2xl">
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px]">
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
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit
          </div>
          <div className="absolute bottom-[155.24px] left-[calc(50%_-_87.53px)] w-[70px] h-[27px] text-xl">
            <div className="absolute top-[0px] left-[0px]">{`4.5 (34) `}</div>
          </div>
          <div className="absolute w-[calc(100%_-_75.14px)] right-[38.14px] bottom-[53.6px] left-[37px] h-[62px] text-center text-8xl">
            <div className="absolute h-full top-[0px] right-[0px] bottom-[0px] w-[206px] cursor-pointer">
              <div className="absolute h-[calc(100%_+_1px)] w-full top-[0px] right-[0px] bottom-[-1px] left-[0px] rounded-4xl bg-violet shadow-[5px_5px_0px_#000] box-border border-[5px] border-solid border-black" />
              <div className="absolute top-[calc(50%_-_20px)] left-[calc(50%_-_58px)]">
                See detail
              </div>
            </div>
            <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-[206px] cursor-pointer">
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
        </div>
        <img
          className="absolute top-[16.4px] right-[21.57px] w-[41.38px] h-[36.46px]"
          alt=""
          src="/component-167--1.svg"
        />
      </div>
      <div className="absolute top-[2395px] left-[696.64px] w-[527.36px] h-[975.6px] text-2xl">
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px]">
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
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit
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
        <div className="absolute top-[17px] left-[39.85px] w-[114.34px] h-[30.8px] flex flex-row items-end gap-[12px]">
          <img
            className="relative w-[39.34px] h-[26.16px] shrink-0 object-cover"
            alt=""
            src="/image-45@2x.png"
          />
          <div className="relative w-[63px] h-7 shrink-0 mb-[3px]">
            <div className="absolute top-[0px] left-[0px]">CHINA</div>
          </div>
        </div>
        <img
          className="absolute top-[16.4px] right-[21.78px] w-[41.38px] h-[36.46px]"
          alt=""
          src="/component-167--1.svg"
        />
      </div>
      <div className="absolute top-[2395px] right-[139.57px] w-[527.43px] h-[975.6px] text-2xl">
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px]">
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
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit
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
        <div className="absolute top-[13px] left-[44.31px] w-[139.34px] h-[31.88px] flex flex-row items-end gap-[12px]">
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
          className="absolute top-[16.4px] right-[21.57px] w-[41.38px] h-[36.46px]"
          alt=""
          src="/component-167--1.svg"
        />
      </div>
      <div className="absolute top-[3400.11px] right-[139.57px] w-[527.43px] h-[975.6px] text-2xl">
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px]">
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
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit
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
          <img
            className="absolute top-[16.4px] right-[21.57px] w-[41.38px] h-[36.46px]"
            alt=""
            src="/component-167--1.svg"
          />
        </div>
      </div>
      <div className="absolute top-[2220px] left-[294px] text-26xl text-center">
        Explore our animal protection project
      </div>
      <div className="absolute top-[3400.11px] left-[140px] w-[527.14px] h-[975.6px] text-2xl">
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px]">
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
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit
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
          <img
            className="absolute top-[16.4px] right-[21.57px] w-[41.38px] h-[36.46px]"
            alt=""
            src="/component-167--1.svg"
          />
        </div>
        <div className="absolute top-[11.89px] left-[32.31px] w-[97.34px] h-[31.96px] flex flex-row items-end gap-[12px]">
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
      <div className="absolute top-[3400.11px] left-[696.64px] w-[527.36px] h-[975.6px] text-2xl">
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px]">
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
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit
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
          <img
            className="absolute top-[16.4px] right-[21.78px] w-[41.38px] h-[36.46px]"
            alt=""
            src="/component-167--1.svg"
          />
        </div>
        <div className="absolute top-[13.89px] left-[29.5px] w-[128.85px] h-[29.01px]">
          <div className="absolute top-[0px] right-[-1px]">mEXICO</div>
          <img
            className="absolute bottom-[0px] left-[0px] w-[39.34px] h-[22.25px] object-cover"
            alt=""
            src="/image-48@2x.png"
          />
        </div>
      </div>
      <div className="absolute top-[2298px] left-[143px] text-xl font-adobe-gothic-std text-center">
        Do you want to volunteer with animals abroad or play a pivotal role in
        preserving wildlife around the world?
      </div>
      <form className="absolute top-[218px] left-[75px] w-[1777.82px] h-[676px]">
        <img
          className="absolute h-[calc(100%_+_10px)] top-[0px] bottom-[-10px] left-[0px] max-h-full w-[1024.51px] object-cover"
          alt=""
          src="/path-313@2x.png"
        />
        <div className="absolute h-full top-[0px] right-[0px] bottom-[0px] rounded-11xl bg-thistle shadow-[10px_10px_0px_#000] box-border w-[724.82px] border-[5px] border-solid border-gray" />
        <div className="absolute top-[56px] left-[calc(50%_+_234.27px)] text-11xl leading-[47px] font-lithos-pro text-black text-left">
          <p className="m-0">{`Explore your exclusive `}</p>
          <p className="m-0">world volunteer experience!</p>
        </div>
        <div className="absolute right-[257.82px] bottom-[66px] w-[209px] h-16 cursor-pointer">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-4xl bg-gold shadow-[5px_5px_0px_#000] box-border border-[5px] border-solid border-black" />
          <div className="absolute top-[calc(50%_-_22px)] left-[calc(50%_-_40.5px)] text-9xl font-lithos-pro text-black text-center">
            Search
          </div>
        </div>
        <div className="absolute top-[calc(50%_+_111.67px)] right-[223.82px] text-5xl font-adobe-gothic-std text-black text-left">
          What do you want to do?
        </div>
        <div className="absolute top-[calc(50%_+_14.67px)] right-[107.82px] w-[548px] h-[67px]">
          <img
            className="absolute h-[111.94%] w-[101.46%] top-[0%] right-[-1.46%] bottom-[-11.94%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/path-172.svg"
          />
          <img
            className="absolute top-[calc(50%_-_5.5px)] right-[31.4px] w-[27.6px] h-[21px]"
            alt=""
            src="/icon-drop-down.svg"
          />
          <div className="absolute top-[26.87%] left-[8.43%] text-6xl font-lithos-pro text-black text-left">{`Improve health & wellbeing`}</div>
        </div>
        <div className="absolute top-[calc(50%_-_63.67px)] right-[216.82px] text-5xl font-adobe-gothic-std text-black text-left">
          Where do you want to go?
        </div>
        <div className="absolute top-[calc(50%_-_153.67px)] right-[107.82px] w-[548px] h-[67px]">
          <img
            className="absolute h-[calc(100%_+_8px)] w-[calc(100%_+_8px)] top-[0px] right-[-8px] bottom-[-8px] left-[0px] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/path-172.svg"
          />
          <img
            className="absolute top-[calc(50%_-_5.5px)] right-[31.4px] w-[27.6px] h-[21px]"
            alt=""
            src="/icon-drop-down.svg"
          />
          <div className="absolute top-[20.9%] left-[25%] text-6xl font-lithos-pro text-black text-left">
            North America
          </div>
        </div>
      </form>
      <div className="absolute top-[4479px] left-[849px] w-[209px] h-16 text-center text-9xl text-white">
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-4xl bg-black" />
        <div className="absolute top-[calc(50%_-_22px)] left-[63px]">
          See All
        </div>
      </div>
      <div className="absolute bottom-[0px] left-[0px] w-[1920px] h-[580px] text-26xl">
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gold">
          <img
            className="absolute bottom-[47px] left-[calc(50%_+_27px)] rounded-[25px] w-[67px] h-[67px] object-cover"
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
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gold" />
          <div className="absolute top-[calc(50%_-_10px)] right-[165px] cursor-pointer">
            Log in
          </div>
          <div className="absolute top-[calc(50%_-_31.03px)] left-[33.53px] w-[399.47px] h-[61.53px] text-26xl">
            <div className="absolute right-[-1px] bottom-[0px]">{`Volunteer Time `}</div>
            <img
              className="absolute h-[calc(100%_-_3.47px)] top-[0px] bottom-[3.47px] left-[0px] max-h-full w-[64.24px]"
              alt=""
              src="/path-188.svg"
            />
          </div>
        </div>
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
          <div className="absolute top-[calc(50%_-_10px)] right-[165px] cursor-pointer">
            Log in
          </div>
          <div className="absolute top-[calc(50%_-_31.03px)] left-[33.53px] w-[399.47px] h-[61.53px] text-26xl">
            <div className="absolute right-[-1px] bottom-[0px]">{`Volunteer Time `}</div>
            <img
              className="absolute h-[calc(100%_-_3.47px)] top-[0px] bottom-[3.47px] left-[0px] max-h-full w-[64.24px]"
              alt=""
              src="/path-188.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
