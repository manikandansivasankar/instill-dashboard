import InstillIcon from "../../assets/svg/LogoBlack.svg";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-4">
      <img src={InstillIcon}></img>
      <div className="flex items-center gap-4 border-t-[1px] border-t-black/20 p-4">
        <div className="text-3xl text-black/50">404</div>
        <div className="text-black/40">Page not found</div>
      </div>
      <Link
        to="/"
        className="hover: mt-4 rounded-md border border-black/20 p-2 px-3 text-black/40 hover:text-black/60"
      >
        Go to dashboard
      </Link>
    </div>
  );
};
