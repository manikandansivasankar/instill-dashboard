import { SVGProps } from "react";

interface SvgProp extends SVGProps<SVGSVGElement> {
  isActive?: boolean;
}

const SvgUsa = (props: SvgProp) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M24 4a1 1 0 0 0-1-1H10v10H0v7a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V4Z"
      fill="#B41F30"
    />
    <path
      d="M24 5H10v2h14V5ZM24 9H10v2h14V9ZM0 13v2h24v-2H0ZM24 17H0v2h24v-2Z"
      fill="#E6E6E6"
    />
    <path d="M10 13H0V4a1 1 0 0 1 1-1h9v10Z" fill="#00256A" />
    <path
      d="m5 6.961-.317.684h-.752l.55.57-.203.824L5 8.63l.721.409-.203-.824.55-.57h-.753L5 6.961ZM2.554 4.514l-.316.684h-.752l.55.57-.204.824.722-.409.722.41-.204-.825.55-.57H2.87l-.315-.684ZM7.447 4.514l.316.684h.752l-.55.57.203.824-.721-.409-.722.41.203-.825-.55-.57h.753l.316-.684ZM2.554 11.486l-.316-.684h-.752l.55-.57-.204-.824.722.409.722-.41-.204.825.55.57H2.87l-.315.684ZM7.447 11.486l.316-.684h.752l-.55-.57.203-.824-.721.409-.722-.41.203.825-.55.57h.753l.316.684Z"
      fill="#fff"
    />
  </svg>
);
export default SvgUsa;
