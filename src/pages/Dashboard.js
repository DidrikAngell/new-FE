import listed from "../assets/images/Frame 1000001303.png";
import unverified from "../assets/images/Frame 1000001303 (1).png";
import upcoming from "../assets/images/Frame 1000001303 (2).png";
import rent from "../assets/images/Frame 1000001303 (3).png";
import light from "../assets/images/light.png";
import search from "../assets/images/tabler-icon-search.png";
import slash from "../assets/images/slash.png";
import window from "../assets/images/window.png";
import list from "../assets/images/list.png";

import image from "../assets/images/image.jpg";
import NUSD from "../assets/images/NUSD.png";
import LocationPin from "../assets/images/PropertyAddress/Pin, Location.png";
import icon from "../assets/images/icon.png";
import icon1 from "../assets/images/icon (1).png";
import icon2 from "../assets/images/icon (2).png";

import empty from "../assets/images/Frame 1000005568.png";
import { CarouselCompo } from "../components/CarouselCompo";
import { PropertyItem } from "../components/PropertyItem";
import { SelectionGroup, SelectionItem } from "../components/Selection";
import { useSelector } from "react-redux";

import verifyIcon from "../assets/images/dashboard/Frame 1000005568.png";
import verifyIcon1 from "../assets/images/dashboard/Frame 10000055681.png";
import verifiedMark from "../assets/images/dashboard/badges (1).png";
import unverifiedMark from "../assets/images/dashboard/badges.png";
import clockAlarm from "../assets/images/dashboard/Social (2).png";
import clockSand from "../assets/images/dashboard/Social.png";

import circleIcon from "../assets/images/Frame 1000005306 (2).png";

import profileIcon from "../assets/images/Profile.png";
import hourGlass from "../assets/images/dashboard/hourglass-03.png";
import checkout from "../assets/images/dashboard/check-circle.png";
import printout from "../assets/images/dashboard/printer.png";

import circlechecked from "../assets/images/Frame 1000005306 (1).png";
import uploadimage from "../assets/images/dashboardListing/uploadimage.png";
import arrowdown from "../assets/images/arrowdown (2).png";

import closeIcon from "../assets/images/Close1.png";

import imgBack from "../assets/images/dashboard/luke-van-zyl-koH7IVuwRLw-unsplash 1.png";
import colorarrow from "../assets/images/Arrow.png";
import imageCard from "../assets/images/image.png";

import heart from "../assets/images/dashboard/Frame 1000005004.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Calendar } from "react-big-calendar";
import { PropertyDetail } from "../components/PropertyDetail";
import { Verify } from "./Verify";
import { MonthsCalendar } from "../components/MonthsCalendar";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { RightBar } from "../components/RightBar";
import { Inbox } from "../components/Inbox";

export const Dashboard = () => {
  const headerMode = useSelector((state) => state.header.submode);
  const dashboardMode = useSelector((state) => state.dashboard.mode);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const [showPriceEditModal, setShowPriceEditModal] = useState(false);

  return (
    <div className="bg-white w-full rounded-[8px] shadow-md flex flex-col sidebarheight overflow-auto">
      {headerMode == 2 ? (
        <>
          {dashboardMode == 0 ? (
            <>
              <div className="p-[20px] h-full flex flex-col">
                <div className="font-bold text-[24px]">Dashboard</div>
                <div className="text-[#8C8C8C]">
                  Welcome to the CodedEstate Dashboard
                </div>
                <div className="my-[40px] flex gap-[16px]">
                  <div>
                    <div className="font-bold">Verify NFTs</div>
                    <div className="rounded-[8px] shadow-md px-[12px] py-[18px] space-y-[20px] w-[260px] flex flex-col items-center">
                      <img src={verifyIcon}></img>
                      <div className="py-[8px] bg-black text-white text-center rounded-[100px] w-full">
                        Verify
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="font-bold">Your Minted NFTs</div>
                    <div className="rounded-[8px] shadow-md w-full h-[184px] flex p-[8px] gap-[16px]">
                      {/* <div className="p-[8px] rounded-[16px] w-[250px] h-full shadow-md relative">
                    <img
                      src={image}
                      className="w-full h-full rounded-[8px]"
                    ></img>
                    <img
                      className="absolute top-[20px] right-[20px]"
                      src={unverifiedMark}
                    ></img>
                  </div>

                  <div className="p-[8px] rounded-[16px] w-[250px] h-full shadow-md relative">
                    <img
                      src={image}
                      className="w-full h-full rounded-[8px]"
                    ></img>
                    <img
                      className="absolute top-[20px] right-[20px]"
                      src={verifiedMark}
                    ></img>
                  </div> */}

                      <div className="rounded-[8px] m-auto flex flex-col items-center space-y-[20px]">
                        <img src={verifyIcon}></img>
                        <div className="">No NFTs Minted yet</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="font-bold">Mint Your Real Estate NFT</div>

                <div className="w-full h-full shadow-md rounded-[8px] flex">
                  <div className="m-auto flex flex-col items-center space-y-[40px]">
                    <img src={verifyIcon1}></img>
                    <div className="bg-[#5B1DEE] text-white rounded-[100px] text-center w-[200px] py-[8px]">
                      Mint
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}

          {dashboardMode == 1 ? (
            <div className="bg-[#F6F6F6] rounded-[8px] w-full h-full flex gap-[5px]">
              <div className="w-full rounded-[8px] bg-white p-[16px] flex flex-col h-full">
                <div className="font-bold text-[24px]">Your Payment Plan</div>
                <div className="flex items-center m-[20px]">
                  <div className="flex flex-col justify-between items-center">
                    <div>Jan</div>
                    <img src={circleIcon}></img>
                    <div>5k</div>
                  </div>
                  <div className="bg-[#EFE8FD] h-[4px] w-full" />
                  <div className="flex flex-col justify-between items-center">
                    <div>Feb</div>
                    <img src={circleIcon}></img>
                    <div>5k</div>
                  </div>
                  <div className="bg-[#EFE8FD] h-[4px] w-full" />
                  <div className="flex flex-col justify-between items-center">
                    <div>Mar</div>
                    <img src={circleIcon}></img>
                    <div>5k</div>
                  </div>
                  <div className="bg-[#EFE8FD] h-[4px] w-full" />
                  <div className="flex flex-col justify-between items-center">
                    <div>Apr</div>
                    <img src={circleIcon}></img>
                    <div>5k</div>
                  </div>
                  <div className="bg-[#EFE8FD] h-[4px] w-full" />
                  <div className="flex flex-col justify-between items-center">
                    <div>May</div>
                    <img src={circleIcon}></img>
                    <div>5k</div>
                  </div>
                  <div className="bg-[#EFE8FD] h-[4px] w-full" />
                  <div className="flex flex-col justify-between items-center">
                    <div>Jun</div>
                    <img src={circleIcon}></img>
                    <div>5k</div>
                  </div>
                  <div className="bg-[#EFE8FD] h-[4px] w-full" />
                  <div className="flex flex-col justify-between items-center">
                    <div>Jul</div>
                    <img src={circleIcon}></img>
                    <div>5k</div>
                  </div>
                  <div className="bg-[#EFE8FD] h-[4px] w-full" />
                  <div className="flex flex-col justify-between items-center">
                    <div>Aug</div>
                    <img src={circleIcon}></img>
                    <div>5k</div>
                  </div>
                  <div className="bg-[#EFE8FD] h-[4px] w-full" />
                  <div className="flex flex-col justify-between items-center">
                    <div>Sep</div>
                    <img src={circleIcon}></img>
                    <div>5k</div>
                  </div>
                  <div className="bg-[#EFE8FD] h-[4px] w-full" />
                  <div className="flex flex-col justify-between items-center">
                    <div>Oct</div>
                    <img src={circleIcon}></img>
                    <div>5k</div>
                  </div>
                  <div className="bg-[#EFE8FD] h-[4px] w-full" />
                  <div className="flex flex-col justify-between items-center">
                    <div>Nov</div>
                    <img src={circleIcon}></img>
                    <div>5k</div>
                  </div>
                  <div className="bg-[#EFE8FD] h-[4px] w-full" />
                  <div className="flex flex-col justify-between items-center">
                    <div>Dec</div>
                    <img src={circleIcon}></img>
                    <div>5k</div>
                  </div>
                </div>
                <div className="h-full w-full flex">
                  <div className="m-auto">
                    <div className=" py-[20px] rounded-[8px] shadow-md w-[500px] flex items-center gap-[14px]">
                      <img src={clockAlarm} />
                      <div>Days rented out</div>
                      <div className="p-[4px] shadow-md text-[#5B1DEE] rounded-[8px]">
                        100
                      </div>
                      <div>days</div>
                    </div>
                    <div className=" py-[20px] rounded-[8px] shadow-md w-[500px] flex items-center gap-[14px]">
                      <img src={clockAlarm} />
                      <div>Days left of rental</div>
                      <div className="p-[4px] shadow-md text-[#5B1DEE] rounded-[8px]">
                        27
                      </div>
                      <div>days</div>
                    </div>
                  </div>
                </div>
                <div className="p-[24px] rounded-[16px] shadow-md gap-[16px] flex w-full">
                  <div className="flex flex-col justify-between h-full w-[40%] p-[16px] shadow-md rounded-[16px]">
                    <div className="font-bold">Message Landlord</div>
                    <div className="flex items-center">
                      <img src={profileIcon} />
                      <div>
                        Marit is here to help you if you have any questions
                      </div>
                    </div>
                    <div className="globalInputForm p-[10px]">
                      <textarea
                        placeholder="Write something fun and punchy."
                        className="w-full"
                      />
                    </div>
                    <div className="text-white text-center py-[10px] rounded-[16px] bg-[#5D00CF]">
                      Send Message
                    </div>
                  </div>
                  <div className="w-[40%]">
                    <PropertyItem />
                  </div>
                </div>
              </div>
              <div className="w-[400px] rounded-[8px] bg-white p-[16px] space-y-[16px]">
                <div className="w-full h-[1px] bg-[#E3E3E3]" />
                <div className="font-bold text-[24px]">Monthly Payment</div>
                <div className="shadow-md rounded-[16px] p-[12px] flex justify-between items-center">
                  <div className="text-[#B6B6B6]">Monthly Revenue</div>
                  <img src={NUSD} />
                  <div className="p-[4px] rounded-[8px] text-[#5B1DEE] shadow-md">
                    2000
                  </div>
                  <div>NUSD</div>
                </div>
                <div className="shadow-md rounded-[16px] p-[12px] flex justify-between items-center">
                  <div className="text-[#B6B6B6]">Rent VAT / month</div>
                  <div className="p-[4px] rounded-[8px] text-[#5B1DEE] shadow-md">
                    November 10th
                  </div>
                </div>

                <div className="shadow-md rounded-[16px] p-[12px] space-y-[16px]">
                  <div className="font-bold">Price</div>
                  <div className="flex items-center justify-between">
                    <div className="text-[#B6B6B6]">Rent / month</div>
                    <div className="flex items-center">
                      <img src={NUSD} />
                      <div>2000</div>
                      <div>NUSD</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-[#B6B6B6]">Rent VAT / month</div>
                    <div className="flex items-center">
                      <img src={NUSD} />
                      <div>200</div>
                      <div>NUSD</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>Monthly Sbtotal</div>
                    <div className="flex items-center">
                      <img src={NUSD} />
                      <div className="text-[#5B1DEE]">2000</div>
                      <div>NUSD</div>
                    </div>
                  </div>
                  <div className="w-full h-[1px] bg-[#E3E3E3]" />
                  <div className="flex items-center justify-between">
                    <div className="text-[#B6B6B6]">Fee</div>
                    <div className="flex items-center">
                      <img src={NUSD} />
                      <div>200</div>
                      <div>NUSD</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>Total Payment</div>
                    <div className="flex items-center">
                      <img src={NUSD} />
                      <div className="text-[#5B1DEE]">2000</div>
                      <div>NUSD</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center text-white bg-[#5B1DEE] rounded-[16px] py-[10px] gap-[10px]">
                  <img src={hourGlass}></img>
                  <div>Awaiting payment</div>
                </div>

                <div className="flex items-center justify-center text-white bg-black rounded-[16px] py-[10px] gap-[10px]">
                  <img src={printout}></img>
                  <div>Print Details</div>
                </div>

                <div className="flex items-center justify-center text-white bg-[#5B1DEE] rounded-[16px] py-[10px] gap-[10px]">
                  <img src={checkout}></img>
                  <div>Approve Checkout</div>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {dashboardMode == 2 ? (
            <>
              <div className="p-[20px]">
                <div className="text-[#8C8C8C]">My Real Estate NFTs</div>
                <div className="my-[20px] text-[18px] font-bold">
                  Your Real Estate Status
                </div>
                <div className="grid grid-cols-4 gap-[16px]">
                  <div className="p-[16px] rounded-[8px] shadow-md flex items-center justify-between">
                    <div className="flex items-center gap-[10px]">
                      <img src={listed}></img>
                      <div className="text-[#8C8C8C]">Total NFTs Listed</div>
                    </div>
                    <div className="text-[24px]">8</div>
                  </div>
                  <div className="p-[16px] rounded-[8px] shadow-md flex items-center justify-between">
                    <div className="flex items-center gap-[10px]">
                      <img src={unverified}></img>
                      <div className="text-[#8C8C8C]">
                        Total NFTs Unverified
                      </div>
                    </div>
                    <div className="text-[24px]">2</div>
                  </div>
                  <div className="p-[16px] rounded-[8px] shadow-md flex items-center justify-between">
                    <div className="flex items-center gap-[10px]">
                      <img src={upcoming}></img>
                      <div className="text-[#8C8C8C]">Upcoming</div>
                    </div>
                    <div className="text-[24px]">100</div>
                  </div>
                  <div className="p-[16px] rounded-[8px] shadow-md flex items-center justify-between">
                    <div className="flex items-center gap-[10px]">
                      <img src={rent}></img>
                      <div className="text-[#8C8C8C]">Recent Active Rent</div>
                    </div>
                    <div className="text-[24px]">6</div>
                  </div>
                </div>
              </div>
              <div className="p-[16px] border-y-[1px] border-[#EDEDED] flex justify-between">
                <div>
                  <SelectionGroup
                    defaultItem={0}
                    className="p-[6px] shadow-md gap-[8px] rounded-[16px] flex w-max text-[#959595] items-center"
                  >
                    <SelectionItem
                      SelectedItem={
                        <div className="w-[160px] rounded-[10px] flex items-center justify-between gap-[10px] px-[10px] py-[4px] shadow-md font-bold text-black">
                          <div>Verified NFTs</div>
                          <img src={light}></img>
                        </div>
                      }
                      UnselectedItem={
                        <div className="w-[160px] rounded-[10px] flex items-center justify-between gap-[10px] px-[10px] py-[4px]">
                          <div>Verified NFTs</div>
                        </div>
                      }
                    />
                    <SelectionItem
                      SelectedItem={
                        <div className="w-[160px] rounded-[10px] flex items-center justify-between gap-[10px] px-[10px] py-[4px] shadow-md font-bold text-black">
                          <div>Unverified NFTs</div>
                          <img src={light}></img>
                        </div>
                      }
                      UnselectedItem={
                        <div className="w-[160px] rounded-[10px] flex items-center justify-between gap-[10px] px-[10px] py-[4px]">
                          <div>Unverified NFTs</div>
                        </div>
                      }
                    />
                    <SelectionItem
                      SelectedItem={
                        <div className="w-[160px] rounded-[10px] flex items-center justify-between gap-[10px] px-[10px] py-[4px] shadow-md font-bold text-black">
                          <div>My Listings</div>
                          <img src={light}></img>
                        </div>
                      }
                      UnselectedItem={
                        <div className="w-[160px] rounded-[10px] flex items-center justify-between gap-[10px] px-[10px] py-[4px]">
                          <div>My Listings</div>
                        </div>
                      }
                    />
                  </SelectionGroup>
                </div>

                <div className="flex items-center gap-[20px]">
                  <div className="flex items-center shadow-md rounded-[4px] px-[12px] py-[6px] gap-[12px]">
                    <img src={search}></img>
                    <input placeholder="Search" className="w-full" />
                    <img src={slash}></img>
                  </div>

                  <div className="items-center flex">
                    <div className="p-[8px] bg-[#F2F2F2]">
                      <img src={window}></img>
                    </div>
                    <div className="p-[8px]">
                      <img src={list}></img>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-[20px] h-full">
                <div className="grid grid-cols-4 gap-[20px]">
                  <PropertyItem />
                </div>
                {/* <div className="w-max shadow-md rounded-[10px] p-[10px] h-max">
          <img src={image} className="rounded-[10px] w-full h-[200px]"></img>

          <div className="flex items-center ml-[10px] my-[10px] font-semibold text-[14px] gap-[10px]">
            <img src={NUSD}></img>
            <div>10000 NUSD</div>
          </div>
          <div className="flex items-center text-[#959595] ml-[10px] gap-[10px]">
            <img src={LocationPin}></img>
            <div>Los Angeles, CA</div>
          </div>
          <div className="flex items-center gap-[10px] text-[#959595]">
            <img src={icon}></img>
            <div>350</div>

            <div className="w-[2px] h-[15px] bg-[#D9D9D9]"></div>
            <img src={icon1}></img>
            <div>5</div>
            <div className="w-[2px] h-[15px] bg-[#D9D9D9]"></div>

            <img src={icon2}></img>
            <div>1</div>
          </div>

          <div className="bg-[#5D00CF] px-[16px] py-[10px] rounded-[16px] text-white text-center">
            Verify
          </div>
        </div> */}
                {/* <div className="w-full shadow-md bg-[#F6F6F6] h-full flex flex-col">
          <div className="m-auto flex flex-col">
            <img src={empty} className="m-auto"></img>
            <div>You don´t have any verified NFTs minted yet.</div>
            <div className="m-auto flex gap-[30px] text-[#6B349A]">
              <div className="underline">Listing page</div>
              <div className="underline">Mint</div>
            </div>
          </div>
        </div> */}
              </div>
            </>
          ) : (
            <></>
          )}
          {dashboardMode == 3 ? (
            <div className="p-[16px]">
              <div className="w-full flex justify-end">
                <div className="px-[14px] py-[6px] rounded-[100px] shadow-md">
                  Save and exit
                </div>
              </div>
              <div className="w-full flex flex-col items-center">
                <div className="text-[24px] font-bold">Summary</div>
                <div className="text-[#595959]">
                  Help your place stand out to get booked faster and earn your
                  first reviews.
                </div>
                <div className="flex items-center mt-[40px]">
                  <img src={circlechecked} />
                  <div className="bg-[#EFE8FD] w-[160px] h-[4px]" />
                  <img src={circlechecked} />
                  <div className="bg-[#EFE8FD] w-[160px] h-[4px]" />
                  <img src={circlechecked} />
                  <div className="bg-[#EFE8FD] w-[160px] h-[4px]" />
                  <img src={circlechecked} />
                </div>
                <div className="grid grid-cols-4 justify-items-center gap-[120px]">
                  <div>Describe</div>
                  <div>Highlight</div>
                  <div>Publish</div>
                  <div>Valuation</div>
                </div>
                <div className="p-[16px] rounded-[12px] shadow-md w-[600px] h-[400px] space-y-[12px] flex flex-col my-[20px]">
                  <div className="border-[2px] border-dashed rounded-[12px] shadow-md flex w-full h-full">
                    <div className="m-auto flex flex-col items-center space-y-[20px]">
                      <img src={uploadimage}></img>
                      <div className="text-white px-[16px] py-[9px] rounded-[40px] bg-[#4C37C3]">
                        Upload file
                      </div>
                      <div className="text-[#595959]">
                        ... or drag and drop files
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex justify-end">
                    <div className="underline">Edit</div>
                  </div>
                </div>
                <div className="w-[600px]">
                  <PropertyDetail />
                </div>
              </div>
              <div className="w-full flex justify-end">
                <div className="px-[20px] py-[12px] rounded-[16px] bg-[#5D00CF] text-white shadow-md">
                  Next
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {dashboardMode == 5 ? (
            <div className="bg-[#F6F6F6] rounded-[8px] w-full h-full flex gap-[5px]">
              <div className="w-full rounded-[8px] bg-white flex flex-col h-full relative">
                <div className="absolute flex right-[16px] top-[12px] gap-[12px] bg-white">
                  <div className="border-[1px] border-[#E6E6E6] rounded-[100px] p-[6px] flex items-center gap-[12px]">
                    <div className="rounded-[100px] p-[14px] bg-[#E6E6E6]" />
                    <div>Modern Apartment in Bergen</div>
                    <img src={arrowdown} className="mr-[10px]" />
                  </div>
                  <div className="border-[1px] border-[#E6E6E6] rounded-[100px] px-[16px] py-[6px] flex items-center gap-[12px]">
                    <div>View</div>
                    <img src={arrowdown} />
                  </div>
                </div>
                <MonthsCalendar
                  Periods={[
                    {
                      type: 1,
                      start: {
                        year: 2023,
                        month: 11,
                      },
                      end: {
                        year: 2024,
                        month: 1,
                      },
                    },
                    {
                      type: 0,
                      start: {
                        year: 2024,
                        month: 3,
                      },
                      end: {
                        year: 2024,
                        month: 8,
                      },
                    },
                  ]}
                />
              </div>
              <div className="w-[400px] rounded-[8px] bg-white p-[16px] space-y-[16px] overflow-auto sidebarheight hiddenscrollbar">
                {/* <>
              <SelectionGroup
                className="p-[6px] rounded-[100px] shadow-md flex gap-[8px] h-max"
                defaultItem={0}
              >
                <SelectionItem
                  SelectedItem={
                    <div className="flex justify-between items-center py-[6px] rounded-[100px] shadow-md w-full px-[20px]">
                      <div>Pricing</div>

                      <img src={light}></img>
                    </div>
                  }
                  UnselectedItem={
                    <div className="flex justify-between items-center py-[6px] w-full px-[20px]">
                      <div className="text-[#959595]">Pricing</div>
                    </div>
                  }
                />
                <SelectionItem
                  SelectedItem={
                    <div className="flex justify-between items-center py-[6px] rounded-[100px] shadow-md w-full px-[20px]">
                      <div>Availability</div>
                      <img src={light}></img>
                    </div>
                  }
                  UnselectedItem={
                    <div className="flex justify-between items-center py-[6px] w-full px-[20px]">
                      <div className="text-[#959595]">Availability</div>
                    </div>
                  }
                />
              </SelectionGroup>
              <div className="flex justify-between items-center">
                <div className="text-[24px]">Monthly Pricing</div>
                <div
                  className="underline"
                  onClick={() => setShowPriceEditModal(true)}
                >
                  Edit
                </div>

                <Modal
                  show={showPriceEditModal}
                  centered
                  onHide={() => setShowPriceEditModal(false)}
                >
                  <Modal.Body>
                    <div className="p-[18px] w-[400px]">
                      <div className="w-full flex justify-between items-center">
                        <div className="text-[24px] font-bold">
                          Edit Monthly Price
                        </div>
                        <img src={closeIcon} />
                      </div>
                      <div className="p-[12px] rounded-[8px] border-[1px] border-[#5D00CF] my-[10px]">
                        <div>monthly price</div>
                        <div className="flex items-center font-semibold gap-[10px]">
                          <img src={NUSD} />
                          <div className="text-[24px]">NUSD 500</div>
                        </div>
                      </div>
                      <div className="text-[#959595] my-[10px]">
                        *The price the guest sees could be lower than the
                        minimum nightly price you set if you have discounts or
                        promotions.
                      </div>
                      <div className="bg-[#5D00CF] text-white text-center rounded-[16px] py-[12px]">
                        Done
                      </div>
                    </div>
                  </Modal.Body>
                </Modal>
              </div>
              <div className="p-[12px] rounded-[8px] shadow-md">
                <div>Select monthly price</div>
                <div className="flex items-center gap-[12px]">
                  <img src={NUSD} />
                  <div className="text-[28px]">NUSD 500</div>
                </div>
              </div>
              <div className="bg-[#E3E3E3] w-full h-[1px]" />
              <div className="text-[18px]">Discount</div>
              <div className="text-[#5A5A5A] text-[14px]">
                Adjust your pricing to attract more guests.
              </div>
              <div className="p-[12px] rounded-[8px] shadow-md">
                <div className="text-[18px]">12 Month</div>
                <div className="text-[#959595]">For 7 nights or more</div>
                <div className="flex items-end justify-between">
                  <div className="text-[20px] font-bold">12%</div>
                  <div className="text-[#5A5A5A] text-[14px]">
                    Weekly average is 6,899 NUSD
                  </div>
                </div>
              </div>
              <div className="p-[12px] rounded-[8px] shadow-md">
                <div className="text-[18px]">24 Month</div>
                <div className="text-[#959595]">For 28 nights or more</div>
                <div className="flex items-end justify-between">
                  <div className="text-[20px] font-bold">12%</div>
                  <div className="text-[#5A5A5A] text-[14px]">
                    Monthly average is 25,200 NUSD
                  </div>
                </div>
              </div>
            </> */}

                <RightBar />
              </div>
            </div>
          ) : (
            <></>
          )}

          {dashboardMode == 6 ? (
            <>
              <div className="bg-[#F6F6F6] rounded-[8px] w-full h-full flex gap-[5px]">
                <div className="w-full rounded-[8px] bg-white">
                  <Inbox />
                </div>
                <div className="w-[400px] rounded-[8px] bg-white p-[16px] space-y-[16px] overflow-auto sidebarheight hiddenscrollbar"></div>
              </div>
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}

      {headerMode == 5 ? (
        <>
          {dashboardMode == 0 ? (
            <>
              <div className="p-[16px] w-full h-full flex flex-col">
                <div className="bg-[#eeeeee] relative rounded-[8px]">
                  <div className="w-full flex justify-end">
                    <img src={imgBack} className="" />
                  </div>
                  <div className="absolute top-[10%] left-[2%] space-y-[20px] w-[50%]">
                    <div className="text-[28px] font-bold">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </div>
                    <div>
                      Explore the best of the best in real estate with our
                      recommended properties.
                    </div>
                    <div className="bg-[#5D00CF] text-white px-[14px] py-[8px] w-max rounded-[16px]">
                      Explore
                    </div>
                  </div>
                </div>

                <div className="flex w-full justify-between my-[10px]">
                  <div>Recommended properties</div>
                  <div className="flex items-center py-[4px] px-[12px] rounded-[100px] shadow-md">
                    <div className="text-[#4C37C3]">See all</div>
                    <img src={colorarrow} className="" />
                  </div>
                </div>

                <div className="flex gap-[20px]">
                  <div className="p-[8px] rounded-[16px] shadow-md">
                    <img className="rounded-[16px] w-[200px]" src={imageCard} />
                  </div>
                  <div className="p-[8px] rounded-[16px] shadow-md">
                    <img className="rounded-[16px] w-[200px]" src={imageCard} />
                  </div>
                </div>

                <div className="flex w-full justify-between my-[10px]">
                  <div>Wishlist</div>
                  <div className="flex items-center py-[4px] px-[12px] rounded-[100px] shadow-md">
                    <div className="text-[#4C37C3]">See all</div>
                    <img src={colorarrow} className="" />
                  </div>
                </div>

                <div className="flex gap-[20px]">
                  <div className="p-[8px] rounded-[16px] shadow-md relative">
                    <img className="rounded-[16px] w-[200px]" src={imageCard} />
                    <div className="absolute top-[20px] right-[20px] z-[10]">
                      <img src={heart}></img>
                    </div>
                  </div>
                  <div className="p-[8px] rounded-[16px] shadow-md">
                    <img className="rounded-[16px] w-[200px]" src={imageCard} />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}

      {headerMode == 3 ? (
        <>
          {dashboardMode == 0 ? (
            <>
              <div className="w-full p-[16px]">
                <div className="font-bold text-[18px]">Rental Overview</div>
                <div className="flex justify-between my-[24px]">
                  <div>
                    <SelectionGroup
                      defaultItem={2}
                      className="p-[6px] shadow-md gap-[8px] rounded-[16px] flex w-max text-[#959595] items-center"
                    >
                      <SelectionItem
                        SelectedItem={
                          <div className="w-[120px] rounded-[10px] flex items-center justify-between gap-[10px] px-[10px] py-[4px] shadow-md font-bold text-black">
                            <div>Upcoming</div>
                            <img src={light}></img>
                          </div>
                        }
                        UnselectedItem={
                          <div className="w-[120px] rounded-[10px] flex items-center justify-between gap-[10px] px-[10px] py-[4px]">
                            <div>Upcoming</div>
                          </div>
                        }
                      />
                      <SelectionItem
                        SelectedItem={
                          <div className="w-[120px] rounded-[10px] flex items-center justify-between gap-[10px] px-[10px] py-[4px] shadow-md font-bold text-black">
                            <div>Current</div>
                            <img src={light}></img>
                          </div>
                        }
                        UnselectedItem={
                          <div className="w-[120px] rounded-[10px] flex items-center justify-between gap-[10px] px-[10px] py-[4px]">
                            <div>Current</div>
                          </div>
                        }
                      />
                      <SelectionItem
                        SelectedItem={
                          <div className="w-[120px] rounded-[10px] flex items-center justify-between gap-[10px] px-[10px] py-[4px] shadow-md font-bold text-black">
                            <div>Ended</div>
                            <img src={light}></img>
                          </div>
                        }
                        UnselectedItem={
                          <div className="w-[120px] rounded-[10px] flex items-center justify-between gap-[10px] px-[10px] py-[4px]">
                            <div>Ended</div>
                          </div>
                        }
                      />
                      <SelectionItem
                        SelectedItem={
                          <div className="w-[120px] rounded-[10px] flex items-center justify-between gap-[10px] px-[10px] py-[4px] shadow-md font-bold text-black">
                            <div>All</div>
                            <img src={light}></img>
                          </div>
                        }
                        UnselectedItem={
                          <div className="w-[120px] rounded-[10px] flex items-center justify-between gap-[10px] px-[10px] py-[4px]">
                            <div>All</div>
                          </div>
                        }
                      />
                    </SelectionGroup>
                  </div>

                  <div className="flex items-center gap-[20px]">
                    <div className="flex items-center shadow-md rounded-[4px] px-[12px] py-[6px] gap-[12px]">
                      <img src={search}></img>
                      <input placeholder="Search" className="w-full" />
                      <img src={slash}></img>
                    </div>

                    <div className="items-center flex">
                      <div className="p-[8px] bg-[#F2F2F2]">
                        <img src={window}></img>
                      </div>
                      <div className="p-[8px]">
                        <img src={list}></img>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex">
                  <div className="w-[400px]">
                    <PropertyItem />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
