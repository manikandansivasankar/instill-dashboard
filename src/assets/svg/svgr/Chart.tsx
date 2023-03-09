import { SVGProps } from "react";

interface SvgProp extends SVGProps<SVGSVGElement> {
  isActive?: boolean;
  removeBg?: boolean;
}

const SvgChart = (props: SvgProp) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {!props.removeBg && (
      <path
        opacity={0.4}
        d="M16.676 2H7.333C3.93 2 2 3.929 2 7.333v9.334C2 20.07 3.929 22 7.333 22h9.343C20.08 22 22 20.071 22 16.667V7.333C22 3.93 20.08 2 16.676 2"
        fill="#fff"
        fillOpacity={!props.isActive ? 0.7 : 1}
      />
    )}
    <path
      d="M7.369 9.369a.833.833 0 0 0-.827.835v6.872a.83.83 0 0 0 1.662 0v-6.872a.835.835 0 0 0-.835-.835M12.035 6.089a.833.833 0 0 0-.826.836v10.15a.83.83 0 0 0 1.662 0V6.926a.835.835 0 0 0-.836-.836M16.64 12.996a.835.835 0 0 0-.836.835v3.245a.83.83 0 0 0 1.663 0V13.83a.833.833 0 0 0-.827-.835"
      fill="#fff"
      fillOpacity={!props.isActive ? 0.7 : 1}
    />
  </svg>
);
export default SvgChart;
