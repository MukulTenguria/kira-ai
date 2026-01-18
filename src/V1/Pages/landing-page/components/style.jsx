import { AppBar, Box, Button, Chip, Stack, styled } from "@mui/material";

export const CustomAppBar = styled(AppBar)({
  backgroundColor: "#032d42",
  borderBottom: "1px solid #ebebeb24",
});

export const NavBarWrapper = styled(Box)({
  "& .btn__primary": {
    borderRadius: "20px !important",
    backgroundColor: "#62d84e !important",
    color: "#fff",
    fontWeight: 600,
    fontSize: "15px",
    textTransform: "unset",
  },
  "& .btn__secondary": {
    borderRadius: "20px !important",
    border: "2px solid #62d84e",
    color: "#fff",
    fontWeight: 600,
    fontSize: "15px",
    textTransform: "unset",
  },
  "& .logo__heading": {
    fontSize: "30px",
    fontWeight: "700",
    background: "linear-gradient(90deg, #00ff87, #60efff, #0061ff)",
    backgroundSize: "300% 300%",
    backgroundClip: "text",
    color: "transparent",
    animation: "gradientMove 6s ease infinite",
  },

  "@keyframes gradientMove": {
    "0%": { backgroundPosition: "0% 50%" },
    "40%": { backgroundPosition: "0% 50%" },
    "70%": { backgroundPosition: "100% 50%" },
    "100%": { backgroundPosition: "0% 50%" },
  },
  "& .popover__detail__container": {
    color: "#fff",
    boxShadow: "0 8px 12px 0 rgba(0, 0, 0, .6)",
    borderRadius: 0,
    padding: "50px 140px",
    backgroundColor: "#032d42",
    background: `
    linear-gradient(
      135deg,
      #021b29 0%,
      #032d42 80%,
      #62d84e 200%
    )
  `,

    "& .MuiListItemIcon-root": {
      color: "#fff",
    },
    "& .MuiDivider-root": {
      borderColor: "#ebebeb24",
    },
    "& .list__subheader": {
      color: "#fff",
      backgroundColor: "unset",
      fontSize: "24px",
      fontWeight: 600,
    },
    "& .active": {
      backgroundColor: "#124d6b !important",
      borderRadius: "10px",
    },
  },
  "& .list__container": {
    borderRight: "1px solid #ebebeb24",
    "& .MuiListItemText-primary": {
      fontSize: "14px",
      fontWeight: 600,
    },
  },
  "& .list__detail": {
    "& .MuiButton-outlined": {
      borderRadius: "20px !important",
      border: "2px solid #62d84e",
      color: "#fff",
      fontWeight: 600,
      fontSize: "15px",
      textTransform: "unset",
    },
  },
  "& .list__detail__item--card": {
    fontSize: "20px",
    cursor: "pointer",
    "&:hover": {
      "& :first-child": {
        textDecoration: "underline",
      },
    },
  },
});

export const BannerWrapper = styled(Box)({
  backgroundColor: "#032d42",
  background: `
  linear-gradient(
    135deg,
    #021b29 0%,
    #032d42 80%,
    #62d84e 200%
  )
`,
  paddingBottom: "50px",
  "& .banner__container": {
    padding: "80px 80px 50px 80px",
    color: "#fff",
    overflowX: "hidden", // ⛔ Prevent page horizontal scroll
  },

  "& .MuiButton-outlined": {
    borderRadius: "40px !important",
    border: "2px solid #62d84e",
    color: "#fff",
    fontWeight: 600,
    fontSize: "15px",
    textTransform: "unset",
  },

  "& .MuiButton-contained": {
    borderRadius: "40px !important",
    backgroundColor: "#62d84e",
    color: "#000",
    fontWeight: 600,
    fontSize: "15px",
    textTransform: "unset",
  },

  "& .banner__slider": {
    marginTop: "40px",
    overflow: "hidden", // ⛔ keep slider inside
  },

  /* Slick internal layout */
  "& .banner__slider .slick-track": {
    display: "flex !important",
    alignItems: "center",
  },

  "& .banner__slider .slick-list": {
    overflow: "hidden", // ⛔ prevent horizontal overflow
  },

  /* Slide spacing */
  "& .banner__slider .slick-slide": {
    padding: "0 12px",
    boxSizing: "border-box",
  },

  /* Image styling */
  "& .banner__slider img": {
    height: "100%",
    borderRadius: "16px",
    display: "block",
    transition: "transform 0.4s ease",
  },

  /* Hover effect */
  "& .banner__slider img:hover": {
    transform: "scale(1.05)",
  },
});

export const CustomChip = styled(Chip)({
  height: "unset",
  borderRadius: "50px",
  backgroundColor: "unset",
  border: "2px solid #00000029",
  padding: "10px",
  "& .MuiChip-label": {
    fontSize: "30px",
  },
  "& .MuiAvatar-root": {
    width: "45px",
    height: "45px",
  },
});


export const CustomButton = styled(Button)({
  "&.MuiButton-outlined": {
    borderRadius: "40px !important",
    border: "2px solid #62d84e",
    color: "#fff",
    fontWeight: 600,
    textTransform: "unset",
  },

  "&.MuiButton-contained": {
    borderRadius: "40px !important",
    backgroundColor: "#62d84e",
    color: "#000",
    fontWeight: 600,
    textTransform: "unset",
  },

})

export const InsightInnovationWrapper = styled(Stack)({
  backgroundColor: "#032d42",
  background: `
  linear-gradient(
    135deg,
    #021b29 0%,
    #032d42 80%,
    #62d84e 200%
  )
`,
  color:"#fff"
})