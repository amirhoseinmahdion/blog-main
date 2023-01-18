import React from "react";
import { useQuery } from "@apollo/client";

import { GET_BLOGS } from "../Queary";
import { Grid } from "@mui/material";
import CartEL from "./CartEL";
import Loader from "../Loader";

const Blog = () => {
  const { loading, data, errors } = useQuery(GET_BLOGS);
  if (loading) return<Loader/>;
  if (errors) return <h4>errors ...</h4>;

  return (
      <Grid container spacing={4}>
        {data.posts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <CartEL {...post}  />
          </Grid>
        ))}
      </Grid>
  );
};

export default Blog;
