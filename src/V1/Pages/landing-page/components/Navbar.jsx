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
        <Toolbar
          sx={{
            justifyContent: "space-between",
            flexWrap: "wrap",
            "@media (max-width: 1024px)": {
              paddingX: "16px",
            },
            "@media (max-width: 768px)": {
              paddingX: "12px",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              "@media (max-width: 1024px)": {
                gap: 1,
              },
            }}
          >
            <Typography variant="h1" className="logo__heading">
              Kira-AI
            </Typography>
            <Box
              component="ul"
              sx={{
                display: "flex",
                listStyle: "none",
                m: 0,
                p: 0,
                "@media (max-width: 1200px)": {
                  gap: 0,
                  "& li span": {
                    display: "none",
                  },
                },
                "@media (max-width: 1024px)": {
                  display: "none",
                },
              }}
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
                      fontSize: "14px",
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
                      <KeyboardArrowUpIcon sx={{ fontSize: "20px" }} />
                    ) : (
                      <KeyboardArrowDownIcon sx={{ fontSize: "20px" }} />
                    )}
                  </Box>
                );
              })}
            </Box>
          </Box>

          {/* RIGHT SIDE */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              "@media (max-width: 768px)": {
                gap: 0.5,
              },
            }}
          >
            <IconButton
              sx={{
                color: "#fff",
                "@media (max-width: 768px)": {
                  padding: "8px",
                },
              }}
            >
              <SearchIcon />
            </IconButton>

            <Button
              sx={{
                color: "#fff",
                textTransform: "none",
                "@media (max-width: 900px)": {
                  display: "none",
                },
              }}
            >
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
                padding: "8px 16px",
                fontSize: "14px",
                "&:hover": {
                  bgcolor: "#52c43f",
                },
                "@media (max-width: 768px)": {
                  padding: "6px 12px",
                  fontSize: "12px",
                  borderRadius: "16px",
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
