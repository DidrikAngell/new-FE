import NUSD from "../assets/images/NUSD.png";

export const InboxItem = ({ selected }) => {
  let back, shadowBack;
  if (selected) {
    back = "bg-[#F6F6F6]";
    shadowBack = "shadow-md bg-white";
  } else {
    back = "bg-white";
    shadowBack = "";
  }

  return (
    <div
      className={`w-full p-[16px] ${back} space-y-[12px] rounded-[4px] shadow-md`}
    >
      <div className="w-full flex items-center justify-between">
        <div className="px-[12px] py-[4px] rounded-[8px] border-[1px] border-[#38A569] text-[#38A569]">
          Inquiry
        </div>
        <div className="text-[#B6B6B6]">7:11 PM</div>
      </div>
      <div className="font-bold">sei14zd...0qzk</div>
      <div>
        <div className="text-[#B6B6B6]">Modern Apartment in Bergen</div>
        <div className="text-[#B6B6B6]">Feb 4 - Feb 6 (2 nights)</div>
        <div className="flex items-center gap-[10px]">
          <img src={NUSD} />
          <div className={`p-[4px] rounded-[8px] font-bold ${shadowBack}`}>
            1000
          </div>
          <div className="text-[#B6B6B6]">NUSD</div>
        </div>
      </div>
    </div>
  );
};
