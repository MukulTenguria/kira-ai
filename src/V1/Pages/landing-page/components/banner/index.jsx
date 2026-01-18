import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { BannerWrapper } from "../style";
import BannerCarousel from "./BannerCarousel";
import TimerDotPro from "../TimerDotPro";
import TimerDot from "../TimerDot";
const Banner = () => {
  return (
    <BannerWrapper className="banner">
      <Box className="banner__container">
        <Grid className="" container>
          <Grid size={6}>
            <Box className="">
              <Typography
                className="text-lime-500"
                variant="h2"
                fontWeight={600}
              >
                Come and put AI to work for
              </Typography>
              <Typography variant="h2" fontWeight={600}>
                you at Knowledge 2026
              </Typography>
            </Box>
          </Grid>
          <Grid size={6}>
            <Box>
              <Typography variant="h5">
                Only the ServiceNow AI Platform connects any workflow, any AI,
                and any data source—so everything and everyone finally works
                together.
              </Typography>
              <Stack className="mt-4" direction="row" gap={5}>
                <Button className="px-5 py-1" variant="contained">
                  Explore Platform
                </Button>
                <Button className="px-5 py-1" variant="outlined">
                  Watch Video
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <BannerCarousel />
      <Stack>
        <Typography
          className="text-white my-7"
          variant="h4"
          fontWeight={600}
          textAlign="center"
        >
          The world works with ServiceNow
        </Typography>
        <Typography
          className="text-lime-500"
          variant="h4"
          fontWeight={600}
          textAlign="center"
        >
          ServiceNow is the AI control tower
        </Typography>
        <Typography
          className="text-white"
          variant="h4"
          fontWeight={600}
          textAlign="center"
        >
          for business reinvention
        </Typography>
      </Stack>
    </BannerWrapper>
  );
};

export default Banner;
