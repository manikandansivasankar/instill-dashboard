import Belgium from "../../assets/svg/Belgium.svg";
import France from "../../assets/svg/France.svg";
import Usa from "../../assets/svg/Usa.svg";
import Germany from "../../assets/svg/Germany.svg";
import Right from "../../assets/svg/svgr/ArrowRight";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="flex h-full w-full flex-col justify-between gap-2 rounded-xl border border-[#E6E7E9] bg-white">
      <div className="flex flex-col gap-2 px-5 pt-5">
        <div className="text-lg font-medium text-[#181819E5]">
          Top countries
        </div>
        <div className="text-base font-normal text-[#1818196B]">Favourites</div>
      </div>
      <div className="flex flex-1 flex-col">
        <div className="flex items-center py-2">
          <img className="pl-5" src={Belgium} />
          <div className="ml-4 flex flex-1 items-center justify-between gap-4 border-b border-b-[#E6E7E9] py-2 pr-5">
            <div>Belgium</div>
            <div>7.5k</div>
          </div>
        </div>
        <div className="flex items-center py-2">
          <img className="pl-5" src={France} />
          <div className="ml-4 flex flex-1 items-center justify-between gap-4 border-b border-b-[#E6E7E9] py-2 pr-5">
            <div>France</div>
            <div>7.5k</div>
          </div>
        </div>
        <div className="flex items-center py-2">
          <img className="pl-5" src={Usa} />
          <div className="ml-4 flex flex-1 items-center justify-between gap-4 border-b border-b-[#E6E7E9] py-2 pr-5">
            <div>USA</div>
            <div>7.5k</div>
          </div>
        </div>
        <div className="flex items-center py-2">
          <img className="pl-5" src={Germany} />
          <div className="ml-4 flex flex-1 items-center justify-between gap-4 border-b border-b-[#E6E7E9] py-2 pr-5">
            <div>Germany</div>
            <div>7.5k</div>
          </div>
        </div>
      </div>
      <Link
        to="/countries"
        className="border-tb-[#E6E7E9] flex w-full items-center justify-end gap-2 self-end border-t p-5 text-primary"
      >
        <div className="font-medium">View all</div>
        <Right />
      </Link>
    </div>
  );
};
