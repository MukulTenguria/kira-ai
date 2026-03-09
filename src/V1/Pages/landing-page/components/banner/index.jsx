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
        <Grid container>
          {/* LEFT SIDE */}
          <Grid size={6}>
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
              >
                Come and put AI to work for
              </Typography>

              <Typography variant="h2" fontWeight={600}>
                you at Knowledge 2026
              </Typography>
            </motion.div>
          </Grid>

          {/* RIGHT SIDE */}
          <Grid size={6}>
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Typography variant="h5">
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
                <Stack className="mt-4" direction="row" gap={5}>
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
          >
            for business reinvention
          </Typography>
        </motion.div>
      </Stack>
    </BannerWrapper>
  );
};

export default Banner;
