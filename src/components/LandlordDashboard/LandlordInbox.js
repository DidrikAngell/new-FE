import { useSelector } from "react-redux";
import { CarouselCompo } from "../CarouselCompo";
import { Inbox } from "../Inbox";
import NUSD from "../../assets/images/NUSD.png";

export const LandlordInbox = () => {
  const currentNFT = useSelector((state) => state.nft.currentNFT);

  return (
    <>
      <div className="bg-[#F6F6F6] rounded-[8px] w-full h-full flex gap-[5px]">
        <div className="w-full rounded-[8px] bg-white">
          <Inbox />
        </div>
        <div className="min-w-[300px] rounded-[8px] bg-white p-[16px] space-y-[16px] overflow-auto sidebarheight hiddenscrollbar">
          {currentNFT ? (
            <>
              <div className="text-[20px]">Rental Details</div>
              <div className="shadow-md space-y-[6px] p-[8px]">
                <CarouselCompo
                  metaData={currentNFT?.metaData}
                  onlyImages={true}
                />

                <div className="text-[#B6B6B6]">Rental</div>
                <div>
                  You have an offer from
                  {" " +
                    currentNFT.longtermrentalInfo?.tenant_address?.substring(
                      0,
                      5
                    ) +
                    "..." +
                    currentNFT.longtermrentalInfo?.tenant_address?.substring(
                      currentNFT.longtermrentalInfo?.tenant_address?.length - 4
                    )}
                </div>
                <div className="text-[#B6B6B6]">
                  {currentNFT.metaData["Building Name"].buildingNameEn}
                </div>
                <div className="text-[#B6B6B6]">
                  {currentNFT.longtermrentalInfo?.tenant?.renting_period[0] +
                    "~" +
                    currentNFT.longtermrentalInfo?.tenant?.renting_period[1]}
                </div>
                <div className="flex gap-[8px] items-center">
                  <img src={NUSD} />
                  <div>
                    {currentNFT.longtermrentalInfo?.landlord.price_per_month}
                  </div>
                  <div>NUSD</div>
                </div>
                <div className="flex w-full justify-around">
                  <div className="text-white px-[20px] py-[8px] bg-[#5D00CF] rounded-[16px] cursor-pointer">
                    Approve
                  </div>
                  <div className="text-white px-[20px] py-[8px] bg-[#202020] rounded-[16px] cursor-pointer">
                    Decline
                  </div>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};
