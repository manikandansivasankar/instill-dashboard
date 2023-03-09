import Add from "../../assets/svg/svgr/Add2";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-6 rounded-xl border border-[#E6E7E9] bg-white p-12">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EAEAFD]">
        <Add />
      </div>
      <div className="text-lg text-[#181819E5]">No components created yet</div>
      <div className="flex flex-col items-center justify-center gap-1">
        <div className="text-sm text-[#1818196B]">
          Simply create your first component
        </div>
        <div className="text-sm text-[#1818196B]">Just click on the button</div>
      </div>
      <Link
        to="/components"
        className="flex cursor-pointer items-center justify-center rounded-lg bg-primary px-8 py-2 font-medium text-white hover:bg-primary-light"
      >
        <Add />
        <div className="rounded-lg pl-4">Add component</div>
      </Link>
    </div>
  );
};
