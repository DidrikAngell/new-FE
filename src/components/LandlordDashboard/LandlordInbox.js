import { useSelector } from "react-redux";
import { CarouselCompo } from "../CarouselCompo";
import { Inbox } from "../Inbox";

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
              <div className="shadow-md">
                <CarouselCompo
                  metaData={currentNFT?.metaData}
                  onlyImages={true}
                />
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
