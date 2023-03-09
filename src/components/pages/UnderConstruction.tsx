import ReportsIcon from "../../assets/svg/svgr/Danger";

interface Prop {
  name: string;
}

export default (props: Prop) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-16 md:p-0">
      <div className="flex items-center justify-center rounded-full bg-primary p-4">
        <ReportsIcon />
      </div>
      <div className="text-lg text-[#1818196B]">
        {`${props.name.slice(0, 1).toUpperCase()}${props.name.slice(1)}`} page
        is not in scope of this project
      </div>
    </div>
  );
};
