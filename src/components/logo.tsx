import type { SVGProps } from 'react';

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="160"
    height="32"
    viewBox="0 0 160 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="FlexAI Gym Logo"
    {...props}
  >
    <rect
      x="16"
      y="8"
      width="4"
      height="16"
      rx="2"
      className="fill-primary"
    />
    <rect
      y="12"
      width="24"
      height="8"
      rx="4"
      className="fill-primary"
    />
    <rect
      x="4"
      y="4"
      width="4"
      height="24"
      rx="2"
      className="fill-primary"
    />
    <text
      x="32"
      y="23"
      fontFamily="Poppins, sans-serif"
      fontSize="20"
      fontWeight="600"
      className="fill-foreground"
    >
      FlexAI Gym
    </text>
  </svg>
);
export default Logo;
