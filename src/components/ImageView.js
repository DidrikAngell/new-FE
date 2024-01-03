import image from "../assets/images/image.png";
import { useSelector } from "react-redux";

export const ImageView = ({ counts = 5 }) => {
  const imagesHash = useSelector((state) => state.nft.metaData?.images);

  const gateWay = "https://olive-raw-pony-643.mypinata.cloud/ipfs/";

  const images = imagesHash?.split(",");

  console.log(counts);
  return (
    <>
      {images ? (
        <div
          className={`shadow-md bg-white p-[8px] rounded-[10px] ${
            counts > 2 ? "grid grid-cols-2" : ""
          } gap-[20px]`}
        >
          {counts == 1 ? (
            <img
              src={gateWay + images[0]}
              className="w-full h-full rounded-[10px]"
            ></img>
          ) : (
            <></>
          )}
          {counts == 3 ? (
            <>
              <img src={gateWay + images[0]} className="w-full h-full"></img>
              <div className="space-y-[10px]">
                {images.map((item, i) => {
                  if (i > 0 && i < 3)
                    return <img src={gateWay + item} className="w-full"></img>;
                })}
              </div>
            </>
          ) : (
            <></>
          )}
          {counts == 5 ? (
            <>
              <img src={gateWay + images[0]} className="w-full h-full"></img>
              <div className="grid grid-cols-2 gap-[20px]">
                {images.map((item, i) => {
                  if (i > 0 && i < 5)
                    return <img src={gateWay + item} className="w-full"></img>;
                })}
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
