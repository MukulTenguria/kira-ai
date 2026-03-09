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
      <Stack
        direction={{ xs: "column", sm: "column", md: "row" }}
        alignItems={{ xs: "flex-start", md: "center" }}
        justifyContent="space-around"
        spacing={4}
        sx={{
          "@media (max-width: 768px)": {
            spacing: 2,
            mb: 4,
          },
          "@media (max-width: 480px)": {
            spacing: 1.5,
            mb: 3,
          },
        }}
      >
        <Stack>
          <Typography
            className="text-lime-500"
            variant="h2"
            fontWeight={600}
            sx={{
              "@media (max-width: 1024px)": {
                fontSize: "32px",
              },
              "@media (max-width: 768px)": {
                fontSize: "28px",
              },
              "@media (max-width: 480px)": {
                fontSize: "24px",
              },
            }}
          >
            Latest insights
          </Typography>
          <Typography
            variant="h2"
            fontWeight={600}
            sx={{
              "@media (max-width: 1024px)": {
                fontSize: "32px",
              },
              "@media (max-width: 768px)": {
                fontSize: "28px",
              },
              "@media (max-width: 480px)": {
                fontSize: "24px",
              },
            }}
          >
            and innovations
          </Typography>
        </Stack>
        <Stack
          className="my-10"
          gap={3}
          direction={{ xs: "column", sm: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-around"
          sx={{
            "@media (max-width: 768px)": {
              gap: 2,
              my: 2,
              width: "100%",
            },
            "@media (max-width: 480px)": {
              gap: 1.5,
              my: 1.5,
              width: "100%",
            },
          }}
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
      <Grid
        container
        className="mx-10"
        columnSpacing={{ xs: 1, sm: 2, md: 5 }}
        rowSpacing={{ xs: 2, sm: 3, md: 4 }}
        sx={{
          "@media (max-width: 768px)": {
            mx: 1.5,
          },
          "@media (max-width: 480px)": {
            mx: 1,
          },
        }}
      >
        <Grid size={{ xs: 12, sm: 12, md: 6 }}>
          <Stack className="skill__forecast">
            <img
              src={image1}
              width={"100%"}
              alt="Workforce Skills Forecast Report 2025"
              style={{ display: "block", height: "auto" }}
            />
            <Stack
              className="p-3 h-full"
              justifyContent="space-between"
              sx={{
                p: { xs: 2, sm: 2.5, md: 3 },
                gap: 2,
              }}
            >
              <Stack>
                <Typography
                  className="mt-5"
                  variant="body1"
                  sx={{
                    mt: { xs: 2, sm: 3, md: 5 },
                    fontSize: { xs: "12px", sm: "13px", md: "14px" },
                    fontWeight: 600,
                  }}
                >
                  REPORT
                </Typography>
                <Typography
                  className="mt-1"
                  variant="h4"
                  fontWeight={600}
                  sx={{
                    mt: 1,
                    fontSize: { xs: "16px", sm: "18px", md: "20px" },
                    lineHeight: 1.3,
                  }}
                >
                  Workforce Skills Forecast Report 2025
                </Typography>
                <Typography
                  className="mt-1"
                  variant="body1"
                  sx={{
                    mt: 1,
                    fontSize: { xs: "12px", sm: "13px", md: "14px" },
                    lineHeight: 1.5,
                  }}
                >
                  Here’s the roadmap to navigate the AI-work crossroads.
                  Discover the new AI skills you’ll need, where job growth will
                  soar, and ways to future-proof your career in an AI-enabled
                  world.
                </Typography>
              </Stack>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "12px", sm: "13px", md: "14px" },
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "#62d84e",
                  },
                }}
              >
                Read Forecast
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 12, md: 6 }}
          container
          rowSpacing={{ xs: 2, sm: 3, md: 5 }}
        >
          <Grid size={12} className="report__card">
            <Box className="h-full">
              <img
                src={image2}
                alt="ServiceNow AI Maturity Report 2025"
                width="250px"
                style={{ display: "block", height: "auto" }}
              />
              <Stack
                className="p-3"
                justifyContent="space-between"
                sx={{
                  p: { xs: 1.5, sm: 2, md: 3 },
                  minHeight: "140px",
                  gap: 1.5,
                }}
              >
                <Stack>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: "11px", sm: "12px", md: "14px" },
                      fontWeight: 600,
                    }}
                  >
                    REPORT
                  </Typography>
                  <Typography
                    className="mt-1"
                    variant="h5"
                    fontWeight={600}
                    sx={{
                      mt: 0.5,
                      fontSize: { xs: "13px", sm: "15px", md: "16px" },
                      lineHeight: 1.3,
                    }}
                  >
                    2025 Gartner® Magic Quadrant™ for the CRM Customer
                    Engagement Center
                  </Typography>
                </Stack>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "11px", sm: "12px", md: "14px" },
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "#62d84e",
                    },
                  }}
                >
                  Read Forecast
                </Typography>
              </Stack>
            </Box>
          </Grid>
          <Grid size={12} className="report__card">
            <Box className="h-full">
              <img
                src={image3}
                alt="Gartner CRM Magic Quadrant 2025"
                width="250px"
                style={{ display: "block", height: "auto" }}
              />
              <Stack
                className="p-3"
                justifyContent="space-between"
                sx={{
                  p: { xs: 1.5, sm: 2, md: 3 },
                  minHeight: "140px",
                  gap: 1.5,
                }}
              >
                <Stack>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: "11px", sm: "12px", md: "14px" },
                      fontWeight: 600,
                    }}
                  >
                    REPORT
                  </Typography>
                  <Typography
                    className="mt-1"
                    variant="h5"
                    fontWeight={600}
                    sx={{
                      mt: 0.5,
                      fontSize: { xs: "13px", sm: "15px", md: "16px" },
                      lineHeight: 1.3,
                    }}
                  >
                    2025 Gartner® Magic Quadrant™ for the CRM Customer
                    Engagement Center
                  </Typography>
                </Stack>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "11px", sm: "12px", md: "14px" },
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "#62d84e",
                    },
                  }}
                >
                  Read Forecast
                </Typography>
              </Stack>
            </Box>
          </Grid>
          <Grid size={12} className="report__card">
            <Box className="h-full">
              <img
                src={image4}
                alt="Gartner AI Apps ITSM Magic Quadrant 2025"
                width="250px"
                style={{ display: "block", height: "auto" }}
              />
              <Stack
                className="p-3"
                justifyContent="space-between"
                sx={{
                  p: { xs: 1.5, sm: 2, md: 3 },
                  minHeight: "140px",
                  gap: 1.5,
                }}
              >
                <Stack>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: "11px", sm: "12px", md: "14px" },
                      fontWeight: 600,
                    }}
                  >
                    REPORT
                  </Typography>
                  <Typography
                    className="mt-1"
                    variant="h5"
                    fontWeight={600}
                    sx={{
                      mt: 0.5,
                      fontSize: { xs: "13px", sm: "15px", md: "16px" },
                      lineHeight: 1.3,
                    }}
                  >
                    2025 Gartner® Magic Quadrant™ for the CRM Customer
                    Engagement Center
                  </Typography>
                </Stack>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "11px", sm: "12px", md: "14px" },
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "#62d84e",
                    },
                  }}
                >
                  Read Forecast
                </Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </InsightInnovationWrapper>
  );
};

export default InsightInnovation;
