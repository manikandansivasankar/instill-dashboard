import { SVGProps } from "react";

interface SvgProp extends SVGProps<SVGSVGElement> {
  isActive?: boolean;
}

const SvgAdd2 = (props: SvgProp) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#Add2_svg__a)">
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z" fill="currentColor" />
    </g>
    <defs>
      <clipPath id="Add2_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAdd2;
