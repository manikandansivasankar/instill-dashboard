import { SVGProps } from "react";

interface SvgProp extends SVGProps<SVGSVGElement> {
  isActive?: boolean;
}

const SvgAdd1 = (props: SvgProp) => (
  <svg
    width={25}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#Add1_svg__a)">
      <path d="M19.5 13h-6v6h-2v-6h-6v-2h6V5h2v6h6v2Z" fill="#fff" />
    </g>
    <defs>
      <clipPath id="Add1_svg__a">
        <path fill="#fff" transform="translate(.5)" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAdd1;
