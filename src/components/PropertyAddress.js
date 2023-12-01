import arrow from "../assets/images/PropertyAddress/Group.png";
import locationPin from "../assets/images/PropertyAddress/Pin, Location.png";
import send from "../assets/images/PropertyAddress/Send message, Send, Share.png";
import heart from "../assets/images/PropertyAddress/heart-round-circle.png";
import user from "../assets/images/PropertyAddress/User,Profile.png";

import { useSelector } from "react-redux";

export const PropertyAddress = () => {
  const mode = useSelector((state) => state.header.mode);
  const submode = useSelector((state) => state.header.submode);

  return (
    <div className="shadow-md w-full h-max p-[20px] rounded-[10px] space-y-[20px] bg-white">
      <div className="flex items-center gap-[10px]">
        {/* <div className="text-[#A4A4A4]">Buy</div> */}
        {/* {mode == 1 ? <div className="text-[#A4A4A4]">Rent</div> : <></>} */}
        {mode == 3 && submode == 2 ? (
          <div className="text-[#A4A4A4]">My Listings</div>
        ) : (
          <></>
        )}
        <img src={arrow}></img>
        <div className="bg-[#202020] text-white rounded-[20px] px-[20px] py-[10px] ">
          Los Angeles, CA
        </div>
      </div>

      <div className="flex justify-between">
        <div className="space-y-[10px]">
          <div className=" text-[20px]">Lorem ipsum dolor sit</div>
          <div className="flex items-center">
            <img src={locationPin}></img>
            <div className="text-[#A4A4A4] ">Los Angeles, CA</div>
          </div>
        </div>
        <div className="flex items-end">
          <div className="flex gap-[20px] ">
            <div className="flex items-center shadow-md py-[4px] px-[8px] rounded-[400px] gap-[10px]">
              <img src={send}></img>
              <div>Share</div>
            </div>
            <div className="flex items-center shadow-md py-[4px] px-[8px] rounded-[400px] gap-[10px]">
              <img src={heart}></img>
              <div>Save</div>
            </div>
            {mode == 3 && submode == 2 ? (
              <></>
            ) : (
              <div className="flex items-center shadow-md py-[4px] px-[8px] rounded-[400px] bg-[#5B1DEE] text-white gap-[10px]">
                <img src={user}></img>
                <div>View Profile</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
