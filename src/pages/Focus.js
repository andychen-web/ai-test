import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const OurFocus = () => {
  const navigate = useNavigate();

  const onAboutTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onDestinationTextClick = useCallback(() => {
    navigate("/destination");
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
    <div className="relative bg-white w-full h-[6032px] text-left text-xl text-black font-lithos-pro">
      <img
        className="absolute top-[386px] right-[140px] rounded-11xl w-[821px] h-[540px] object-cover"
        alt=""
        src="/Group 1003.png"
      />
      <div className="absolute top-[247.5px] left-[139.5px] text-26xl [-webkit-text-stroke:1px_#707070]">
        Our Focus
      </div>
      {/* <img
        className="absolute top-[339px] right-[164px] rounded-11xl w-[845px] h-[565px] object-cover"
        alt=""
        src="/rectangle-527@2x.png"
      /> */}

      <div className="absolute top-[339px] left-[140px] leading-[30px] font-adobe-gothic-std inline-block w-[691px] h-[543px]">
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
      </div>
      <div className="absolute top-[1103px] left-[140px] w-[332px] h-[332px]">
        <img
          className="absolute h-[calc(100%_+_20px)] w-[calc(100%_+_20px)] top-[0px] right-[-20px] bottom-[-20px] left-[0px] rounded-11xl max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/rectangle-177@2x.png"
        />
      </div>
      <div className="absolute top-[1475px] left-[140px] text-3xl inline-block w-[166px] h-[63px]">
        Education
      </div>
      <div className="absolute top-[1103px] left-[566px] w-[332px] h-[332px]">
        <img
          className="absolute h-[calc(100%_+_20px)] w-[calc(100%_+_20px)] top-[0px] right-[-20px] bottom-[-20px] left-[0px] rounded-11xl max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/4b706a4d-91ee-49ff-934c-127cf0bcbf7b_1680406508941373943?Expires=-62135596800&Signature=jYJaT0XOXD~E-RblabsvYGjpAhtNwXJeLrwx6nmyE6DKdCwHgjXB6pdLfECC6EHj5IoAT~D5GEhQU6Fm0pNBEGnk0ay7biUANHQSwSrC2~ajyRyFIGtIm6BGkD1YYKvDSh2-vHKm~ozZhp0lsWwkZJnBAodCY0SeRPZV~jqSHpeIWyAzCr1Oc8ydlVgqg3BIexleEEMMFXdYbcacT~noQx-WXxxUbo1KRJIdtGy7o-ieBa7FxxlMCxYeHCnQFEiakIwQW9Psg5~htCTrKoLln1ZbOAu9E2tVPJePq0l3EuIZcz~GMisMK-6M~5H0YB04oiD6OiVO5I-uF4xZI83Xig__&Key-Pair-Id=K1P54FZWCHCL6J"
        />
      </div>
      <div className="absolute top-[1475px] left-[566px] text-3xl inline-block w-[338px] h-[143px]">{`Conserve the environment & protect animals       `}</div>
      <div className="absolute top-[1103px] left-[999px] w-[332px] h-[332px]">
        <img
          className="absolute h-[calc(100%_+_20px)] w-[calc(100%_+_20px)] top-[0px] right-[-20px] bottom-[-20px] left-[0px] rounded-11xl max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/c3a68454-f8b6-4c16-b1fd-f676a78e7757_1680406508941478072?Expires=-62135596800&Signature=b1tTo3xyH0MUTKNUARZFtjUU8uO~-NcakDkq03otF7DadJHF7aVOKLegatF8d9tMfibg6Wb12iv0CW9vcNlTIsL52TIBh~ZSq2J5bPydhltG1oRVoImvkaz91Z15lirgIOOWxMpevsHekTYQrcErx7l-buy0a0MecOCAYS5i7uHFDBvw-9LCQhGgT8YbgMI987FJl3cDHq5fTN1uAZHtdsR47alF3P1Wdr7DdLoPXISD7nKsyth4zFT5jt5dHyy3IWoMOflFwHvizaGPQ6ozXyP~kN4zmCRNwHSJYMVuzWWNEuT~k3WgOOCL2qLmXlhaW900SlWVFSW5AeEVsJP47Q__&Key-Pair-Id=K1P54FZWCHCL6J"
        />
      </div>
      <div className="absolute top-[1475px] left-[999px] text-3xl inline-block w-[338px] h-[143px]">{`Improve health & wellbeing`}</div>
      <div className="absolute top-[1103px] right-[157px] w-[332px] h-[332px]">
        <img
          className="absolute h-[calc(100%_+_20px)] w-[calc(100%_+_20px)] top-[0px] right-[-20px] bottom-[-20px] left-[0px] rounded-11xl max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/b200cee3-06c7-41ec-a01c-0ccd128129cc_1680406508941571916?Expires=-62135596800&Signature=mu~TjNHJpQHgdmilChgc0cKQ4BJxY2S8G9ryR5i6RPO-X17RhDYEDEsx8IZ0cv6~iJUpgjNtO1lqzQcDAO1ZcAbhNx7p5zEyh1eIl2UQpZMIxmolnEy6799cJevzKJrgPjc2-wN2BzDegbR9krjIBDKObKgmqk~a3ZzD1LesPU3N0LXHvnGyUwXw9lb1FAjqMgmC1~u7CSEbCoqYOghQjSJiF2jJ0OOlpncTpian1U7G0xy8Uk1-wB8cRxb8-0Y03b9-4zyY~ARpLmCSp1KUQlf-mr5T2pAFXBgOa0p0BeyT-sFhuQbEei03HZHGSTEvHdYL6p81aDc56zXUdjC~FQ__&Key-Pair-Id=K1P54FZWCHCL6J"
        />
      </div>
      <div className="absolute top-[1475px] right-[151px] text-3xl inline-block w-[338px] h-[143px]">
        Support community development
      </div>
      <div className="absolute top-[998px] left-[140px] text-26xl">
        How do you want to make an impact?
      </div>
      <div className="absolute top-[1638px] left-[128px] text-md">
        <div className="text-26xl">What is Inspiring the Future?</div>
        <p style={{ fontSize: "30px" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          minus, voluptatibus sequi non beatae nostrum voluptate necessitatibus
          numquam rem inventore molestias porro laboriosam placeat vitae ad.
          Earum explicabo sapiente soluta.
        </p>
      </div>
      <div className="absolute top-[1743px] left-[140px] leading-[30px] font-adobe-gothic-std inline-block w-[1641px] h-[105px]"></div>
      <div className="absolute bottom-[4055px] left-[140px] text-26xl inline-block w-[1468px] h-[49px]">
        Education
      </div>
      <div className="absolute top-[1995px] left-[128px] bg-white shadow-[10px_10px_0px_#000] box-border w-[548px] h-[693px] border-[6px] border-solid border-black">
        <div className="absolute w-[calc(100%_-_2px)] top-[calc(50%_+_23.5px)] right-[12px] left-[-10px] bg-gold box-border h-[86px] border-[5px] border-solid border-black" />
        <img
          className="absolute w-full top-[-6px] right-[6px] left-[-6px] max-w-full overflow-hidden h-[392px] object-cover"
          alt=""
          src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/1ebec2f5-37b7-4f14-afe7-fd513b9af857_1680406508941667524?Expires=-62135596800&Signature=AcWSMa~hXFBWpEbwmf3jEU97MA62Ow6w3NHKZ9x0VFh5JfcM0YxxIKA0LqUv4tkjL8k-wFzmF5UwqgDGA9fYrhzsDZHOaywDmf3T4hD5GvyWVzgyEScEoSsdV0msfs~QS3Rbw75xDjBu-ubSsRxo6aKVoDEKXREOtN3Q8byrMxgo9QTN8VIcbtZdH1BTzFHGPW4p6pR-UkxjJah4MUH20Cun9P6~LCcQBmHEy3THLFkEYJsBq543oBAx8c4yqjirACRMrL5gamItjKkAyRqDW9WfNDwWrO5Vguh5-qCpcLgystHCkxJDcUnfZe17r4MuJANMC62LLpmoWlzDatEHow__&Key-Pair-Id=K1P54FZWCHCL6J"
        />
        <div className="absolute top-[calc(50%_+_62.5px)] left-[calc(50%_-_95px)] text-9xl inline-block w-[179px] h-[35px]">
          Childcare
        </div>
        <div className="absolute w-[calc(100%_-_99px)] bottom-[82px] left-[44px] leading-[30px] font-adobe-gothic-std inline-block h-[119px]">
          <p className="m-0">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo
          </p>
        </div>
        <div className="absolute right-[48px] bottom-[48px] [text-decoration:underline] font-medium font-helvetica-neue text-mediumorchid">
          See more
        </div>
      </div>
      <div className="absolute top-[1996px] left-[706px] bg-white shadow-[10px_10px_0px_#000] box-border w-[548px] h-[692px] border-[6px] border-solid border-black" />
      <div className="absolute top-[2377px] left-[708px] bg-gold box-border w-[546px] h-[86px] border-[5px] border-solid border-black" />
      <img
        className="absolute top-[2001px] left-[712px] w-[548px] h-[392px] object-cover"
        alt=""
        src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/5ab28f56-4c79-4d1a-9007-298866e208b4_1680406508941777868?Expires=-62135596800&Signature=UfG-eb61n~oYN1gjmGY3tak2vohPgv2hZYn9Xh6hkUZozwP5fZuKTfGxTgK2bAMW6idhBd64yhIvT3W2oZ68oCmKwQzN6fjsJ1TXJTaeF6QbhhiPbbysHo6udMK6saxSN~fkZ2LY6CeEHi6A7IFJlaGR~s20aO04ysb3ATT3Day3y2S~NbqYnkkZ2JVDCt355LFaFT7vXsM5GISIGNBJ~8w-2IFNhX66qUx7odP5~OahEc40vQL37jgs~-5c~p9qkkmwxG41G3nJOdAgs0eK5u2sENyDsTLOTnuyHOgZWjpcni8Wd~LX-Vol~6TOUdxvh3-c4nI2LtOtAs7hXJKyFQ__&Key-Pair-Id=K1P54FZWCHCL6J"
      />
      <div className="absolute top-[2416px] left-[897px] text-9xl inline-block w-[179px] h-[35px]">
        Teaching
      </div>
      <div className="absolute top-[2499px] left-[762px] leading-[30px] font-adobe-gothic-std inline-block w-[449px] h-[119px]">
        <p className="m-0">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo
        </p>
      </div>
      <div className="absolute top-[2630px] left-[1130px] [text-decoration:underline] font-medium font-helvetica-neue text-mediumorchid">
        See more
      </div>
      <div className="absolute top-[1996px] right-[88px] bg-white shadow-[10px_10px_0px_#000] box-border w-[548px] h-[692px] border-[6px] border-solid border-black" />
      <div className="absolute top-[2377px] right-[88px] bg-gold box-border w-[546px] h-[86px] border-[5px] border-solid border-black" />
      <img
        className="absolute top-[2001px] right-[82px] w-[548px] h-[392px] object-cover"
        alt=""
        src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/95e03bfa-e786-43cc-8777-f4de909f8771_1680406508941858004?Expires=-62135596800&Signature=DgZ2zF-XEdJmDspPrDNtabHjYX2lqnhmU5LYILUjL7~Vqyf6ldaFdJ3fdlCsZvtenX2nCBFWKw~2rStoVbrinJxUsRzJ0DDd3QJow5Uu~z~QEEpT09IJWEgfR8J5RWXoJDAbsr7LQrAxvourP07qrjuPKstGuEWnLIsfwBkNXw2uOUinUAsklFnHIjq~aGhPr47sNJHSLLgoP60KM10nGM25OvIEI4VcayQvaSX-PAdxQ4IZZzi5YNvF9cTnxpX-8c00Va9vRFGV8uJkauTJZPoEeNdjQFzgRdpHwkwBKIQKWfoejwErv7oRcsx6lTxZ~bp~yaF1gKQv5vvvqmw82A__&Key-Pair-Id=K1P54FZWCHCL6J"
      />
      <div className="absolute top-[2416px] right-[211px] text-9xl inline-block w-[234px] h-[35px]">{`Arts & Music`}</div>
      <div className="absolute top-[2499px] right-[131px] leading-[30px] font-adobe-gothic-std inline-block w-[449px] h-[119px]">
        <p className="m-0">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo
        </p>
      </div>
      <div className="absolute top-[2630px] right-[124px] [text-decoration:underline] font-medium font-helvetica-neue text-mediumorchid">
        See more
      </div>
      <div className="absolute bottom-[3209px] left-[140px] text-26xl inline-block w-[1468px] h-[49px]">{`Conserve the environment & protect animals       `}</div>
      <div className="absolute top-[2842px] left-[128px] bg-white shadow-[10px_10px_0px_#000] box-border w-[548px] h-[692px] border-[6px] border-solid border-black" />
      <div className="absolute top-[3229px] left-[130px] bg-gold box-border w-[546px] h-[86px] border-[5px] border-solid border-black" />
      <img
        className="absolute top-[2847px] left-[134px] w-[548px] h-[392px] object-cover"
        alt=""
        src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/c584b7a4-a5d6-4aae-80f6-bba1633d6c3f_1680406508941930934?Expires=-62135596800&Signature=LYfXYFp6WpN~c7efs648Kzu9XHdHH2X6SI8zPzB0vnACKygbXs7T6d5VHiBN~Tmuozdq3ObG6sIL5BhybbS739Li7dVPaja1bov3S-H7~y88vA49NY8qT8GzFkjomX1iZkgXncFODIUERuOvx2D58gSESggON0yswvsriXj-F1AyhFdhkXLCIqqomEQHnTkxTQDtIK8ELLjgNv7KjkA6gH~IHOIA9US7H0MeBb33wHduxWPXPBQi7LoS5Q9Q7KZjL2FdOGQ6uVwk1tN5j2tCbmOv6Duls0PQhBhhZ0jaheHw~2bOfE8hU6jatLmngTY8wwbXhgowgc9EWxa6X0OMxw__&Key-Pair-Id=K1P54FZWCHCL6J"
      />
      <div className="absolute top-[3263px] left-[262px] text-9xl inline-block w-[352px] h-[18px]">{`Sea Turtle & Marine Conservation`}</div>
      <div className="absolute top-[3345px] left-[184px] leading-[30px] font-adobe-gothic-std inline-block w-[449px] h-[119px]">
        <p className="m-0">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo
        </p>
      </div>
      <div className="absolute top-[3476px] left-[552px] [text-decoration:underline] font-medium font-helvetica-neue text-mediumorchid">
        See more
      </div>
      <div className="absolute top-[2842px] left-[706px] bg-white shadow-[10px_10px_0px_#000] box-border w-[548px] h-[692px] border-[6px] border-solid border-black" />
      <div className="absolute top-[3229px] left-[708px] bg-gold box-border w-[546px] h-[86px] border-[5px] border-solid border-black" />
      <img
        className="absolute top-[2847px] left-[712px] w-[548px] h-[392px] object-cover"
        alt=""
        src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/fe377f1d-ab01-45fb-a2d4-0aa9cadce388_1680406508942003809?Expires=-62135596800&Signature=CK0fsjmjJ4xoRiImQ6gFKruv6v~meJeu93mGBIa1cATUZF74AdjElYkXR2hMuTZ9NQR0jFXSRfAZlh~gwTteF-qY8UMlogzhljBPpYl7UmT8V2Vj76AK946kkofZlOxAUtI1IVl2SpBLOCo6PQ1vV-E8JnBGhIZNDn9GNkYoh2T-YLjmvIKStC0ovSrzLuxA2Y1Lw1C7qgHkSKRHgOfqme60nKKSdRw8h2cnlCtn8r5Axte4Rd8SGN~lD5WT0bSz0dVCmkBVNdAStjqNmVdABrahDc0UOX9WA8l1Dgr4azbGdassCY7aOd-3Usk2DfxS2tETo0O8VNyVTHP2fSlisg__&Key-Pair-Id=K1P54FZWCHCL6J"
      />
      <div className="absolute top-[3262px] left-[814px] text-9xl inline-block w-[397px] h-[19px]">{`Wildlife & Animal Care`}</div>
      <div className="absolute top-[3345px] left-[762px] leading-[30px] font-adobe-gothic-std inline-block w-[449px] h-[119px]">
        <p className="m-0">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo
        </p>
      </div>
      <div className="absolute top-[3476px] left-[1130px] [text-decoration:underline] font-medium font-helvetica-neue text-mediumorchid">
        See more
      </div>
      <div className="absolute top-[2842px] right-[88px] bg-white shadow-[10px_10px_0px_#000] box-border w-[548px] h-[692px] border-[6px] border-solid border-black" />
      <div className="absolute top-[3229px] right-[88px] bg-gold box-border w-[546px] h-[86px] border-[5px] border-solid border-black" />
      <img
        className="absolute top-[2847px] right-[82px] w-[548px] h-[392px] object-cover"
        alt=""
        src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/e8dc9fa4-a1bb-4ba7-991a-2fbbb8f01f4d_1680406508942076762?Expires=-62135596800&Signature=cJpzlhWnsmWfXilDZJm-fWachep4WLUK395nyGC-gl5ypLDJueWDfwC1IeybK34hEUtZkRKT9CYCPPke4jUYXKcI3QMrVG8Y4A0BNb4K-GE2GtdwJJRiG6PPx~846bhCfToBXlFUV8THbr8CZwSIh3r~Hs97S~NPHWUId3M-gXprc9PLmw2W2a3IY1TZHi6hJqxm74ayr8u~2k2Dz4ccP2gMvvOFFmBPiG2keQMqFlY9LXG35OloF8FxW6MOwfo1ArH4L7hkv0yi9yMT7VvQbzgPt5kqbh33La6U3ZgmBRnu1tU0qavb1EWl~jXDdGJgvVj0-jOMsS6aSZLhRm5chw__&Key-Pair-Id=K1P54FZWCHCL6J"
      />
      <div className="absolute top-[3263px] right-[89px] text-9xl inline-block w-[516px] h-[19px]">{`Environment & Conservation`}</div>
      <div className="absolute top-[3345px] right-[131px] leading-[30px] font-adobe-gothic-std inline-block w-[449px] h-[119px]">
        <p className="m-0">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo
        </p>
      </div>
      <div className="absolute top-[3476px] right-[124px] [text-decoration:underline] font-medium font-helvetica-neue text-mediumorchid">
        See more
      </div>
      <div className="absolute bottom-[2363px] left-[140px] text-26xl inline-block w-[1468px] h-[49px]">{`Improve health & wellbeing`}</div>
      <div className="absolute top-[3688px] left-[128px] bg-white shadow-[10px_10px_0px_#000] box-border w-[548px] h-[692px] border-[6px] border-solid border-black" />
      <div className="absolute top-[4075px] left-[130px] bg-gold box-border w-[546px] h-[86px] border-[5px] border-solid border-black" />
      <img
        className="absolute top-[3693px] left-[134px] w-[548px] h-[392px] object-cover"
        alt=""
        src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/42cb9a11-bce3-49bb-9b28-af0a3702e79d_1680406508942152875?Expires=-62135596800&Signature=Z1kTAcd4TQy5aDiee98e-O~aEG5emZOnOGWy5pSYkKgtwHxUl4Sp-AsrWwehXv08r0xTdlb7QFEQTdU00I9PriUL4dBZ3d7EKseVffK3Dim0ufwLqM7GdJlwKOBe1H06pmDviWL2~OZSduiLg0EvLcXmJK1-0y5KuHm~YWDb6mVdCjfnNyVsxyuq2id~lVZDu3oTN-q4AdFizGz~N62j0EDDNCmN~a9b8P0ldaMQiU9qbcydRtMyMC9sFV6cH8ZEYux0e0o3Zno4eqH-saWZPNrBrJJwMwGrkSVozrxNb5yWPirdAs6LfQWxWnO2-cPc~z3uZq0lqpEUmtAbXtOdBw__&Key-Pair-Id=K1P54FZWCHCL6J"
      />
      <div className="absolute top-[4108px] left-[278px] text-9xl inline-block w-[297px] h-[35px]">{`Medical & Health`}</div>
      <div className="absolute top-[4191px] left-[184px] leading-[30px] font-adobe-gothic-std inline-block w-[449px] h-[119px]">
        <p className="m-0">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo
        </p>
      </div>
      <div className="absolute top-[4322px] left-[552px] [text-decoration:underline] font-medium font-helvetica-neue text-mediumorchid">
        See more
      </div>
      <div className="absolute top-[3688px] left-[706px] bg-white shadow-[10px_10px_0px_#000] box-border w-[548px] h-[692px] border-[6px] border-solid border-black" />
      <div className="absolute top-[4075px] left-[708px] bg-gold box-border w-[546px] h-[86px] border-[5px] border-solid border-black" />
      <img
        className="absolute top-[3693px] left-[712px] w-[548px] h-[392px] object-cover"
        alt=""
        src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/f5769bb4-7aa4-4887-b1cc-11bb6d3c500c_1680406508942264638?Expires=-62135596800&Signature=K1tZYhaPNcG7tshbAtJaiFinvnfzuH0JsmuGZJs3voeopjCxzANfr2QGQKbG~nVAiGo1S2JSRKxkzDNU5riJS1pQp1X65PsazeTOImfnsCpmUBLozpWH1di56ZxoSC~9bgOMGUCWDz9-yg2mNavh5avXSt4qxdrOSVAXQCmFFJbyaozUTv-F~-H-Srpo5aoxLI2vFr19iod-udEmvD4He1xEmFlkkhvbgzrILESoshIRPSQmwOWppvPbXhvtoWOej8nvqQZIN-XGUCe8jd8hXaUYL4~74WtCLgwkD~xrN40AzlC6VWl-EYyO2eWolPe0KsRcg5A~01UDufl4xvKmZg__&Key-Pair-Id=K1P54FZWCHCL6J"
      />
      <div className="absolute top-[4108px] left-[897px] text-9xl inline-block w-[179px] h-[35px]">
        <p className="m-0">Dentistry</p>
      </div>
      <div className="absolute top-[4191px] left-[762px] leading-[30px] font-adobe-gothic-std inline-block w-[449px] h-[119px]">
        <p className="m-0">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo
        </p>
      </div>
      <div className="absolute top-[4322px] left-[1130px] [text-decoration:underline] font-medium font-helvetica-neue text-mediumorchid">
        See more
      </div>
      <div className="absolute top-[3688px] right-[88px] bg-white shadow-[10px_10px_0px_#000] box-border w-[548px] h-[692px] border-[6px] border-solid border-black" />
      <div className="absolute top-[4075px] right-[88px] bg-gold box-border w-[546px] h-[86px] border-[5px] border-solid border-black" />
      <img
        className="absolute top-[3693px] right-[82px] w-[548px] h-[392px] object-cover"
        alt=""
        src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/99a0d2c1-2733-452f-8e98-c8201ddb9103_1680406508942342922?Expires=-62135596800&Signature=dbuMy12qawzuaEEQHW6VK0Cab7u23RKXMed7HFVYE2gaeNDAp2~PdWbLSyfKh~lr3cHsYSKfV-V9tiediI5NgGJ205HLrVPTguWGzWi0igHIDJdbggpxD7MrhF2wxYsAiRY6Q2~0ziddmq03~upqY1xX1Y~potsnFPbLamGXoaUIvHk-CCB7E0S2HPn6Vv9Fa--5CRUPaUK48btF6AeCEbXOVx-ojIdOGqJIaKtgisk~L5g7MTNaTjcGqodweBYmFyXnXj8U6ztQNeVHt523zQY6l0pd9EIsqTqhXAayZbN7Yhj-JI2f3GUmm10YSrWkGOEjR9C12-AdMv99tTdBug__&Key-Pair-Id=K1P54FZWCHCL6J"
      />
      <div className="absolute top-[4109px] right-[194px] text-9xl inline-block w-[306px] h-[35px]">
        <p className="m-0">Special Needs Care</p>
      </div>
      <div className="absolute top-[4191px] right-[131px] leading-[30px] font-adobe-gothic-std inline-block w-[449px] h-[119px]">
        <p className="m-0">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo
        </p>
      </div>
      <div className="absolute top-[4322px] right-[124px] [text-decoration:underline] font-medium font-helvetica-neue text-mediumorchid">
        See more
      </div>
      <div className="absolute bottom-[1517px] left-[140px] text-26xl inline-block w-[1468px] h-[49px]">
        Support community development
      </div>
      <div className="absolute bottom-[806px] left-[128px] bg-white shadow-[10px_10px_0px_#000] box-border w-[548px] h-[692px] border-[6px] border-solid border-black" />
      <div className="absolute bottom-[1007px] left-[130px] bg-gold box-border w-[546px] h-[104px] border-[5px] border-solid border-black" />
      <img
        className="absolute top-[4539px] left-[134px] w-[548px] h-[392px] object-cover"
        alt=""
        src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/6b2edcd8-e420-40a6-82a2-8e1dee8a9b6a_1680406508942434624?Expires=-62135596800&Signature=VgFwkGRhQGVl7TL2TGeAkeboTKZwIovGHc1FVF9WsasC-QkayvZQ0OrrXcwypq5L513sEz-pwnoNPs48sn2mc5J3lkmOkwSEVUe~fbRMmTCxY2SCB5eyrSyCK-9De-~-i~C94d19EjgTeFcqFsF~HEUxs8f3B6t-lK2kEx14YCILmiDiiMzXiczcr3a2tSjVO6-1aU~ybmVzdxUK3Mb1q6aAV~ezHzS8Lz5IIHRwh04WsVNUDI7xcIHhgvzF0w6GOiqriCaTLZOH5JYjdonUgtmgsQoGiGyY7i8e2gNFkcGAHKhv1jfEQNwq8Y7uGnnw7iD8eC-bgCMEQz4IfMmN2A__&Key-Pair-Id=K1P54FZWCHCL6J"
      />
      <div className="absolute bottom-[1076px] left-[175px] text-9xl inline-block w-[477px] h-px">{`Construction & Renovation`}</div>
      <div className="absolute bottom-[876px] left-[184px] leading-[30px] font-adobe-gothic-std inline-block w-[449px] h-[119px]">
        <p className="m-0">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo
        </p>
      </div>
      <div className="absolute bottom-[842px] left-[552px] [text-decoration:underline] font-medium font-helvetica-neue text-mediumorchid">
        See more
      </div>
      <div className="absolute bottom-[806px] left-[706px] bg-white shadow-[10px_10px_0px_#000] box-border w-[548px] h-[692px] border-[6px] border-solid border-black" />
      <div className="absolute bottom-[1025px] left-[708px] bg-gold box-border w-[546px] h-[86px] border-[5px] border-solid border-black" />
      <img
        className="absolute top-[4539px] left-[712px] w-[548px] h-[392px] object-cover"
        alt=""
        src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/0d018a75-c1f6-4fc0-9ea3-e1e587b207f9_1680406508942506090?Expires=-62135596800&Signature=CgxxbPkTu9SoF2GSDeQiV6gWwea9c4EmWzaefBPy6FLmF~6fC4Mtp5-dUQ4mK79a4TqcLubAyY5Uf9FeIzzrs7XFhR687TnBk9DEUp5W5a~Bz2HQl7kkEMHtjwg5IMqPceYW559xR8wsJbK7f1Dc8ORSEPM14KGbt813nEToHtzvrIVSXGfh9j5gj~GbND3Wf6T5Ib1gbVwS5ddpS9YxAmgQlKr9xB-0Sxj9UrfxzT4bj8q7GKAdHfLoJEGrzFQQtknZwmL0ke75JN3CLojQapdXQJphmWQfqdfdeek0rnJNe-9v487AYjxjbm8EDD3bj0QnQbuuhltCdKFDSzcisA__&Key-Pair-Id=K1P54FZWCHCL6J"
      />
      <div className="absolute bottom-[1056px] left-[762px] text-9xl inline-block w-[449px] h-[22px]">
        Community Development
      </div>
      <div className="absolute bottom-[876px] left-[762px] leading-[30px] font-adobe-gothic-std inline-block w-[449px] h-[119px]">
        <p className="m-0">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo
        </p>
      </div>
      <div className="absolute bottom-[842px] left-[1130px] [text-decoration:underline] font-medium font-helvetica-neue text-mediumorchid">
        See more
      </div>
      <div className="absolute right-[88px] bottom-[806px] bg-white shadow-[10px_10px_0px_#000] box-border w-[548px] h-[692px] border-[6px] border-solid border-black" />
      <div className="absolute right-[88px] bottom-[1025px] bg-gold box-border w-[546px] h-[86px] border-[5px] border-solid border-black" />
      <img
        className="absolute top-[4539px] right-[82px] w-[548px] h-[392px] object-cover"
        alt=""
        src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/0b4cec05-20ce-404f-a507-9abd39f77b75_1680406508942578872?Expires=-62135596800&Signature=UwWBEVuQsaEmeDHaeyEVBwrOK9Nkz7yXIPyIzb72y4M-Mm-~C5NnkrGtzm297rl997HFAwB0TlJZF6ZEr0As9WCK8-umk0irlUkOyVjAOr3WDuw5ImE3R97FnQSEGPmbCUkHXcqhotNIyCUPs2BkJgpCqVFsD9Ge7gDZy-LX~QWTLcgWpJywxAZmL601iEL8lbKvYRl5tIMTy6oAdFRuZl5bSqBLJPe996zt79ve6LqADyA5~cToQw0aFb2GalR~ZREQ1-NiqRxtwzP2xucDwxZ9nP0bsEPev2fxXKLrX1N5L5Txl-Aag-y-Jw4uUl3~jl5M3xp1gGps4jb6TvSIPQ__&Key-Pair-Id=K1P54FZWCHCL6J"
      />
      <div className="absolute right-[139px] bottom-[1031px] text-9xl inline-block w-[399px] h-[47px]">
        Women’s Empowerment
      </div>
      <div className="absolute right-[131px] bottom-[876px] leading-[30px] font-adobe-gothic-std inline-block w-[449px] h-[119px]">
        <p className="m-0">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo
        </p>
      </div>
      <div className="absolute right-[124px] bottom-[842px] [text-decoration:underline] font-medium font-helvetica-neue text-mediumorchid">
        See more
      </div>
      <div className="absolute bottom-[-6px] left-[0px] w-[1920px] h-[580px] text-26xl">
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
            <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_+_18px)]">
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
      <div className="absolute top-[164px] left-[0px] bg-cornsilk w-[1920px] h-[46px]" />
      <div
        className="absolute top-[180px] left-[140px] font-adobe-gothic-std cursor-pointer"
        onClick={onHomeClick}
      >{`Home  >  Project Focus`}</div>
    </div>
  );
};

export default OurFocus;
