import { SVGProps } from "react";

interface SvgProp extends SVGProps<SVGSVGElement> {
  isActive?: boolean;
}

const SvgFrance = (props: SvgProp) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M8 21H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7v18Z" fill="#01209F" />
    <path d="M24 20a1 1 0 0 1-1 1h-7V3h7a1 1 0 0 1 1 1v16Z" fill="#EF4234" />
    <path d="M16 3H8v18h8V3Z" fill="#E6E6E6" />
  </svg>
);
export default SvgFrance;
