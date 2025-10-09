import React from "react";

export default function KYLogo8({ width = 100, height = 5, className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 160"
      width={width}
      height={height}
      role="img"
      aria-label="KY.dev green"
      className={className}
    >
      <defs>
        <linearGradient id="g8" x1="0" x2="1">
          <stop offset="0" stopColor="#00ff9d" />
          <stop offset="1" stopColor="#00d4ff" />
        </linearGradient>
      </defs>

      <g transform="translate(28,28)">
        <rect x="0" y="0" width="120" height="120" rx="18" fill="#071021" />
        <path
          d="M24 36 L46 58 L24 80"
          stroke="#00ff9d"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
      </g>

      <text
        x="160"
        y="130"
        fontFamily="Inter, Poppins, sans-serif"
        fontSize="122"
        fontWeight="800"
        fill="#071021"
      >
        KY
        <tspan fill="#00ff9d">.dew</tspan>
      </text>
    </svg>
  );
}
