import Avatar from "../../assets/images/image3.png";
import TrendingUpIcon from "../../assets/svg/svgr/TrendingUp";
import TrendingDownIcon from "../../assets/svg/svgr/TrendingDown";

export default () => {
  return (
    <div className="w-full self-center rounded-xl border border-[#E6E7E9] bg-white p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={Avatar} className="h-10" />
          <div className="flex flex-col gap-1">
            <div className="font-medium text-[#181819E5]">Jane Smith</div>
            <div className="text-sm font-medium text-[#1818196B]">
              Sales manager - France
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <TrendingUpIcon />
          <div className="text-lg font-medium text-[#4CAF50]">$3500.00</div>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-2">
        <div className="text-sm font-medium tracking-[-0.3px] text-[#181819B2]">
          3 of 6 tasks completed
        </div>
        <div className="relative h-[6px] w-full rounded-full bg-[#F0F1F2]">
          <div className="absolute h-full w-1/2 rounded-l-full rounded-r-full bg-gradient-to-r from-[#4A4DE6] to-[#60B0FA]"></div>
        </div>
      </div>
    </div>
  );
};
