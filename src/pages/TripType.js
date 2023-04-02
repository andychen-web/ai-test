import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const TripType = () => {
  const navigate = useNavigate();

  const onAboutTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onDestinationTextClick = useCallback(() => {
    navigate("/destination");
  }, [navigate]);

  const onProjectFocusTextClick = useCallback(() => {
    navigate("/our-focus");
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
    <div className="relative bg-white w-full h-[3358px] text-left text-xl text-black font-lithos-pro">
      <img
        className="absolute top-[264px] left-[140px] rounded-11xl w-[1660px] h-[647px] object-cover"
        alt=""
        src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/9e754589-d8e7-45cc-bc9d-feec76cadaa6_1680406585415979947?Expires=-62135596800&Signature=deKJqL9Jlkq68i8f32LcBPvFpKzlFnyy3TJ-HL7H5vufz~667OoXwRvpzm9ylqhOZhm8QL5VakQ8OunfG5hK-UHL-TsvZpg6mHVUPOx4hjtbkIsFFMngFxbHsiG1F9MhnVt5AzaWyTL-BDa0Etzw0gfOCbJhdyRYjd9BrUUu5tIZkRotpyzh~E-loHtFzdumJoIKGGCLoQk3UrMLqxEncMKigm79jESY8Z4-XOsQlFmLKhKdT22SIPKAKs-YBfBCTiIHRos~GpwToudoZHjN6osE-LWr3K2yNBc93qCwIpmNwr-rvGL~JcPUanXH2k1~YkKA8DE945TwK9WyDmLzyw__&Key-Pair-Id=K1P54FZWCHCL6J"
      />
      <div className="absolute top-[928.5px] left-[144.5px] text-26xl [-webkit-text-stroke:1px_#707070]">
        Volunteer Trip Types
      </div>
      <div className="absolute top-[1044px] left-[140px] leading-[30px] font-adobe-gothic-std inline-block w-[1624px] h-[235px]">
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
          sed diam voluptua. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Dicta recusandae, possimus omnis eum sunt similique neque
          debitis eligendi est itaque reiciendis animi esse, blanditiis, ipsum
          nobis obcaecati ducimus minus magni!
        </p>
      </div>
      <img
        className="absolute top-[1359px] left-[140px] rounded-11xl w-[348px] h-[348px] object-cover"
        alt=""
        src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/b26041cf-9db5-4236-bf03-f3ca8cb238a9_1680406585416168499?Expires=-62135596800&Signature=IpWe2VvJr69MX~l4G~pGLY3aQCLp2mYt0EayaJPLYf6vj5pzl1IzKqrSgK9hIJi7WOBdMiJeVFzCkOl8xWorPyBzsXpT6qwOKlKBDkA-5dq4WAzoaxfNrj8bsLGnMCznjb9IkxhXQVh9vw1znOJ9QWOE5h9KEGa6~JO5fg~eG3ZKTW-FQpNh1g9qRpZZPJA4Cd8VKQTuZJpwhlt-PjMVmEbQ6Eqmd22Tj9Zhkj-QPJvKbWxQCTQ1jh5rEoJBnMMnCQZNINoXo~vlpQ-JGdHbflybA0H~IhucT3Rs9qUcnYshGnKcOblUoJxW~ZpWaMmo1JJsPWTrWiGR2UQ8krGXnw__&Key-Pair-Id=K1P54FZWCHCL6J"
      />
      <div className="absolute top-[1770px] left-[140px] leading-[30px] font-adobe-gothic-std inline-block w-[329px] h-[129px]">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam
      </div>
      <div className="absolute top-[1716.5px] left-[139.5px] text-9xl [-webkit-text-stroke:1px_#707070]">
        Solo Volunteers
      </div>
      <img
        className="absolute top-[1359px] left-[577px] rounded-11xl w-[348px] h-[348px] object-cover"
        alt=""
        src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/1e5bea5b-d290-448e-9656-71965b48a6ec_1680406585416274978?Expires=-62135596800&Signature=ECs0Y3HPniKDJZPyLHJPp-mlhyaoSSxodp-Ezh70ZMAzkRfxq2XDF~t0TroKduNiapr~Q-SOz7mRRpNhVmfx3ECxzLKyYeajgg4Cy-Hs9P69xbqjxzAH00gIaZRygAeR~EnDeCR~nuOd99JzHWKN8WG-RbW3ountLM493iaWnYDI5EfRBDyO6xaXwEA5DGX0TngWYt-YzwWmPdZ5OlmMSDUbSeS8Njcv~8g9toKCW-WDK~I0roCtEK6p8hk4nnc4qjkoTyYMaJAGGdKssSHtKepoPJylIdJO929T69vn7voIhVr5W8pCyUinM-op3NbNRx0P17Gn5VI4WuOCUVcfQA__&Key-Pair-Id=K1P54FZWCHCL6J"
      />
      <div className="absolute top-[1810px] left-[577px] leading-[30px] font-adobe-gothic-std inline-block w-[329px] h-[129px]">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut
      </div>
      <div className="absolute top-[1716.5px] left-[576.5px] text-9xl [-webkit-text-stroke:1px_#707070]">
        <p className="m-0">{`High school & Teen `}</p>
        <p className="m-0">Volunteers</p>
      </div>
      <img
        className="absolute top-[1359px] left-[1015px] rounded-11xl w-[348px] h-[348px] object-cover"
        alt=""
        src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/45075a5b-a611-461f-bd70-2ac839caa8f4_1680406585416369231?Expires=-62135596800&Signature=bQSNg-YB1oso03db5~yZElISKis-e00Mwnp3QQ1TsO8wq5rNzyZzRUNxvuWk7ch3QjJvdlfL00FqU3v-n8mT9gwYkMrCuKRcn00JwVS3v7dIgLunPR4CEVZ6NYF0dKGqj8gxcWT4ueVb1q9xU2OFN6AkQZqHA2951o2dNVJFhxz9Dm5BPYqn0s6PlYEhLILtT9yeli~mvyETW7QdurodxZz1cvICK1RbMKOAkck6NLvpFelD~t655SkyJsfDfanbzotI488UBmf~1Xg7EW5kzD0-90EO~7D1lqLfvIsbRxHhZoMFDFgxYIX5vZ7LKfsGKvmhM7TGm1Nt8-DxlOZg8w__&Key-Pair-Id=K1P54FZWCHCL6J"
      />
      <div className="absolute top-[1810px] left-[1015px] leading-[30px] font-adobe-gothic-std inline-block w-[329px] h-[129px]">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut
      </div>
      <div className="absolute top-[1716.5px] left-[1014.5px] text-9xl [-webkit-text-stroke:1px_#707070]">
        <p className="m-0">{`Gap Year Programs `}</p>
        <p className="m-0">With Impact</p>
      </div>
      <img
        className="absolute top-[1359px] right-[120px] rounded-11xl w-[348px] h-[348px] object-cover"
        alt=""
        src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/de5c24c6-2ea8-4189-b48a-7c810620190e_1680406585416459550?Expires=-62135596800&Signature=cn9tI-8Qa1zoJdaCjI1Aynx8Pfl9-jR-AbwWcC5Z5azj0jdEgSddih~L3OdxjKtPocMZidBXYYW~2ilGADIhsWsFlqwp-SaZvn4pIRge0a3jdzq5iXqljEuPDyG8sQQTYWwrixvxLjlqI1xBbqeGPlTv~A~D~AhA8Fi2XIfHyzhneACWO3cZvbwJu4oRGdbyiAxfdzor0QEEktOGbx72ZvYeQuyCfQc3qgvWbFd0cqt5nA3b~bh4kag5JEcMXoVchfAO9GhIEJbdL3gjsvxW9GxfyQM-QPjgt7XT7oE7iqQygg7yeWUjKoyMLUxfprq2dlDHZ0HBsV2knX0~i9nUZA__&Key-Pair-Id=K1P54FZWCHCL6J"
      />
      <div className="absolute top-[1810px] right-[139px] leading-[30px] font-adobe-gothic-std inline-block w-[329px] h-[129px]">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut
      </div>
      <div className="absolute top-[1716.5px] right-[262.5px] text-9xl [-webkit-text-stroke:1px_#707070]">
        <p className="m-0">Family Volunteer</p>
        <p className="m-0"> Vacations</p>
      </div>
      <img
        className="absolute top-[1979px] left-[140px] rounded-11xl w-[348px] h-[348px] object-cover"
        alt=""
        src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/f426c897-5ae6-4a53-a54d-caff640123eb_1680406585416551221?Expires=-62135596800&Signature=uiWQ2VEKOf~kmn-ryuZFhtqsXsEmWey1sILyPd4qI6bX0U69wKGQQclFmtUaI6NhQHC-dK3u2MIIQgEqRUImnZQnhkQd4qSmhyRPd3t3spFJDY9LebeYOcCJWEfXB9LDfzcZ~8ghj8-KTO0XE00IOtCf1bWVW6SChUDwwNVKtJMuI8447qmdk57vbSPW9cXxCJo94vH5B~hgARrg5zI9ygmGMUcjj9X3n0Grmr99I8YgTRjRrVAM0osQxGw9YcztjelkvhCcTVgktPMbSgSv1nMMZm~2Rk7qBhM3b32BIJRg0RhrlmMT3YDlLG7u-SATTyQ~Ut39XKYne3qeP3cADw__&Key-Pair-Id=K1P54FZWCHCL6J"
      />
      <div className="absolute top-[2430px] left-[140px] leading-[30px] font-adobe-gothic-std inline-block w-[329px] h-[129px]">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam
      </div>
      <div className="absolute top-[2336.5px] left-[139.5px] text-9xl [-webkit-text-stroke:1px_#707070]">
        <p className="m-0">{`Older Adults & Senior`}</p>
        <p className="m-0"> Volunteers</p>
      </div>
      <img
        className="absolute top-[1979px] left-[577px] rounded-11xl w-[348px] h-[348px] object-cover"
        alt=""
        src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/214c6fec-6666-4d05-9bab-0db3ebf38363_1680406585416634604?Expires=-62135596800&Signature=YWWCaxu6KS12RZT~fMSPANDkEkdmSbb6zL5AUTNYyGDAKSDRKSAJK7EV9pkNeD~demCgQqKY8mYf5IvDDCwPHhxup~TiY713m1yzYOPRgUm6LZMHNkOKh7jqUYP-tWmZZb31sNVkMLeiNnpj1yKbv0LZuavQpZIkSqpY6DaV7rTcu7zajuvVLpz3DYm2DHYwfA4wupq5PRMOZ4UHdAWmFVmIkJkiInADpDLVtO7jKoQ98O6a6O7a4k7e2ldhknHjhPPQboXgX5cpe7bIWYL-iveeuzcXQ0SJWJVpmfkICbNGzPhFjBUwHm9aM~6AGquL3hshAUpPPCTGGbJNDB7OjQ__&Key-Pair-Id=K1P54FZWCHCL6J"
      />
      <div className="absolute top-[2390px] left-[577px] leading-[30px] font-adobe-gothic-std inline-block w-[329px] h-[129px]">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam
      </div>
      <div className="absolute top-[2336.5px] left-[576.5px] text-9xl [-webkit-text-stroke:1px_#707070]">
        Group Volunteering
      </div>
      <img
        className="absolute top-[1979px] left-[1015px] rounded-11xl w-[348px] h-[348px] object-cover"
        alt=""
        src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/7bb0b24e-3198-4a38-9f58-b521aeddfe83_1680406585416733928?Expires=-62135596800&Signature=SPIg6pCgIMJRZ6qcP8OojQVzuR9oOzl2wrbEUw23zpa3rSZC76AXJ6Vm6ttSY2Rcw-bnINLSF9ih9Ng9Tsw2f8sCdwT2gvGY87Fyo9bZv5imMtCtoCt4n6kCSHjKmjqyluJ~iswQXkRAIUVrffciCo9joa4YNjGb1nOr8373omJPuwSMd3o9X9tfwt-cMx-ernW5NaMcfWneTZ15FT6rTqbNV15CN1u-SH1PsWBc49aomqoCVL2LjnPqLFmgy0MWcGrzSEM~HQjHjVzsjwRStXggD2HuiCx7M3BON48JviPrRoYZBJgKYOFhBHpSesLZUs9sX5cWy9XPgcF9zppsDg__&Key-Pair-Id=K1P54FZWCHCL6J"
      />
      <div className="absolute top-[2430px] left-[1015px] leading-[30px] font-adobe-gothic-std inline-block w-[329px] h-[129px]">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam
      </div>
      <div className="absolute top-[2336.5px] left-[1014.5px] text-9xl [-webkit-text-stroke:1px_#707070]">
        <p className="m-0">{`Medical Volunteering `}</p>
        <p className="m-0">Abroad</p>
      </div>
      <img
        className="absolute top-[1979px] right-[120px] rounded-11xl w-[348px] h-[348px] object-cover"
        alt=""
        src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/5c0f4ecf-b786-43a1-ad4d-1edbff5f6314_1680406585416821697?Expires=-62135596800&Signature=jxMspANhIf1UYVUUig3yPDiyJo2fGKJbz0Cv9g45SSKqTulEAMRs~mKU3T3ve76Isgjzr4Jo3nifzquwMClSgd~QRJSuwHu9BlDsUklBVkk~2gmCeW5FvYAu9Pp5UVU3ADAsqu8726XN2PyilJCtC~Z96yLt5lYmme~xIMVpqBanMUnmf6eqRjuauL3hYaxKxC0D2q~~ul6zKy8l8MdcHJPHP~CEUTZ1UnrpeLlorSWNfvDozYBmkki0XHIscHlTBg98eHlN4fFjFC~mLMXL8U24wldAyhty0fj2nq0jN2X2RQ-P0qwUIgUiJ4S4qZc-Tb~FIwMSFJSSsygQYoUUAQ__&Key-Pair-Id=K1P54FZWCHCL6J"
      />
      <div className="absolute top-[2430px] right-[139px] leading-[30px] font-adobe-gothic-std inline-block w-[329px] h-[129px]">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam
      </div>
      <div className="absolute top-[2336.5px] right-[277.5px] text-9xl [-webkit-text-stroke:1px_#707070]">
        <p className="m-0">{`Group Medical `}</p>
        <p className="m-0">Campaigns</p>
      </div>
      <div className="absolute bottom-[-2px] left-[0px] w-[1920px] h-[580px] text-26xl">
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gold box-border border-[1px] border-solid border-dimgray">
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
        <div className="absolute top-[54.97px] left-[140px] w-[399.47px] h-[61.53px]">
          <div className="absolute top-[1.53px] right-[-1px]">{`Volunteer Time `}</div>
          <img
            className="absolute h-[calc(100%_-_3.47px)] top-[0px] bottom-[3.47px] left-[0px] max-h-full w-[64.24px]"
            alt=""
            src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/74de567a-294c-48df-90df-c6f23c7593b2_1680406585416925734?Expires=-62135596800&Signature=CdpgLajV42aHhiIOuch20sC2RtjEdulLL2aq~mPc3XqO8TgVIy-5A4IS-lTtdQPTRLXA5hvvKZ2COtsfekSzQHTGmTV~rFMaPDndnRashHQyOVOp2KrEE0orMjddf642zGbQL8ri-5BTiqEBe947H8Wtpu-fT8sv0qhR6YbsJmN5DW5sXM15qKm5xMBssMwtpevZV4sZe2lkCZmhAfS4I5Ch2ymcTdRESnCkJO~1p8V-JymzINTCkPf5~zm6SX7rxSNNrwhvkvpIKlHW-TfBur-tTRf1gGSH8Z19I1AHP5vWYa6C~aNYZr30yPwsWWIFwRibmKV~E7ZRDjVRD1h6Rw__&Key-Pair-Id=K1P54FZWCHCL6J"
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
            <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_+_248px)]">
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
        className="absolute top-[180px] left-[140px] font-adobe-gothic-std cursor-pointer"
        onClick={onHomeClick}
      >{`Home  >  Trip type`}</div>
    </div>
  );
};

export default TripType;
