import { SVGProps } from "react";

interface SvgProp extends SVGProps<SVGSVGElement> {
  isActive?: boolean;
}

const SvgDocument = (props: SvgProp) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity={0.4}
      d="M16.191 2H7.81C4.77 2 3 3.78 3 6.83v10.33C3 20.26 4.77 22 7.81 22h8.381C19.28 22 21 20.26 21 17.16V6.83C21 3.78 19.28 2 16.191 2"
      fill="#fff"
      fillOpacity={!props.isActive ? 0.7 : 1}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.08 6.65v.01a.78.78 0 0 0 0 1.56h2.989c.431 0 .781-.35.781-.791a.781.781 0 0 0-.781-.779H8.08Zm7.84 6.09H8.08a.78.78 0 0 1 0-1.561h7.84a.781.781 0 0 1 0 1.561Zm0 4.57H8.08c-.3.04-.59-.11-.75-.36a.795.795 0 0 1 .75-1.21h7.84c.399.04.7.38.7.79 0 .399-.301.74-.7.78Z"
      fill="#fff"
      fillOpacity={!props.isActive ? 0.7 : 1}
    />
  </svg>
);
export default SvgDocument;
