import { SVGProps } from "react";

interface SvgProp extends SVGProps<SVGSVGElement> {
  isActive?: boolean;
}

const SvgBelgium = (props: SvgProp) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M16 3H8v18h8V3Z" fill="#FFDE00" />
    <path d="M24 20a1 1 0 0 1-1 1h-7V3h7a1 1 0 0 1 1 1v16Z" fill="#E00" />
    <path d="M8 21H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7v18Z" fill="#000" />
  </svg>
);
export default SvgBelgium;
