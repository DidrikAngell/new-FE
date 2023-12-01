// import arrow from "../assets/images/PropertyAddress/Group.png";
// import locationPin from "../assets/images/PropertyAddress/Pin, Location.png";
// import send from "../assets/images/PropertyAddress/Send message, Send, Share.png";
// import heart from "../assets/images/PropertyAddress/heart-round-circle.png";
// import user from "../assets/images/User,Profile.png";
import image from "../assets/images/image.png";
import close from "../assets/images/Group 1000004790.png";
import auction from "../assets/images/auction.png";

import icon from "../assets/images/icon.png";
import icon1 from "../assets/images/icon (1).png";
import icon2 from "../assets/images/icon (2).png";
import location from "../assets/images/location.png";
import logo from "../assets/images/image 7.png";
import arrow1 from "../assets/images/Arrow.png";

import gardenView from "../assets/images/Frame 1000001460.png";
import Cityskylineview from "../assets/images/Frame 1000001460 (5).png";
import kitchen from "../assets/images/Frame 1000001460 (1).png";
import dework from "../assets/images/Frame 1000001460 (2).png";
import pool from "../assets/images/Frame 1000001460 (3).png";
import sa from "../assets/images/Frame 1000001460 (4).png";
import wifi from "../assets/images/Frame 1000001460 (6).png";
import fpp from "../assets/images/Frame 1000001460 (7).png";
import cma from "../assets/images/Frame 1000001460 (8).png";
import tv from "../assets/images/Frame 1000001460 (9).png";

import alarm from "../assets/images/Group 1000001279.png";
import ffl from "../assets/images/folder-filter-left.png";

import arrowtop from "../assets/images/ArrowTop.png";
import arrowbo from "../assets/images/ArrowBo.png";
import notverified from "../assets/images/Frame 1000005251.png";
import processing from "../assets/images/Frame 10000052511.png";

import SwimmingPool from "../assets/images/SwimmingPool.png";
import Heart from "../assets/images/Heart.png";
import Star from "../assets/images/Star.png";
import star from "../assets/images/Star1.png";

import star1 from "../assets/images/Star2.png";
import check from "../assets/images/Check mark, Сertificate.png";
import house from "../assets/images/house-key.png";
import message from "../assets/images/Messages, Chat.png";
import map from "../assets/images/map-pin-location.png";
import sale from "../assets/images/Sale, Discount, Promotion, Label.png";

import profile from "../assets/images/Profile.png";

import NUSD from "../assets/images/NUSD.png";
import calendar from "../assets/images/Calendar,Schedule.png";
import cross from "../assets/images/close-mini.png";
import clock from "../assets/images/timer.png";
import delivery from "../assets/images/box-delivery-rotate.png";
import search from "../assets/images/tabler-icon-search.png";
import slash from "../assets/images/slash.png";

import { Dropdown, ProgressBar } from "react-bootstrap";

import { Modal } from "react-bootstrap";
import { useState } from "react";

import StarRatings from "react-star-ratings";
import { Calendar } from "react-multi-date-picker";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import warning from "../assets/images/Group 1000001279.png";
import { PropertyAddress } from "../components/PropertyAddress";
import { ImageView } from "../components/ImageView";
import { PropertyDetail } from "../components/PropertyDetail";
import { Reviews } from "../components/Reviews";

export const DetailPage = () => {
  const [showReserveModal, setShowReserveModal] = useState(false);
  const handleCloseReserveModal = () => setShowReserveModal(false);
  const handleShowReserveModal = () => setShowReserveModal(true);

  const [showOfferModal, setShowOfferModal] = useState(false);
  const handleCloseOfferModal = () => setShowOfferModal(false);
  const handleShowOfferModal = () => setShowOfferModal(true);
  const navigate = useNavigate();

  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  const [value, setValue] = useState(
    new Date().toLocaleString(undefined, options)
  );

  const mode = useSelector((state) => state.header.mode);
  const submode = useSelector((state) => state.header.submode);

  return (
    <div className="pt-[5px] bg-white w-full space-y-[20px] pb-[20px]">
      <div className="w-[90%] mx-auto">
        <PropertyAddress />
      </div>

      <div className="w-[90%] mx-auto">
        <ImageView />
      </div>

      <div className="flex w-[90%] mx-auto grid grid-cols-2 gap-[20px]">
        <PropertyDetail />
        {/* Buy Mode */}
        {/* <div className="shadow-md w-full rounded-[10px] p-[20px] h-max space-y-[20px]">
          <div className="flex items-center gap-[10px]">
            <img src={auction}></img>
            <div className="font-bold text-[18px]">Auction</div>
          </div>
          <div className="px-[18px] py-[8px] bg-[#FFF2F2] shadow-md flex items-center justify-center">
            <img src={clock}></img>
            <div className="text-[#DB1F22]">Ends in 21H 34M 53S</div>
          </div>

          <div className="shadow-md w-full rounded-[10px] p-[20px] space-y-[12px]">
            <div className="flex justify-between">
              <div className="font-bold text-[18px]">Highest Bid</div>

              <div className="flex items-center gap-[4px]">
                <img src={NUSD}></img>
                <div className="text-[#5B1DEE]">2000</div>
                <div className="text-[#959595]">NUSD</div>
              </div>
            </div>
            <div className="globalInputForm flex w-full px-[12px] py-[9px] gap-[6px] items-center text-[18px]">
              <div className="text-[#B6B6B6]">NUSD</div>
              <input className="w-full text-[24px]"></input>
              <div>($49.83)</div>
            </div>
            <div className="flex items-center px-[14px] py-[6px] gap-[8px] rounded-[100px] shadow-md w-max">
              <img src={alarm}></img>
              <div className="text-[16px] text-[#5B1DEE]">
                Minimum Reserve Price 1.032 NUSD
              </div>
            </div>
            <div
              className="bg-[#202020] px-[20px] py-[12px] rounded-[16px] text-white w-full text-center"
              onClick={handleShow}
            >
              Direct Message
            </div>

            <Modal show={show} onHide={handleClose} centered>
              <Modal.Body>
                <div className="w-[500px] space-y-[24px]">
                  <div className="flex items-center justify-center rounded-t-[8px] px-[30px] py-[20px] relative">
                    <div className="font-bold text-[18px] text-center">
                      Send Message
                    </div>
                    <img
                      src={close}
                      onClick={handleClose}
                      className="absolute right-0"
                    ></img>
                  </div>
                  <div className="px-[24px] space-y-[8px]">
                    <div className="font-bold">Subject</div>
                    <div className="globalInputForm flex w-full px-[12px] py-[9px] gap-[6px] items-center text-[18px]">
                      <input
                        className="w-full"
                        placeholder="Type a subject.."
                      ></input>
                    </div>
                  </div>
                  <div className="font-bold px-[24px]">Send to</div>
                  <div className="mx-[24px] rounded-[16px] shadow-md space-y-[8px] px-[10px]">
                    <div className="flex items-center gap-[10px]">
                      <img src={profile}></img>
                      <div>
                        <div className="font-bold">Mantas</div>
                        <div>Vilnius, Lithuania</div>
                      </div>
                    </div>
                  </div>
                  <div className="px-[24px] space-y-[8px]">
                    <div className="font-bold">Message</div>
                    <div className="globalInputForm flex w-full px-[12px] py-[9px] gap-[6px] items-center text-[18px]">
                      <textarea
                        className="w-full"
                        placeholder="Type your message.."
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-[20px]">
                    <div className="bg-[#5B1DEE] py-[12px] rounded-[16px] text-white my-[30px] w-full text-center">
                      Send
                    </div>
                  </div>
                </div>
              </Modal.Body>
            </Modal>

            <div
              className="bg-[#5B1DEE] px-[20px] py-[12px] rounded-[16px] text-white w-full text-center "
              onClick={handleShow}
            >
              Place Bid
            </div>

            <Modal show={show} onHide={handleClose} centered>
            <Modal.Body>
                <div className="w-full mt-[60px]">
                  <img src={notverified} className="mx-auto"></img>

                  <div className="text-center text-[28px] font-bold">
                    You Are Not Verified
                  </div>
                  <div className="text-center w-[70%] mx-auto ">
                    You have not been verified as a buyer. Verify now to
                    continue your activities.
                  </div>
                  <div className="w-full px-[20px]">
                    <div className="bg-[#5B1DEE] px-[20px] py-[12px] rounded-[16px] text-white my-[52px] w-full text-center ">
                      Verify now
                    </div>
                  </div>
                </div>
              </Modal.Body>
            <Modal.Body>
                <div className="w-[400px]">
                  <div className="bg-[#F6F6F6] flex items-center justify-between rounded-t-[8px] px-[20px] py-[10px]">
                    <div className="font-bold text-[18px]">
                      Confirmation Bid
                    </div>
                    <img src={close} onClick={handleClose}></img>
                  </div>
                  <img src={processing} className="mx-auto my-[30px]"></img>
                  <div className="text-center w-[70%] mx-auto ">
                    Your transaction is processing
                  </div>
                  <div className="w-full px-[20px]">
                    <div className="bg-[#5B1DEE] py-[12px] rounded-[16px] text-white my-[30px] w-full text-center">
                      Done
                    </div>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </div>

          <div className="shadow-md w-full rounded-[8px] p-[16px]">
            <div className="flex items-center justify-between mb-[24px]">
              <div className="font-bold text-[20px]">Bids</div>
              <div className="flex items-center px-[12px] py-[4px] rounded-[21px]">
                <img src={ffl}></img>
                <div className="text-[#5B1DEE]">Sort By</div>
              </div>
            </div>
            <div className="space-y-[5px]">
              <div className="flex grid grid-cols-4 text-[#959595]">
                <div>Percentage</div>
                <div>From</div>
                <div>Expiration</div>
                <div>USD Price</div>
              </div>
              <div className="bg-[#E3E3E3] w-full h-[2px]"></div>

              <div className="flex grid grid-cols-4 font-bold">
                <div className="flex items-center">
                  <img src={arrowtop}></img>
                  <div>35,5%</div>
                </div>
                <div>J3nn1b33</div>
                <div>18 minutes</div>
                <div>$ 81.69</div>
              </div>
              <div className="flex grid grid-cols-4">
                <div className="flex items-center">
                  <img src={arrowbo}></img>
                  <div>35,5%</div>
                </div>
                <div>J3nn1b33</div>
                <div>18 minutes</div>
                <div>$ 81.69</div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="shadow-md w-full rounded-[10px] p-[20px] h-max">
          <div className="shadow-md w-full rounded-[10px] p-[20px]">
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
                <div className="text-[#5B1DEE] underline">
                  How do I get the best deal?
                </div>
              </div>
              <div>
                <div>Available from</div>
                <div className="text-[20px]">11 Nov 2023</div>
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
                  <img src={calendar}></img>
                </div>
              </div>
              <div className="space-y-[10px]">
                <div className="text-[20px]">Check out</div>
                <div className="globalInputForm radius40 flex w-full px-[24px] py-[13px] gap-[6px] items-center text-[14px]">
                  <input
                    className="w-full text-[14px]"
                    placeholder="Select date"
                  ></input>
                  <img src={calendar}></img>
                </div>
              </div>
            </div>

            {/* <div className="flex items-center px-[14px] py-[6px] rounded-[100px] shadow-md mt-[20px] gap-[10px] w-max">
              <img src={warning}></img>
              <div className="text-[#5B1DEE]">Available from 11 Nov 2023</div>
            </div> */}

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
            <div
              className="bg-[#5B1DEE] px-[20px] py-[12px] rounded-[16px] text-white w-full text-center my-[30px]"
              onClick={handleShowReserveModal}
            >
              Reserve
            </div>

            <Modal
              show={showReserveModal}
              onHide={handleCloseReserveModal}
              centered
            >
              <Modal.Body>
                <div className="w-full space-y-[20px] p-[24px] font-semibold">
                  <div className="w-full flex justify-end">
                    <img src={cross} onClick={handleCloseReserveModal}></img>
                  </div>
                  <div className="flex justify-between relative">
                    <div>
                      <div className="text-[24px] font-bold">2 nights</div>
                      <div className="text-[#B6B6B6]">3 beds 0 baths</div>
                    </div>
                    <div className="p-[6px] rounded-[40px] shadow-md flex items-center w-[50%] gap-[20px]">
                      <div className="px-[16px] rounded-[40px] shadow-md w-[50%]">
                        <div className="font-bold">Check-in</div>
                        <div className="text-[#B6B6B6]">{value.toString()}</div>
                      </div>
                      <div>
                        <div className="font-bold">Checkout</div>
                        <div className="text-[#B6B6B6]">{value.toString()}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-[16px]">
                    {/* <Calendar
                      months={1}
                      onChange={setValue}
                      format="MM/DD/YYYY"
                      minDate={new Date()}
                    ></Calendar>
                    <Calendar months={1} minDate={value}></Calendar> */}
                    <Calendar
                      highlightToday={false}
                      range
                      numberOfMonths={2}
                      minDate={new Date()}
                      // onChange={setValue}
                    />
                  </div>

                  <div className="">
                    <div className="font-bold">November 2023</div>
                    <div className="grid grid-cols-3 mt-[20px] gap-[10px]">
                      <div className="flex flex-col items-center rounded-[16px] py-[12px] shadow-md space-y-[4px]">
                        <div className="text-[12px] font-bold">Your Dates</div>
                        <div className="text-[#5B1DEE] text-[18px] font-bold">
                          2000 NUSD
                        </div>
                        <div className="text-[#959595]">/month</div>
                        <div>8 months & 24 days</div>
                      </div>
                      <div className="flex flex-col items-center rounded-[16px] py-[12px] shadow-md space-y-[4px]">
                        <div className="text-[12px] font-bold">Your Dates</div>
                        <div className="text-[#5B1DEE] text-[18px] font-bold">
                          2000 NUSD
                        </div>
                        <div className="text-[#959595]">/month</div>
                        <div>8 months & 24 days</div>
                      </div>
                      <div className="flex flex-col items-center rounded-[16px] py-[12px] shadow-md space-y-[4px]">
                        <div className="text-[12px] font-bold">Your Dates</div>
                        <div className="text-[#5B1DEE] text-[18px] font-bold">
                          2000 NUSD
                        </div>
                        <div className="text-[#959595]">/month</div>
                        <div>8 months & 24 days</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-[#6B349A] underline">Clear dates</div>
                    <div
                      className="bg-[#5D00CF] px-[16px] py-[10px] rounded-[16px] text-white"
                      onClick={() => {
                        navigate("/payment");
                      }}
                    >
                      Save
                    </div>
                  </div>
                </div>
              </Modal.Body>
            </Modal>

            <div className="text-center text-[#B6B6B6] mt-[30px]">
              You will not be charged yet. You will be required to sign a
              message from your wallet to confirm the reservation
            </div>
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-auto">
        <Reviews />
      </div>

      <div className="mx-auto w-[90%]">
        <iframe
          className="w-[100%] h-[600px]"
          src="https://maps.google.com/maps?q=18%20Ezekia%20Papaioannou%20Str.%20Off.104%2C%201075%20%20Nicosia%2C%20Cyprus&t=m&z=15&output=embed&iwloc=near"
        ></iframe>
      </div>

      <div className="shadow-md w-[90%] mx-auto p-[20px] rounded-[10px]">
        <div className="grid grid-cols-2 gap-[10px]">
          <div className="shadow-sm">
            DEMit Bookiply finden Sie ganz einfach Ihre perfekte
            Ferienunterkunft. Eine schöne Villa mit Meerblick auf Sardinien? Ein
            gemütliches Apartment am Gardasee oder ein Chalet in…
          </div>
          <div className="shadow-sm">
            Languages: Nederlands, English, Français, Deutsch, Ελληνικά,
            Italiano, Português, Español
            <br /> Response rate : 100% <br /> Response time : within an hour
          </div>
        </div>
        <div className="flex">
          <div className="bg-[#5B1DEE] mx-auto mt-[20px] px-[50px] rounded-[15px] text-white py-[8px]">
            Contact Seller
          </div>
        </div>
      </div>
    </div>
  );
};
