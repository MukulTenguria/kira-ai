import React from "react";
import { Button, styled } from "@mui/material";
import { motion } from "framer-motion";

const PrimaryButton = styled(Button)({
  borderRadius: "20px",
  backgroundColor: "#62d84e",
  color: "#000",
  fontWeight: 600,
  fontSize: "15px",
  textTransform: "unset",
  padding: "10px 24px",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#7ae95d",
    boxShadow: "0 4px 12px rgba(98, 216, 78, 0.3)",
  },
  "&:active": {
    transform: "scale(0.98)",
  },
});

const SecondaryButton = styled(Button)({
  borderRadius: "20px",
  border: "2px solid #62d84e",
  color: "#000",
  fontWeight: 600,
  fontSize: "15px",
  textTransform: "unset",
  padding: "8px 22px",
  backgroundColor: "transparent",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "rgba(98, 216, 78, 0.1)",
    borderColor: "#7ae95d",
    color: "#fff",
  },
  "&:active": {
    transform: "scale(0.98)",
  },
});

const AppButton = ({
  variant = "contained",
  children,
  withAnimation = true,
  ...props
}) => {
  const ButtonComponent =
    variant === "outlined" ? SecondaryButton : PrimaryButton;

  const content = (
    <ButtonComponent
      variant={variant === "outlined" ? "outlined" : "contained"}
      {...props}
    >
      {children}
    </ButtonComponent>
  );

  if (withAnimation) {
    return (
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        {content}
      </motion.div>
    );
  }

  return content;
};

export default AppButton;
