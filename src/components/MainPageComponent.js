import shop from "../assets/images/Shop.png";
import rent from "../assets/images/Group 1000004856.png";

import arrow from "../assets/images/Icon color.png";
import { SearchOptionBar } from "./SearchOptionBar";
import { CarouselCompo } from "./CarouselCompo";

import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useRef, useState } from "react";
import "../css/MainPageComponent.css";

import checked from "../assets/images/checkbox/checked.png";
import unchecked from "../assets/images/checkbox/unchecked.png";

import { useSelector } from "react-redux";

export const MainPageComponent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    document.getElementById("sortby").classList.remove("z-[1200]");
    setShow(false);
  };
  const handleShow = (e) => {
    e.target.parentNode.classList.add("z-[1200]");
    setShow(true);
  };

  const handleCheck = (e) => {
    if (e.target.src == checked) e.target.src = unchecked;
    else e.target.src = checked;
  };

  const mode = useSelector((state) => state.header.mode);
  const submode = useSelector((state) => state.header.submode);

  return (
    <div className="bg-white w-full rounded-[8px] relative">
      <div className="flex justify-between px-[20px] h-[70px] items-center">
        <div className="flex items-center gap-[10px]">
          {/* Buy Mode */}
          {/* <img src={shop}></img>
          <div className="text-[28px] font-semibold">Marketplace</div> */}
          {/* Rent Mode */}

          {mode == 1 && submode == 0 ? (
            <>
              <img src={rent}></img>
              <div className="text-[28px] font-semibold">Long-Term Rental</div>
            </>
          ) : (
            <></>
          )}

          {mode == 1 && submode == 1 ? (
            <>
              <img src={rent}></img>
              <div className="text-[28px] font-semibold">Short-Term Rental</div>
            </>
          ) : (
            <></>
          )}
        </div>
        <SearchOptionBar />
        <div
          id="sortby"
          className="flex items-center shadow-md bg-white rounded-[20px] px-[20px] py-[10px]"
        >
          <img src={arrow}></img>
          <div className="text-[#959595]" onClick={handleShow}>
            Sort By
          </div>
          <Modal
            show={show}
            onHide={handleClose}
            dialogClassName="_modal-dialog"
          >
            <Modal.Body>
              <div className="space-y-[10px] p-[10px]">
                <div className="flex gap-[20px] items-center">
                  <img src={unchecked} onClick={handleCheck}></img>
                  <div>Published</div>
                </div>
                <div className="flex gap-[20px] items-center">
                  <img src={unchecked} onClick={handleCheck}></img>
                  <div>Total Price (High-Low)</div>
                </div>
                <div className="flex gap-[20px] items-center">
                  <img src={unchecked} onClick={handleCheck}></img>
                  <div>Total Price (Low-High)</div>
                </div>
                <div className="flex gap-[20px] items-center">
                  <img src={unchecked} onClick={handleCheck}></img>
                  <div>Square FT Price (High-Low)</div>
                </div>
                <div className="flex gap-[20px] items-center">
                  <img src={unchecked} onClick={handleCheck}></img>
                  <div>Square FT Price (Low-High)</div>
                </div>
                <div className="flex gap-[20px] items-center">
                  <img src={unchecked} onClick={handleCheck}></img>
                  <div>Closest Location</div>
                </div>
                <div className="flex gap-[20px] items-center">
                  <img src={unchecked} onClick={handleCheck}></img>
                  <div>Most Relevant</div>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
      <div className="p-[20px] grid gap-[20px] grid-cols-5 h-[80vh] overflow-y-auto hiddenscrollbar">
        <CarouselCompo />
        <CarouselCompo />
        <CarouselCompo />
        <CarouselCompo />
        <CarouselCompo />
        <CarouselCompo />
        <CarouselCompo />
        <CarouselCompo />
        <CarouselCompo />
        <CarouselCompo />
        <CarouselCompo />
        <CarouselCompo />
        <CarouselCompo />
        <CarouselCompo />
        <CarouselCompo />
        <CarouselCompo />
        <CarouselCompo />
      </div>

      <div className="flex absolute w-full">
        <div className="bg-[#5B1DEE] mx-auto px-[50px] rounded-[15px] text-white mt-[-15px] py-[8px] z-[10]">
          Show map
        </div>
      </div>
    </div>
  );
};
