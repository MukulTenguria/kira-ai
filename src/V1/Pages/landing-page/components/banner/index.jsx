import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { BannerWrapper } from "../style";
import BannerCarousel from "./BannerCarousel";
import AppButton from "../AppButton";
import { motion } from "framer-motion";

/* ================= ANIMATION VARIANTS ================= */

const fadeLeft = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

/* ================= COMPONENT ================= */

const Banner = () => {
  return (
    <BannerWrapper className="banner">
      <Box className="banner__container">
        <Grid container spacing={2}>
          {/* LEFT SIDE */}
          <Grid size={{ xs: 12, sm: 12, md: 6 }}>
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Typography
                className="text-lime-500"
                variant="h2"
                fontWeight={600}
                sx={{
                  "@media (max-width: 1024px)": {
                    fontSize: "32px",
                  },
                  "@media (max-width: 768px)": {
                    fontSize: "24px",
                  },
                  "@media (max-width: 480px)": {
                    fontSize: "20px",
                  },
                }}
              >
                Come and put AI to work for
              </Typography>

              <Typography
                variant="h2"
                fontWeight={600}
                sx={{
                  "@media (max-width: 1024px)": {
                    fontSize: "32px",
                  },
                  "@media (max-width: 768px)": {
                    fontSize: "24px",
                  },
                  "@media (max-width: 480px)": {
                    fontSize: "20px",
                  },
                }}
              >
                you at Knowledge 2026
              </Typography>
            </motion.div>
          </Grid>

          {/* RIGHT SIDE */}
          <Grid size={{ xs: 12, sm: 12, md: 6 }}>
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Typography
                variant="h5"
                sx={{
                  "@media (max-width: 1024px)": {
                    fontSize: "18px",
                  },
                  "@media (max-width: 768px)": {
                    fontSize: "16px",
                  },
                  "@media (max-width: 480px)": {
                    fontSize: "14px",
                  },
                }}
              >
                Only the ServiceNow AI Platform connects any workflow, any AI,
                and any data source—so everything and everyone finally works
                together.
              </Typography>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                <Stack
                  className="mt-4"
                  direction={{ xs: "column", sm: "column", md: "row" }}
                  gap={5}
                  sx={{
                    "@media (max-width: 768px)": {
                      gap: 3,
                    },
                    "@media (max-width: 480px)": {
                      gap: 2,
                    },
                  }}
                >
                  <AppButton variant="contained">Explore Platform</AppButton>

                  <AppButton variant="outlined">Watch Video</AppButton>
                </Stack>
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>
      </Box>

      {/* CAROUSEL */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <BannerCarousel />
      </motion.div>

      {/* BOTTOM TEXT */}
      <Stack>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Typography
            className="text-white my-7"
            variant="h4"
            fontWeight={600}
            textAlign="center"
            sx={{
              "@media (max-width: 768px)": {
                fontSize: "22px",
                my: 4,
              },
              "@media (max-width: 480px)": {
                fontSize: "18px",
                my: 3,
              },
            }}
          >
            The world works with ServiceNow
          </Typography>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Typography
            className="text-lime-500"
            variant="h4"
            fontWeight={600}
            textAlign="center"
            sx={{
              "@media (max-width: 768px)": {
                fontSize: "22px",
              },
              "@media (max-width: 480px)": {
                fontSize: "18px",
              },
            }}
          >
            ServiceNow is the AI control tower
          </Typography>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Typography
            className="text-white"
            variant="h4"
            fontWeight={600}
            textAlign="center"
            sx={{
              "@media (max-width: 768px)": {
                fontSize: "22px",
              },
              "@media (max-width: 480px)": {
                fontSize: "18px",
              },
            }}
          >
            for business reinvention
          </Typography>
        </motion.div>
      </Stack>
    </BannerWrapper>
  );
};

export default Banner;
