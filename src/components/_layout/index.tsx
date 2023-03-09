import { useEffect } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import MobileLayout from "./Mobile";
import TabletLayout from "./Tablet";
import LargeLayout from "./Large";

export default () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      navigate("/dashboard");
    }
  }, [pathname]);

  return (
    <div className="h-full">
      <div className="flex flex-col md:hidden">
        <MobileLayout />
      </div>
      <div className="hidden md:flex lg:hidden">
        <TabletLayout />
      </div>
      <div className="hidden md:hidden lg:flex">
        <LargeLayout />
      </div>
    </div>
  );
};
