import React, { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";

const TimerDot = ({ size = 28, duration = 5000 }) => {
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
      <CircularProgress
        variant="determinate"
        value={progress}
        size={size}
        thickness={5}
        sx={{ color: "#62d84e" }}
      />

      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: size * 0.35,
          height: size * 0.35,
          borderRadius: "50%",
          backgroundColor: "#62d84e",
        }}
      />
    </Box>
  );
};

export default TimerDot;
