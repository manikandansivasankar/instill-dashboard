import { SVGProps } from "react";

interface SvgProp extends SVGProps<SVGSVGElement> {
  isActive?: boolean;
}

const SvgDanger = (props: SvgProp) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity={0.4}
      d="M4.723 21.167h-.04a2.833 2.833 0 0 1-2.476-3.89L9.53 4.45a2.833 2.833 0 0 1 4.946.009l7.273 12.728c.162.381.23.691.248 1.007a2.812 2.812 0 0 1-.725 2.042 2.808 2.808 0 0 1-1.956.93l-14.52.001h-.072Z"
      fill="#fff"
      fillOpacity={!props.isActive ? 0.7 : 1}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.124 10.02c0-.481.393-.874.875-.874s.875.393.875.875v2.828a.876.876 0 0 1-1.75 0V10.02Zm0 6.25c0-.485.393-.88.875-.88s.875.39.875.869a.879.879 0 0 1-.875.886.877.877 0 0 1-.875-.875Z"
      fill="#fff"
      fillOpacity={!props.isActive ? 0.7 : 1}
    />
  </svg>
);
export default SvgDanger;
