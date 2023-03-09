import SearchIcon from "../../assets/svg/svgr/Search";
import {
  UserCard,
  Countries,
  FinalComponent,
  Satisfaction,
  Segmentation,
  Graph,
} from "../widgets";

export default () => {
  return (
    <div className="p-6 md:p-8 lg:p-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-lg font-medium text-[#181819E5] opacity-90 md:text-xl">
            Hello Moe
          </div>
          <div className="rounded-full bg-[#FFECB3] p-[2px] px-2 text-xs font-medium text-[#ED6700] md:p-[5.5px] md:px-3 md:text-sm">
            Premium
          </div>
        </div>
        <div className="relative">
          <input
            className="w-[160px] rounded-lg border border-[#E6E7E9] p-2 pl-9 text-base text-[#1818196B] placeholder:text-base placeholder:text-[#1818196B] focus:outline-none focus:ring-2 focus:ring-primary-light/80 md:w-[200px] md:p-2 md:pl-9 lg:w-[240px] lg:p-3 lg:pl-10"
            placeholder="Search"
          ></input>
          <SearchIcon className="absolute top-1/2 left-2 translate-y-[-50%] md:left-3" />
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <UserCard />
        <UserCard />
        <UserCard />
        <div className="col-span-1 md:col-span-2">
          <Graph />
        </div>
        <Countries />
        <Segmentation />
        <Satisfaction />
        <FinalComponent />
      </div>
    </div>
  );
};
