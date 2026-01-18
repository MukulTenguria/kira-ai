import React, { useState } from "react";
import {
  Toolbar,
  Typography,
  Button,
  Box,
  Grid,
  Container,
  Paper,
  IconButton,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SearchIcon from "@mui/icons-material/Search";
import { CustomAppBar, NavBarWrapper } from "./style";
import PopoverDetail from "./PopoverDetail";
import { MENU_LIST } from "../menu";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [locked, setLocked] = useState(false);
  const [option, setOption] = useState(null);

  const handleHover = (menu) => {
    if (!locked) setActiveMenu(menu);
  };

  const handleClick = (menu) => {
    if (activeMenu === menu && locked) {
      setLocked(false);
      setActiveMenu(null);
    } else {
      setActiveMenu(menu);
      setOption(MENU_LIST[menu]?.services[0]?.list[0]);

      setLocked(true);
    }
  };

  const handleMouseLeaveArea = () => {
    setLocked(false);
    setActiveMenu(false);
    setOption(null);
  };

  return (
    <NavBarWrapper
      sx={{ position: "relative" }}
      onMouseLeave={handleMouseLeaveArea}
    >
      <CustomAppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="h1" className="logo__heading">
              Kira-AI
            </Typography>
            <Box
              component="ul"
              sx={{ display: "flex", listStyle: "none", m: 0, p: 0 }}
            >
              {Object.keys(MENU_LIST).map((menu) => {
                const isOpen = activeMenu === menu;

                return (
                  <Box
                    component="li"
                    key={menu}
                    // onMouseEnter={() => handleHover(menu)}
                    onClick={() => handleClick(menu)}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      cursor: "pointer",
                      color: isOpen ? "#fff" : "rgba(255,255,255,0.85)",
                      textTransform: "none",
                      fontWeight: 500,
                      position: "relative",
                      px: 2,
                      mx: 0.5,
                      userSelect: "none",
                      height: "55px",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        bottom: -2,
                        width: "100%",
                        height: "4px",
                        backgroundColor: "#62d84e",
                        transform: isOpen ? "scaleX(1)" : "scaleX(0)",
                        transformOrigin: "center",
                        transition: "transform 0.3s ease",
                      },

                      "&:hover": {
                        color: "#fff",
                      },

                      "&:hover::after": {
                        transform: "scaleX(1)",
                      },
                    }}
                  >
                    <span>{menu}</span>
                    {isOpen ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </Box>
                );
              })}
            </Box>
          </Box>

          {/* RIGHT SIDE */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton sx={{ color: "#fff" }}>
              <SearchIcon />
            </IconButton>

            <Button sx={{ color: "#fff", textTransform: "none" }}>
              Sign in
            </Button>

            <Button
              variant="contained"
              sx={{
                borderRadius: "20px",
                textTransform: "none",
                bgcolor: "#62d84e",
                color: "#000",
                fontWeight: "bold",
                "&:hover": {
                  bgcolor: "#52c43f",
                },
              }}
            >
              Get Started
            </Button>
          </Box>
        </Toolbar>
      </CustomAppBar>

      {/* Mega Menu */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              width: "100%",
              zIndex: 1200,
            }}
          >
            <PopoverDetail
              activeMenu={activeMenu}
              option={option}
              setOption={setOption}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </NavBarWrapper>
  );
};

export default Navbar;
