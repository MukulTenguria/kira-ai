import {
  Avatar,
  Box,
  Button,
  Chip,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { CustomButton, CustomChip } from "./style";
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
      >
        {industry.map((data) => {
          return (
            <CustomChip
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
        >
          When our customers work, the world works
        </Typography>
        <CustomButton className="px-5 py-1 text-xl" variant="contained">
          Explore Platform
        </CustomButton>
      </Stack>
      <IndustryCarousel />
      <Typography
        className="mt-10 mb-5"
        variant="h3"
        fontWeight={600}
        textAlign="center"
      >
        Recognition from trusted industry experts
      </Typography>
      <Grid container className="mx-10">
        {industries.map((data) => {
          return (
            <Grid size={3}>
              <Box>
                <Typography
                  className="op-70"
                  variant="subtitle1"
                  fontWeight={600}
                  textAlign="center"
                >
                  {data.title}
                </Typography>
              </Box>
              <Box>
                <Typography variant="h1" fontWeight={600} textAlign="center">
                  {data.subHeading}
                </Typography>
              </Box>
              <Box>
                <Typography
                  className="op-70"
                  variant="subtitle1"
                  fontWeight={600}
                  textAlign="center"
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
