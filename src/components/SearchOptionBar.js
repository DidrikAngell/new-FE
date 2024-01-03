import search from "../assets/images/Frame 1000001522.png";
import searchsm from "../assets/images/search-normal.png";
import recent from "../assets/images/Group 1000004834.png";

import AbuDhabi from "../assets/images/Group 1000004849.png";
import Ajman from "../assets/images/Group 1000004849 (1).png";
import Dubai from "../assets/images/Group 1000004849 (2).png";
import Fujairah from "../assets/images/Group 1000004849 (3).png";
import RasAlKhaimah from "../assets/images/Group 1000004849 (4).png";
import Sharjah from "../assets/images/Group 1000004849 (5).png";
import UmmAlQuwain from "../assets/images/Group 1000004849 (6).png";

import { Calendar } from "react-multi-date-picker";
import light from "../assets/images/light.png";
import minus from "../assets/images/Group 1000004840.png";
import plus from "../assets/images/Group 1000004839.png";
import uncheck from "../assets/images/checkbox/unchecked.png";
import check from "../assets/images/checkbox/checked.png";

import { Modal } from "react-bootstrap";
import { useState } from "react";

export const SearchOptionBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    document.getElementById("searchbar").classList.remove("z-[1200]");
    setShow(false);
  };
  const handleShow = (e) => {
    document.getElementById("searchbar").classList.add("z-[1200]");
    setShow(true);
  };

  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  const [value, setValue] = useState([
    new Date().toLocaleString(undefined, options),
  ]);

  const [searchMode, setSearchMode] = useState(0);

  return (
    // <div className="flex gap-[20px] shadow-md rounded-[20px] items-center h-[50px] px-[5px] pl-[30px] font-semibold">
    //   <div>Anywhere</div>
    //   <div className="w-[2px] bg-[#E3E3E3] h-[80%]"></div>

    //   {/* buymode */}
    //   {/* <div>Property Type</div> */}

    //   {/* rent mode */}
    //   <div>Any Week</div>

    //   <div className="w-[2px] bg-[#E3E3E3] h-[80%]"></div>
    //   {/* buymode */}
    //   {/* <div>Sales Form</div> */}

    //   {/* rent mode  */}
    //   <div className="text-[#959595]">Add Guests...</div>

    //   <div className="w-[2px] bg-[#E3E3E3] h-[80%]"></div>
    //   <div className="text-[#959595]">Add Amenities...</div>
    //   <img src={search}></img>
    // </div>
    <div
      className="flex p-[8px] rounded-[40px] bg-white gap-[8px] shadow-md"
      id="searchbar"
    >
      <div
        className="px-[16px] py-[6px]"
        onClick={() => {
          setSearchMode(0);
          handleShow();
        }}
      >
        <div className="text-[16px]">Where</div>
        <div className="text-[14px] text-[#959595]">Search Destination</div>
      </div>
      <div className="w-[1px] h-[40px] bg-[#E3E3E3] my-auto"></div>
      <div
        className="px-[16px] py-[6px]"
        onClick={() => {
          setSearchMode(1);
          handleShow();
        }}
      >
        <div className="text-[16px]">Check In</div>
        <div className="text-[14px] text-[#959595]">Add Dates</div>
      </div>
      <div className="w-[1px] h-[40px] bg-[#E3E3E3] my-auto"></div>

      <div
        className="px-[16px] py-[6px]"
        onClick={() => {
          setSearchMode(1);
          handleShow();
        }}
      >
        <div className="text-[16px]">Check Out</div>
        <div className="text-[14px] text-[#959595]">Add Dates</div>
      </div>
      <div className="w-[1px] h-[40px] bg-[#E3E3E3] my-auto"></div>

      <div
        className="px-[16px] py-[6px]"
        onClick={() => {
          setSearchMode(2);
          handleShow();
        }}
      >
        <div className="text-[16px]">Who</div>
        <div className="text-[14px] text-[#959595]">Add Guests</div>
      </div>
      <div className="w-[1px] h-[40px] bg-[#E3E3E3] my-auto"></div>

      <div
        className="px-[16px] py-[6px]"
        onClick={() => {
          setSearchMode(3);
          handleShow();
        }}
      >
        <div className="text-[16px]">Amenities</div>
        <div className="text-[14px] text-[#959595]">Add Amenities</div>
      </div>

      <div className="p-[14px] bg-[#5B1DEE] rounded-[400px] text-white gap-[8px] flex items-center">
        <img src={searchsm}></img>
        <div>Search</div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="_modal-dialog_searchbar"
      >
        {searchMode == 0 ? (
          <Modal.Body>
            <div className="p-[16px] flex gap-[16px] font-semibold">
              <div className="pr-[32px] border-r-[1px] border-[#E3E3E3] space-y-[10px]">
                <div className="text-[18px]">Recent searches</div>
                <div className="flex items-center">
                  <img src={recent}></img>
                  <div>
                    <div className="text-[16px]">Dubai Stays</div>
                    <div className="text-[#959595]">
                      Nov 6 - Nov 25 (3 guests)
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <img src={recent}></img>
                  <div>
                    <div className="text-[16px]">Dubai Stays</div>
                    <div className="text-[#959595]">
                      Nov 6 - Nov 25 (3 guests)
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-[18px]">Search by region</div>
                <div className="grid grid-cols-4">
                  <div>
                    <img src={AbuDhabi}></img>
                    <div className="text-center">Abu Dhabi</div>
                  </div>
                  <div>
                    <img src={Ajman}></img>
                    <div className="text-center">Ajman</div>
                  </div>
                  <div>
                    <img src={Dubai}></img>
                    <div className="text-center">Dubai</div>
                  </div>
                  <div>
                    <img src={Fujairah}></img>
                    <div className="text-center">Fujairah</div>
                  </div>
                  <div>
                    <img src={RasAlKhaimah}></img>
                    <div className="text-center">Ras Al-Khaimah</div>
                  </div>
                  <div>
                    <img src={Sharjah}></img>
                    <div className="text-center">Sharjah</div>
                  </div>
                  <div>
                    <img src={UmmAlQuwain}></img>
                    <div className="text-center">Umm Al-Quwain</div>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        ) : (
          <></>
        )}
        {searchMode == 1 ? (
          <Modal.Body>
            <div>
              <div className="p-[6px] shadow-md gap-[8px] rounded-[16px] flex w-max mx-auto my-[20px] text-[#959595]">
                <div className="w-[120px] rounded-[10px] flex items-center justify-center gap-[10px] shadow-md font-bold text-black">
                  <div>Dates</div>
                  <img src={light}></img>
                </div>

                <div className="w-[120px] rounded-[10px] flex items-center justify-center gap-[10px]">
                  <div>Months</div>
                </div>
                <div className="w-[120px] rounded-[10px] flex items-center justify-center gap-[10px]">
                  <div>Flexible</div>
                </div>
              </div>
            </div>

            <Calendar
              highlightToday={false}
              range
              numberOfMonths={2}
              minDate={new Date()}
              onChange={setValue}
            />

            <div className="m-[10px] flex gap-[8px] text-[#D5D5D5]">
              <div className="px-[14px] py-[8px] border-[1px] rounded-[16px] w-max border-[#5D00CF] text-[#5D00CF]">
                Exact dates
              </div>
              <div className="px-[14px] py-[8px] border-[1px] rounded-[16px] w-max">
                +-1day
              </div>
              <div className="px-[14px] py-[8px] border-[1px] rounded-[16px] w-max">
                +-2day
              </div>
              <div className="px-[14px] py-[8px] border-[1px] rounded-[16px] w-max">
                +-3day
              </div>
              <div className="px-[14px] py-[8px] border-[1px] rounded-[16px] w-max">
                +-7day
              </div>
            </div>
          </Modal.Body>
        ) : (
          <></>
        )}
        {searchMode == 2 ? (
          <Modal.Body>
            <div className="w-[340px] p-[20px] space-y-[10px]">
              <div className="flex items-center justify-between ">
                <div>
                  <div className="font-semibold">Adults</div>
                  <div className="text-[#959595]">Age 13 or above</div>
                </div>
                <div className="flex items-center">
                  <img src={minus}></img>
                  <div className="font-bold">1</div>
                  <img src={plus}></img>
                </div>
              </div>
              <div className="flex items-center justify-between ">
                <div>
                  <div className="font-semibold">Children</div>
                  <div className="text-[#959595]">Age 2-12</div>
                </div>
                <div className="flex items-center">
                  <img src={minus}></img>
                  <div className="font-bold">1</div>
                  <img src={plus}></img>
                </div>
              </div>
              <div className="flex items-center justify-between ">
                <div>
                  <div className="font-semibold">Infants</div>
                  <div className="text-[#959595]">Under 2</div>
                </div>
                <div className="flex items-center">
                  <img src={minus}></img>
                  <div className="font-bold">1</div>
                  <img src={plus}></img>
                </div>
              </div>
              <div className="flex items-center justify-between ">
                <div>
                  <div className="font-semibold">Pets</div>
                  <div className="text-[#959595] underline">
                    Bringing a service animal?
                  </div>
                </div>
                <div className="flex items-center">
                  <img src={minus}></img>
                  <div className="font-bold">1</div>
                  <img src={plus}></img>
                </div>
              </div>
            </div>
          </Modal.Body>
        ) : (
          <></>
        )}
        {searchMode == 3 ? (
          <Modal.Body>
            <div className="w-[340px] p-[20px] space-y-[10px]">
              <div className="flex items-center justify-between ">
                <div>
                  <div className="font-semibold">Bathroom</div>
                  <div className="text-[#959595]">Bathroom</div>
                </div>
                <div className="flex items-center">
                  <img src={minus}></img>
                  <div className="font-bold">1</div>
                  <img src={plus}></img>
                </div>
              </div>
              <div className="flex items-center justify-between ">
                <div>
                  <div className="font-semibold">Bedroom</div>
                  <div className="text-[#959595]">Bedroom</div>
                </div>
                <div className="flex items-center">
                  <img src={minus}></img>
                  <div className="font-bold">1</div>
                  <img src={plus}></img>
                </div>
              </div>

              <div className="font-semibold">Square Feet</div>

              <div className="grid grid-cols-2">
                <div className="flex items-center">
                  <img src={check}></img>
                  <div>&lt;100m</div>
                </div>
                <div className="flex items-center">
                  <img src={check}></img>
                  <div>500-1000</div>
                </div>
                <div className="flex items-center">
                  <img src={check}></img>
                  <div>100-500</div>
                </div>
                <div className="flex items-center">
                  <img src={uncheck}></img>
                  <div>&lt;1000m</div>
                </div>
              </div>
            </div>
          </Modal.Body>
        ) : (
          <></>
        )}
      </Modal>
    </div>
  );
};
