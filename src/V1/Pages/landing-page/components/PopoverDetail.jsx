import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { MENU_LIST } from "../menu";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
const PopoverDetail = ({ activeMenu, option, setOption }) => {
  console.log("asdfasdfasdfasdf", option?.sections);
  return (
    <Paper elevation={6} className="popover__detail__container" sx={{}}>
      <Grid container>
        <Grid size={3}>
          <Box className="list__container mx-2">
            {MENU_LIST[activeMenu].services.map((service, index) => {
              return (
                <>
                  <List
                    subheader={
                      <ListSubheader className="list__subheader">
                        {service.title}
                      </ListSubheader>
                    }
                  >
                    {service.list.map((data) => {
                      console.log(data);
                      return (
                        <ListItem disablePadding>
                          <ListItemButton
                            className={` mr-4 mb-1 ${
                              data.id === option?.id ? "active" : ""
                            }`}
                            onClick={() => {
                              setOption(data);
                            }}
                          >
                            <ListItemText primary={data.label} />
                            <ListItemIcon>
                              <NavigateNextIcon />
                            </ListItemIcon>
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                  </List>
                  {index < MENU_LIST[activeMenu].services.length - 1 && (
                    <Divider className="ml-2 mr-7" />
                  )}
                </>
              );
            })}
          </Box>
        </Grid>
        <Grid size={9}>
          <Box className="list__detail mx-2">
            <Box className="mb-2">
              <Typography variant="h4">{option?.label}</Typography>
              <Typography
                className="op-80 mb-2"
                variant="subtitle1"
                fontWeight={400}
              >
                {option?.sections?.description}
              </Typography>
              <Button variant="outlined">See All Products</Button>
            </Box>
            <Divider />
            <Typography
              className="op-80 mt-1"
              variant="subtitle2"
              fontWeight={400}
            >
              {option?.sections?.items?.title}
            </Typography>
            <Grid container rowSpacing={2}>
              {option?.sections?.items?.data?.map((data) => {
                return (
                  <Grid size={4}>
                    <Box className = "list__detail__item--card">
                      <Typography
                        className=""
                        fontWeight={600}
                      >
                        {data?.title}
                      </Typography>{" "}
                      <Typography
                        className="op-90"
                        variant="body2"
                        fontWeight={400}
                      >
                        {data?.description}
                      </Typography>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default PopoverDetail;
