import React from "react";
import { Grid, Typography, Box, Stack } from "@mui/material";
import Book5 from "./book5.jpg";
const SeconedPage = () => {
  return (
    <Grid container my={"3rem"}  >
      <Grid item display={"flex"} sx={{ flexDirection: {  xs: "column-reverse",sm:'row' , md:'row'} , bgcolor: "rgb(255, 0, 102)" }} xs={12} sm={12} md={6}>
        <Stack  sx={{ flexDirection: { xs: "row",sm:'column' , md:'column'}}}>
          <Box
            sx={{
              width: "200px",
              height: "100px",
              border: "1px solid purple",
            }}
          ></Box>

          <Box
            sx={{
              width: "200px",
              height: "100px",
              border: "1px solid purple",
            }}
          ></Box>
          <Box
            sx={{
              width: "200px",
              height: "100px",
              border: "1px solid purple",
            }}
          ></Box>
          <Box
            sx={{
              width: "200px",
              height: "100px",
              border: "1px solid purple",
            }}
          ></Box>
        </Stack>
        <img
        
          alt="pic"
          src={Book5}
          style={{ width: "22rem", height: "35rem",alignSelf : 'center' }}
        />
      </Grid>

      <Grid item xs={12} md={6} sm={12} sx={{ bgcolor: "rgb(204, 102, 0)" }}>
        <Typography variant="h1">text</Typography>
        <Typography variant="h1">text</Typography>
        <Typography variant="h1">text</Typography>
      </Grid>
    </Grid>
  );
};

export default SeconedPage;
