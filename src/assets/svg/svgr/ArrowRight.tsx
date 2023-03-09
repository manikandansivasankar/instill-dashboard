import { SVGProps } from "react";

interface SvgProp extends SVGProps<SVGSVGElement> {
  isActive?: boolean;
}

const SvgArrowRight = (props: SvgProp) => (
  <svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#ArrowRight_svg__a)">
      <path
        d="M6.442 12.443 9.877 9 6.442 5.558 7.5 4.5 12 9l-4.5 4.5-1.058-1.057Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="ArrowRight_svg__a">
        <path fill="#fff" d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowRight;
