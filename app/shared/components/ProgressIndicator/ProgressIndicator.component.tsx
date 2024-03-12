import React from "react";
import { ProgressIndicatorProps } from "./ProgressIndicator.props";

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  color,
  progress,
}) => {
  const radius = 25;

  const dashArray = Math.PI * radius * 2;

  const dashOffset = dashArray - (dashArray * progress) / 100;

  return (
    <div>
      <svg width={60} height={60} viewBox="0 0 60 60">
        <circle
          cx={30}
          cy={30}
          r={radius}
          className="stroke-gray-light stroke-3  fill-gray-light"
        />

        <defs>
          <linearGradient
            id="track-gradient-color"
            x1="55"
            y1="25"
            x2="2"
            y2="25"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              offset="1%"
              style={{ stopColor: `var(--${color}-gradient-from)` }}
            />
            <stop
              offset="100%"
              style={{ stopColor: `var(--${color}-gradient-to)` }}
            />
          </linearGradient>
        </defs>
        <circle
          cx={30}
          cy={30}
          r={radius}
          transform={`rotate(-90 30 30)`}
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
          className={`stroke-3  fill-none`}
          stroke="url('#track-gradient-color')"
        />
      </svg>

      <div className="relative top-[-2.95rem] left-[.75rem]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="none"
          viewBox="0 0 40 40"
        >
          <path
            stroke={`var(--${color})`}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.714"
            d="M26.959 15.031a12.999 12.999 0 11-13.86-14M19.58 16.18a5.999 5.999 0 11-7.78-7.76M14 14l5-5"
          />
          <path
            stroke={`var(--${color})`}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.714"
            d="M23 10l-4-1-1-4 4-4 1 4 4 1-4 4z"
          />
        </svg>
      </div>
    </div>
  );
};

export default ProgressIndicator;
