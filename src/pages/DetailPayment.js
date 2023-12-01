import arrow from "../assets/images/PropertyAddress/Group.png";
import arrow1 from "../assets/images/Arrow1.png";
import radio from "../assets/images/tick-circle.png";
import radio1 from "../assets/images/tick-circle1.png";
import NUSD from "../assets/images/NUSD.png";
import avatar from "../assets/images/Ellipse 868.png";
import calendar from "../assets/images/Frame 10000014601.png";
import calendarsm from "../assets/images/Calendar,Schedule.png";

import image from "../assets/images/image.png";
import progress from "../assets/images/progress.png";
import checked from "../assets/images/Frame 1000005306 (1).png";
import unchecked from "../assets/images/Frame 1000005306.png";
import close from "../assets/images/Close1.png";
import processing from "../assets/images/Frame 10000052511.png";
import warning from "../assets/images/Group 1000001279.png";

import icon from "../assets/images/Frame 1000005306 (2).png";

import closemini from "../assets/images/close-mini.png";

import StarRatings from "react-star-ratings";
import { useState } from "react";
import { Modal, Spinner } from "react-bootstrap";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PaymentTimeline } from "../components/PaymentTimeline";

export const DetailPayment = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const mode = useSelector((state) => state.header.mode);
  const submode = useSelector((state) => state.header.submode);

  const navigate = useNavigate();

  return (
    <div className="pt-[20px] bg-white w-full space-y-[20px]">
      <div className="shadow-md w-[90%] mx-auto p-[20px] rounded-[10px] bg-white">
        <div className="flex items-center gap-[10px]">
          {mode == 1 ? <div className="text-[#A4A4A4]">Rent</div> : <></>}
          {/* <div className="text-[#A4A4A4]">Buy</div> */}
          <img src={arrow}></img>
          <div className="text-[#A4A4A4]">Los Angeles, CA</div>
          <img src={arrow}></img>

          <div className="bg-[#202020] text-white rounded-[20px] px-[20px] py-[10px] ">
            Confirmation and pay
          </div>
          {/* <div className="bg-[#202020] text-white rounded-[20px] px-[20px] py-[10px] ">
            Placing a bid
          </div> */}
        </div>

        <div className="shadow-md p-[16px] rounded-[16px] flex gap-[24px] items-center">
          <img src={arrow1}></img>
          <div className="text-[24px] font-bold">Confirmation and pay</div>
          {/* <div className="text-[24px] font-bold">Placing a bid</div> */}
        </div>
      </div>

      <div className="w-[90%] mx-auto grid grid-cols-2 gap-[20px]">
        <div className="shadow-md p-[16px] space-y-[24px]">
          <div className="space-y-[8px]">
            <div className="font-bold text-[24px]">Your trip</div>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-[18px]">Dates</div>
                <div className="text-[#5A5A5A]">May 13 - 17, 2024</div>
              </div>
              <div className="underline">Edit</div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-[18px]">Guest</div>
                <div className="text-[#5A5A5A]">1 guest</div>
              </div>
              <div className="underline">Edit</div>
            </div>
          </div>

          {/* <div className="space-y-[8px]">
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
          </div> */}

          <div className="bg-[#D9D9D9] w-full h-[1px]"></div>
          <div className="space-y-[8px]">
            <div className="font-bold text-[24px]">Choose how to pay</div>
            <div className="flex items-center gap-[16px] shadow-md p-[12px] rounded-[16px]">
              <img src={radio1}></img>
              <div>
                <div className="text-[18px]">Pay in full</div>
                <div className="text-[#5A5A5A]">
                  Pay the total (6,065.69 NUSD) now and you’re all set.
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[16px] p-[12px] rounded-[16px]">
              <img src={radio}></img>
              <div>
                <div className="text-[18px]">
                  Pay part now, part later with Coded Estate
                </div>
                <div className="text-[#5A5A5A]">
                  Pay the total (6,065.69 NUSD) now and you’re all set.
                </div>
              </div>
            </div>
          </div>

          {/* <div className="p-[24px] rounded-[16px] shadow-md space-y-[8px]">
            <div>Bid price</div>
            <div className="globalInputForm flex w-full px-[12px] py-[9px] gap-[6px] items-center text-[18px]">
              <div className="text-[#B6B6B6]">NUSD</div>
              <input className="w-full text-[24px]"></input>
              <div>($49.83)</div>
            </div>
          </div> */}

          <div className="bg-[#D9D9D9] w-full h-[1px]"></div>
          <div className="space-y-[16px]">
            <div className="flex items-center justify-between">
              <div className="font-bold text-[24px]">Pay with</div>
              <img src={NUSD}></img>
            </div>
            <div className="px-[20px] py-[10px] flex items-center justify-between shadow-md rounded-[6px]">
              <img src={NUSD}></img>
              <div className="text-[#AAAAAA]">Pay with</div>
            </div>
          </div>
          <div className="bg-[#D9D9D9] w-full h-[1px]"></div>
          <div className="space-y-[16px]">
            {/* <div className="font-bold text-[24px]">Required for your trip</div> */}
            {/* <div className="text-[18px]">Message the host</div> */}
            <div className="text-[18px]">Message the Seller</div>
            <div className="text-[#5A5A5A]">
              Share why you’re traveling, who’s coming with you, and what you
              love about the space.
            </div>
            <div className="flex items-center gap-[10px]">
              <img src={avatar}></img>
              <div>
                <div className="font-bold">Sara</div>
                <div className="text-[#5A5A5A]">Joined in 2020</div>
              </div>
            </div>
            <div className="globalInputForm px-[20px] py-[10px]">
              <textarea className="w-full"></textarea>
            </div>
          </div>
          <div className="bg-[#D9D9D9] w-full h-[1px]"></div>
          <div className="space-y-[16px]">
            <div className="font-bold text-[24px]">Cancellation policy</div>
            <p className="text-[#5A5A5A]">
              <b className="text-[#202020]">Free cancellation before May 12</b>
              Cancel before check-in on May 13 for a partial refund.
              <span className="text-black">Learn more</span>
            </p>
          </div>
          <div className="bg-[#D9D9D9] w-full h-[1px]"></div>
          <div className="space-y-[16px]">
            <div className="font-bold text-[24px]">Ground rules</div>
            <div className="text-[#5A5A5A]">
              We ask every guest to remember a few simple things about what
              makes a great guest.
            </div>
            <ol>
              <li>Follow the house rules.</li>
              <li>Treat your Host’s home like your own.</li>
            </ol>
          </div>
          <div className="bg-[#D9D9D9] w-full h-[1px]"></div>
          {/* <div className="flex items-start gap-[20px]">
            <img src={calendar}></img>
            <div>
              <div className="font-bold text-[18px]">
                Your reservation won’t be confirmed until the Host accepts your
                request (within 24 hours)
              </div>
              <div className="text-[#5A5A5A]">
                You won’t be charged until then.
              </div>
            </div>
          </div>
          <div className="bg-[#D9D9D9] w-full h-[1px]"></div> */}
          <p className="text-[#5A5A5A]">
            By selecting the button below, I agree to the
            <b className="text-[#202020] font-bold">
              Host’s House Rules, Ground rules for guests, Airbnb’s Rebooking
              and Refund Policy,
            </b>
            and that
            <b className="text-[#202020] font-bold">
              Coded Estate can charge my payment method
            </b>
            if I’m responsible for damage. I agree to pay the total amount shown
            if the Host accepts my booking request. Payment Terms between you
            and Airbnb Payments Luxembourg S.A.
          </p>
        </div>

        <div className="flex flex-col">
          <div className="shadow-md p-[24px] h-max rounded-[8px] space-y-[24px]">
            <div className="p-[16px] space-y-[40px] rounded-[8px] shadow-md">
              <div className="flex items-center gap-[20px]">
                <img
                  src={image}
                  className="w-[166px] h-[166px] rounded-[8px]"
                ></img>
                <div className="space-y-[8px]">
                  <div className="text-[#5a5a5a]">Entire cabin</div>
                  <div className="text-[24px]">
                    Separate and lovely Cottage - just by the lake
                  </div>
                  <div className="flex gap-[10px]">
                    <StarRatings
                      numberOfStars={1}
                      rating={5}
                      starRatedColor="#F8BC30"
                      starDimension="20"
                    ></StarRatings>
                    <div>4.95</div>
                    <div className="text-[#5a5a5a]">(41 reviews)</div>
                  </div>
                  <div className="font-bold">Super Host</div>
                </div>
              </div>
              <div className="bg-[#D9D9D9] w-full h-[1px]"></div>
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-[18px]">Price</div>

                    <div className="flex items-center text-[20px] gap-[5px]">
                      <img src={NUSD}></img>
                      <div className="text-[#5B1DEE] px-[4px] py-[2px] rounded-[8px] shadow-md">
                        375
                      </div>
                      <div>NUSD</div>
                      <div className="text-[#959595]">/night</div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-[16px] mt-[30px]">
                  <div className="space-y-[10px]">
                    <div className="text-[20px]">Check in</div>
                    <div className="globalInputForm radius40 flex w-full px-[24px] py-[13px] gap-[6px] items-center text-[14px]">
                      <input
                        className="w-full text-[14px]"
                        placeholder="Select date"
                      ></input>
                      <img src={calendarsm}></img>
                    </div>
                  </div>
                  <div className="space-y-[10px]">
                    <div className="text-[20px]">Check out</div>
                    <div className="globalInputForm radius40 flex w-full px-[24px] py-[13px] gap-[6px] items-center text-[14px]">
                      <input
                        className="w-full text-[14px]"
                        placeholder="Select date"
                      ></input>
                      <img src={calendarsm}></img>
                    </div>
                  </div>
                </div>

                <div className="flex items-center px-[14px] py-[6px] rounded-[100px] shadow-md mt-[20px] gap-[10px] w-max">
                  <img src={warning}></img>
                  <div className="text-[#5B1DEE]">
                    Available from 11 Nov 2023
                  </div>
                </div>

                {/* <div className="space-y-[10px] mt-[30px]">
              <div>Guests</div>
              <div className="globalInputForm radius40 flex w-full px-[24px] py-[13px] gap-[6px] items-center text-[14px]">
                <input
                  className="w-full text-[14px]"
                  placeholder="1 guest"
                ></input>
              </div>
            </div> */}

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
                    <div className="text-[#B6B6B6]">Rent VAT per month</div>
                    <div className="flex items-center text-[18px] gap-[5px] font-normal">
                      <img src={NUSD}></img>
                      {/* <div className="text-[#5B1DEE] font-bold"></div> */}
                      <div>375 NUSD</div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-[#B6B6B6]">Non-refundable deposit</div>
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
                    <div className="text-[#B6B6B6] text-black">
                      Total Payment
                    </div>
                    <div className="flex items-center text-[18px] gap-[5px] font-normal">
                      <img src={NUSD}></img>
                      <div className="text-[#5B1DEE] font-bold">375</div>
                      <div>NUSD</div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#E3E3E3] w-full h-[2px] mt-[10px]"></div>
                <div className="flex justify-between font-normal items-center mt-[10px]">
                  <div className="font-bold">TOTAL</div>
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
              </div>
            </div>
            <div
              className="px-[20px] py-[12px] text-white text-center bg-[#5B1DEE] rounded-[16px] shadow-md"
              onClick={() => {
                // handleShow
                navigate("/reservation");
              }}
            >
              Reserve Now
            </div>

            <Modal show={show} onHide={handleClose} centered>
              <Modal.Body>
                <div className="w-[400px]">
                  <div className="bg-[#F6F6F6] flex items-center justify-between rounded-t-[8px] px-[20px] py-[20px]">
                    <div className="font-bold text-[18px]">
                      Confirmation Bid
                    </div>
                  </div>
                  <div className="px-[20px] py-[20px] space-y-[10px] border-b-[1px] border-[#D5D5D5]">
                    <div className="flex items-center justify-between">
                      <div className="font-bold">Checking your ID</div>
                      <Spinner animation="border" role="status" size="sm">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                    </div>
                    <div className="text-[#959595]">
                      Please wait for several minutes while system check your ID
                      for your verified profile.
                    </div>
                  </div>
                  <div className="px-[20px] py-[20px] space-y-[10px] border-b-[1px] border-[#D5D5D5]">
                    <div className="flex items-center justify-between">
                      <div className="font-bold">Checking your ID</div>
                      <img src={progress}></img>
                    </div>
                  </div>
                  <div className="px-[20px] py-[20px] space-y-[10px] border-b-[1px] border-[#D5D5D5]">
                    <div className="flex items-center justify-between">
                      <div className="font-bold">DLD</div>
                      <img src={progress}></img>
                    </div>
                  </div>
                  <div className="px-[20px] py-[20px] space-y-[10px] border-b-[1px] border-[#D5D5D5]">
                    <div className="flex items-center justify-between">
                      <div className="font-bold">Mint NFT Module </div>
                      <img src={progress}></img>
                    </div>
                  </div>
                </div>
              </Modal.Body>

              {/* <Modal.Body>
              <div className="w-[400px]">
                <div className="bg-[#F6F6F6] flex items-center justify-between rounded-t-[8px] px-[20px] py-[10px]">
                  <div className="font-bold text-[18px]">Confirmation Bid</div>
                  <img src={close} onClick={handleClose}></img>
                </div>
                <img src={processing} className="mx-auto my-[30px]"></img>
                <div className="text-center w-[70%] mx-auto ">
                  Bid is confirmedF
                </div>
                <div className="w-full px-[20px]">
                  <div className="bg-[#5B1DEE] py-[12px] rounded-[16px] text-white my-[30px] w-full text-center">
                    Done
                  </div>
                </div>
              </div>
            </Modal.Body> */}
            </Modal>

            <div className="text-center text-[#B6B6B6] mt-[30px]">
              You will not be charged yet. You will be required to sign a
              message from your wallet to confirm the reservation
            </div>
          </div>

          <PaymentTimeline />
        </div>
      </div>
    </div>
  );
};
