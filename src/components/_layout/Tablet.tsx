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
import Logo from "../../assets/images/InstillIcon.png";

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
      <div className="flex h-screen flex-col items-center justify-between gap-2 bg-primary p-2">
        <img src={Logo} className="p-2" />
        <div className="flex flex-1 flex-col border-t border-b border-white/20">
          <div className="my-3 flex flex-col items-center gap-2">
            <Link
              to="dashboard"
              title="Dashboard"
              className={`flex h-12 w-12 cursor-pointer items-center justify-center gap-4 rounded-md transition-colors hover:bg-primary-dark ${
                isDashboard && "bg-primary-dark"
              }`}
            >
              <DashboardIcon isActive={isDashboard} />
            </Link>
            <Link
              to="overview"
              title="Overview"
              className={`flex h-12 w-12 cursor-pointer items-center justify-center gap-4 rounded-md p-2 py-3 transition-colors hover:bg-primary-dark ${
                isOverview && "bg-primary-dark"
              }`}
            >
              <OverviewIcon isActive={isOverview} />
            </Link>
            <Link
              to="chat"
              title="Chat"
              className={`relative flex h-12 w-12 cursor-pointer items-center justify-center gap-4 rounded-md p-2 py-3 transition-colors hover:bg-primary-dark ${
                isChat && "bg-primary-dark"
              }`}
            >
              <ChatIcon isActive={isChat} />
              <div className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#FFA000]">
                <span className="text-xs leading-[14px] text-white">5</span>
              </div>
            </Link>
            <Link
              to="teams"
              title="Teams"
              className={`flex h-12 w-12 cursor-pointer items-center justify-center gap-4 rounded-md p-2 py-3 transition-colors hover:bg-primary-dark ${
                isTeams && "bg-primary-dark"
              }`}
            >
              <TeamIcon isActive={isTeams} />
            </Link>
          </div>
          <div className="flex flex-col items-center gap-2 border-t border-white/20 py-3">
            <Link
              to="tasks"
              title="Tasks"
              className={`flex h-12 w-12 cursor-pointer items-center justify-center gap-4 rounded-md p-2 py-3 transition-colors hover:bg-primary-dark ${
                isTasks && "bg-primary-dark"
              }`}
            >
              <TaskIcon isActive={isTasks} />
            </Link>
            <Link
              to="reports"
              title="Reports"
              className={`flex h-12 w-12 cursor-pointer items-center justify-center gap-4 rounded-md p-2 py-3 transition-colors hover:bg-primary-dark ${
                isReports && "bg-primary-dark"
              }`}
            >
              <ReportsIcon isActive={isReports} />
            </Link>
            <Link
              to="settings"
              title="Settings"
              className={`flex h-12 w-12 cursor-pointer items-center justify-center gap-4 rounded-md p-2 py-3 transition-colors hover:bg-primary-dark ${
                isSettings && "bg-primary-dark"
              }`}
            >
              <SettingsIcon isActive={isSettings} />
            </Link>
          </div>
        </div>
        <div className="mb-2 flex cursor-pointer items-center justify-between gap-4 pt-2">
          <img src={Avatar}></img>
        </div>
      </div>
      <div className="h-screen flex-1 overflow-scroll">
        <Outlet />
      </div>
    </>
  );
};
