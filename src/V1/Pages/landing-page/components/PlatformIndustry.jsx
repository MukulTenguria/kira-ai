import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { CustomChip } from "./style";
import AppButton from "./AppButton";
import IndustryCarousel from "../components/IndustryCarousel";
import AddHomeIcon from "@mui/icons-material/AddHome";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SpaIcon from "@mui/icons-material/Spa";
const PlatformIndustry = () => {
  const industry = [
    {
      icon: <AddHomeIcon />,
      text: "Automation",
    },
    {
      icon: <AccountBalanceIcon />,
      text: "Banking",
    },
    {
      icon: <SupportAgentIcon />,
      text: "Customer Package Goods",
    },
    {
      icon: <AddHomeIcon />,
      text: "Government",
    },
    {
      icon: <SpaIcon />,
      text: "Healthcare",
    },
    {
      icon: <AccountBalanceIcon />,
      text: "Automation",
    },
    {
      icon: <AccountBalanceIcon />,
      text: "Insurance",
    },
    {
      icon: <AddHomeIcon />,
      text: "Life Sciences",
    },
    {
      icon: <AddHomeIcon />,
      text: "Retail",
    },
    {
      icon: <SpaIcon />,
      text: "Nonprofit",
    },
    {
      icon: <AddHomeIcon />,
      text: "Technology",
    },
  ];
  const industries = [
    {
      title: "Ranked",
      description: "in the Building and Managing AI Agents Use Case",
      subHeading: "#1",
    },
    {
      title: "A Consecutive Leader",
      description:
        "Gartner® Magic Quadrant™ for Enterprise Low-Code Application Platforms",
      subHeading: "6X",
    },
    {
      title: "A Leader in",
      description: "Gartner® Magic Quadrant™ Reports",
      subHeading: "5",
    },
    {
      title: "A Leader in",
      description:
        "Forrester Wave™ Reports Q1, Q2, Q3, Q4 2025, Q2, Q4 2024, and Q4 2023",
      subHeading: "9",
    },
  ];
  return (
    <>
      <Typography
        className="my-10"
        variant="h3"
        fontWeight={600}
        textAlign="center"
        sx={{
          "@media (max-width: 768px)": {
            fontSize: "28px",
            my: 6,
          },
          "@media (max-width: 480px)": {
            fontSize: "22px",
            my: 4,
          },
        }}
      >
        One platform, any industry
      </Typography>
      <Stack
        direction="row"
        gap={2}
        overflow="hidden"
        flex
        flexWrap="wrap"
        justifyContent="center"
        sx={{
          "@media (max-width: 768px)": {
            gap: 1.5,
            px: 2,
          },
          "@media (max-width: 480px)": {
            gap: 1,
            px: 1,
          },
        }}
      >
        {industry.map((data) => {
          return (
            <CustomChip
              key={data.text}
              avatar={<Avatar sizes={10}>{data.icon}</Avatar>}
              label={data.text}
            />
          );
        })}
      </Stack>
      <Stack flex alignItems="center">
        <Typography
          className="mt-10 mb-5"
          variant="h3"
          fontWeight={600}
          textAlign="center"
          sx={{
            "@media (max-width: 768px)": {
              fontSize: "28px",
              mt: 6,
              mb: 3,
            },
            "@media (max-width: 480px)": {
              fontSize: "22px",
              mt: 4,
              mb: 2,
            },
          }}
        >
          When our customers work, the world works
        </Typography>
        <AppButton variant="contained" withAnimation={false}>
          Explore Platform
        </AppButton>
      </Stack>
      <IndustryCarousel />
      <Typography
        className="mt-10 mb-5"
        variant="h3"
        fontWeight={600}
        textAlign="center"
        sx={{
          "@media (max-width: 768px)": {
            fontSize: "28px",
            mt: 6,
            mb: 3,
          },
          "@media (max-width: 480px)": {
            fontSize: "22px",
            mt: 4,
            mb: 2,
          },
        }}
      >
        Recognition from trusted industry experts
      </Typography>
      <Grid
        container
        className="mx-10 mb-10"
        spacing={2}
        sx={{
          "@media (max-width: 768px)": {
            mx: 2,
            mb: 6,
          },
          "@media (max-width: 480px)": {
            mx: 1,
            mb: 4,
          },
        }}
      >
        {industries.map((data) => {
          return (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={data.title}>
              <Box>
                <Typography
                  className="op-70"
                  variant="subtitle1"
                  fontWeight={600}
                  textAlign="center"
                  sx={{
                    "@media (max-width: 768px)": {
                      fontSize: "14px",
                    },
                    "@media (max-width: 480px)": {
                      fontSize: "12px",
                    },
                  }}
                >
                  {data.title}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h1"
                  fontWeight={600}
                  textAlign="center"
                  sx={{
                    "@media (max-width: 768px)": {
                      fontSize: "48px",
                    },
                    "@media (max-width: 480px)": {
                      fontSize: "32px",
                    },
                  }}
                >
                  {data.subHeading}
                </Typography>
              </Box>
              <Box>
                <Typography
                  className="op-70"
                  variant="subtitle1"
                  fontWeight={600}
                  textAlign="center"
                  sx={{
                    "@media (max-width: 768px)": {
                      fontSize: "14px",
                    },
                    "@media (max-width: 480px)": {
                      fontSize: "12px",
                    },
                  }}
                >
                  {data.description}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default PlatformIndustry;
