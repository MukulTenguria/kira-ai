import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { InsightInnovationWrapper } from "./style";
import AppButton from "./AppButton";
import image1 from "../../../assets/workforce-skills-forecast-2025.sm.avif";
import image2 from "../../../assets/hp-servicenow-ai-maturity.sm.webp";
import image3 from "../../../assets/gartner-crm-2025.sm.avif";
import image4 from "../../../assets/2025-gartner-mq-ai-apps-itsm.sm.avif";
const InsightInnovation = () => {
  return (
    <InsightInnovationWrapper className="insight__innovation">
      <Stack direction="row" alignItems="center" justifyContent="space-around">
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
          <AppButton variant="contained" withAnimation={false}>
            View Blog
          </AppButton>
          <AppButton
            className="text-white"
            variant="outlined"
            withAnimation={false}
          >
            View Analyst Report
          </AppButton>
        </Stack>
      </Stack>
      <Grid container className="mx-10" columnSpacing={5}>
        <Grid size={6}>
          <Stack className="skill__forecast">
            <img src={image1} width={"100%"} />
            <Stack className="p-3 h-full" justifyContent="space-between">
              <Stack>
                <Typography className="mt-5" variant="body1">
                  REPORT
                </Typography>
                <Typography className="mt-1" variant="h4" fontWeight={600}>
                  Workforce Skills Forecast Report 2025
                </Typography>
                <Typography className="mt-1" variant="body1">
                  Here’s the roadmap to navigate the AI-work crossroads.
                  Discover the new AI skills you’ll need, where job growth will
                  soar, and ways to future-proof your career in an AI-enabled
                  world.
                </Typography>
              </Stack>
              <Typography variant="body1">Read Forecast</Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid size={6} container rowSpacing={5}>
          <Grid size={12} className="report__card">
            <Box className="h-full">
              <img src={image2} alt="" height="100%" />
              <Stack className="p-3" justifyContent="space-between">
                <Stack>
                  <Typography variant="body1">REPORT</Typography>
                  <Typography className="mt-1" variant="h5" fontWeight={600}>
                    2025 Gartner® Magic Quadrant™ for the CRM Customer
                    Engagement Center
                  </Typography>
                </Stack>
                <Typography variant="body1">Read Forecast</Typography>
              </Stack>
            </Box>
          </Grid>
          <Grid size={12} className="report__card">
            <Box className="h-full">
              <img src={image3} alt="" height="100%" />
              <Stack className="p-3" justifyContent="space-between">
                <Stack>
                  <Typography variant="body1">REPORT</Typography>
                  <Typography className="mt-1" variant="h5" fontWeight={600}>
                    2025 Gartner® Magic Quadrant™ for the CRM Customer
                    Engagement Center
                  </Typography>
                </Stack>
                <Typography variant="body1">Read Forecast</Typography>
              </Stack>
            </Box>
          </Grid>
          <Grid size={12} className="report__card">
            <Box className="h-full">
              <img src={image4} alt="" height="100%" />
              <Stack className="p-3" justifyContent="space-between">
                <Stack>
                  <Typography variant="body1">REPORT</Typography>
                  <Typography className="mt-1" variant="h5" fontWeight={600}>
                    2025 Gartner® Magic Quadrant™ for the CRM Customer
                    Engagement Center
                  </Typography>
                </Stack>
                <Typography variant="body1">Read Forecast</Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </InsightInnovationWrapper>
  );
};

export default InsightInnovation;
