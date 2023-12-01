import close from "../assets/images/Close.png";
import icon from "../assets/images/icon1.png";
import checked from "../assets/images/Frame 1000005306 (1).png";
import unchecked from "../assets/images/Frame 1000005306.png";

import { GenerateProof } from "@reclaimprotocol/reclaim-connect-react";

export const Verify = () => {
  return (
    <div className="pt-[16px] pb-[10px] bg-[#F2F2F2] px-[10px] w-full h-full">
      <div className="bg-white shadow-md rounded-[6px] w-full h-full p-[24px] flex flex-col">
        <div className="flex items-center gap-[20px] h-max">
          <img src={close}></img>
          <div className="text-[24px] font-bold">Status Verify</div>
        </div>
        <div className="flex gap-[40px] w-full h-full">
          <div className="w-[400px] shadow-md rounded-[6px] p-[24px] h-max flex gap-[10px]">
            <div className="w-max">
              <img src={checked}></img>
              <div className="w-[4px] h-[32px] bg-[#EFE8FD] mx-auto"></div>
              <img src={unchecked}></img>
              <div className="w-[4px] h-[32px] bg-[#EFE8FD] mx-auto"></div>
              <img src={unchecked}></img>
              <div className="w-[4px] h-[32px] bg-[#EFE8FD] mx-auto"></div>
              <img src={unchecked}></img>
            </div>
            <div className="space-y-[36px]">
              <div>1. ID</div>
              <div className="text-[#959595]">2. Ejari</div>
              <div className="text-[#959595]">3. DLD</div>
              <div className="text-[#959595]">4. Mint NFT Module </div>
            </div>
          </div>
          <div className="w-full shadow-md rounded-[6px] h-full flex items-center">
            <div className="m-auto space-y-[24px]">
              <img src={icon} className="m-auto"></img>
              <div>
                <div className="text-center text-[24px]">Status Verified</div>
                <div className="text-center text-[#959595]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>

              <div className="bg-[#5D00CF] px-[40px] py-[10px] rounded-[16px] text-white text-center w-max mx-auto">
                Submit
              </div>

              <GenerateProof
                appID="0e516670-3195-4a54-b5a6-3e27ecd40762"
                userID="dasq2easdase-asdq2e3"
                onProofSubmission={(proofs, sessionId) => {
                  console.log("submission success!");
                  console.log(proofs, sessionId);
                }}
                onProofSubmissionFailed={() => {
                  alert("submission failed!");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
