import { SVGProps } from "react";

interface SvgProp extends SVGProps<SVGSVGElement> {
  isActive?: boolean;
}

const SvgTrendingDown = (props: SvgProp) => (
  <svg
    width={25}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#TrendingDown_svg__a)">
      <path
        d="m16.5 18 2.29-2.29-4.88-4.88-4 4L2.5 7.41 3.91 6l6 6 4-4 6.3 6.29L22.5 12v6h-6Z"
        fill="#DD425A"
      />
    </g>
    <defs>
      <clipPath id="TrendingDown_svg__a">
        <path fill="#fff" transform="translate(.5)" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTrendingDown;
