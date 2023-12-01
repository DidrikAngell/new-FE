import light from "../assets/images/light.png";
import notification from "../assets/images/Group 1000001279.png";
import swapIcon from "../assets/images/swapIcon.png";
import { SelectionGroup, SelectionItem } from "../components/Selection";

export const Swap = () => {
  return (
    <div className="bg-[#F2F2F2] w-full height flex py-[10px]">
      <div className="w-[80%] mx-auto h-full bg-white shadow-md p-[24px] flex">
        <div className="m-auto w-[600px]">
          <SelectionGroup
            className="p-[6px] rounded-[16px] shadow-md gap-[8px] w-full flex"
            defaultItem={0}
          >
            <SelectionItem
              SelectedItem={
                <div className="py-[6px] w-full flex px-[60px] items-center justify-between shadow-md rounded-[16px]">
                  <div>Swap Tokens</div>
                  <img src={light} />
                </div>
              }
              UnselectedItem={
                <div className="py-[6px] w-full flex px-[60px] items-center justify-between">
                  <div className="text-[#959595]">Swap Tokens</div>
                </div>
              }
            />
            <SelectionItem
              SelectedItem={
                <div className="py-[6px] w-full flex px-[60px] items-center justify-between shadow-md rounded-[16px]">
                  <div>YieldEstate Swap</div>
                  <img src={light} />
                </div>
              }
              UnselectedItem={
                <div className="py-[6px] w-full flex px-[60px] items-center justify-between">
                  <div className="text-[#959595]">YieldEstate Swap</div>
                </div>
              }
            />
          </SelectionGroup>
          <div className="p-[24px] rounded-[12px] shadow-md">
            <div className="text-[18px]">Swap</div>
            <div className="text-[#959595]">Trade tokens in a instant</div>
            <div className="p-[16px] rounded-[8px] shadow-md space-y-[12px]">
              <div className="font-bold">Pay</div>
              <div className="globalInputForm p-[12px] flex gap-[4px]">
                <div className="text-[18px]">NUSD</div>
                <input placeholder="0.081" className="text-[18px] w-full" />
              </div>
              <div className="shadow-md flex rounded-[100px] items-center text-[#4C37C3] w-max px-[12px] py-[4px]">
                <img src={notification} className="mr-[8px]" />
                <div>Your balance:</div>
                <div className="font-bold">1.032 NUSD</div>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <img src={swapIcon} className="mt-[-20px]" />
            </div>
            <div className="p-[16px] rounded-[8px] shadow-md space-y-[12px]">
              <div className="font-bold">Receive</div>
              <div className="globalInputForm p-[12px] flex gap-[4px]">
                <div className="text-[18px]">NIBI</div>
                <input placeholder="0.081" className="text-[18px] w-full" />
              </div>
              <div className="shadow-md flex rounded-[100px] items-center text-[#4C37C3] w-max px-[12px] py-[4px]">
                <img src={notification} className="mr-[8px]" />
                <div>Your balance:</div>
                <div className="font-bold">1.032 NIBI</div>
              </div>
            </div>

            <div className="bg-[#5D00CF] text-white text-center py-[12px] rounded-[16px] mt-[16px]">
              Connect Wallet
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
