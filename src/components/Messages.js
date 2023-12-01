export const ReceivedMessage = () => {
  return (
    <div className="space-y-[10px]">
      <div className="w-full flex justify-start">
        <div className="px-[12px] py-[8px] rounded-[5px] rounded-bl-[0px] bg-white">
          Is this something that can be rented?
        </div>
      </div>
      <div className="w-full flex justify-start">
        <div className="text-[#B6B6B6]">10:00</div>
      </div>
    </div>
  );
};

export const SentMessage = () => {
  return (
    <div className="space-y-[10px]">
      <div className="w-full flex justify-end">
        <div className="px-[12px] py-[8px] rounded-[5px] rounded-br-[0px] text-white bg-[#7C4AF1]">
          Yes, you can rent this
        </div>
      </div>
      <div className="w-full flex justify-end">
        <div className="text-[#B6B6B6]">10:00</div>
      </div>
    </div>
  );
};
