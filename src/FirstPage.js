import { Grid, Hidden, Typography } from "@mui/material";
import React, { Fragment } from "react";
import BigImage from "./noc-ognia-book.jpg";
import StarIcon from '@mui/icons-material/Star';
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
const text = {
  textTransform: "uppercase",
  maxWidth: "9rem",
  color: "rgba(32, 31, 31, 0.8)",
  paddingTop: "2rem",
};

const FirstPage = () => {
  return (
    <Fragment>
      <Grid container justifyContent={"flex-end"}>
        <Grid item xs={12} sm={6} sx={{ bgcolor: "purple" }}>
          <Typography variant="h1">Text</Typography>
          <Typography variant="h1">Text</Typography>
          <Typography variant="h1">Text</Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          justifyContent={"center"}
          display={"flex"}
          sx={{ bgcolor: "green" }}
        >
          <Hidden mdDown>
            <Typography
              lineHeight={"28.039px"}
              letterSpacing={"1.8px"}
              style={text}
            >
              Autographed books + 30% discount
            </Typography>
          </Hidden>
          <img
            alt="pic"
            src={BigImage}
            style={{ width: "16rem", height: "23rem" }}
          />
        </Grid>

        <Grid item>
          <Hidden mdDown>
            <Typography variant="h5">*within the stock limit</Typography>
          </Hidden>
        </Grid>
      </Grid>

      <Grid container>

        <Grid item xs={12} sm={6} md= {4} display={"flex"} direction={"row"} sx={{ bgcolor: "red" }}>
          <LocalShippingIcon />
          <Typography variant="h5">Free shiping over 50$</Typography>
        </Grid>

        <Grid item xs={12} sm={6} md= {4} display={"flex"} direction={"row"}  sx={{ bgcolor: "blue" }}>
          <AssistantPhotoIcon />
          <Typography variant='h5'>Save with loyalty points</Typography>

        </Grid>
        <Grid item xs={12} md= {4} display={"flex"} direction={"row"}  sx={{ bgcolor: "yellow" }}>
          <StarIcon />
          <Typography variant='h5'>Read a few pages</Typography>

        </Grid>
      </Grid>
    </Fragment>
  );
};

export default FirstPage;
