import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export const MainLayout = () => {
  return (
    <div className="w-full">
      <Header />
      <div className="pt-[60px]">
        <Outlet />
      </div>
    </div>
  );
};
