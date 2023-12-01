import { useState } from "react";
import NUSD from "../assets/images/NUSD.png";
import arrowdown from "../assets/images/arrowdown (2).png";
import { Toggle } from "./Toggle";

export const PropertyListingDetail = () => {
  const [status, setStatus] = useState(false);
  return (
    <div className="p-[24px] rounded-[12px] shadow-md w-full bg-white h-max space-y-[24px]">
      <div className="font-bold text-[18px]">Property Listing Details</div>
      <div className="p-[16px] rounded-[8px] shadow-md w-full space-y-[10px]">
        <div className="font-bold text-[18px]">Currency</div>
        <div className="px-[24px] py-[14px] rounded-[100px] shadow-md flex items-center justify-between">
          <div className="flex items-center">
            <img src={NUSD}></img>
            <div>NUSD</div>
          </div>
          <img src={arrowdown}></img>
        </div>
        <div className="font-bold text-[18px]">Price per month</div>
        <div className="globalInputForm px-[20px] py-[10px] rounded-[16px]">
          <input className="w-full" placeholder="125,000,000" />
        </div>
        <div className="flex items-center justify-between">
          <div className="font-bold text-[18px]">Allow Auction</div>
          <Toggle
            onChange={() => {
              setStatus(!status);
            }}
            status={status}
          />
        </div>
        <div className="font-bold text-[18px]">Refundable Deposit</div>
        <div className="globalInputForm px-[20px] py-[10px] rounded-[16px]">
          <input className="w-full" placeholder="500" />
        </div>
        <div className="flex items-center justify-between">
          <div className="font-bold text-[18px]">TOTAL AMMOUNT</div>
          <div className="flex items-center">
            <img src={NUSD}></img>
            <div className="text-[#4C37C3]">2400</div>
            <div>NUSD</div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="px-[12px] py-[4px] rounded-[100px] text-[#5B1DEE] shadow-md w-max">
            Manage Guest Info...
          </div>
          <div className="px-[12px] py-[4px] rounded-[100px] text-[#5B1DEE] shadow-md w-max">
            Longer Stay Discount
          </div>
        </div>
        <div className="px-[12px] py-[4px] rounded-[100px] text-[#5B1DEE] shadow-md w-max">
          Manage Availability
        </div>

        <div className="px-[20px] py-[12px] rounded-[16px] text-center text-white bg-[#5D00CF]">
          Apply Changes
        </div>

        <div className="flex gap-[16px]">
          <div className="px-[20px] py-[12px] rounded-[16px] text-center text-white bg-black w-full">
            Edit Metadata
          </div>
          <div className="px-[20px] py-[12px] rounded-[16px] text-center text-white bg-black w-full">
            Unlist Property
          </div>
        </div>
      </div>
    </div>
  );
};
