import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Author from "./author/Author";
import Blog from "./blogs/Blog";

const Homepage = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Grid container spacing={2} padding={3}>
          <Grid item xs={12} md={3} mt={4}   >
            <Typography component="h3" variant="h5" mb={3} fontWeight={700}>نویسنده ها</Typography>
            <Author />
          </Grid>
          <Grid item xs={12} md={9} mt={4}>
          <Typography component="h3" variant="h5" mb={3} fontWeight={700}>مقاله ها </Typography>
          <Blog />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Homepage;
