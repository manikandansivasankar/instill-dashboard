import { SVGProps } from "react";

interface SvgProp extends SVGProps<SVGSVGElement> {
  isActive?: boolean;
}

const SvgSearch = (props: SvgProp) => (
  <svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#Search_svg__a)">
      <path
        d="M11.625 10.5h-.592l-.21-.203a4.875 4.875 0 0 0 1.11-4.005C11.58 4.208 9.84 2.543 7.74 2.288A4.879 4.879 0 0 0 2.288 7.74c.255 2.1 1.92 3.84 4.005 4.192a4.875 4.875 0 0 0 4.004-1.11l.203.21v.593l3.188 3.188a.792.792 0 0 0 1.117 0 .792.792 0 0 0 0-1.118l-3.18-3.195Zm-4.5 0A3.37 3.37 0 0 1 3.75 7.125 3.37 3.37 0 0 1 7.125 3.75 3.37 3.37 0 0 1 10.5 7.125 3.37 3.37 0 0 1 7.125 10.5Z"
        fill="#181819"
        fillOpacity={0.9}
      />
    </g>
    <defs>
      <clipPath id="Search_svg__a">
        <path fill="#fff" d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSearch;
