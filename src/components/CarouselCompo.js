import image from "../assets/images/image.jpg";
import image1 from "../assets/images/image.png";
import NUSD from "../assets/images/NUSD.png";
import LocationPin from "../assets/images/PropertyAddress/Pin, Location.png";
import icon from "../assets/images/icon.png";
import icon1 from "../assets/images/icon (1).png";
import icon2 from "../assets/images/icon (2).png";
import heart from "../assets/images/Frame 1000005004.png";

import btnnext from "../assets/images/carousel/Frame 1000005236.png";
import btnprev from "../assets/images/carousel/Frame 1000005237.png";
import NUSD1 from "../assets/images/carousel/Frame.png";

import Carousel from "react-bootstrap/Carousel";

import { useDispatch } from "react-redux";
import { setId } from "../Actions/PropertySlice";
import { useNavigate } from "react-router-dom";

export const CarouselCompo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div
      className="w-full shadow-md rounded-[10px] p-[10px] relative"
      onClick={() => {
        dispatch(setId("1"));
        navigate("/property");
      }}
    >
      <Carousel
        className="w-full"
        interval={null}
        fade={true}
        prevIcon={<img src={btnprev}></img>}
        nextIcon={<img src={btnnext}></img>}
      >
        <Carousel.Item>
          <img src={image} className="rounded-[10px] w-full h-[200px]"></img>
        </Carousel.Item>
        <Carousel.Item>
          <img src={image1} className="rounded-[10px] w-full h-[200px]"></img>
        </Carousel.Item>
      </Carousel>

      <div className="absolute top-[20px] right-[20px] z-[10]">
        <img src={heart}></img>
      </div>

      <div className="flex items-center ml-[10px] my-[10px] font-semibold text-[14px] gap-[10px]">
        <img src={NUSD1}></img>
        <div className="shadow-md px-[4px] py-[2px] rounded-[8px] text-[#5B1DEE] font-bold text-[16px]">
          10000
        </div>
        <div className="font-bold text-[16px]">NUSD</div>
        <div className="text-[#959595]">/month</div>
      </div>
      <div className="flex items-center ml-[10px] my-[10px] gap-[10px]">
        <img src={NUSD}></img>
        <div className="text-[#959595]">45000 NUSD Total</div>
      </div>
      <div className="flex items-center text-[#959595] ml-[10px] gap-[10px]">
        <img src={LocationPin}></img>
        <div>Los Angeles, CA</div>
      </div>
      <div className="flex items-center gap-[10px] text-[#959595] w-full">
        <img src={icon}></img>
        <div>350</div>

        <div className="w-[2px] h-[15px] bg-[#D9D9D9]"></div>
        <img src={icon1}></img>
        <div>5</div>
        <div className="w-[2px] h-[15px] bg-[#D9D9D9]"></div>

        <img src={icon2}></img>
        <div>1</div>
      </div>
    </div>
  );
};
