import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GET_SINGLE_POST } from "../Queary";
import { useQuery } from "@apollo/client";
import Loader from "../Loader";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import sanitizeHtml from "sanitize-html";
import Comments from "../Comments";
import ShowComment from "../ShowComment";

const PageBlogs = () => {
  const slug = useParams();
  const navigate = useNavigate();
  const { loading, data, error } = useQuery(GET_SINGLE_POST, {
    variables: { slug },
  });
  if (loading) return <Loader />;
  if (error) return <h4>errors ...</h4>;
  console.log(data);
  const { post } = data;
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12} mt={9} display="flex" justifyContent="space-between">
          <Typography
            color="primary"
            fontWeight={700}
            mt={4}
            component="h3"
            variant="h5"
          >
            {post.title}
          </Typography>
          <ArrowBackIcon onclick={() => navigate(-1)} />
        </Grid>
        <Grid item xs={12} mt={5}>
          <img
            src={post.coverphoto.url}
            alt={post.slug}
            width="100%"
            style={{ borderRadius: "15" }}
          />
        </Grid>
        <Grid display="flex" alignItems="center" item xs={12} mt={5}>
          <Avatar
            sx={{ width: 80, height: 80, marginLeft: 2 }}
            src={post.author.photo.url}
          ></Avatar>
          <div>
            <Typography fontWeight={500} mt={4} component="h3" variant="h5">
              {post.author.name}
            </Typography>
            <Typography fontWeight={300} mt={4} component="h3" variant="h5">
              {post.author.field}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} mt={5}>
          <Typography
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(post.author.content.html),
            }}
            fontWeight={500}
            mt={4}
            component="h3"
            variant="h5"
          ></Typography>
        </Grid>
        <Grid item xs={12}>
            <Comments slug={slug}/>
        </Grid>
        <Grid item xs={12}>
            <ShowComment slug={slug}/>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PageBlogs;
