import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import banner1 from "../../../../assets/homepage-paitw-ai-control-tower.sm.avif";
import banner2 from "../../../../assets/homepage-paitw-idris-and-characters.sm.webp";
import banner3 from "../../../../assets/homepage-paitw-it-patty.sm.avif";
import banner4 from "../../../../assets/homepage-paitw-patty-and-group.sm.avif";
import banner5 from "../../../../assets/marquee-paitw-crm.sm.avif";

const images = [banner1, banner2, banner3, banner4, banner5];
const marqueeImages = [...images, ...images, ...images, ...images];

const BannerCarousel = () => {
  const settings = {
    infinite: false,
    arrows: false,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 20000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    swipe: false,
    draggable: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 2.5 } },
      { breakpoint: 900, settings: { slidesToShow: 1.8 } },
      { breakpoint: 600, settings: { slidesToShow: 1.2 } },
    ],
  };

  return (
    <Box className="banner__slider">
      <Slider {...settings}>
        {marqueeImages.map((img, i) => (
          <Box key={i} px={1.5} className="">
            <Box
              sx={{
                height: i % 2 === 0 ? 400 : 300,
                borderRadius: "20px",
                overflow: "hidden",
                transition: "all 0.4s ease",
              }}
            >
              <Box
                component="img"
                src={img}
                alt="banner"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default BannerCarousel;
