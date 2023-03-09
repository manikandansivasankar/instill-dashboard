import { useEffect } from "react";
import { useNavigate, useLocation, Outlet, Link } from "react-router-dom";
import UnfoldIcon from "../../assets/svg/svgr/UnfoldMore";
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

  const isDashboard = pathname === "/dashboard";
  const isOverview = pathname === "/overview";
  const isTeams = pathname === "/teams";
  const isChat = pathname === "/chat";
  const isTasks = pathname === "/tasks";
  const isSettings = pathname === "/settings";
  const isReports = pathname === "/reports";

  useEffect(() => {
    if (pathname === "/") {
      navigate("/dashboard");
    }
  }, [pathname]);

  return (
    <>
      <div className="flex h-screen w-[250px] flex-col justify-between gap-3 bg-primary p-6">
        <img src={Logo} className="h-16 self-start p-2" />
        <div className="flex flex-1 flex-col justify-between border-t border-b border-white/20 py-3">
          <div className="">
            <div className="mt-3 flex items-center gap-4 rounded-md bg-primary-light p-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ECD348]">
                <span>I</span>
              </div>
              <div className="flex-1">
                <div className="text-white">Instill</div>
                <div className="text-sm text-white opacity-40">
                  general team
                </div>
              </div>
              <div className="cursor-pointer rounded-md py-1 transition-colors hover:bg-primary-dark">
                <UnfoldIcon />
              </div>
            </div>
            <div className="my-5">
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
                className="relative flex cursor-pointer items-center gap-4 rounded-md p-2 py-3 transition-colors hover:bg-primary-dark"
              >
                <ChatIcon isActive={isChat} />
                <div
                  className={`text-white ${
                    !isChat ? "font-normal opacity-70" : "font-medium"
                  }`}
                >
                  Chat
                </div>
                <div className="absolute right-5 flex h-6 w-6 items-center justify-center rounded-full bg-[#FFA000]">
                  <span className="text-sm leading-[14px] text-white">5</span>
                </div>
              </Link>
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
                  Team
                </div>
              </Link>
            </div>
            <div className="my-1">
              <div className="mb-2 text-sm font-medium text-white/40">
                SHORTCUT
              </div>
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
          <div className="mb-4 flex flex-col rounded-lg bg-primary-dark p-5">
            <div className="mb-[-6px] flex items-center justify-between">
              <span className="text-white">Storage</span>
              <Link
                to="upgrade"
                className="cursor-pointer rounded-md p-2 text-sm text-white/70 hover:bg-primary-light"
              >
                Upgrade
              </Link>
            </div>
            <div className="my-3 flex gap-2">
              <span className="text-sm text-white">3.4 GB</span>
              <span className="text-sm text-white/40">of 15 GB</span>
            </div>
            <div className="relative h-1 w-full bg-white/20">
              <div className="absolute h-full w-1/2 bg-white/70"></div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 pt-2">
          <img src={Avatar}></img>
          <div className="flex-1 text-white">Jane Smith</div>
          <div className="cursor-pointer rounded-md py-1 transition-colors hover:bg-primary-dark">
            <UnfoldIcon />
          </div>
        </div>
      </div>
      <div className="h-screen flex-1 overflow-scroll">
        <Outlet />
      </div>
    </>
  );
};
