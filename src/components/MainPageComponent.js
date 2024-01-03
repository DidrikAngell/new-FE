import shop from "../assets/images/Shop.png";
import rent from "../assets/images/Group 1000004856.png";

import arrow from "../assets/images/Icon color.png";
import { SearchOptionBar } from "./SearchOptionBar";
import { CarouselCompo } from "./CarouselCompo";

import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import "../css/MainPageComponent.css";

import checked from "../assets/images/checkbox/checked.png";
import unchecked from "../assets/images/checkbox/unchecked.png";

import { useSelector } from "react-redux";
import { NibiruQuerier, Testnet } from "@nibiruchain/nibijs";

import axios from "axios";
import sampleMetadata from "../metadata.json";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setNFT } from "../Actions/NFTSlice";
import { setPage } from "../Actions/PageSlice";

export const MainPageComponent = () => {
  const [show, setShow] = useState(false);

  const [assets, setAssets] = useState([]);

  const handleClose = () => {
    document.getElementById("sortby").classList.remove("z-[1200]");
    setShow(false);
  };
  const handleShow = (e) => {
    e.target.parentNode.classList.add("z-[1200]");
    setShow(true);
  };

  const handleCheck = (e) => {
    if (e.target.src == checked) e.target.src = unchecked;
    else e.target.src = checked;
  };

  const mode = useSelector((state) => state.header.mode);
  const submode = useSelector((state) => state.header.submode);
  const account = useSelector((state) => state.auth.account);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const chain = Testnet(1);

  const contractAddr =
    "nibi1yvgh8xeju5dyr0zxlkvq09htvhjj20fncp5g58np4u25g8rkpgjswdkz05";

  const queryContract = async (CONTRACT_MESSAGE) => {
    const querier = await NibiruQuerier.connect(chain.endptTm);
    const res = await querier.nibiruExtensions.wasm.queryContractSmart(
      contractAddr,
      CONTRACT_MESSAGE
    );
    console.log(res);
    return res;
  };
  const getMetadata = async (token_uri) => {
    if (
      token_uri ==
      "https://olive-raw-pony-643.mypinata.cloud/ipfs/QmZjsexNkk8o2NZgZAFDcibpVPk8hQqVDUy1XTqt45TqQv"
    )
      return sampleMetadata;
    const metadata = (await axios.get(token_uri)).data;
    return metadata;
  };
  const getAllNFTs = async () => {
    const message = {
      all_tokens: {},
    };
    const tokens = (await queryContract(message)).tokens;
    const array = [];
    for (let i = 0; i < tokens.length; i++) {
      const messageForItem = {
        all_nft_info: {
          token_id: tokens[i],
        },
      };
      const nftInfo = await queryContract(messageForItem);
      console.log(nftInfo.info.token_uri);
      const metaData = await getMetadata(nftInfo.info.token_uri);
      console.log(metaData);
      array.push({
        token_id: tokens[i],
        metaData: metaData,
        nft_info: nftInfo,
      });
    }
    setAssets(array);
  };

  useEffect(() => {
    getAllNFTs();
  }, []);

  return (
    <div className="bg-white w-full rounded-[8px] relative">
      <div className="flex justify-between px-[20px] h-[70px] items-center">
        <div className="flex items-center gap-[10px]">
          {/* Buy Mode */}
          {/* <img src={shop}></img>
          <div className="text-[28px] font-semibold">Marketplace</div> */}
          {/* Rent Mode */}

          {mode == 1 && submode == 0 ? (
            <>
              <img src={rent}></img>
              <div className="text-[28px] font-semibold">Long-Term Rental</div>
            </>
          ) : (
            <></>
          )}

          {mode == 1 && submode == 1 ? (
            <>
              <img src={rent}></img>
              <div className="text-[28px] font-semibold">Short-Term Rental</div>
            </>
          ) : (
            <></>
          )}
        </div>

        {/* <div
          id="sortby"
          className="flex items-center shadow-md bg-white rounded-[20px] px-[20px] py-[10px] z-[1000]"
          onClick={handleShow}
        >
          <img src={arrow}></img>
          <div className="text-[#959595]">Sort By</div>
          <Modal
            show={show}
            onHide={handleClose}
            dialogClassName="_modal-dialog"
          >
            <Modal.Body>
              <div className="space-y-[10px] p-[10px]">
                <div className="flex gap-[20px] items-center">
                  <img src={unchecked} onClick={handleCheck}></img>
                  <div>Published</div>
                </div>
                <div className="flex gap-[20px] items-center">
                  <img src={unchecked} onClick={handleCheck}></img>
                  <div>Total Price (High-Low)</div>
                </div>
                <div className="flex gap-[20px] items-center">
                  <img src={unchecked} onClick={handleCheck}></img>
                  <div>Total Price (Low-High)</div>
                </div>
                <div className="flex gap-[20px] items-center">
                  <img src={unchecked} onClick={handleCheck}></img>
                  <div>Square FT Price (High-Low)</div>
                </div>
                <div className="flex gap-[20px] items-center">
                  <img src={unchecked} onClick={handleCheck}></img>
                  <div>Square FT Price (Low-High)</div>
                </div>
                <div className="flex gap-[20px] items-center">
                  <img src={unchecked} onClick={handleCheck}></img>
                  <div>Closest Location</div>
                </div>
                <div className="flex gap-[20px] items-center">
                  <img src={unchecked} onClick={handleCheck}></img>
                  <div>Most Relevant</div>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div> */}
      </div>
      <div className="absolute flex justify-center w-full top-0">
        <SearchOptionBar />
      </div>
      <div className="p-[20px] grid gap-[20px] grid-cols-5 h-[80vh] overflow-y-auto hiddenscrollbar">
        {assets.map((item) => {
          if (
            item.nft_info.auction.islisted &&
            item.nft_info.access.owner != account
          )
            return (
              <CarouselCompo
                nftInfo={item.nft_info}
                metaData={item.metaData}
                imageHeight={"200px"}
                onClick={() => {
                  dispatch(
                    setNFT({
                      NftInfo: item.nft_info,
                      metaData: item.metaData,
                    })
                  );
                  // navigate("/property");
                  dispatch(setPage("detail"));
                }}
              />
            );
        })}
      </div>
      <div className="flex absolute w-full">
        <div className="bg-[#5B1DEE] mx-auto px-[50px] rounded-[15px] text-white mt-[-15px] py-[8px] z-[10]">
          Show map
        </div>
      </div>
    </div>
  );
};
