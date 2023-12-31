import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";
import { useDispatch } from "react-redux";
import {
  setNewMessage,
  setReadingNow,
  setMessagesToSend,
} from "../Actions/MessageSlice";

export const MainLayout = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const account = useSelector((state) => state.auth.account);
  const messagesToSend = useSelector((state) => state.messages.messagesToSend);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    if (isAuthenticated) {
      const temp_socket = io("http://57.180.34.157:443");
      temp_socket.on("connect", () => {
        temp_socket.emit("connectedAccount", account);
      });
      temp_socket.on("messageReceived", (res) => {
        // console.log(res);
        dispatch(setNewMessage(res));
      });
      temp_socket.on("readingNow", (res) => {
        dispatch(setReadingNow(res));
      });
      setSocket(temp_socket);
    }
    if (!isAuthenticated) {
      if (socket !== null) socket.disconnect();
      navigate("/landing");
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (messagesToSend) {
      if (socket !== null) socket.emit("sendMessage", messagesToSend);
      dispatch(setMessagesToSend(null));
    }
  }, [messagesToSend]);

  return (
    <div className="w-full">
      <Header />
      <div className="pt-[60px]">
        <Outlet />
      </div>
    </div>
  );
};
