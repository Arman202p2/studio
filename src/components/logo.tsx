import type { SVGProps } from 'react';

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="160"
    height="32"
    viewBox="0 0 160 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Flex Fit Gym Logo"
    {...props}
  >
    <path d="M8.293 28.707a1 1 0 0 1-1.414-1.414l12-12a1 1 0 0 1 1.414 1.414l-12 12Z" className="fill-primary" />
    <path d="M19.707 28.707a1 1 0 0 1-1.414-1.414l12-12a1 1 0 0 1 1.414 1.414l-12 12Z" className="fill-primary" />
    <path d="M3 14a3 3 0 0 1 3-3h2.5a1 1 0 0 0 0-2H6a5 5 0 0 0-5 5v2a5 5 0 0 0 5 5h2.5a1 1 0 0 0 0-2H6a3 3 0 0 1-3-3v-2Z" className="fill-primary" />
    <path d="M30 14a3 3 0 0 1 3-3h2.5a1 1 0 0 0 0-2H33a5 5 0 0 0-5 5v2a5 5 0 0 0 5 5h2.5a1 1 0 0 0 0-2H33a3 3 0 0 1-3-3v-2Z" className="fill-primary" />
    <text
      x="40"
      y="23"
      fontFamily="Poppins, sans-serif"
      fontSize="20"
      fontWeight="600"
      className="fill-foreground"
    >
      Flex Fit Gym
    </text>
  </svg>
);
export default Logo;
