import React from "react";
import Slider from "react-slick";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import banner1 from "../../../assets/customer-story-astrazeneca.sm.avif";
import banner2 from "../../../assets/customer-story-bell-canada.sm.avif";
import banner3 from "../../../assets/customer-story-teleperformance.sm.avif";
import banner4 from "../../../assets/hp-customer-story-purestorage.sm.avif";
import banner5 from "../../../assets/hp-customer-story-stellantis.sm.webp";

import svg1 from "../../../assets/cs-logo-white-kraft-heinz.svg";
import svg2 from "../../../assets/logo-delta-white.svg";
import svg3 from "../../../assets/logo-dish-network-white.svg";
import svg4 from "../../../assets/logo-purestorage-white.svg";
import svg5 from "../../../assets/logo-astrazeneca-white.svg";

const images = [banner1, banner2, banner3, banner4, banner5];
const data = [
  {
    image: banner1,
    svg: svg1,
    percentage: "50K",
    text: "employees successfully onboarded in one day",
  },
  {
    image: banner2,
    svg: svg2,
    percentage: "50K",
    text: "employees successfully onboarded in one day",
  },
  {
    image: banner3,
    svg: svg3,
    percentage: "50K",
    text: "employees successfully onboarded in one day",
  },
  {
    image: banner4,
    svg: svg4,
    percentage: "50K",
    text: "employees successfully onboarded in one day",
  },
  {
    image: banner5,
    svg: svg5,
    percentage: "50K",
    text: "employees successfully onboarded in one day",
  },
];

const PrevArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      left: "-60px",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 5,
      bgcolor: "#062f44",
      color: "#fff",
      "&:hover": { bgcolor: "#0b4a66" },
    }}
  >
    <ArrowBackIosNewIcon />
  </IconButton>
);

const NextArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      right: "-60px",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 5,
      bgcolor: "#062f44",
      color: "#fff",
      "&:hover": { bgcolor: "#0b4a66" },
    }}
  >
    <ArrowForwardIosIcon />
  </IconButton>
);

const IndustryCarouselManual = () => {
  const settings = {
    infinite: true, // ✅ real infinite loop
    arrows: true,
    dots: false,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 1 } },
      { breakpoint: 900, settings: { slidesToShow: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Box sx={{ overflow: "hidden", width: "100%", py: 4 }}>
      <Box
        sx={{
          position: "relative",
          px: 8,
          "& .slick-list": {
            overflow: "visible",
          },
        }}
      >
        <Slider {...settings}>
          {data.map((img, i) => (
            <Box key={i}>
              <Box sx={{ mx: "16px" }}>
                <Box
                  sx={{
                    height: "400px",
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "0 15px 40px rgba(0,0,0,0.35)",
                    transition: "all 0.35s ease",
                    position: "relative",
                    "&:hover": {
                      transform: "translateY(-8px) scale(1.02)",
                    },
                  }}
                >
                  <Stack
                    sx={{
                      position: "absolute",
                      backgroundColor: "#032d42f5",
                      width: "35%",
                      height: "80%",
                      top: "50%",
                      left: "50%",
                      transform: "translate(20%, -50%)",
                      borderRadius: "20px",
                      padding: "20px",
                    }}
                  >
                    <Box
                      component="img"
                      src={img.svg}
                      alt="banner"
                      sx={{
                        width: "80%",
                      }}
                    />
                    <Stack flex={1} justifyContent="space-around">
                      <Box>
                        <Typography variant="h3" className="text-white">
                          {img.percentage}
                        </Typography>
                        <Typography variant="body2" className="text-white">
                          {img.text}
                        </Typography>
                      </Box>
                      <Typography
                        variant="h5"
                        className="text-white"
                        display="flex"
                        alignItems="center"
                      >
                        Learn More <ArrowRightAltIcon />
                      </Typography>
                    </Stack>
                  </Stack>
                  <Box
                    component="img"
                    src={img.image}
                    alt="banner"
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default IndustryCarouselManual;
