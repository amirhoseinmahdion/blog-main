import { useQuery } from "@apollo/client";
import { Avatar, Typography } from "@mui/material";
import React from "react";
import { Grid } from "react-loader-spinner";
import { GET_COMMENTS } from "./Queary";

const ShowComment = ({ slug }) => {
  const {data} = useQuery(GET_COMMENTS, {
    variables: { slug },
  });
  const { coments } = data;
  return (
    <Grid
      sx={{
        boxShadow: "rgba(0 , 0 , 0 , 0.1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 4,
      }}
      container
    >
      <Grid item xs={12} m={2}>
        <Typography
          color="primary"
          fontWeight={700}
          mt={4}
          component="h3"
          variant="h5"
        >
          کامنت ها
        </Typography>

        {coments.map((coment) => (
          <Grid
            key={coment.id}
            item
            xs={12}
            m={2}
            p={2}
            border="1px silver solid"
            borderRadius={1}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "3",
              }}
            >
              <Avatar>{coment.name[0]}</Avatar>
              <Typography fontWeight={500} component="h3" variant="h5">
                {coment.name}
              </Typography>
            </div>
            <Typography fontWeight={300} component="h3" variant="h5">
              {coment.text}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default ShowComment;
