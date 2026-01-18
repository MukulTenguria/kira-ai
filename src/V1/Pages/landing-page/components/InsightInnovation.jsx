import { Stack, Typography } from "@mui/material";
import React from "react";
import { CustomButton, InsightInnovationWrapper } from "./style";

const InsightInnovation = () => {
  return (
    <InsightInnovationWrapper
      className="insight__innovation"
      direction="row"
      alignItems="center"
      justifyContent="space-around"
    >
      <Stack>
        <Typography className="text-lime-500" variant="h2" fontWeight={600}>
          Latest insights
        </Typography>
        <Typography variant="h2" fontWeight={600}>
          and innovations
        </Typography>
      </Stack>
      <Stack
        className="my-10"
        gap={3}
        direction="row"
        alignItems="center"
        justifyContent="space-around"
      >
        <CustomButton className="px-5 py-1 text-xl" variant="contained">
          View Blog
        </CustomButton>
        <CustomButton className="px-5 py-1 text-xl" variant="outlined">
          View Analyst Report
        </CustomButton>
      </Stack>
    </InsightInnovationWrapper>
  );
};

export default InsightInnovation;
