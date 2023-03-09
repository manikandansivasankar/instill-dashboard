import { SVGProps } from "react";

interface SvgProp extends SVGProps<SVGSVGElement> {
  isActive?: boolean;
}

const SvgGermany = (props: SvgProp) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M24 9H0V4a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v5Z" fill="#000" />
    <path d="M24 9H0v6h24V9Z" fill="#E00" />
    <path d="M24 20a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-5h24v5Z" fill="#FDCF00" />
  </svg>
);
export default SvgGermany;
