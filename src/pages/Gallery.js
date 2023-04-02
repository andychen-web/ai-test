import { useState, useCallback } from "react";
// import ClickGalleryPicture from "../components/ClickGalleryPicture";
// import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const [isClickGalleryPictureOpen, setClickGalleryPictureOpen] =
    useState(false);
  const navigate = useNavigate();

  const openClickGalleryPicture = useCallback(() => {
    setClickGalleryPictureOpen(true);
  }, []);

  const closeClickGalleryPicture = useCallback(() => {
    setClickGalleryPictureOpen(false);
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

  const onContactTextClick = useCallback(() => {
    navigate("/contact");
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
      <div className="relative bg-white w-full h-[5983px] text-left text-9xl text-black font-lithos-pro">
        <div className="absolute top-[247.5px] left-[139.5px] text-26xl [-webkit-text-stroke:1px_#707070]">
          Volunteer Gallery
        </div>
        <div
          className="absolute top-[390px] left-[140px] w-[812px] h-[622px] cursor-pointer"
          onClick={openClickGalleryPicture}
        >
          <img
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/a3a903de-3c82-4f54-8783-7bb2e6c9e749_1680406614985217926?Expires=-62135596800&Signature=AsOpm744sLdwyW39TE1FeoYbPPIyVbllP2KDRAMLDaxeb0~8o0JpIODHiyoyTwvzUwbKT08WXcM8KrzQQc0K5CertnDOt13fXS-CaFP4BtWm42fLRpYUyLnQJ5ERUinNvvSIAmlbQEAIXf0~rDdaS7zMlFQOZHVb2OXlCz03mOA2USlG~aRC1HJt41hHGbOVpEa8eTIDQiPgzgIK06c-8k7xCuOERrlfwSYndNYgebPBe7TfthOCMiaF4K0631wXVGThxEGxaM5mon2MTeDP5dD1MDt5zyQbVe2cuaqjxwuAAZZtxfXGfPGeU2RQn0LawTPJLlMK9xySqS-FKIevBQ__&Key-Pair-Id=K1P54FZWCHCL6J"
          />
        </div>
        <img
          className="absolute top-[1012px] right-[140px] w-[828px] h-[633px] object-cover"
          style={{ right: "80px" }}
          alt=""
          src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/31e67e30-38eb-422b-ab5d-4ee05adf90ba_1680406614985434732?Expires=-62135596800&Signature=tQonUGzMjlxkPNYu8tTudL0LCrr516TowpwsyC3bsw40MHSjvGVhJ8kw5wHAz8BGhluSU4KEAutiQNMdD4QJISjnK992hgScK18iBEoeIjyNY8p2yDLf2brtmCZxRC0ASKDMiix3uvibO1xWFRq0htlnUrHBBwA4h4~osk~mezu68qPktceUiMxqG-ymVMy4Cbx6DCJcFLddSBI-A2ZwY6dNAG4Q6uU9H6pLID8~6lWsma75SYpxGwsVhA4vs03dqCgw~yp6c4E12Jy~v6IWjKWlhAQ4HimpkE3QUS5ppgBXR5QMzGwmispx5335AEWa~EdL~a0NQ4Oi1Uf1J9l3XQ__&Key-Pair-Id=K1P54FZWCHCL6J"
        />
        <img
          className="absolute top-[2267px] right-[140px] w-[828px] h-[633px] object-cover"
          alt=""
          style={{ right: "80px" }}
          src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/d9000432-cf52-4b2d-a9d5-4d627900c3eb_1680406614985571039?Expires=-62135596800&Signature=CBAO6M-FNL1Vp4LxQ523oCl8rKucIMLh8w3z1nM20aVf7qvpNOhCnXiYos26pjVm-NfbBSjG~K3K~AYF3ser1eaYR2dbcsAzDvopNqfJq9GzjuRAhBh7yvzg4A6rfok06hAqik-BerHYugCOMnu4HLp164sgusbKIA5bbBEStjv2gElaud918ya3laXxO~q-0235Stezk1jo7hkpXhrjnKedv5aQ~lAvfYgd9~OuCuR~zoGpSP-khYx-pkho4rGOwJgswsgEyzMIUA4sMUjVgXoEwUrhXIOkow53UB4b2uancmIDA2w2HbPzAgQTTO4KjH7hapLtdaOXwQ9uIxpVjA__&Key-Pair-Id=K1P54FZWCHCL6J"
        />
        <img
          className="absolute top-[1646px] left-[139px] w-[813px] h-[621px] object-cover"
          alt=""
          style={{ right: "80px" }}
          src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/e060a5f6-c219-4cf0-a607-7d3e3122dcfd_1680406614985670196?Expires=-62135596800&Signature=l0d4clsZxNrSPzzAO1r7Eno52C9YGrC-6IDXNGTzCNedc-bce1esC~Kd6wrwZdiTQ~MQaib6nK8uL~sRwz2Q0ppT5zoCm0jENKHQkrJ5ghKXF0Hoq955ZyEU3rOWxMxEC9jcbfq3pGF7~UpuqGYKm1Zfp-vnFDdyf3MpqfL0U4in-C6cIteJFg3roQGq5LRzPcCPqVPIbRK8OJMWiy7-SdyZqpnpyzGJtNHP5bk~X2X-HYTySaKbia1W~Boopz1werrbr5oecq5z1WytjRYUsi3E62As9rGsGb5YThPJFD83F-Fvvdbu4~ZQ0GucktR-RdvVzP-qXrYYfMjXEd6a6w__&Key-Pair-Id=K1P54FZWCHCL6J"
        />
        <img
          className="absolute top-[2900px] left-[141px] w-[811px] h-[620px] object-cover"
          alt=""
          style={{ right: "80px" }}
          src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/a6a9d92c-7507-4ce3-a150-ae953d9f0275_1680406614985762946?Expires=-62135596800&Signature=DzKqoa3F~~5iriPL12wW2j9iKy-pMCt8e4GuchzkSb-9YMHpQ27z~CGrUDyThu6qmgMke24xbnmBFcHAetarXJRVnQxBZfUYoTC5LYn6k1mOaGWnpJQZsaONU5kwRf8F00QazXNBSqOi9A1qi7zLQy6aYVwL7Th7YkelQiVQLxhNzBAS6s3~3NoNAqh2N5LK4ImEpImmv3nOSo7P~G8tTqokpBSM9OhnaiYMTuS49H2PBiKPeypk1RLZg6Sk~qTqdf-fg3ZNHgpavdQHDOdQIsmOwquIPOQP2jgHIVG2e40lBD~~GAGu89suFS121vRbjXxXF62D5mybkbwWQsmjvg__&Key-Pair-Id=K1P54FZWCHCL6J"
        />
        <img
          className="absolute top-[3520px] right-[140px] w-[828px] h-[633px] object-cover"
          alt=""
          style={{ right: "80px" }}
          src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/534dac55-bc8a-479b-9c79-98d716f2122b_1680406614985859324?Expires=-62135596800&Signature=fHtBKdI9PPv6zQfhDlWsRepQy9HMBZ7VJw2f1zOeeTgWEnieDfJubx~TkkUIKsiTcpOXfz3EEcEE3sAhZoBUdPZb6N4YWbuKnGkcX5pTC4wCLcB371kUSmv1cffEFLW47ZDiBquhJDcFg6QOprAzaoiVOrVvAFFSAEYuPASwM8uuIkZip5vRLoG-LhM8eoF2eIW-XE4m9VLaoVOVnQlqJgKa8MBf5fX9VwhpYDVfGVVNQrvlQiVKbvmJcZl1jltCa8Y0a5s5v9J9Dyz6S8o1mF1wun7xYGHsBrNQewR7MAW3RSOSC-LzJYDSXuHwdHGeHPB6zM6x6jnGL140BegdGQ__&Key-Pair-Id=K1P54FZWCHCL6J"
        />
        <img
          className="absolute right-[140px] bottom-[580px] w-[828px] h-[633px] object-cover"
          alt=""
          style={{ right: "80px" }}
          src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/f39a93b9-80cb-4823-9a01-00640795f0cd_1680406614985945928?Expires=-62135596800&Signature=Sp2OKXglGWALDPUCcqI9QET1m8bGbvKe6eQeR6Y3v9zkFJCAPHNgRVj55vaWgVfkvs6MvEsZjtMlKJjyevnPoA0kJA9cOwl-wxmDLBCM2QsUvbMbyK8QGmZaDRu-2NRFfLfNSGcIgxwTK1~VqwjV4mN3omitQAK8EZ~oL5WARqD3nmCw7XkrEGMQEzVDfeF3U64y8Abz~Qok7dHj8bPTM96MiwwAlPAvsRvJE-0fywXCWtlwlhZaVCu8DgGtZoUCrrvlkzho9RpSjGc-lr-XAvpFwAvKDaD9HxFKm0DSYOAEob1B1VxaJZVU-8DJHw2qieuY6s1f7GB-bTlUY~POEg__&Key-Pair-Id=K1P54FZWCHCL6J"
        />
        <img
          className="absolute top-[4150px] left-[141px] w-[811px] h-[620px] object-cover"
          alt=""
          style={{ right: "80px" }}
          src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/2222a258-271d-4c4d-8d4a-7a32ec834c6e_1680406614986030137?Expires=-62135596800&Signature=buAwVu32rUszS7DTLrRRBNSPu9CRlqA5xPtcXhqcDOSMhSf4cUOLPLGR-aVd0VphzmFMTQ3UCDKEtCOoUidcI-qQEZJdoelyyEruQk9jdvXdBP9X1wAzOgtRuITc12~DpbU8ufjeYaPhnHIT29FC7X-EghQSfCJzkhBRGXyYUUoL-37Vb043B6Yvp7oe8knK1NUnEQkw7D9f6ZvXmUPkXmzmzTd7O8J-dslq4nc7hsLDc~hA-cPf8ynqGWsuGldZvyyZqv5PDVF0HixeATVLEARb97DskWRn-jJq~SqiKlDRUhZdn87n37XtrqBckvDYwJNp7Svge1H3-~h0jhRwzw__&Key-Pair-Id=K1P54FZWCHCL6J"
        />
        <div className="absolute top-[1290px] left-[180px] w-[487px] h-[50px] flex flex-row items-start gap-[36px]">
          <div className="relative w-[50px] h-[50px] shrink-0">
            <img
              className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/f2e4e248-57fd-4c16-b92c-07519e9173c9_1680406614986121047?Expires=-62135596800&Signature=dMyLvhHxj2ZMm3bIi--OC-9FUrJ9aEUkJT8en6peiMGSMXtqzdLYWKUNXVtNiCx-bgbOKGI9TjJDop7lSE~EBk~JNJ4R4vMUEOMTw6KMGQrHtjiFM818yD3tNQBli60yklBJcXlWuebSgz23ALfPCyCNR3cFmdfgAaw0m-opK7YGqSDzxCkpja6QaqNAbk1xQoWmlMqrSkpoHREmtXALDuZCAVTw5IBafNsFRIqyFJXGG32lc1D29pajvHjgzm4UU-u9Cl2D5lnuj8E0JtbbA9rKOTJ1nkazhSj3i-a2GKRuAgf1jEN9~Akk~fOcEwyG2hWTGq8rWtBa8T5L2TKcLA__&Key-Pair-Id=K1P54FZWCHCL6J"
            />
          </div>
          <div className="relative [-webkit-text-stroke:1px_#707070] mt-px">
            Philippine environmental Project
          </div>
        </div>
        <div className="absolute top-[1906px] left-[1178px] w-[361px] h-[50px] flex flex-row items-start gap-[36px]">
          <div className="relative w-[50px] h-[50px] shrink-0">
            <img
              className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/8aaa9cd3-5b45-49e9-b26b-5ea005afa15d_1680406614986214779?Expires=-62135596800&Signature=PVNapjaRwW6TRCDehNwIpWbyoTAAMEakPx67OH~BIvEUL1cIS7SwQ0bAWIJ6Q9QwtFvnCM1ZictknNFosE5-eY4g-PjNb2IhMbBCFPVdMMcjLSvc5BO8xJBi67T-laBHUQC90uow62ga6s8xyJ41KmiVxr01MckenFjQ96D1slZa1a1BsbWkQvCJ-VYqquAQKZLo8hDRs4Z2ZDEpL-yxlEOrwrXe~y3fXE0LUYA9ZVeymLSKl8WlLlZoL9TS8G2QtsSaE0cAJJjXxZzHcOgIAK~O-TLcjdnq3hmqvN2UioDR8lkJmzHnvesUGRzGyZrUeVzbacsOhSpYFSpGVsPQOw__&Key-Pair-Id=K1P54FZWCHCL6J"
            />
          </div>
          <div className="relative [-webkit-text-stroke:1px_#707070] mt-0.5">
            Tahiti conserve Project
          </div>
        </div>
        <div className="absolute top-[2543px] left-[278px] w-[409px] h-[50px] flex flex-row items-start gap-[36px]">
          <div className="relative w-[50px] h-[50px] shrink-0">
            <img
              className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/81c558af-186a-42b8-86f4-d496e8d4c340_1680406614986303189?Expires=-62135596800&Signature=lgPK3gZS9H5gO9rRp1tVtffF206iNHQrEQfv~KNqclzg6~WYvVO0Y5FzDpr005jTQea80TdpQy6ubolhACFikdbruZU~-TP44aPFIAD-~0-Pp5aAy3P6S8i6IYhO5xH-~Mje0UwiWJuKKeTIMyn2B3d3by-G7ew-itH0kzjyRNFr~eEX76iT0pfvd2~fqq4wHNDjGd2AJK-5A3kisr8h6i55ithKouJxJSDlB9okm9L0lYhYLa1WYzP9t0g-Gd84lse1935jBVVNp4fUiT0FlFE-1DF-zX8j0D99nJ3Arf0d-7G9GZdW5-KIHuQS9bSrCd697zJqpec14gJuizESIA__&Key-Pair-Id=K1P54FZWCHCL6J"
            />
          </div>
          <div className="relative [-webkit-text-stroke:1px_#707070] mt-0.5">
            Australia Eco earth Project
          </div>
        </div>
        <div className="absolute top-[3188px] left-[1045px] w-[501px] h-[50px] flex flex-row items-start gap-[36px]">
          <div className="relative w-[50px] h-[50px] shrink-0">
            <img
              className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/18273470-c6c1-4405-a4c7-121147c470a2_1680406614986388938?Expires=-62135596800&Signature=lKwZFoorTN8uJAUhM1Ur8G6W-2cyUOCLK6AXB9Y5l0l2~AF38zYN~Z~n-WYKzJuUOgiXg7xYrftyNLz-Ik2ZWkVpaLLJQ5XaKwoUANeP91donV~JanJBWzADeUtODiixN~spiucaQtiWMtEmmA8WyccQRCUjdnKJ5B7qhT3X5jiDNDrDVUpluLXZGC2XvbFEPxLFr1IPUlozOcBWbF-B7aixAN8FcazPZwARsCIJhMDT8gMEBsSs3Z-Vzsp9dv3pohjdMHdambW0nEbTYNNmmIxpl-fpNNZSiql5Skh3V3MlcNSHUbfq-Aa2CUsGwqfnFA4qzhNaavGSlXwiDKrabg__&Key-Pair-Id=K1P54FZWCHCL6J"
            />
          </div>
          <div className="relative [-webkit-text-stroke:1px_#707070] mt-1">
            Botswana elephant rescue Project
          </div>
        </div>
        <div className="absolute top-[3807px] left-[300px] w-[311px] h-[50px]">
          <div className="absolute top-[1px] right-[-0.5px] [-webkit-text-stroke:1px_#707070]">
            Asian tiger Project
          </div>
          <img
            className="absolute h-full top-[0px] bottom-[0px] left-[0px] max-h-full w-[50px] object-cover"
            alt=""
            src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/b8c9203e-c21f-4285-8514-6b0ae090e265_1680406614986471843?Expires=-62135596800&Signature=tnQFAvqw7YHNzMI4wWTADoox2pM8jzcE3GvcvllbtVyxE7ffC2wcbS-IN~-c6e4V3P83jNrPkGBBmoZJd01y037CBDGT7p1pc45S8Lo7ECOOHcNESkgq2BAs8yhku7hUQ~7hyxlJ4VfQjNQUaOjBLfhoTffUAXQhvKEUQKNgEFZnfq5Oe8gTrrw6hF~Na9dUP5f7uByJIUbmcI8Ulq2jAXFnCklhSjNXeF9W0ScvqbeGeGmdDUQYIpyFNd0Gd8ArwlAP5Eg7~ISXqQBj6HW2BqbKLFRgJJx1ul4Avd3wRe36y4PA4KOh0zQpFqZOUoF5~MZKOurFgkEJSKAMBH3yvQ__&Key-Pair-Id=K1P54FZWCHCL6J"
          />
        </div>
        <div className="absolute top-[4445px] left-[1135px] w-[453px] h-[50px] flex flex-row items-start gap-[36px]">
          <img
            className="relative w-[50px] h-[50px] shrink-0 object-cover"
            alt=""
            src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/d434915a-e505-4c19-973a-8988b9497d51_1680406614986553516?Expires=-62135596800&Signature=DAvSL7TrZkHrPONQAL1EgGPkTrKYKIICxgc1oZYgt7~qJ5sSZHCWqTGCY3E4CslISYp3MqDXRDp9Ikv7YC1MsR165~6QrQQ2pDW0XVEfLQYAyxhvPcnb7C-UxLa2g4d9a2eSYb4OkQTtc3TTEK-Z0Hpn9vDSAG5037WMTTV6jj5Wf2~iBXtXFibwHWA2hJO~jJadwFvmuLR1NTblhp7YKIcoc5gYnwzBMyiXeJ6hXwIB2eDw3DxfVbWBw7EBgT7RBWeeAkwK2xNATgyAtCggoxEn0Lv-YnIO3nKFxjlqKLkeH2y9REYhIfBBPMTD0FBBNncRVgnWVnrPC6Y4BgxKYA__&Key-Pair-Id=K1P54FZWCHCL6J"
          />
          <div className="relative [-webkit-text-stroke:1px_#707070] mt-0.5">
            Sweden Support elder project
          </div>
        </div>
        <div className="absolute bottom-[851px] left-[300px] w-[348px] h-[50px] flex flex-row items-start gap-[36px]">
          <div className="relative w-[50px] h-[50px] shrink-0">
            <img
              className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/0022e26c-5617-43c3-90a7-1468a0120bf8_1680406614986629001?Expires=-62135596800&Signature=mCcL4w5-gbO9EJiDcXUCO7TXuvT0AjgNL9PY-tMl4ZgZpk5o02bbW6wyzPnIK3W2dKCY79vYieVISxsSI2R1EAIeNuqrZjNsd0oR0njV8NEB~UrmwJab1qHdvXmQGISFGbmVYgnXBPmiYyAe5DD2v0lyIMhXMUACwYSAT~v9hUTycZJhRjhXUZxrDXDPriQHwBPdNZ3wyUcirS57DbIaDpcv9DMs8CeoEt6V5p0dNkTUvYU5g1NywZNMgd2ZRGU4kWla2mCwy3ULhzbuUZWzHqe0XorD9fT~vWwaPd0cVmEuqMMAJBefEhmbaLVp8yyIjFy3wdyWDh6iDto6dly-Pw__&Key-Pair-Id=K1P54FZWCHCL6J"
            />
          </div>
          <div className="relative [-webkit-text-stroke:1px_#707070] mt-0.5">
            Preserve tribe Project
          </div>
        </div>
        <div className="absolute top-[327px] left-[140px] text-xl font-adobe-gothic-std text-center">{`Join with us, be the change you want to see in the world `}</div>
        <div className="absolute bottom-[0px] left-[0px] w-[1920px] h-[580px] text-26xl">
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
              <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_+_419px)]">
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
                onClick={onGroupContainer10Click}
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
        <div className="absolute top-[624px] left-[1096px] w-[481px] h-[50px]">
          <div className="absolute top-[1.5px] right-[-0.5px] [-webkit-text-stroke:1px_#707070]">{`Whale Research & Conservation`}</div>
          <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-[50px]">
            <img
              className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="https://d1xzdqg8s8ggsr.cloudfront.net/64251fc95053b17df5ce645e/62122875-cb4f-41f0-944a-ba17cff963cd_1680406614986699877?Expires=-62135596800&Signature=rrPbY~KV31ApSB8GRshdkzHSD4w-0L3TKNZKjcP-j29yvfFEziLFgBNo0ICf9nbIfeOOzPV29zAa4LfS-Kd4-NDRvNBtMHrGgLpBTU37gKmzOd~0rY5TJYpgoPY99B2cjWJer5rPkufWtAiybtfQH4ZXQ9GeGuxBBf38ITAfcD93WuBU0F25-17BMjQ2CVNvnOt9bRYNC~uLj67oDYy8e4~ONRckfElQdNtCvANanfWYgjvMKfs4FRMsCBzUadvZ7IrzUlO6y66ilQ9mgkBTfVuZhqmjLgtk2z8-LLczQfm~xSbjnlRoUUPPER~xinIZ66K0ohFApfgSfORFZD-6Hw__&Key-Pair-Id=K1P54FZWCHCL6J"
            />
          </div>
        </div>
        <div className="absolute top-[164px] left-[0px] bg-cornsilk w-[1920px] h-[46px]" />
        <div
          className="absolute top-[180px] left-[140px] text-xl font-adobe-gothic-std cursor-pointer"
          onClick={onHomeClick}
        >{`Home  >  Gallery`}</div>
      </div>
      {isClickGalleryPictureOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeClickGalleryPicture}
        >
          <ClickGalleryPicture onClose={closeClickGalleryPicture} />
        </PortalPopup>
      )}
    </>
  );
};

export default Gallery;
