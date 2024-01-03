import listed from "../assets/images/Frame 1000001303.png";
import unverified from "../assets/images/Frame 1000001303 (1).png";
import upcoming from "../assets/images/Frame 1000001303 (2).png";
import rent from "../assets/images/Frame 1000001303 (3).png";
import light from "../assets/images/light.png";
import search from "../assets/images/tabler-icon-search.png";
import slash from "../assets/images/slash.png";
import windowIcon from "../assets/images/window.png";
import list from "../assets/images/list.png";

import image from "../assets/images/image.jpg";
import NUSD from "../assets/images/NUSD.png";
import LocationPin from "../assets/images/PropertyAddress/Pin, Location.png";
import icon from "../assets/images/icon.png";
import icon1 from "../assets/images/icon (1).png";
import icon2 from "../assets/images/icon (2).png";

import empty from "../assets/images/Frame 1000005568.png";
import { CarouselCompo } from "../components/CarouselCompo";
import { PropertyItem } from "../components/PropertyItem";
import { SelectionGroup, SelectionItem } from "../components/Selection";
import { useSelector } from "react-redux";

import verifyIcon from "../assets/images/dashboard/Frame 1000005568.png";
import verifyIcon1 from "../assets/images/dashboard/Frame 10000055681.png";
import verifiedMark from "../assets/images/dashboard/badges (1).png";
import unverifiedMark from "../assets/images/dashboard/badges.png";
import clockAlarm from "../assets/images/dashboard/Social (2).png";
import clockSand from "../assets/images/dashboard/Social.png";

import circleIcon from "../assets/images/Frame 1000005306 (2).png";

import profileIcon from "../assets/images/Profile.png";
import hourGlass from "../assets/images/dashboard/hourglass-03.png";
import checkout from "../assets/images/dashboard/check-circle.png";
import printout from "../assets/images/dashboard/printer.png";
import documentchart from "../assets/images/dashboard/document-chart-hand.png";

import circlechecked from "../assets/images/Frame 1000005306 (1).png";
import circleunchecked from "../assets/images/Frame 1000005306.png";
import uploadimage from "../assets/images/dashboardListing/uploadimage.png";
import arrowdown from "../assets/images/arrowdown (2).png";

import closeIcon from "../assets/images/Close1.png";

import imgBack from "../assets/images/dashboard/luke-van-zyl-koH7IVuwRLw-unsplash 1.png";
import colorarrow from "../assets/images/Arrow.png";
import imageCard from "../assets/images/image.png";

import location from "../assets/images/location.png";

import heart from "../assets/images/dashboard/Frame 1000005004.png";

import walletIcon from "../assets/images/dashboard/Wallet, Money.png";
import medalIcon from "../assets/images/dashboard/medal-reward.png";
import starfavorite from "../assets/images/dashboard/star-favorite-send.png";

import bankNote from "../assets/images/dashboard/Money, Banknote.png";
import binaryIcon from "../assets/images/dashboard/icon.png";
import bankIcon from "../assets/images/dashboard/icon (1).png";

import map from "../assets/images/map.png";
import locationPin from "../assets/images/locationPin.png";
import arrowtoLeft from "../assets/images/ArrowToLeft.png";
import bookLet from "../assets/images/dashboard/Hotel, Booklet.png";
import messageschat from "../assets/images/dashboard/Messages, Chat.png";
import homehousebig from "../assets/images/dashboard/home-house-big.png";

import deleteIcon from "../assets/images/close-mini.png";

import folderFilter from "../assets/images/dashboard/folder-filter-left.png";
import arrangefiltersort from "../assets/images/dashboard/Arrange, Filter, Sort.png";

import festivalback from "../assets/images/festivalback.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Calendar } from "react-big-calendar";
import { PropertyDetail } from "../components/PropertyDetail";
import { Verify } from "./Verify";
import { MonthsCalendar } from "../components/MonthsCalendar";
import { Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import { RightBar } from "../components/RightBar";
import { Inbox } from "../components/Inbox";
import { setDashboardMode } from "../Actions/DashboardSlice";
import { useDispatch } from "react-redux";
import { DashboardListing } from "./DashboardListing";
import { setNFT } from "../Actions/NFTSlice";

import { NibiruTxClient, NibiruQuerier, Testnet } from "@nibiruchain/nibijs";

import ImageUploading from "react-images-uploading";

import axios from "axios";

import sampleMetadata from "../metadata.json";
import { DetailPage } from "./DetailPage";
import { PropertyAddress } from "../components/PropertyAddress";
import { ImageView } from "../components/ImageView";
import { PropertyListingDetail } from "../components/PropertyListingDetail";

export const Dashboard = () => {
  const headerMode = useSelector((state) => state.header.submode);
  const dashboardMode = useSelector((state) => state.dashboard.mode);
  const dispatch = useDispatch();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const [showPriceEditModal, setShowPriceEditModal] = useState(false);
  const [images, setImages] = useState([]);

  const [myTokens, setMyTokens] = useState([]);
  const [assets, setAssets] = useState([]);

  const [rentingAssets, setRentingAssets] = useState([]);

  const [NFTsFlag, setNFTsFlag] = useState(0);

  const [currentToken, setCurrentToken] = useState();

  const [updateFlag, setUpdateFlag] = useState(false);

  const [totalListedNFTsCount, setTotalListedNFTsCount] = useState(0);
  const [totalUnverifedNFTsCount, setTotalUnverifiedNFTsCount] = useState(0);

  const [tenantOverviewFlag, setTenantOverviewFlag] = useState(0);
  const [myRentalFlag, setMyRentalFlag] = useState(0);

  const [viewDetailFlag, setViewDetailFlag] = useState(false);

  const [transactionFlow, setTransactionFlow] = useState(0);

  const [rentingAssetsFlag, setRentingAssetsFlag] = useState(1);

  const [actionMode, setActionMode] = useState(false);

  const maxNumber = 69;
  const onUploadingImagesChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };

  const metaData = useSelector((state) => state.nft.metaData);
  const nftInfo = useSelector((state) => state.nft.NftInfo);

  const walletEx = useSelector((state) => state.auth.wallet);
  const account = useSelector((state) => state.auth.account);

  const amountToPay = useSelector((state) => state.rent.amountToPay);
  const chain = Testnet(1);
  const contractAddr =
    "nibi1yvgh8xeju5dyr0zxlkvq09htvhjj20fncp5g58np4u25g8rkpgjswdkz05";

  const gateWay = "https://olive-raw-pony-643.mypinata.cloud/ipfs/";

  const jwt =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIzMWEyZjc5ZS1iNDQyLTQzOWUtOGNlNC0wZmRiMTIzYmNkNDciLCJlbWFpbCI6ImJsb2NrY2hhaW5zdGFyMThAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImJkZjAxNDE1NGYxOTBhZjY4M2Y3Iiwic2NvcGVkS2V5U2VjcmV0IjoiZDUxNGZjOTljMGZkMGJlYTA1NzA4OTkzOGFkZGQyOTI5OWQ1ZjkyZTUyOGY2NWRjZjQ0NGIzODdmOTQ2YmEyMCIsImlhdCI6MTcwMjk2NDQxOX0.2KDJPbgRnpIbvgYbvGZnkwnjAZw7NiRhtif_SqW1z2E";

  const getMetadata = async (token_uri) => {
    if (
      token_uri ==
      "https://olive-raw-pony-643.mypinata.cloud/ipfs/QmZjsexNkk8o2NZgZAFDcibpVPk8hQqVDUy1XTqt45TqQv"
    )
      return sampleMetadata;
    const metadata = (await axios.get(token_uri)).data;
    return metadata;
  };

  const pinMetadata = async (metadata) => {
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify({
        pinataContent: metadata,
        // pinataOptions: { cidVersion: 1 },
        pinataMetadata: { name: "sample.json" },
      }),
    };

    try {
      const response = await fetch(
        "https://api.pinata.cloud/pinning/pinJSONToIPFS",
        options
      );
      const res = await response.json();
      return res.IpfsHash;
    } catch (error) {
      console.error(error);
    }
  };

  const pinFileToIPFS = async () => {
    console.log("Uploading images...");
    const hashes = [];
    for (let i = 0; i < images.length; i++) {
      const formData = new FormData();

      formData.append("file", images[i].file);

      try {
        const res = await axios.post(
          "https://api.pinata.cloud/pinning/pinFileToIPFS",
          formData,
          {
            maxBodyLength: "Infinity",
            headers: {
              "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
              Authorization: `Bearer ${jwt}`,
            },
          }
        );
        console.log(res.data);
        hashes.push(res.data.IpfsHash);
      } catch (error) {
        console.log(error);
      }
    }
    return hashes;
  };

  const deletePinFromIPFS = async (hashToUnpin) => {
    try {
      const res = await axios.delete(
        `https://api.pinata.cloud/pinning/unpin/${hashToUnpin}`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const updateMetadata = async (hash, key_values) => {
    const metaData = { ...(await getMetadata(gateWay + hash)) };
    console.log(Object.isExtensible(metaData), metaData);
    await deletePinFromIPFS(hash);
    for (let i = 0; i < key_values.length; i++) {
      metaData[key_values[i].key] = key_values[i].value;
    }
    const newHash = await pinMetadata(metaData);
    return newHash;
  };

  const mintNFT = async (token_uri) => {
    const token_id = ((await countMintedNFTs()) + 1).toString();

    console.log(token_id);
    const mintMessage = {
      mint: {
        token_id: token_id,
        owner: account,
        token_uri: token_uri,
        extension: {},
      },
    };

    await executeContract(mintMessage);
  };

  const setListNFT = async (token_id, price, islist) => {
    // alert("halo");
    const listingMessage = {
      set_listing: {
        token_id: token_id,
        price: price,
        islisted: islist,
      },
    };
    await executeContract(listingMessage);
    dispatch(setDashboardMode(2));
  };

  const updateTokenURI = async (token_id, newTokenURI) => {
    const updateMessage = {
      set_metadata: {
        token_id: token_id,
        token_uri: newTokenURI,
      },
    };
    await executeContract(updateMessage);
    dispatch(setDashboardMode(2));
  };

  const getTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const amOrPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    const timeString = hours + ":" + minutes + " " + amOrPm;
    return timeString;
  };

  const bidNFT = async () => {
    const bidMessage = {
      bid: {
        token_id: "1",
        offer: 1500,
      },
    };
    await executeContract(bidMessage);
  };

  const executeContract = async (CONTRACT_MESSAGE) => {
    try {
      const signer = await window[walletEx].getOfflineSigner(chain.chainId);
      const signingClient = await NibiruTxClient.connectWithSigner(
        chain.endptTm,
        signer
      );

      const tx = await signingClient.wasmClient.execute(
        account,
        contractAddr,
        CONTRACT_MESSAGE,
        "auto"
      );

      console.log(tx.transactionHash);
      setUpdateFlag(!updateFlag);
    } catch (error) {
      console.log(error);
    }
  };

  const queryContract = async (CONTRACT_MESSAGE) => {
    const querier = await NibiruQuerier.connect(chain.endptTm);
    const res = await querier.nibiruExtensions.wasm.queryContractSmart(
      contractAddr,
      CONTRACT_MESSAGE
    );
    // console.log(res);
    return res;
  };

  const getAllNFTInfo = async () => {
    const query = {
      all_nft_info: {
        token_id: "1",
      },
    };
    await queryContract(query);
  };

  const countMintedNFTs = async () => {
    const query = {
      num_tokens: {},
    };
    return (await queryContract(query)).count;
  };

  const handleMint = async () => {
    const hash = await pinMetadata(sampleMetadata);
    if (!hash) return;
    console.log("Metadata uploaded..");
    mintNFT(gateWay + hash);
  };

  const getMyNFTs = async () => {
    const message = {
      tokens: {
        owner: account,
      },
    };
    setMyTokens((await queryContract(message)).tokens);
  };

  const getMyNFTsInfo = async (tokens) => {
    const array = [];

    for (let i = 0; i < tokens.length; i++) {
      const messageForItem = {
        all_nft_info: {
          token_id: tokens[i],
        },
      };
      const nftInfo = await queryContract(messageForItem);

      const metaData = await getMetadata(nftInfo.info.token_uri);
      array.push({
        token_id: tokens[i],
        nft_info: nftInfo,
        metaData: metaData,
      });
      // console.log(tokens[i], metaData);
    }

    setAssets(array);
  };

  useEffect(() => {
    getMyNFTs();
  }, [updateFlag]);

  useEffect(() => {
    getMyNFTsInfo(myTokens);
  }, [myTokens]);

  useEffect(() => {
    let countlisted = 0,
      countunverifed = 0;
    for (let i = 0; i < assets.length; i++) {
      if (assets[i].nft_info.auction.islisted) countlisted++;
      if (!assets[i].metaData.images && !assets[i].metaData.offers)
        countunverifed++;
    }
    setTotalListedNFTsCount(countlisted);
    setTotalUnverifiedNFTsCount(countunverifed);
  }, [assets]);

  useEffect(() => {
    if (dashboardMode == 1 && headerMode == 2) {
      if (currentToken) setTenantOverviewFlag(1);
      else setTenantOverviewFlag(0);
    }
    if (dashboardMode == 1 && headerMode == 3) {
      if (currentToken) setMyRentalFlag(1);
      else setMyRentalFlag(0);
    }
  }, [currentToken]);

  const handleUnlist = async () => {
    alert("asdfad");
  };

  const handleUpdateMetadata = async () => {
    let currentURI = currentToken.nft_info.info.token_uri.replace(gateWay, "");
    const imageHashes = await pinFileToIPFS();

    const offers = [
      "Garden View",
      "Kitchen",
      "Dedicated Workspace",
      "Pool",
      "Smoking alarm",
    ];

    const newHash = await updateMetadata(currentURI, [
      {
        key: "images",
        value: imageHashes.toString(),
      },
      {
        key: "offers",
        value: offers.toString(),
      },
    ]);

    await updateTokenURI(currentToken.token_id, gateWay + newHash);
  };

  return (
    <div className="bg-white w-full rounded-[8px] shadow-md flex flex-col sidebarheight overflow-auto">
      {headerMode == 2 ? (
        <>
          {dashboardMode == 0 ? (
            <>
              <div className="p-[20px] h-full flex flex-col">
                <div className="font-bold text-[24px]">Dashboard</div>
                <div className="text-[#8C8C8C]">
                  Welcome to the CodedEstate Dashboard
                </div>
                <div className="my-[40px] flex gap-[16px]">
                  <div>
                    <div className="font-bold">Verify NFTs</div>
                    <div className="rounded-[8px] shadow-md px-[12px] py-[18px] space-y-[20px] w-[260px] flex flex-col items-center">
                      <img src={verifyIcon}></img>
                      <div
                        className="py-[8px] bg-black text-white text-center rounded-[100px] w-full cursor-pointer"
                        onClick={() => dispatch(setDashboardMode(2))}
                      >
                        Verify
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="font-bold">Your Minted NFTs</div>
                    <div className="rounded-[8px] shadow-md w-full max-w-[1200px] h-[184px] flex p-[8px] gap-[16px] overflow-auto hiddenscrollbar">
                      {assets.map((item) => {
                        // if (item.nft_info.auction.islisted)
                        if (item.metaData.images && item.metaData.offers)
                          return (
                            <div className="min-w-[250px]">
                              <CarouselCompo
                                nftInfo={item.nft_info}
                                metaData={item.metaData}
                                onlyImages={true}
                                topRightIcon={verifiedMark}
                                imageHeight={"146px"}
                              />
                            </div>
                          );
                        else
                          return (
                            <div className="min-w-[250px]">
                              <CarouselCompo
                                nftInfo={item.nft_info}
                                metaData={item.metaData}
                                emptyImage={uploadimage}
                                onlyImages={true}
                                topRightIcon={unverifiedMark}
                                imageHeight={"146px"}
                              />
                            </div>
                          );
                      })}

                      {/* <div className="rounded-[8px] m-auto flex flex-col items-center space-y-[20px]">
                        <img src={verifyIcon}></img>
                        <div className="">No NFTs Minted yet</div>
                      </div> */}
                    </div>
                  </div>
                </div>

                <div className="font-bold">Mint Your Real Estate NFT</div>

                <div className="w-full h-full shadow-md rounded-[8px] flex">
                  <div className="m-auto flex flex-col items-center space-y-[40px]">
                    <img src={verifyIcon1}></img>
                    <div
                      className="bg-[#5B1DEE] text-white rounded-[100px] text-center w-[200px] py-[8px] cursor-pointer"
                      onClick={() => {
                        handleMint();
                      }}
                    >
                      Mint
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}

          {dashboardMode == 1 ? (
            !viewDetailFlag ? (
              tenantOverviewFlag ? (
                <>
                  <div className="bg-[#F6F6F6] rounded-[8px] w-full h-full flex gap-[5px]">
                    <div className="w-full rounded-[8px] bg-white p-[16px] flex flex-col h-full">
                      <div className="flex gap-[20px] items-center">
                        <img
                          src={arrowtoLeft}
                          className="w-[20px]"
                          onClick={() =>
                            setTenantOverviewFlag(!tenantOverviewFlag)
                          }
                        />
                        <div className="font-bold text-[24px]">
                          Your Payment Plan
                        </div>
                      </div>
                      <div className="flex items-center m-[20px]">
                        <div className="flex flex-col justify-between items-center">
                          <div>Jan</div>
                          <img src={circleIcon}></img>
                          <div>
                            {currentToken.nft_info.auction.price / 1000}k
                          </div>
                        </div>
                        <div className="bg-[#EFE8FD] h-[4px] w-full" />
                        <div className="flex flex-col justify-between items-center">
                          <div>Feb</div>
                          <img src={circleIcon}></img>
                          <div>
                            {currentToken.nft_info.auction.price / 1000}k
                          </div>
                        </div>
                        <div className="bg-[#EFE8FD] h-[4px] w-full" />
                        <div className="flex flex-col justify-between items-center">
                          <div>Mar</div>
                          <img src={circleIcon}></img>
                          <div>
                            {currentToken.nft_info.auction.price / 1000}k
                          </div>
                        </div>
                        <div className="bg-[#EFE8FD] h-[4px] w-full" />
                        <div className="flex flex-col justify-between items-center">
                          <div>Apr</div>
                          <img src={circleIcon}></img>
                          <div>
                            {currentToken.nft_info.auction.price / 1000}k
                          </div>
                        </div>
                        <div className="bg-[#EFE8FD] h-[4px] w-full" />
                        <div className="flex flex-col justify-between items-center">
                          <div>May</div>
                          <img src={circleIcon}></img>
                          <div>
                            {currentToken.nft_info.auction.price / 1000}k
                          </div>
                        </div>
                        <div className="bg-[#EFE8FD] h-[4px] w-full" />
                        <div className="flex flex-col justify-between items-center">
                          <div>Jun</div>
                          <img src={circleIcon}></img>
                          <div>
                            {currentToken.nft_info.auction.price / 1000}k
                          </div>
                        </div>
                        <div className="bg-[#EFE8FD] h-[4px] w-full" />
                        <div className="flex flex-col justify-between items-center">
                          <div>Jul</div>
                          <img src={circleIcon}></img>
                          <div>
                            {currentToken.nft_info.auction.price / 1000}k
                          </div>
                        </div>
                        <div className="bg-[#EFE8FD] h-[4px] w-full" />
                        <div className="flex flex-col justify-between items-center">
                          <div>Aug</div>
                          <img src={circleIcon}></img>
                          <div>
                            {currentToken.nft_info.auction.price / 1000}k
                          </div>
                        </div>
                        <div className="bg-[#EFE8FD] h-[4px] w-full" />
                        <div className="flex flex-col justify-between items-center">
                          <div>Sep</div>
                          <img src={circleIcon}></img>
                          <div>
                            {currentToken.nft_info.auction.price / 1000}k
                          </div>
                        </div>
                        <div className="bg-[#EFE8FD] h-[4px] w-full" />
                        <div className="flex flex-col justify-between items-center">
                          <div>Oct</div>
                          <img src={circleIcon}></img>
                          <div>
                            {currentToken.nft_info.auction.price / 1000}k
                          </div>
                        </div>
                        <div className="bg-[#EFE8FD] h-[4px] w-full" />
                        <div className="flex flex-col justify-between items-center">
                          <div>Nov</div>
                          <img src={circleIcon}></img>
                          <div>
                            {currentToken.nft_info.auction.price / 1000}k
                          </div>
                        </div>
                        <div className="bg-[#EFE8FD] h-[4px] w-full" />
                        <div className="flex flex-col justify-between items-center">
                          <div>Dec</div>
                          <img src={circleIcon}></img>
                          <div>
                            {currentToken.nft_info.auction.price / 1000}k
                          </div>
                        </div>
                      </div>
                      <div className="h-full w-full flex">
                        <div className="m-auto">
                          <div className=" py-[20px] rounded-[8px] shadow-md w-[500px] flex items-center gap-[14px]">
                            <img src={clockAlarm} />
                            <div>Days rented out</div>
                            <div className="p-[4px] shadow-md text-[#5B1DEE] rounded-[8px]">
                              0
                            </div>
                            <div>days</div>
                          </div>
                          <div className=" py-[20px] rounded-[8px] shadow-md w-[500px] flex items-center gap-[14px]">
                            <img src={clockAlarm} />
                            <div>Days left of rental</div>
                            <div className="p-[4px] shadow-md text-[#5B1DEE] rounded-[8px]">
                              21
                            </div>
                            <div>days</div>
                          </div>
                        </div>
                      </div>
                      <div className="p-[24px] rounded-[16px] shadow-md gap-[40px] flex w-full">
                        <div className="flex flex-col justify-between h-full w-[400px] p-[16px] shadow-md rounded-[16px]">
                          <div className="font-bold">Message Landlord</div>
                          <div className="flex items-center">
                            <img src={profileIcon} />
                            <div>
                              Marit is here to help you if you have any
                              questions
                            </div>
                          </div>
                          <div className="globalInputForm p-[10px]">
                            <textarea
                              placeholder="Write something fun and punchy."
                              className="w-full"
                            />
                          </div>
                          <div className="text-white text-center py-[10px] rounded-[16px] bg-[#5D00CF]">
                            Send Message
                          </div>
                        </div>
                        <div className="w-[350px]">
                          <CarouselCompo
                            nftInfo={currentToken.nft_info}
                            metaData={currentToken.metaData}
                            imageHeight={"150px"}
                            totalPriceHide={true}
                            PriceHide={true}
                            btn={
                              <div
                                className="bg-[#5D00CF] py-[10px] rounded-[16px] text-white text-center mt-[10px] cursor-pointer"
                                onClick={() => setViewDetailFlag(true)}
                              >
                                View Details
                              </div>
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-[400px] rounded-[8px] bg-white p-[16px] space-y-[16px]">
                      <div className="w-full h-[1px] bg-[#E3E3E3]" />
                      <div className="font-bold text-[24px]">
                        Monthly Payment
                      </div>
                      <div className="shadow-md rounded-[16px] p-[12px] flex justify-between items-center">
                        <div className="text-[#B6B6B6]">Monthly Revenue</div>
                        <img src={NUSD} />
                        <div className="p-[4px] rounded-[8px] text-[#5B1DEE] shadow-md">
                          2000
                        </div>
                        <div>NUSD</div>
                      </div>
                      <div className="shadow-md rounded-[16px] p-[12px] flex justify-between items-center">
                        <div className="text-[#B6B6B6]">Rent VAT / month</div>
                        <div className="p-[4px] rounded-[8px] text-[#5B1DEE] shadow-md">
                          November 10th
                        </div>
                      </div>

                      <div className="shadow-md rounded-[16px] p-[12px] space-y-[16px]">
                        <div className="font-bold">Price</div>
                        <div className="flex items-center justify-between">
                          <div className="text-[#B6B6B6]">Rent / month</div>
                          <div className="flex items-center">
                            <img src={NUSD} />
                            <div>2000</div>
                            <div>NUSD</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-[#B6B6B6]">Rent VAT / month</div>
                          <div className="flex items-center">
                            <img src={NUSD} />
                            <div>200</div>
                            <div>NUSD</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>Monthly Sbtotal</div>
                          <div className="flex items-center">
                            <img src={NUSD} />
                            <div className="text-[#5B1DEE]">2000</div>
                            <div>NUSD</div>
                          </div>
                        </div>
                        <div className="w-full h-[1px] bg-[#E3E3E3]" />
                        <div className="flex items-center justify-between">
                          <div className="text-[#B6B6B6]">Fee</div>
                          <div className="flex items-center">
                            <img src={NUSD} />
                            <div>200</div>
                            <div>NUSD</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>Total Payment</div>
                          <div className="flex items-center">
                            <img src={NUSD} />
                            <div className="text-[#5B1DEE]">2000</div>
                            <div>NUSD</div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-center text-white bg-[#5B1DEE] rounded-[16px] py-[10px] gap-[10px]">
                        <img src={hourGlass}></img>
                        <div>Awaiting payment</div>
                      </div>

                      <div className="flex items-center justify-center text-white bg-black rounded-[16px] py-[10px] gap-[10px]">
                        <img src={printout}></img>
                        <div>Print Details</div>
                      </div>

                      <div className="flex items-center justify-center text-white bg-[#5B1DEE] rounded-[16px] py-[10px] gap-[10px]">
                        <img src={checkout}></img>
                        <div>Approve Checkout</div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="p-[20px]">
                    <div className="text-[#8C8C8C]">My Real Estate NFTs</div>
                    <div className="my-[20px] text-[18px] font-bold">
                      Tenant Overview
                    </div>
                  </div>
                  <div className="p-[16px] border-y-[1px] border-[#EDEDED] flex justify-between">
                    <div>
                      <SelectionGroup
                        defaultItem={0}
                        className="p-[6px] shadow-md gap-[8px] rounded-[16px] flex w-max text-[#959595] items-center"
                      >
                        <SelectionItem
                          SelectedItem={
                            <div className="w-[120px] rounded-[10px] flex items-center justify-between gap-[10px] px-[10px] py-[4px] shadow-md font-bold text-black">
                              <div>Upcoming</div>
                              <img src={light}></img>
                            </div>
                          }
                          UnselectedItem={
                            <div
                              className="w-[120px] rounded-[10px] flex items-center justify-between gap-[10px] px-[10px] py-[4px]"
                              // onClick={() => setNFTsFlag(0)}
                            >
                              <div>Upcoming</div>
                            </div>
                          }
                        />
                        <SelectionItem
                          SelectedItem={
                            <div className="w-[120px] rounded-[10px] flex items-center justify-between gap-[10px] px-[10px] py-[4px] shadow-md font-bold text-black">
                              <div>Current</div>
                              <img src={light}></img>
                            </div>
                          }
                          UnselectedItem={
                            <div
                              className="w-[120px] rounded-[10px] flex items-center justify-between gap-[10px] px-[10px] py-[4px]"
                              // onClick={() => setNFTsFlag(1)}
                            >
                              <div>Current</div>
                            </div>
                          }
                        />
                        <SelectionItem
                          SelectedItem={
                            <div className="w-[120px] rounded-[10px] flex items-center justify-between gap-[10px] px-[10px] py-[4px] shadow-md font-bold text-black">
                              <div>Completed</div>
                              <img src={light}></img>
                            </div>
                          }
                          UnselectedItem={
                            <div
                              className="w-[120px] rounded-[10px] flex items-center justify-between gap-[10px] px-[10px] py-[4px]"
                              // onClick={() => setNFTsFlag(2)}
                            >
                              <div>Completed</div>
                            </div>
                          }
                        />
                        <SelectionItem
                          SelectedItem={
                            <div className="w-[120px] rounded-[10px] flex items-center justify-between gap-[10px] px-[10px] py-[4px] shadow-md font-bold text-black">
                              <div>Canceled</div>
                              <img src={light}></img>
                            </div>
                          }
                          UnselectedItem={
                            <div
                              className="w-[120px] rounded-[10px] flex items-center justify-between gap-[10px] px-[10px] py-[4px]"
                              // onClick={() => setNFTsFlag(2)}
                            >
                              <div>Canceled</div>
                            </div>
                          }
                        />
                      </SelectionGroup>
                    </div>

                    <div className="flex items-center gap-[20px]">
                      <div className="flex items-center shadow-md rounded-[4px] px-[12px] py-[6px] gap-[12px]">
                        <img src={search}></img>
                        <input placeholder="Search" className="w-full" />
                        <img src={slash}></img>
                      </div>

                      <div className="items-center flex">
                        <div className="p-[8px] bg-[#F2F2F2]">
                          <img src={windowIcon}></img>
                        </div>
                        <div className="p-[8px]">
                          <img src={list}></img>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-[20px] h-full">
                    <div className="grid grid-cols-4 gap-[20px]">
                      {/* <PropertyItem /> */}

                      {assets.map((item) => {
                        if (item.nft_info.auction.islisted)
                          return (
                            <CarouselCompo
                              nftInfo={item.nft_info}
                              metaData={item.metaData}
                              totalPriceHide={true}
                              imageHeight={"200px"}
                              btn={
                                <div
                                  className="bg-[#5D00CF] py-[10px] rounded-[16px] text-white text-center mt-[10px] cursor-pointer"
                                  onClick={() => {
                                    setCurrentToken(item);
                                  }}
                                >
                                  View Details
                                </div>
                              }
                            />
                          );
                      })}
                    </div>

                    {/* <div className="w-full shadow-md bg-[#F6F6F6] h-full flex flex-col">
                    <div className="m-auto flex flex-col">
                      <img src={empty} className="m-auto"></img>
                      <div>You don´t have any verified NFTs minted yet.</div>
                      <div className="m-auto flex gap-[30px] text-[#6B349A]">
                        <div className="underline">Listing page</div>
                        <div className="underline">Mint</div>
                      </div>
                    </div>
                  </div> */}
                  </div>
                </>
              )
            ) : (
              <>
                {" "}
                <div className="relative w-full h-full">
                  <img
                    src={map}
                    className="w-full h-full absolute top-0 left-0"
                  />
                  <img
                    src={locationPin}
                    className="absolute left-[10%] top-[20%]"
                  />
                  <div className="p-[16px] rounded-[8px] shadow-md w-[400px] absolute bg-white right-0 h-full space-y-[16px]">
                    <img
                      src={arrowtoLeft}
                      onClick={() => setViewDetailFlag(false)}
                    />
                    <div>Your stay</div>
                    <img
                      src={image}
                      className="w-full rounded-[8px] h-[200px]"
                    />
                    <div className="p-[12px] rounded-[8px] shadow-md space-y-[16px]">
                      <div className="h-[120px] flex justify-between">
                        <div className="space-y-[2px]">
                          <div className="text-[18px]">Check-in</div>
                          <div className="text-[#959595]">Mon, Dec 11</div>
                          <div className="text-[#959595]">3:00 PM</div>
                          <div className="text-white bg-[#5D00CF] px-[14px] py-[6px] rounded-[16px] w-max">
                            Instruction
                          </div>
                        </div>
                        <div className="h-full w-[2px] bg-[#E3E3E3]"></div>
                        <div className="flex-col items-end inline-flex space-y-[2px]">
                          <div className="text-[18px]">Check-out</div>
                          <div className="text-[#959595]">Mon, Dec 11</div>
                          <div className="text-[#959595]">3:00 PM</div>
                          <div className="text-white bg-[#5D00CF] px-[14px] py-[6px] rounded-[16px] w-max">
                            Instruction
                          </div>
                        </div>
                      </div>
                      <div className="w-full h-[1px] bg-[#E3E3E3]" />

                      <div className="flex items-start gap-[12px]">
                        <img src={location} />
                        <div>
                          <div>Convenience and security</div>
                          <div className="text-[#959595]">
                            Address: Rasdalsvegen
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-[12px]">
                        <img src={bookLet} />
                        <div>
                          <div>Things to know</div>
                          <div className="text-[#959595]">
                            Intructions and house rules
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-[12px]">
                        <img src={messageschat} />
                        <div>
                          <div>Message your host</div>
                          <div className="text-[#959595]">Marit</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-[12px]">
                        <img src={homehousebig} />
                        <div>
                          <div>Your place</div>
                          <div className="text-[#959595]">
                            Harmonisk norsk hytte i Rasdalen
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )
          ) : (
            <></>
          )}
          {dashboardMode == 2 ? (
            <>
              <div className="p-[20px]">
                <div className="text-[#8C8C8C]">My Real Estate NFTs</div>
                <div className="my-[20px] text-[18px] font-bold">
                  Your Real Estate Status
                </div>
                <div className="grid grid-cols-4 gap-[16px]">
                  <div className="p-[16px] rounded-[8px] shadow-md flex items-center justify-between">
                    <div className="flex items-center gap-[10px]">
                      <img src={listed}></img>
                      <div className="text-[#8C8C8C]">Total NFTs Listed</div>
                    </div>
                    <div className="text-[24px]">{totalListedNFTsCount}</div>
                  </div>
                  <div className="p-[16px] rounded-[8px] shadow-md flex items-center justify-between">
                    <div className="flex items-center gap-[10px]">
                      <img src={unverified}></img>
                      <div className="text-[#8C8C8C]">
                        Total NFTs Unverified
                      </div>
                    </div>
                    <div className="text-[24px]">{totalUnverifedNFTsCount}</div>
                  </div>
                  <div className="p-[16px] rounded-[8px] shadow-md flex items-center justify-between">
                    <div className="flex items-center gap-[10px]">
                      <img src={upcoming}></img>
                      <div className="text-[#8C8C8C]">Upcoming</div>
                    </div>
                    <div className="text-[24px]">100</div>
                  </div>
                  <div className="p-[16px] rounded-[8px] shadow-md flex items-center justify-between">
                    <div className="flex items-center gap-[10px]">
                      <img src={rent}></img>
                      <div className="text-[#8C8C8C]">Recent Active Rent</div>
                    </div>
                    <div className="text-[24px]">6</div>
                  </div>
                </div>
              </div>
              <div className="p-[16px] border-y-[1px] border-[#EDEDED] flex justify-between">
                <div>
                  <SelectionGroup
                    defaultItem={NFTsFlag}
                    className="p-[6px] shadow-md gap-[8px] rounded-[16px] flex w-max text-[#959595] items-center"
                  >
                    <SelectionItem
                      SelectedItem={
                        <div className="w-[160px] rounded-[10px] flex items-center justify-between gap-[10px] px-[10px] py-[4px] shadow-md font-bold text-black">
                          <div>Verified NFTs</div>
                          <img src={light}></img>
                        </div>
                      }
                      UnselectedItem={
                        <div
                          className="w-[160px] rounded-[10px] flex items-center justify-between gap-[10px] px-[10px] py-[4px]"
                          onClick={() => setNFTsFlag(0)}
                        >
                          <div>Verified NFTs</div>
                        </div>
                      }
                    />
                    <SelectionItem
                      SelectedItem={
                        <div className="w-[160px] rounded-[10px] flex items-center justify-between gap-[10px] px-[10px] py-[4px] shadow-md font-bold text-black">
                          <div>Unverified NFTs</div>
                          <img src={light}></img>
                        </div>
                      }
                      UnselectedItem={
                        <div
                          className="w-[160px] rounded-[10px] flex items-center justify-between gap-[10px] px-[10px] py-[4px]"
                          onClick={() => setNFTsFlag(1)}
                        >
                          <div>Unverified NFTs</div>
                        </div>
                      }
                    />
                    <SelectionItem
                      SelectedItem={
                        <div className="w-[160px] rounded-[10px] flex items-center justify-between gap-[10px] px-[10px] py-[4px] shadow-md font-bold text-black">
                          <div>My Listings</div>
                          <img src={light}></img>
                        </div>
                      }
                      UnselectedItem={
                        <div
                          className="w-[160px] rounded-[10px] flex items-center justify-between gap-[10px] px-[10px] py-[4px]"
                          onClick={() => setNFTsFlag(2)}
                        >
                          <div>My Listings</div>
                        </div>
                      }
                    />
                  </SelectionGroup>
                </div>

                <div className="flex items-center gap-[20px]">
                  <div className="flex items-center shadow-md rounded-[4px] px-[12px] py-[6px] gap-[12px]">
                    <img src={search}></img>
                    <input placeholder="Search" className="w-full" />
                    <img src={slash}></img>
                  </div>

                  <div className="items-center flex">
                    <div className="p-[8px] bg-[#F2F2F2]">
                      <img src={windowIcon}></img>
                    </div>
                    <div className="p-[8px]">
                      <img src={list}></img>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-[20px] h-full">
                <div className="grid grid-cols-4 gap-[20px]">
                  {/* <PropertyItem /> */}

                  {assets.map((item) => {
                    if (item.nft_info.auction.islisted && NFTsFlag == 2)
                      return (
                        <CarouselCompo
                          nftInfo={item.nft_info}
                          metaData={item.metaData}
                          totalPriceHide={true}
                          imageHeight={"200px"}
                          btn={
                            <div
                              className="bg-[#5D00CF] py-[10px] rounded-[16px] text-white text-center mt-[10px] cursor-pointer"
                              onClick={() => {
                                setListNFT(item.token_id, 0, false);
                              }}
                            >
                              Unlist
                            </div>
                          }
                        />
                      );
                    if (
                      !item.nft_info.auction.islisted &&
                      item.metaData.images &&
                      item.metaData.offers &&
                      NFTsFlag == 0
                    )
                      return (
                        <CarouselCompo
                          nftInfo={item.nft_info}
                          metaData={item.metaData}
                          totalPriceHide={true}
                          PriceHide={true}
                          emptyImage={uploadimage}
                          imageHeight={"200px"}
                          btn={
                            <div
                              className="bg-[#5D00CF] py-[10px] rounded-[16px] text-white text-center mt-[10px] cursor-pointer"
                              onClick={() => {
                                setCurrentToken(item);
                                setActionMode(true);
                                dispatch(
                                  setNFT({
                                    NftInfo: item.nft_info,
                                    metaData: item.metaData,
                                  })
                                );
                                dispatch(setDashboardMode(3));
                              }}
                            >
                              List
                            </div>
                          }
                        />
                      );
                    if (
                      !item.nft_info.auction.islisted &&
                      !item.metaData.images &&
                      !item.metaData.offers &&
                      NFTsFlag == 1
                    )
                      return (
                        <CarouselCompo
                          nftInfo={item.nft_info}
                          metaData={item.metaData}
                          totalPriceHide={true}
                          PriceHide={true}
                          emptyImage={uploadimage}
                          imageHeight={"200px"}
                          btn={
                            <div
                              className="bg-[#5D00CF] py-[10px] rounded-[16px] text-white text-center mt-[10px] cursor-pointer"
                              onClick={() => {
                                setActionMode(false);
                                dispatch(
                                  setNFT({
                                    NftInfo: item.nft_info,
                                    metaData: item.metaData,
                                  })
                                );
                                setCurrentToken(item);
                                dispatch(setDashboardMode(3));
                              }}
                            >
                              Verify
                            </div>
                          }
                        />
                      );
                  })}
                </div>
                {/* <div className="w-max shadow-md rounded-[10px] p-[10px] h-max">
          <img src={image} className="rounded-[10px] w-full h-[200px]"></img>

          <div className="flex items-center ml-[10px] my-[10px] font-semibold text-[14px] gap-[10px]">
            <img src={NUSD}></img>
            <div>10000 NUSD</div>
          </div>
          <div className="flex items-center text-[#959595] ml-[10px] gap-[10px]">
            <img src={LocationPin}></img>
            <div>Los Angeles, CA</div>
          </div>
          <div className="flex items-center gap-[10px] text-[#959595]">
            <img src={icon}></img>
            <div>350</div>

            <div className="w-[2px] h-[15px] bg-[#D9D9D9]"></div>
            <img src={icon1}></img>
            <div>5</div>
            <div className="w-[2px] h-[15px] bg-[#D9D9D9]"></div>

            <img src={icon2}></img>
            <div>1</div>
          </div>

          <div className="bg-[#5D00CF] px-[16px] py-[10px] rounded-[16px] text-white text-center">
            Verify
          </div>
        </div> */}
                {/* <div className="w-full shadow-md bg-[#F6F6F6] h-full flex flex-col">
          <div className="m-auto flex flex-col">
            <img src={empty} className="m-auto"></img>
            <div>You don´t have any verified NFTs minted yet.</div>
            <div className="m-auto flex gap-[30px] text-[#6B349A]">
              <div className="underline">Listing page</div>
              <div className="underline">Mint</div>
            </div>
          </div>
        </div> */}
              </div>
            </>
          ) : (
            <></>
          )}
          {dashboardMode == 3 ? (
            actionMode ? (
              <div className="w-full bg-[#f6f6f6] p-[16px] space-y-[16px]">
                <PropertyAddress />
                <ImageView />
                <div className="grid grid-cols-2 gap-[16px]">
                  <PropertyDetail />
                  <PropertyListingDetail
                    token_id={currentToken.token_id}
                    setListNFT={setListNFT}
                  />
                </div>
              </div>
            ) : (
              <div className="p-[16px]">
                <div className="w-full flex justify-end">
                  <div
                    className="px-[14px] py-[6px] rounded-[100px] shadow-md cursor-pointer"
                    onClick={() => handleUpdateMetadata()}
                  >
                    Save and exit
                  </div>
                </div>
                <div className="w-full flex flex-col items-center">
                  <div className="text-[24px] font-bold">Summary</div>
                  <div className="text-[#595959]">
                    Help your place stand out to get booked faster and earn your
                    first reviews.
                  </div>
                  <div className="flex items-center mt-[40px]">
                    <img src={circlechecked} />
                    <div className="bg-[#EFE8FD] w-[160px] h-[4px]" />
                    <img src={circlechecked} />
                    <div className="bg-[#EFE8FD] w-[160px] h-[4px]" />
                    <img src={circlechecked} />
                    <div className="bg-[#EFE8FD] w-[160px] h-[4px]" />
                    <img src={circlechecked} />
                  </div>
                  <div className="grid grid-cols-4 justify-items-center gap-[120px]">
                    <div>Describe</div>
                    <div>Highlight</div>
                    <div>Publish</div>
                    <div>Valuation</div>
                  </div>
                  <div className="p-[16px] rounded-[12px] shadow-md w-[600px] h-[400px] space-y-[12px] flex flex-col my-[20px] select-none">
                    <ImageUploading
                      multiple
                      value={images}
                      onChange={onUploadingImagesChange}
                      maxNumber={maxNumber}
                      dataURLKey="data_url"
                      acceptType={["jpg", "png"]}
                    >
                      {({
                        imageList,
                        onImageUpload,
                        onImageRemoveAll,
                        onImageUpdate,
                        onImageRemove,
                        isDragging,
                        dragProps,
                      }) => (
                        // write your building UI
                        // <div className="upload__image-wrapper">
                        //   <button
                        //     style={isDragging ? { color: "red" } : null}
                        //     onClick={onImageUpload}
                        //     {...dragProps}
                        //   >
                        //     Click or Drop here
                        //   </button>
                        //   &nbsp;
                        //   <button onClick={onImageRemoveAll}>
                        //     Remove all images
                        //   </button>
                        //   {imageList.map((image, index) => (
                        //     <div key={index} className="image-item">
                        //       <img src={image.data_url} alt="" width="100" />
                        //       <div className="image-item__btn-wrapper">
                        //         <button onClick={() => onImageUpdate(index)}>
                        //           Update
                        //         </button>
                        //         <button onClick={() => onImageRemove(index)}>
                        //           Remove
                        //         </button>
                        //       </div>
                        //     </div>
                        //   ))}
                        // </div>
                        <div
                          className={
                            isDragging
                              ? "border-[2px] border-dashed rounded-[12px] shadow-md flex w-full h-full bg-[#dddddd]"
                              : "border-[2px] border-dashed rounded-[12px] shadow-md flex w-full h-full"
                          }
                          {...dragProps}
                        >
                          <div className="m-auto flex flex-col items-center space-y-[20px]">
                            {imageList.length ? (
                              <div className="flex gap-[10px] w-full overflow-auto">
                                {imageList.map((im, index) => {
                                  return (
                                    <div className="mx-auto flex flex-col items-center">
                                      <img
                                        src={im.data_url}
                                        className="w-[120px] h-[100px] rounded-[5px]"
                                      />
                                      <img
                                        className="cursor-pointer"
                                        src={deleteIcon}
                                        onClick={() => onImageRemove(index)}
                                      />
                                    </div>
                                  );
                                })}
                              </div>
                            ) : (
                              <img src={uploadimage}></img>
                            )}
                            <div
                              className="text-white px-[16px] py-[9px] rounded-[40px] bg-[#4C37C3] cursor-pointer"
                              style={isDragging ? { color: "red" } : null}
                              onClick={onImageUpload}
                            >
                              Upload file
                            </div>
                            <div className="text-[#595959]">
                              ... or drag and drop files
                            </div>
                          </div>
                        </div>
                      )}
                    </ImageUploading>

                    <div className="w-full flex justify-end">
                      <div className="underline">Edit</div>
                    </div>
                  </div>
                  <div className="w-[600px]">
                    <PropertyDetail />
                  </div>
                </div>
                <div className="w-full flex justify-end">
                  <div className="px-[20px] py-[12px] rounded-[16px] bg-[#5D00CF] text-white shadow-md">
                    Next
                  </div>
                </div>
              </div>
            )
          ) : (
            <></>
          )}
          {dashboardMode == 4 ? <DashboardListing /> : <></>}
          {dashboardMode == 5 ? (
            <div className="bg-[#F6F6F6] rounded-[8px] w-full h-full flex gap-[5px]">
              <div className="w-full rounded-[8px] bg-white flex flex-col h-full relative">
                <div className="absolute flex right-[16px] top-[12px] gap-[12px] bg-white">
                  <div className="border-[1px] border-[#E6E6E6] rounded-[100px] p-[6px] flex items-center gap-[12px]">
                    <div className="rounded-[100px] p-[14px] bg-[#E6E6E6]" />
                    <div>Modern Apartment in Bergen</div>
                    <img src={arrowdown} className="mr-[10px]" />
                  </div>
                  <div className="border-[1px] border-[#E6E6E6] rounded-[100px] px-[16px] py-[6px] flex items-center gap-[12px]">
                    <div>View</div>
                    <img src={arrowdown} />
                  </div>
                </div>
                <MonthsCalendar
                  Periods={[
                    {
                      type: 1,
                      start: {
                        year: 2023,
                        month: 11,
                      },
                      end: {
                        year: 2024,
                        month: 1,
                      },
                    },
                    {
                      type: 0,
                      start: {
                        year: 2024,
                        month: 3,
                      },
                      end: {
                        year: 2024,
                        month: 8,
                      },
                    },
                  ]}
                />
              </div>
              <div className="w-[400px] rounded-[8px] bg-white p-[16px] space-y-[16px] overflow-auto sidebarheight hiddenscrollbar">
                {/* <>
              <SelectionGroup
                className="p-[6px] rounded-[100px] shadow-md flex gap-[8px] h-max"
                defaultItem={0}
              >
                <SelectionItem
                  SelectedItem={
                    <div className="flex justify-between items-center py-[6px] rounded-[100px] shadow-md w-full px-[20px]">
                      <div>Pricing</div>

                      <img src={light}></img>
                    </div>
                  }
                  UnselectedItem={
                    <div className="flex justify-between items-center py-[6px] w-full px-[20px]">
                      <div className="text-[#959595]">Pricing</div>
                    </div>
                  }
                />
                <SelectionItem
                  SelectedItem={
                    <div className="flex justify-between items-center py-[6px] rounded-[100px] shadow-md w-full px-[20px]">
                      <div>Availability</div>
                      <img src={light}></img>
                    </div>
                  }
                  UnselectedItem={
                    <div className="flex justify-between items-center py-[6px] w-full px-[20px]">
                      <div className="text-[#959595]">Availability</div>
                    </div>
                  }
                />
              </SelectionGroup>
              <div className="flex justify-between items-center">
                <div className="text-[24px]">Monthly Pricing</div>
                <div
                  className="underline"
                  onClick={() => setShowPriceEditModal(true)}
                >
                  Edit
                </div>

                <Modal
                  show={showPriceEditModal}
                  centered
                  onHide={() => setShowPriceEditModal(false)}
                >
                  <Modal.Body>
                    <div className="p-[18px] w-[400px]">
                      <div className="w-full flex justify-between items-center">
                        <div className="text-[24px] font-bold">
                          Edit Monthly Price
                        </div>
                        <img src={closeIcon} />
                      </div>
                      <div className="p-[12px] rounded-[8px] border-[1px] border-[#5D00CF] my-[10px]">
                        <div>monthly price</div>
                        <div className="flex items-center font-semibold gap-[10px]">
                          <img src={NUSD} />
                          <div className="text-[24px]">NUSD 500</div>
                        </div>
                      </div>
                      <div className="text-[#959595] my-[10px]">
                        *The price the guest sees could be lower than the
                        minimum nightly price you set if you have discounts or
                        promotions.
                      </div>
                      <div className="bg-[#5D00CF] text-white text-center rounded-[16px] py-[12px]">
                        Done
                      </div>
                    </div>
                  </Modal.Body>
                </Modal>
              </div>
              <div className="p-[12px] rounded-[8px] shadow-md">
                <div>Select monthly price</div>
                <div className="flex items-center gap-[12px]">
                  <img src={NUSD} />
                  <div className="text-[28px]">NUSD 500</div>
                </div>
              </div>
              <div className="bg-[#E3E3E3] w-full h-[1px]" />
              <div className="text-[18px]">Discount</div>
              <div className="text-[#5A5A5A] text-[14px]">
                Adjust your pricing to attract more guests.
              </div>
              <div className="p-[12px] rounded-[8px] shadow-md">
                <div className="text-[18px]">12 Month</div>
                <div className="text-[#959595]">For 7 nights or more</div>
                <div className="flex items-end justify-between">
                  <div className="text-[20px] font-bold">12%</div>
                  <div className="text-[#5A5A5A] text-[14px]">
                    Weekly average is 6,899 NUSD
                  </div>
                </div>
              </div>
              <div className="p-[12px] rounded-[8px] shadow-md">
                <div className="text-[18px]">24 Month</div>
                <div className="text-[#959595]">For 28 nights or more</div>
                <div className="flex items-end justify-between">
                  <div className="text-[20px] font-bold">12%</div>
                  <div className="text-[#5A5A5A] text-[14px]">
                    Monthly average is 25,200 NUSD
                  </div>
                </div>
              </div>
            </> */}

                <RightBar />
              </div>
            </div>
          ) : (
            <></>
          )}

          {dashboardMode == 6 ? (
            <>
              <div className="bg-[#F6F6F6] rounded-[8px] w-full h-full flex gap-[5px]">
                <div className="w-full rounded-[8px] bg-white">
                  <Inbox />
                </div>
                <div className="min-w-[300px] rounded-[8px] bg-white p-[16px] space-y-[16px] overflow-auto sidebarheight hiddenscrollbar"></div>
              </div>
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}

      {headerMode == 5 ? (
        <>
          {dashboardMode == 0 ? (
            <>
              <div className="p-[16px] w-full h-full flex flex-col">
                <div className="bg-[#eeeeee] relative rounded-[8px]">
                  <div className="w-full flex justify-end">
                    <img src={imgBack} className="" />
                  </div>
                  <div className="absolute top-[10%] left-[2%] space-y-[20px] w-[50%]">
                    <div className="text-[28px] font-bold">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </div>
                    <div>
                      Explore the best of the best in real estate with our
                      recommended properties.
                    </div>
                    <div className="bg-[#5D00CF] text-white px-[14px] py-[8px] w-max rounded-[16px]">
                      Explore
                    </div>
                  </div>
                </div>

                <div className="flex w-full justify-between my-[10px]">
                  <div>Recommended properties</div>
                  <div className="flex items-center py-[4px] px-[12px] rounded-[100px] shadow-md">
                    <div className="text-[#4C37C3]">See all</div>
                    <img src={colorarrow} className="" />
                  </div>
                </div>

                <div className="flex gap-[20px]">
                  <div className="p-[8px] rounded-[16px] shadow-md">
                    <img className="rounded-[16px] w-[200px]" src={imageCard} />
                  </div>
                  <div className="p-[8px] rounded-[16px] shadow-md">
                    <img className="rounded-[16px] w-[200px]" src={imageCard} />
                  </div>
                </div>

                <div className="flex w-full justify-between my-[10px]">
                  <div>Wishlist</div>
                  <div className="flex items-center py-[4px] px-[12px] rounded-[100px] shadow-md">
                    <div className="text-[#4C37C3]">See all</div>
                    <img src={colorarrow} className="" />
                  </div>
                </div>

                <div className="flex gap-[20px]">
                  <div className="p-[8px] rounded-[16px] shadow-md relative">
                    <img className="rounded-[16px] w-[200px]" src={imageCard} />
                    <div className="absolute top-[20px] right-[20px] z-[10]">
                      <img src={heart}></img>
                    </div>
                  </div>
                  <div className="p-[8px] rounded-[16px] shadow-md">
                    <img className="rounded-[16px] w-[200px]" src={imageCard} />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}

          {dashboardMode == 1 ? (
            <>
              <div className="relative w-full h-full">
                <img
                  src={map}
                  className="w-full h-full absolute top-0 left-0"
                />
                <img
                  src={locationPin}
                  className="absolute left-[10%] top-[20%]"
                />
                <div className="p-[16px] rounded-[8px] shadow-md w-[400px] absolute bg-white right-0 h-full space-y-[16px]">
                  <img src={arrowtoLeft} />
                  <div>Your stay</div>
                  <img src={image} className="w-full rounded-[8px] h-[200px]" />
                  <div className="p-[12px] rounded-[8px] shadow-md space-y-[16px]">
                    <div className="h-[120px] flex justify-between">
                      <div className="space-y-[2px]">
                        <div className="text-[18px]">Check-in</div>
                        <div className="text-[#959595]">Mon, Dec 11</div>
                        <div className="text-[#959595]">3:00 PM</div>
                        <div className="text-white bg-[#5D00CF] px-[14px] py-[6px] rounded-[16px] w-max">
                          Instruction
                        </div>
                      </div>
                      <div className="h-full w-[2px] bg-[#E3E3E3]"></div>
                      <div className="flex-col items-end inline-flex space-y-[2px]">
                        <div className="text-[18px]">Check-out</div>
                        <div className="text-[#959595]">Mon, Dec 11</div>
                        <div className="text-[#959595]">3:00 PM</div>
                        <div className="text-white bg-[#5D00CF] px-[14px] py-[6px] rounded-[16px] w-max">
                          Instruction
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-[1px] bg-[#E3E3E3]" />

                    <div className="flex items-start gap-[12px]">
                      <img src={location} />
                      <div>
                        <div>Convenience and security</div>
                        <div className="text-[#959595]">
                          Address: Rasdalsvegen
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-[12px]">
                      <img src={bookLet} />
                      <div>
                        <div>Things to know</div>
                        <div className="text-[#959595]">
                          Intructions and house rules
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-[12px]">
                      <img src={messageschat} />
                      <div>
                        <div>Message your host</div>
                        <div className="text-[#959595]">Marit</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-[12px]">
                      <img src={homehousebig} />
                      <div>
                        <div>Your place</div>
                        <div className="text-[#959595]">
                          Harmonisk norsk hytte i Rasdalen
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}

      {headerMode == 3 ? (
        <>
          {dashboardMode == 0 ? (
            <>
              <div className="p-[16px] w-full h-full flex flex-col">
                <div className="bg-[#eeeeee] relative rounded-[8px]">
                  <div className="w-full flex justify-end">
                    <img src={imgBack} className="" />
                  </div>
                  <div className="absolute top-[10%] left-[2%] space-y-[20px] w-[50%]">
                    <div className="text-[28px] font-bold">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </div>
                    <div>
                      Explore the best of the best in real estate with our
                      recommended properties.
                    </div>
                    <div className="bg-[#5D00CF] text-white px-[14px] py-[8px] w-max rounded-[16px]">
                      Explore
                    </div>
                  </div>
                </div>

                <div className="flex w-full justify-between my-[10px]">
                  <div>Recommended properties</div>
                  <div className="flex items-center py-[4px] px-[12px] rounded-[100px] shadow-md">
                    <div className="text-[#4C37C3]">See all</div>
                    <img src={colorarrow} className="" />
                  </div>
                </div>

                <div className="flex gap-[20px]">
                  {assets.map((item) => {
                    return (
                      <div className="w-[250px]">
                        <CarouselCompo
                          nftInfo={item.nft_info}
                          metaData={item.metaData}
                          onlyImages={true}
                          imageHeight={"150px"}
                        />
                      </div>
                    );
                  })}
                </div>

                <div className="flex w-full justify-between my-[10px]">
                  <div>Wishlist</div>
                  <div className="flex items-center py-[4px] px-[12px] rounded-[100px] shadow-md">
                    <div className="text-[#4C37C3]">See all</div>
                    <img src={colorarrow} className="" />
                  </div>
                </div>

                <div className="flex gap-[20px]">
                  {assets.map((item) => {
                    return (
                      <div className="w-[250px]">
                        <CarouselCompo
                          nftInfo={item.nft_info}
                          metaData={item.metaData}
                          onlyImages={true}
                          imageHeight={"150px"}
                          topRightIcon={heart}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
          {dashboardMode == 1 ? (
            !myRentalFlag ? (
              <div className="w-full p-[16px]">
                <div className="font-bold text-[18px]">Rental Overview</div>
                <div className="flex justify-between my-[24px]">
                  <div>
                    <SelectionGroup
                      defaultItem={rentingAssetsFlag}
                      className="p-[6px] shadow-md gap-[8px] rounded-[16px] flex w-max text-[#959595] items-center"
                    >
                      <SelectionItem
                        SelectedItem={
                          <div className="w-[120px] rounded-[10px] flex items-center justify-between gap-[10px] px-[10px] py-[4px] shadow-md font-bold text-black">
                            <div>Upcoming</div>
                            <img src={light}></img>
                          </div>
                        }
                        UnselectedItem={
                          <div
                            className="w-[120px] rounded-[10px] flex items-center justify-between gap-[10px] px-[10px] py-[4px]"
                            onClick={() => setRentingAssetsFlag(0)}
                          >
                            <div>Upcoming</div>
                          </div>
                        }
                      />
                      <SelectionItem
                        SelectedItem={
                          <div className="w-[120px] rounded-[10px] flex items-center justify-between gap-[10px] px-[10px] py-[4px] shadow-md font-bold text-black">
                            <div>Current</div>
                            <img src={light}></img>
                          </div>
                        }
                        UnselectedItem={
                          <div
                            className="w-[120px] rounded-[10px] flex items-center justify-between gap-[10px] px-[10px] py-[4px]"
                            onClick={() => setRentingAssetsFlag(1)}
                          >
                            <div>Current</div>
                          </div>
                        }
                      />
                      <SelectionItem
                        SelectedItem={
                          <div className="w-[120px] rounded-[10px] flex items-center justify-between gap-[10px] px-[10px] py-[4px] shadow-md font-bold text-black">
                            <div>Ended</div>
                            <img src={light}></img>
                          </div>
                        }
                        UnselectedItem={
                          <div
                            className="w-[120px] rounded-[10px] flex items-center justify-between gap-[10px] px-[10px] py-[4px]"
                            onClick={() => setRentingAssetsFlag(2)}
                          >
                            <div>Ended</div>
                          </div>
                        }
                      />
                      <SelectionItem
                        SelectedItem={
                          <div className="w-[120px] rounded-[10px] flex items-center justify-between gap-[10px] px-[10px] py-[4px] shadow-md font-bold text-black">
                            <div>All</div>
                            <img src={light}></img>
                          </div>
                        }
                        UnselectedItem={
                          <div
                            className="w-[120px] rounded-[10px] flex items-center justify-between gap-[10px] px-[10px] py-[4px]"
                            onClick={() => setRentingAssetsFlag(3)}
                          >
                            <div>All</div>
                          </div>
                        }
                      />
                    </SelectionGroup>
                  </div>

                  <div className="flex items-center gap-[20px]">
                    <div className="flex items-center shadow-md rounded-[4px] px-[12px] py-[6px] gap-[12px]">
                      <img src={search}></img>
                      <input placeholder="Search" className="w-full" />
                      <img src={slash}></img>
                    </div>

                    <div className="items-center flex">
                      <div className="p-[8px] bg-[#F2F2F2]">
                        <img src={windowIcon}></img>
                      </div>
                      <div className="p-[8px]">
                        <img src={list}></img>
                      </div>
                    </div>
                  </div>
                </div>
                {rentingAssetsFlag == 1 || rentingAssetsFlag == 3 ? (
                  <div className="w-full flex gap-[16px]">
                    {rentingAssets.map((item) => {
                      if (item.nft_info.auction.islisted)
                        return (
                          <div className="w-[400px]">
                            <CarouselCompo
                              nftInfo={item.nft_info}
                              metaData={item.metaData}
                              totalPriceHide={true}
                              imageHeight={"200px"}
                              btn={
                                <div
                                  className="bg-[#5D00CF] py-[10px] rounded-[16px] text-white text-center mt-[10px] cursor-pointer"
                                  onClick={() => {
                                    setCurrentToken(item);
                                    // setMyRentalFlag(!myRentalFlag);
                                  }}
                                >
                                  View Details
                                </div>
                              }
                            />
                          </div>
                        );
                    })}
                  </div>
                ) : (
                  <></>
                )}
              </div>
            ) : (
              <div className="bg-[#F6F6F6] rounded-[8px] w-full h-full flex gap-[5px]">
                <div className="w-full rounded-[8px] bg-white p-[16px] flex flex-col h-full">
                  <div className="flex gap-[20px] items-center">
                    <img
                      src={arrowtoLeft}
                      className="w-[20px]"
                      onClick={() => setMyRentalFlag(!myRentalFlag)}
                    />
                    <div className="font-bold text-[24px]">
                      Your Payment Plan
                    </div>
                  </div>

                  <div className="w-full mt-[10px]">
                    <div className="flex justify-between w-full">
                      <div>Jan</div>
                      <div>Feb</div>
                      <div>Mar</div>
                      <div>Apr</div>
                      <div>May</div>
                      <div>Jun</div>
                      <div>Jul</div>
                      <div>Aug</div>
                      <div>Sep</div>
                      <div>Oct</div>
                      <div>Nov</div>
                      <div>Dec</div>
                    </div>
                    <div className="flex items-center my-[15px]">
                      <img src={circleIcon} />
                      <div className="bg-[#EFE8FD] h-[4px] w-full" />
                      <img src={circleIcon} />
                      <div className="bg-[#EFE8FD] h-[4px] w-full" />
                      <img src={circleIcon} />
                      <div className="bg-[#EFE8FD] h-[4px] w-full" />
                      <img src={circleIcon} />
                      <div className="bg-[#EFE8FD] h-[4px] w-full" />
                      <img src={circleIcon} />
                      <div className="bg-[#EFE8FD] h-[4px] w-full" />
                      <img src={circleIcon} />
                      <div className="bg-[#EFE8FD] h-[4px] w-full" />
                      <img src={circleIcon} />
                      <div className="bg-[#EFE8FD] h-[4px] w-full" />
                      <img src={circleIcon} />
                      <div className="bg-[#EFE8FD] h-[4px] w-full" />
                      <img src={circleIcon} />
                      <div className="bg-[#EFE8FD] h-[4px] w-full" />
                      <img src={circleIcon} />
                      <div className="bg-[#EFE8FD] h-[4px] w-full" />
                      <img src={circleIcon} />
                      <div className="bg-[#EFE8FD] h-[4px] w-full" />
                      <img src={circleIcon} />
                    </div>
                    <div className="flex justify-between w-full">
                      <div>{currentToken.nft_info.auction.price / 1000}k</div>
                      <div>{currentToken.nft_info.auction.price / 1000}k</div>
                      <div>{currentToken.nft_info.auction.price / 1000}k</div>
                      <div>{currentToken.nft_info.auction.price / 1000}k</div>
                      <div>{currentToken.nft_info.auction.price / 1000}k</div>
                      <div>{currentToken.nft_info.auction.price / 1000}k</div>
                      <div>{currentToken.nft_info.auction.price / 1000}k</div>
                      <div>{currentToken.nft_info.auction.price / 1000}k</div>
                      <div>{currentToken.nft_info.auction.price / 1000}k</div>
                      <div>{currentToken.nft_info.auction.price / 1000}k</div>
                      <div>{currentToken.nft_info.auction.price / 1000}k</div>
                      <div>{currentToken.nft_info.auction.price / 1000}k</div>
                    </div>
                  </div>

                  <div className="h-full w-full flex">
                    <div className="m-auto">
                      <div className=" py-[20px] rounded-[8px] shadow-md w-[500px] flex items-center gap-[14px]">
                        <img src={clockAlarm} />
                        <div>Days rented</div>
                        <div className="p-[4px] shadow-md text-[#5B1DEE] rounded-[8px] text-[24px]">
                          0
                        </div>
                        <div>days</div>
                      </div>
                      <div className=" py-[20px] rounded-[8px] shadow-md w-[500px] flex items-center gap-[14px]">
                        <img src={clockSand} />
                        <div>Days left of rental</div>
                        <div className="p-[4px] shadow-md text-[#5B1DEE] rounded-[8px] text-[24px]">
                          21
                        </div>
                        <div>days</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-[24px] rounded-[16px] shadow-md gap-[16px] flex w-full">
                    <div className="flex flex-col justify-between h-full w-[400px] p-[16px] shadow-md rounded-[16px]">
                      <div className="font-bold">Message Landlord</div>
                      <div className="flex items-center">
                        <img src={profileIcon} />
                        <div>
                          Marit is here to help you if you have any questions
                        </div>
                      </div>
                      <div className="globalInputForm p-[10px] h-[100px]">
                        <textarea
                          placeholder="Write something fun and punchy."
                          className="w-full h-full"
                        />
                      </div>
                      <div className="text-white text-center py-[10px] rounded-[16px] bg-[#5D00CF]">
                        Send Message
                      </div>
                    </div>
                    <div className="w-[350px]">
                      <CarouselCompo
                        nftInfo={currentToken.nft_info}
                        metaData={currentToken.metaData}
                        imageHeight={"150px"}
                        totalPriceHide={true}
                        PriceHide={true}
                        btn={
                          <div className="bg-[#5D00CF] py-[10px] rounded-[16px] text-white text-center mt-[10px] cursor-pointer">
                            View Details
                          </div>
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[400px] rounded-[8px] bg-white p-[16px]">
                  <div className="space-y-[16px]">
                    <div className="w-full h-[1px] bg-[#E3E3E3]" />
                    <div className="font-bold text-[24px]">Payment Details</div>
                    <div className="shadow-md rounded-[16px] p-[12px] flex justify-between items-center">
                      <div className="text-[#B6B6B6]">Monthly Revenue</div>
                      <img src={NUSD} />
                      <div className="p-[4px] rounded-[8px] text-[#5B1DEE] shadow-md">
                        2000
                      </div>
                      <div>NUSD</div>
                    </div>
                    <div className="shadow-md rounded-[16px] p-[12px] flex justify-between items-center">
                      <div className="text-[#B6B6B6]">Rent VAT / month</div>
                      <div className="p-[4px] rounded-[8px] text-[#5B1DEE] shadow-md">
                        November 10th
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center text-white bg-[#5B1DEE] rounded-[16px] py-[10px] gap-[10px] mt-[50px]">
                    <img src={documentchart}></img>
                    <div>Claim Deposit</div>
                  </div>
                </div>
              </div>
            )
          ) : (
            <></>
          )}
          {dashboardMode == 2 ? (
            <>
              {transactionFlow == 0 ? (
                <div className="w-full p-[16px]">
                  <div className="text-[20px]">Transactions</div>
                  <div className="flex items-center justify-between">
                    <div className="text-[#959595]">
                      Get an overview of your Coded Estate transactions
                    </div>
                    <div className="flex items-center px-[12px] py-[4px] rounded-[100px] shadow-md w-max gap-[4px]">
                      <img src={folderFilter} />
                      <div className="text-[#4C37C3]">Filter</div>
                    </div>
                  </div>
                  <table className="w-full">
                    <tr className="text-[#959595]">
                      <td>Property</td>
                      <td>Type</td>
                      <td>Price (NUSD) </td>
                      <td>From</td>
                      <td>To</td>
                      <td>Date</td>
                      <td>Status</td>
                      <td>Action</td>
                    </tr>
                    <tr>
                      <td colSpan={8} className="w-full bg-[#E3E3E3] h-[1px]" />
                    </tr>
                    <tr className="rounded-[8px] shadow-md p-[8px]">
                      <td>
                        <div className="flex items-center gap-[8px] px-[8px]">
                          <div className="w-[60px] py-[10px]">
                            <ImageView counts={1} />
                          </div>
                          <div>{metaData["Building Name"].buildingNameEn}</div>
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center gap-[4px]">
                          <div className="p-[4px] rounded-[4px] shadow-md">
                            <img src={arrangefiltersort} />
                          </div>
                          <div>
                            <div className="text-[#4C37C3]">Rent</div>
                            <div className="text-[#959595]">
                              {getTime(new Date())}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{amountToPay} NUSD</td>
                      <td>
                        {account?.substring(0, 5) +
                          "..." +
                          account?.substring(account?.length - 4)}
                      </td>
                      <td>
                        {nftInfo.access.owner?.substring(0, 5) +
                          "..." +
                          nftInfo.access.owner?.substring(
                            nftInfo.access.owner?.length - 4
                          )}
                      </td>
                      <td>
                        {new Date().getMonth().toString() +
                          "/" +
                          new Date().getDate().toString() +
                          "/" +
                          new Date().getFullYear().toString()}
                      </td>
                      <td className="text-[#F8BC30]">PENDING</td>
                      <td>
                        <div className="flex items-center gap-[8px]">
                          <div className="px-[14px] py-[8px] rounded-[16px] shadow-md text-[#ff0000] w-max cursor-pointer">
                            Cancel
                          </div>
                          <div
                            className="px-[14px] py-[8px] bg-[#5D00CF] rounded-[16px] text-white w-max cursor-pointer"
                            onClick={() => {
                              setRentingAssets([
                                ...rentingAssets,
                                { nft_info: nftInfo, metaData: metaData },
                              ]);
                              setTransactionFlow(1);
                            }}
                          >
                            Complete
                          </div>
                        </div>
                      </td>
                    </tr>
                  </table>
                </div>
              ) : (
                <></>
              )}
              {transactionFlow == 1 ? (
                <>
                  <div className="flex items-center mx-auto mt-[80px] mb-[10px]">
                    <img src={circleunchecked} />
                  </div>
                  <div className="flex items-center mx-auto mb-[10px]">
                    <div className="justify-self-center">Ejari</div>
                  </div>
                  <div className="mx-auto flex flex-col items-center mt-[200px]">
                    <div className="text-[24px] font-bold">
                      No-Objection Certificate
                    </div>
                    {/* <div>No-Objection Certificate</div> */}
                    <div
                      className="text-white bg-[#5D00CF] rounded-[8px] px-[20px] py-[8px] mt-[50px]"
                      onClick={() => {
                        setTransactionFlow(2);
                      }}
                    >
                      Submit
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}
              {transactionFlow == 2 ? (
                <>
                  <div className="flex items-center mx-auto mt-[80px] mb-[10px]">
                    <img src={circleunchecked} />
                  </div>
                  <div className="flex items-center mx-auto mb-[10px]">
                    <div className="justify-self-center">Ejari</div>
                  </div>
                  <div className="mx-auto flex flex-col items-center mt-[200px]">
                    <div className="text-[24px] font-bold">
                      Waiting For The Other Party To Complete
                    </div>
                    {/* <div>No-Objection Certificate</div> */}
                    <div
                      className="text-white bg-[#5D00CF] rounded-[16px] px-[20px] py-[8px] mt-[50px]"
                      onClick={() => {
                        setTransactionFlow(3);
                      }}
                    >
                      Direct Message
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}
              {transactionFlow == 3 ? (
                <>
                  <div className="flex items-center mx-auto mt-[80px] mb-[10px]">
                    <img src={circleunchecked} />
                  </div>
                  <div className="flex items-center mx-auto mb-[10px]">
                    <div className="justify-self-center">Ejari</div>
                  </div>
                  <div className="mx-auto flex flex-col items-center mt-[20px] relative">
                    <div className="absolute h-[400px]">
                      <img src={festivalback} className="h-full" />
                    </div>
                    <ImageView counts={3} />
                    <div className="text-[24px] font-bold mt-[40px]">
                      Rental Period Initiatied
                    </div>
                    {/* <div>No-Objection Certificate</div> */}
                    <div className="flex gap-[16px]">
                      <div className="text-white bg-black rounded-[16px] px-[20px] py-[8px] mt-[50px]">
                        View Transaction
                      </div>
                      <div className="text-white bg-[#5D00CF] rounded-[16px] px-[20px] py-[8px] mt-[50px]">
                        My Dashboard
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}
            </>
          ) : (
            // <div className="w-full p-[16px] flex flex-col">

            //   <div className="flex items-center mx-auto mt-[80px] mb-[10px]">
            //     <img src={circlechecked} />
            //     <div className="bg-[#5D00CF] w-[150px] h-[6px]" />
            //     <img src={circlechecked} />
            //     <div className="bg-[#5D00CF] w-[150px] h-[6px]" />
            //     <img src={circlechecked} />
            //     <div className="bg-[#5D00CF] w-[150px] h-[6px]" />
            //     <img src={circlechecked} />
            //   </div>

            // </div>
            <></>
          )}
          {dashboardMode == 5 ? (
            <>
              <div className="bg-[#F6F6F6] rounded-[8px] w-full h-full flex gap-[5px]">
                <div className="w-full rounded-[8px] bg-white">
                  <Inbox />
                </div>
                <div className="min-w-[300px] rounded-[8px] bg-white p-[16px] space-y-[16px] overflow-auto sidebarheight hiddenscrollbar"></div>
              </div>
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}

      {headerMode == 6 ? (
        <>
          {dashboardMode == 1 ? (
            <>
              <div className="p-[16px] w-full space-y-[16px]">
                <div>Wallet</div>
                <div className="grid grid-cols-2 w-full gap-[16px]">
                  <div className="p-[16px] rounded-[8px] shadow-md w-full space-y-[16px]">
                    <div className="flex items-center gap-[10px]">
                      <img src={walletIcon} />
                      <div className="text-[#959595]">Cash balance</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-[24px] text-[#959595]">NUSD 0</div>
                      <div className="flex gap-[8px]">
                        <div className="bg-black rounded-[16px] px-[14px] py-[8px] text-white">
                          Deposit
                        </div>
                        <div className="border-[#5D00CF] border-[1px] rounded-[16px] px-[14px] py-[8px] text-[#5D00CF]">
                          Withdraw
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-[16px] rounded-[8px] shadow-md w-full space-y-[16px]">
                    <div className="flex items-center gap-[10px]">
                      <img src={medalIcon} />
                      <div className="text-[#959595]">Rewards balance</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-[24px] text-[#959595]">NUSD 0</div>
                      <img src={starfavorite} />
                    </div>
                  </div>
                </div>
                <div className="p-[16px] rounded-[8px] shadow-md w-full space-y-[16px]">
                  <div>Transaction</div>
                  <div className="grid justify-items-start text-[#959595] grid-cols-5 border-b-[1px] border-[#E3E3E3] pb-[4px]">
                    <div>Type</div>
                    <div>Status</div>
                    <div>Date</div>
                    <div>Wallet</div>
                    <div>Amount</div>
                  </div>
                  <div className="w-full flex">
                    <div className="mx-auto flex flex-col items-center my-[30px]">
                      <img src={bankNote} />
                      <div className="text-[#959595]">No transaction yet</div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 w-full gap-[16px]">
                  <div className="p-[16px] rounded-[8px] shadow-md w-full flex items-center justify-between">
                    <div className="flex items-center">
                      <img src={binaryIcon} />
                      <div>
                        Add a card to enjoy instant deposits from anywhere in
                        the world
                      </div>
                    </div>

                    <div className="border-[#5D00CF] border-[1px] rounded-[16px] px-[14px] py-[8px] text-[#5D00CF]">
                      Deposit
                    </div>
                  </div>
                  <div className="p-[16px] rounded-[8px] shadow-md w-full flex items-center justify-between">
                    <div className="flex items-center">
                      <img src={bankIcon} />
                      <div>
                        Add a bank account to deposits from anywhere in the
                        world
                      </div>
                    </div>
                    <div className="border-[#5D00CF] border-[1px] rounded-[16px] px-[14px] py-[8px] text-[#5D00CF]">
                      Deposit
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
