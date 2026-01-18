import React, { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";

const TimerDotPro = ({
  size = 36,
  duration = 5000,
  stroke = 4,
  gradient = true,
  neon = true,
  dashed = false,
  pulse = true,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const value = Math.min((elapsed / duration) * 100, 100);
      setProgress(value);
      if (value >= 100) clearInterval(timer);
    }, 16);

    return () => clearInterval(timer);
  }, [duration]);

  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      {/* SVG Gradient */}
      {gradient && (
        <svg width={0} height={0}>
          <defs>
            <linearGradient id="timerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00ff87" />
              <stop offset="50%" stopColor="#60efff" />
              <stop offset="100%" stopColor="#0061ff" />
            </linearGradient>
          </defs>
        </svg>
      )}

      {/* Progress Ring */}
      <CircularProgress
        variant="determinate"
        value={progress}
        size={size}
        thickness={stroke}
        sx={{
          color: gradient ? "url(#timerGradient)" : "#62d84e",
          filter: neon ? "drop-shadow(0 0 8px #00ff87)" : "none",
          "& .MuiCircularProgress-circle": {
            strokeDasharray: dashed ? "4 4" : "none",
            transition: "stroke-dashoffset 0.2s linear",
          },
        }}
      />

      {/* Center Dot */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: size * 0.35,
          height: size * 0.35,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #00ff87, #0061ff)",
          boxShadow: neon ? "0 0 10px #00ff87" : "none",
          animation: pulse ? "pulseDot 1.4s infinite ease-in-out" : "none",
        }}
      />

      {/* Pulse Animation */}
      <style>
        {`
          @keyframes pulseDot {
            0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            50% { transform: translate(-50%, -50%) scale(1.4); opacity: 0.6; }
            100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          }
        `}
      </style>
    </Box>
  );
};

export default TimerDotPro;
