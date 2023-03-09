import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate, useLocation, Outlet, Link } from "react-router-dom";
import UnfoldIcon from "../../assets/svg/UnfoldMore.svg";
import OverviewIcon from "../../assets/svg/svgr/Chart";
import ChatIcon from "../../assets/svg/svgr/Chat";
import DashboardIcon from "../../assets/svg/svgr/Graph";
import TeamIcon from "../../assets/svg/svgr/User";
import TaskIcon from "../../assets/svg/svgr/Document";
import ReportsIcon from "../../assets/svg/svgr/Danger";
import SettingsIcon from "../../assets/svg/svgr/Setting";
import Avatar from "../../assets/images/image3.png";
import Logo from "../../assets/svg/LogoWhite.svg";

export default () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions((state) => !state);
  };

  useEffect(() => {
    if (pathname === "/") {
      navigate("/dashboard");
    }
  }, [pathname]);

  useEffect(() => {
    // Close more option when triggering window resize
    const closeOptions = () => {
      setShowOptions(false);
    };
    if (showOptions) {
      window.addEventListener("resize", closeOptions);
      return () => {
        window.removeEventListener("resize", closeOptions);
      };
    }
  }, [showOptions]);

  const moreModalRoot = document.getElementById("moreModalRoot");

  return (
    <>
      <div className="fixed z-10 flex h-[60px] w-full items-center bg-primary p-2 shadow-md shadow-primary-dark/20">
        <div
          onClick={toggleOptions}
          className={`m-1 flex h-10 w-10 rotate-90 cursor-pointer items-center justify-center rounded-md hover:bg-primary-dark`}
        >
          <OverviewIcon removeBg={true} className="text-white" />
        </div>
        <img src={Logo} className="m-1 h-12 p-2" />
        {moreModalRoot &&
          showOptions &&
          createPortal(
            <Options toggleOptions={toggleOptions} pathname={pathname} />,
            moreModalRoot
          )}
      </div>
      <div className="mt-[60px] flex-1">
        <Outlet />
      </div>
    </>
  );
};

interface OptionProps {
  toggleOptions: () => void;
  pathname: string;
}

const Options = (props: OptionProps) => {
  const { pathname } = props;

  const isDashboard = pathname === "/dashboard";
  const isOverview = pathname === "/overview";
  const isTeams = pathname === "/teams";
  const isChat = pathname === "/chat";
  const isTasks = pathname === "/tasks";
  const isSettings = pathname === "/settings";
  const isReports = pathname === "/reports";

  return (
    <div
      onClick={props.toggleOptions}
      className="fixed top-0 left-0 h-screen w-screen bg-black/20 hover:cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="fixed top-[70px] left-[10px] flex cursor-auto flex-col rounded-lg bg-primary p-3"
      >
        <Link
          to="dashboard"
          className="flex cursor-pointer items-center gap-4 rounded-md p-2 py-3 transition-colors hover:bg-primary-dark"
        >
          <DashboardIcon isActive={isDashboard} />
          <div
            className={`text-white ${
              !isDashboard ? "font-normal opacity-70" : "font-medium"
            }`}
          >
            Dashboard
          </div>
        </Link>
        <Link
          to="overview"
          className="flex cursor-pointer items-center gap-4 rounded-md p-2 py-3 transition-colors hover:bg-primary-dark"
        >
          <OverviewIcon isActive={isOverview} />
          <div
            className={`text-white ${
              !isOverview ? "font-normal opacity-70" : "font-medium"
            }`}
          >
            Overview
          </div>
        </Link>
        <Link
          to="chat"
          className="flex cursor-pointer items-center gap-4 rounded-md p-2 py-3 transition-colors hover:bg-primary-dark"
        >
          <ChatIcon isActive={isChat} />
          <div
            className={`text-white ${
              !isChat ? "font-normal opacity-70" : "font-medium"
            }`}
          >
            Chat
          </div>
          <div className="absolute right-6 flex h-5 w-5 items-center justify-center rounded-full bg-[#FFA000]">
            <span className="text-sm leading-[14px] text-white">5</span>
          </div>
        </Link>
        <div className="my-2 h-[1px] w-full bg-black/30"></div>
        <Link
          to="teams"
          className="flex cursor-pointer items-center gap-4 rounded-md p-2 py-3 transition-colors hover:bg-primary-dark"
        >
          <TeamIcon isActive={isTeams} />
          <div
            className={`text-white ${
              !isTeams ? "font-normal opacity-70" : "font-medium"
            }`}
          >
            Teams
          </div>
        </Link>
        <Link
          to="tasks"
          className="flex cursor-pointer items-center gap-4 rounded-md p-2 py-3 transition-colors hover:bg-primary-dark"
        >
          <TaskIcon isActive={isTasks} />
          <div
            className={`text-white ${
              !isTasks ? "font-normal opacity-70" : "font-medium"
            }`}
          >
            Tasks
          </div>
        </Link>
        <Link
          to="reports"
          className="flex cursor-pointer items-center gap-4 rounded-md p-2 py-3 transition-colors hover:bg-primary-dark"
        >
          <ReportsIcon isActive={isReports} />
          <div
            className={`text-white ${
              !isReports ? "font-normal opacity-70" : "font-medium"
            }`}
          >
            Reports
          </div>
        </Link>
        <Link
          to="settings"
          className="flex cursor-pointer items-center gap-4 rounded-md p-2 py-3 transition-colors hover:bg-primary-dark"
        >
          <SettingsIcon isActive={isSettings} />
          <div
            className={`text-white ${
              !isSettings ? "font-normal opacity-70" : "font-medium"
            }`}
          >
            Settings
          </div>
        </Link>
      </div>
    </div>
  );
};
