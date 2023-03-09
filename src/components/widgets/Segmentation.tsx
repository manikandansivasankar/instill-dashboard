import Right from "../../assets/svg/svgr/ArrowRight";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="flex h-full w-full flex-col justify-between gap-2 rounded-xl border border-[#E6E7E9] bg-white">
      <div className="flex flex-col gap-2 px-5 pt-5">
        <div className="text-lg font-medium text-[#181819E5]">Segmentation</div>
        <div className="text-base font-normal text-[#1818196B]">All users</div>
      </div>
      <div className="relative m-5 my-8 flex flex-1 items-center justify-between">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-[#F0F1F2]"></div>
            <div className="text-sm font-medium text-[#F0F1F2]">
              Not specified
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-[#CACCF7]"></div>
            <div className="text-sm font-medium text-[#CACCF7]">Male</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-[#828AED]"></div>
            <div className="text-sm font-medium text-[#828AED]">Female</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-[#4A4DE6]"></div>
            <div className="text-sm font-medium text-[#4A4DE6]">Other</div>
          </div>
        </div>
        <div className="relative h-full w-16 rounded-lg">
          <div className="absolute bottom-0 left-0 z-[1] h-[100%] w-full rounded-lg bg-[#F0F1F2]"></div>
          <div className="absolute bottom-0 left-0 z-[2] h-[80%] w-full rounded-lg bg-[#CACCF7]"></div>
          <div className="absolute bottom-0 left-0 z-[3] h-[60%] w-full rounded-lg bg-[#828AED]"></div>
          <div className="absolute bottom-0 left-0 z-[4] h-[40%] w-full rounded-lg bg-[#4A4DE6]"></div>
        </div>
      </div>
      <Link
        to="/segmentation"
        className="border-tb-[#E6E7E9] flex w-full items-center justify-end gap-2 self-end border-t p-5 text-primary"
      >
        <div className="font-medium">View all</div>
        <Right />
      </Link>
    </div>
  );
};
