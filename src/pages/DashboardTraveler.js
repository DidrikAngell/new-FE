import arrow from "../assets/images/PropertyAddress/Group.png";
import profile from "../assets/images/Profile.png";
import image from "../assets/images/image.png";
import NUSD from "../assets/images/NUSD.png";
import checked from "../assets/images/Frame 1000005306 (1).png";
import unchecked from "../assets/images/Frame 1000005306.png";
import { PaymentTimeline } from "../components/PaymentTimeline";

export const DashboardTraveler = () => {
  return (
    <div className="pt-[20px] bg-[#F2F2F2] w-full space-y-[20px] pb-[20px]">
      <div className="shadow-md w-[90%] mx-auto p-[20px] rounded-[10px] bg-white">
        <div className="flex items-center gap-[10px]">
          <div className="text-[#A4A4A4]">Dashboard Traveler</div>
          <img src={arrow}></img>
          <div className="text-[#A4A4A4]">Trips</div>
          <img src={arrow}></img>

          <div className="bg-[#202020] text-white rounded-[20px] px-[20px] py-[10px] ">
            Los Angeles, CA
          </div>
        </div>
      </div>

      <div className="shadow-md w-[90%] mx-auto p-[20px] rounded-[10px] bg-white flex gap-[40px]">
        <div className="min-w-[60%]">
          <div className="font-bold text-[24px]">
            Your reservation is confirmed!
          </div>
          <div className="text-[#5A5A5A]">
            We emailed the details to didrik.angell@hotmail.no.
          </div>

          <div className="flex justify-between items-center my-[30px]">
            <div>
              <div className="text-[18px]">Dates</div>
              <div className="text-[#5A5A5A]">May 13 - 17, 2024</div>
            </div>
            <div className="underline">Edit</div>
          </div>

          <div className="space-y-[8px]">
            <div className="font-bold text-[24px]">
              Documents need to be completed after payment
            </div>
            <div className="flex gap-[10px]">
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
          </div>
          <div className="bg-[#E3E3E3] w-full h-[1px] my-[32px]"></div>

          <div className="font-bold text-[18px] mt-[32px]">Meet your host</div>
          <div className="flex items-center my-[24px]">
            <img src={profile}></img>
            <div className="text-[#5A5A5A]">
              Marit is here to help you if you have any questions
            </div>
          </div>
          <div className="globalInputForm p-[20px] w-[60%]">
            <textarea
              placeholder="Write something fun and punchy."
              className="w-full"
            ></textarea>
          </div>

          <div className="px-[16px] py-[10px] bg-[#5D00CF] rounded-[16px] text-white w-max mt-[24px]">
            Send message
          </div>

          <div className="bg-[#E3E3E3] w-full h-[1px] my-[32px]"></div>

          {/* <div className="text-[18px] font-bold">
            Last step: share your travel plans
          </div>
          <div className="text-[#959595]">
            Let your host know who’s travelling with you. We’ll also email the
            itinerary to these other guests
          </div>

          <div className="flex gap-[24px] w-full mt-[24px]">
            <div className="globalInputForm py-[10px] px-[12px] w-full">
              <input placeholder="Guest Full name" className="w-full"></input>
            </div>
            <div className="globalInputForm py-[10px] px-[12px] w-full">
              <input placeholder="Email address" className="w-full"></input>
            </div>
          </div>

          <div className="text-[#959595] mt-[24px]">
            Share your itinerary with anyone else who might want to know your
            plans.
          </div>

          <div className="globalInputForm py-[10px] px-[12px] w-full mt-[24px]">
            <input placeholder="aDD Email address" className="w-full"></input>
          </div>

          <div className="px-[16px] py-[10px] bg-[#5D00CF] rounded-[16px] text-white w-max mt-[24px]">
            Submit
          </div> */}

          <div className="font-bold text-[18px]">Things to know</div>

          <div className="flex gap-[24px]">
            <div className="p-[16px]  shadow-md rounded-[12px] space-y-[12px] max-w-[210px] text-[#959595]">
              <div className="font-bold text-black">House rules</div>
              <div>Check-in after 3:00 PM</div>
              <div>Checkout before 12:00 PM</div>
              <div>5 guests maximum</div>
              <div className="underline text-[#6b349a] ">Show more</div>
            </div>

            <div className="p-[16px]  shadow-md rounded-[12px] space-y-[12px] max-w-[210px] text-[#959595]">
              <div className="font-bold text-black">Safety & property</div>
              <div>Carbon monoxide alarm not reported</div>
              <div>Smoke alarm not reported</div>
              <div>Nearby lake, river, other body of water</div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full h-max bg-white shadow-md p-[24px] rounded-[12px]  space-y-[24px]">
            <div className="p-[8px] rounded-[8px] w-full shadow-md space-y-[8px]">
              <img src={image} className="rounded-[8px] h-[200px] w-full"></img>
              <div className="font-bold text-[16px]">
                Sjus@en New, Modern retreat at prime location
              </div>
              <div className="text-[#A4A4A4]">Dec 11 - 13, 2023 2 guest</div>
              <div className="text-[#A4A4A4]">
                Rasdalsveen 35, 5723 Bolstadoyri, Norge
              </div>
            </div>

            <div className="w-full bg-[#E3E3E3] h-[1px]"></div>
            <div className="flex justify-between">
              <div className="text-[#A4A4A4]">Reservation code</div>
              <div className="flex items-center">
                <div className="text-[16px]">HMFP38DFFB</div>
              </div>
            </div>

            <div className="space-y-[16px] mt-[30px]">
              <div className="flex justify-between">
                <div className="text-[#B6B6B6]">Rent per month</div>
                <div className="flex items-center text-[18px] gap-[5px] font-normal">
                  <img src={NUSD}></img>
                  {/* <div className="text-[#5B1DEE] font-bold"></div> */}
                  <div>375 NUSD</div>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="text-[#B6B6B6]">Refundable deposit</div>
                <div className="flex items-center text-[18px] gap-[5px] font-normal">
                  <img src={NUSD}></img>
                  {/* <div className="text-[#5B1DEE] font-bold"></div> */}
                  <div>375 NUSD</div>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="text-[#B6B6B6]">Rent VAT per month</div>
                <div className="flex items-center text-[18px] gap-[5px] font-normal">
                  <img src={NUSD}></img>
                  {/* <div className="text-[#5B1DEE] font-bold"></div> */}
                  <div>375 NUSD</div>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="text-[#B6B6B6] text-black">
                  Monthly Subtotal
                </div>
                <div className="flex items-center text-[18px] gap-[5px] font-normal">
                  <img src={NUSD}></img>
                  <div className="text-[#5B1DEE] font-bold">375</div>
                  <div>NUSD</div>
                </div>
              </div>
              <div className="bg-[#E3E3E3] w-full h-[2px]"></div>

              <div className="flex justify-between">
                <div className="text-[#B6B6B6]">Fee</div>
                <div className="flex items-center text-[18px] gap-[5px] font-normal">
                  <img src={NUSD}></img>
                  {/* <div className="text-[#5B1DEE] font-bold"></div> */}
                  <div>375 NUSD</div>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="text-[#B6B6B6] text-black">Total Payment</div>
                <div className="flex items-center text-[18px] gap-[5px] font-normal">
                  <img src={NUSD}></img>
                  <div className="text-[#5B1DEE] font-bold">375</div>
                  <div>NUSD</div>
                </div>
              </div>
            </div>
            <div className="bg-[#E3E3E3] w-full h-[2px] mt-[10px]"></div>
            <div className="flex justify-between font-normal items-center mt-[10px]">
              <div className="font-bold">TOTAL AMOUNT</div>
              <div className="flex items-center gap-[5px] text-[24px]">
                <img src={NUSD}></img>
                <div className="text-[#5B1DEE] px-[4px] py-[2px] rounded-[8px] shadow-md">
                  375
                </div>
                <div>NUSD</div>
              </div>
            </div>
            <div className="flex justify-between font-normal items-center mt-[10px]">
              <div className="text-[#B6B6B6]">Refundable Deposit</div>
              <div className="flex items-center gap-[5px] text-[24px]">
                <img src={NUSD}></img>
                <div className="text-[#5B1DEE] px-[4px] py-[2px] rounded-[8px] shadow-md">
                  375
                </div>
                <div>NUSD</div>
              </div>
            </div>
            <div className="px-[20px] py-[12px] text-white bg-[#5B1DEE] rounded-[16px] text-center">
              My Stay
            </div>
          </div>
          <PaymentTimeline />
        </div>
      </div>
    </div>
  );
};
