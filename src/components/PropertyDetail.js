import icon2 from "../assets/images/icon (2).png";
import icon from "../assets/images/icon.png";
import icon1 from "../assets/images/icon (1).png";
import location from "../assets/images/location.png";
import logo from "../assets/images/image 7.png";
import arrow1 from "../assets/images/Arrow.png";
import SwimmingPool from "../assets/images/home-house-click.png";
import Heart from "../assets/images/Money, Banknote, Hand.png";
import Star from "../assets/images/users-profile-group.png";
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
import close from "../assets/images/Group 1000004790.png";

import { useState } from "react";
import { Modal } from "react-bootstrap";

import { useSelector } from "react-redux";

export const PropertyDetail = () => {
  const [showOfferModal, setShowOfferModal] = useState(false);
  const handleCloseOfferModal = () => setShowOfferModal(false);
  const handleShowOfferModal = () => setShowOfferModal(true);

  const metaData = useSelector((state) => state.nft.metaData);
  const landlord = useSelector((state) => state.nft.NftInfo?.access.owner);

  return (
    <>
      {metaData && landlord ? (
        <div className="shadow-md w-full rounded-[10px] p-[20px] space-y-[24px] bg-white">
          <div className="flex items-center justify-between">
            <div className="text-[24px]">
              Landlord:
              {" " +
                landlord?.substring(0, 8) +
                "..." +
                landlord?.substring(landlord?.length - 7)}
            </div>
            {/* <div className="bg-[#5B1DEE] text-white px-[20px] py-[12px] rounded-[16px] flex items-center gap-[4px]">
            <img src={delivery}></img>
            <div>Virtual tour</div>
          </div> */}
          </div>
          <div className="flex gap-[20px] text-[18px] ">
            <div>
              <div>Bedroom</div>
              <div className="flex items-center">
                <img src={icon2}></img>
                <div>2</div>
              </div>
            </div>
            <div>
              <div>Bathroom</div>
              <div className="flex items-center">
                <img src={icon1}></img>
                <div>2</div>
              </div>
            </div>
            <div>
              <div>Land area</div>
              <div className="flex items-center">
                <img src={icon}></img>
                <div>2</div>
              </div>
            </div>
          </div>

          <div className="bg-[#E3E3E3] w-full h-[2px]"></div>

          <div className="space-y-[10px]">
            <div className="text-[24px] ">Location</div>
            <div className="flex items-center text-[18px]  gap-[10px]">
              <img src={location}></img>
              <div>{metaData["Building Name"].buildingNameEn}</div>
            </div>
            <div className="text-[#959595]">{metaData.Area.areaEn}, Dubai</div>
          </div>
          <div className="bg-[#E3E3E3] w-full h-[2px]"></div>

          <div className="space-y-[10px]">
            <div className="flex items-center gap-[10px]">
              <img src={SwimmingPool}></img>
              <div>
                <div className="text-[18px] ">Property type</div>
                <div className="text-[#959595]">
                  {metaData["Property Type and Usage"].usageNameEn}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[10px]">
              <img src={Star}></img>
              <div>
                <div className="text-[18px] ">Maximum People</div>
                <div className="text-[#959595]">4 people</div>
              </div>
            </div>
            <div className="flex items-center gap-[10px]">
              <img src={Heart}></img>
              <div>
                <div className="text-[18px] ">Flexible payment plan</div>
                <div className="text-[#959595]">
                  This Landlord accepts flexible payment plans
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#E3E3E3] w-full h-[2px]"></div>

          <div className="space-y-[10px]">
            <img src={logo}></img>
            <div>
              Every transaction includes the possibility for undercollateralized
              loans through Coded Estate´s partners.
            </div>
            <div className="flex items-center text-[#6B349A] rounded-[10px] px-[10px] py-[5px] shadow-md w-max">
              <div className="">Learn more</div>
              <img src={arrow1}></img>
            </div>
          </div>
          <div className="bg-[#E3E3E3] w-full h-[2px]"></div>

          <div>
            The new Villa Goyen - The View House impresses with its exclusive
            location and the unique panoramic views of the surrounding mountain
            panorama and the Merano valley basin. The large window areas, the
            elegant sun terraces with glass balustrade and the modern Desgin
            make the mansion Goyen an exclusive vacation domicile, which
            fulfills highest requirements at cosiness, comfort and situation.
            200m² living space, 400m² garden, sun terrace and roof terrace with
            floating bed. 3 suites all with terrace.
          </div>
          <div className="bg-[#E3E3E3] w-full h-[2px]"></div>

          <div className="space-y-[10px]">
            <div className="text-[24px] ">What this place offers</div>
            <div className="grid grid-cols-2">
              <div className="flex items-center">
                <img src={gardenView}></img>
                <div>Garden View</div>
              </div>
              <div className="flex items-center">
                <img src={Cityskylineview}></img>
                <div>City skyline view</div>
              </div>
              <div className="flex items-center">
                <img src={kitchen}></img>
                <div>Kitchen</div>
              </div>
              <div className="flex items-center">
                <img src={wifi}></img>
                <div>Wifi</div>
              </div>
              <div className="flex items-center">
                <img src={dework}></img>
                <div>Dedicated Workspace</div>
              </div>
              <div className="flex items-center">
                <img src={fpp}></img>
                <div>Free Parking on premiese</div>
              </div>
              <div className="flex items-center">
                <img src={pool}></img>
                <div>Pool</div>
              </div>
              <div className="flex items-center">
                <img src={cma}></img>
                <div>Carbon monoxide alarm</div>
              </div>
              <div className="flex items-center">
                <img src={sa}></img>
                <div>Smoking alarm</div>
              </div>
              <div className="flex items-center">
                <img src={tv}></img>
                <div>TV</div>
              </div>
            </div>
          </div>

          <div
            className="bg-[#202020] text-white rounded-[20px] px-[20px] py-[10px] w-max"
            onClick={handleShowOfferModal}
          >
            Show All
          </div>

          <Modal show={showOfferModal} onHide={handleCloseOfferModal} centered>
            <Modal.Body>
              <div className="w-[500px]">
                <div className="flex items-center justify-between  rounded-t-[8px] px-[30px] py-[20px]">
                  <div className="font-bold text-[18px] text-center">
                    What this place offers
                  </div>
                  <img src={close} onClick={handleCloseOfferModal}></img>
                </div>

                <div className="flex items-center border-b-[1px] border-[#E3E3E3] py-[6px] mx-[20px]">
                  <img src={gardenView}></img>
                  <div>Garden View</div>
                </div>
                <div className="flex items-center border-b-[1px] border-[#E3E3E3] py-[6px] mx-[20px]">
                  <img src={Cityskylineview}></img>
                  <div>City skyline view</div>
                </div>
                <div className="flex items-center border-b-[1px] border-[#E3E3E3] py-[6px] mx-[20px]">
                  <img src={kitchen}></img>
                  <div>Kitchen</div>
                </div>
                <div className="flex items-center border-b-[1px] border-[#E3E3E3] py-[6px] mx-[20px]">
                  <img src={wifi}></img>
                  <div>Wifi</div>
                </div>
                <div className="flex items-center border-b-[1px] border-[#E3E3E3] py-[6px] mx-[20px]">
                  <img src={dework}></img>
                  <div>Dedicated Workspace</div>
                </div>
                <div className="flex items-center border-b-[1px] border-[#E3E3E3] py-[6px] mx-[20px]">
                  <img src={fpp}></img>
                  <div>Free Parking on premiese</div>
                </div>
                <div className="flex items-center border-b-[1px] border-[#E3E3E3] py-[6px] mx-[20px]">
                  <img src={pool}></img>
                  <div>Pool</div>
                </div>
                <div className="flex items-center border-b-[1px] border-[#E3E3E3] py-[6px] mx-[20px]">
                  <img src={cma}></img>
                  <div>Carbon monoxide alarm</div>
                </div>
                <div className="flex items-center border-b-[1px] border-[#E3E3E3] py-[6px] mx-[20px]">
                  <img src={sa}></img>
                  <div>Smoking alarm</div>
                </div>
                <div className="flex items-center border-b-[1px] border-[#E3E3E3] py-[6px] mx-[20px]">
                  <img src={tv}></img>
                  <div>TV</div>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
