import image from "../assets/images/image.png";

export const ImageView = () => {
  return (
    <div className="shadow-md bg-white p-[16px] rounded-[10px] grid grid-cols-2 gap-[20px]">
      <img src={image} className="w-full"></img>
      <div className="grid grid-cols-2 gap-[20px]">
        <img src={image} className="w-full"></img>
        <img src={image} className="w-full"></img>
        <img src={image} className="w-full"></img>
        <img src={image} className="w-full"></img>
      </div>
    </div>
  );
};
