import imgBack from "../../assets/images/dashboard/luke-van-zyl-koH7IVuwRLw-unsplash 1.png";
import colorarrow from "../../assets/images/Arrow.png";
import heart from "../../assets/images/dashboard/Frame 1000005004.png";
import { CarouselCompo } from "../CarouselCompo";
import { getAllNFTsInfo } from "../NFTs";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const TenantDashboard = () => {
  //   const [assets, setAssets] = useState([]);
  const account = useSelector((state) => state.auth.account);
  const assets = useSelector((state) => state.nft.allNFTs);

  //   const getAllAssets = async () => {
  //     const result = await getAllNFTsInfo();
  //     setAssets(result);
  //   };

  //   useEffect(() => {
  //     getAllAssets();
  //   }, []);

  return (
    <>
      <div className="p-[16px] w-full h-full flex flex-col">
        <div className="bg-[#eeeeee] relative rounded-[8px]">
          <div className="w-full flex justify-end">
            <img src={imgBack} className="" />
          </div>
          <div className="absolute top-[10%] left-[2%] space-y-[20px] w-[50%]">
            <div className="text-[28px] font-bold">
              Explore homes on-chain, and find your dream stay today
            </div>
            <div>
              Explore the best of the best in real estate with our recommended
              properties.
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
            if (
              item.nft_info.access.owner != account &&
              item.longtermrental_info.tenant_address != account
            )
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
            if (
              item.nft_info.access.owner != account &&
              item.longtermrental_info.tenant_address != account
            )
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
  );
};
