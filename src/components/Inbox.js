import search from "../assets/images/tabler-icon-search.png";
import slash from "../assets/images/slash.png";
import avatar from "../assets/images/Profile.png";
import { InboxItem } from "./InboxItem";
import { SelectionGroup, SelectionItem } from "./Selection";
import { ReceivedMessage, SentMessage } from "./Messages";

import axios from "axios";
import { useState } from "react";

export const Inbox = () => {
  const [text, setText] = useState("");

  const sendMessage = async () => {
    await axios.post("http://localhost:7000/chat/sendMessage", {
      id: "656a4322ab787f94ba337c63",
      newMessage: {
        sender: "nibi1ut7wem6f3zr7wk274tjfcd4drp3wnw825nuppt",
        generatedTime: Date.now(),
        text: text,
      },
      personOne: "nibi1ut7wem6f3zr7wk274tjfcd4drp3wnw825nuppt",
      personTwo: "nibi1ejt9zv8apvfh7vjr0zlsn48ka79wg4jw0pc820",
    });
  };

  return (
    <div className="w-full flex">
      <div className="min-w-[330px] sidebarheight overflow-auto scrollbarwidth px-[16px]">
        <div className="fixed bg-white w-[302px] pt-[16px] ml-[-2px]">
          <div className="text-[20px]">All Message</div>
          <div className="flex items-center shadow-md rounded-[4px] px-[12px] py-[6px] gap-[12px] my-[20px]">
            <img src={search}></img>
            <input placeholder="Search" className="w-full" />
            <img src={slash}></img>
          </div>
        </div>

        <SelectionGroup defaultItem={0} className="mt-[120px]">
          <SelectionItem
            SelectedItem={<InboxItem selected={true} />}
            UnselectedItem={<InboxItem />}
          />
          <div className="w-full h-[1px] bg-[#E3E3E3] my-[16px]" />
          <SelectionItem
            SelectedItem={<InboxItem selected={true} />}
            UnselectedItem={<InboxItem />}
          />
          <div className="w-full h-[1px] bg-[#E3E3E3] my-[16px]" />

          <SelectionItem
            SelectedItem={<InboxItem selected={true} />}
            UnselectedItem={<InboxItem />}
          />
          <div className="w-full h-[1px] bg-[#E3E3E3] my-[16px]" />

          <SelectionItem
            SelectedItem={<InboxItem selected={true} />}
            UnselectedItem={<InboxItem />}
          />
          <div className="w-full h-[1px] bg-[#E3E3E3] my-[16px]" />

          <SelectionItem
            SelectedItem={<InboxItem selected={true} />}
            UnselectedItem={<InboxItem />}
          />
        </SelectionGroup>
      </div>
      <div className="w-full sidebarheight bg-white p-[8px] ">
        <div className="bg-[#F6F6F6] border-[1px] border-[#E3E3E3] rounded-[8px] w-full h-full relative">
          <div className="flex items-center bg-white w-full rounded-t-[8px] gap-[10px] border-b-[1px] border-[#E3E3E3]">
            <img src={avatar} />
            <div>nibi1zx28q73q6s2dun2z8wjwqyztgsjpmjdj6xq2qn</div>
          </div>

          <div className="p-[8px] messageboxheight overflow-auto scrollbarwidth">
            <div className="w-full text-center text-[#B6B6B6] my-[10px]">
              Today
            </div>

            <ReceivedMessage />
            <SentMessage />
            <SentMessage />
            <ReceivedMessage />
            <SentMessage />
            <SentMessage />
            <SentMessage />
            <ReceivedMessage />
            <SentMessage />
            <SentMessage />
            <SentMessage />
            <SentMessage />
          </div>

          <div className="flex w-full px-[20px] gap-[16px] absolute bottom-[20px]">
            <div className="rounded-[5px] px-[12px] py-[9px] w-full bg-white shadow-md">
              <input
                placeholder="Type Message.."
                className="w-full"
                onChange={(e) => setText(e.target.value)}
                value={text}
              />
            </div>
            <div
              className="text-white rounded-[100px] bg-[#5D00CF] w-[150px] text-center py-[8px] cursor-pointer"
              onClick={() => sendMessage()}
            >
              Send
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
