import React from "react";
import { useQuery } from "@apollo/client";
import { GET_AUTHOR } from "../Queary";
import { List, ListItem } from "@mui/material";
import { Avatar, ListItemAvatar, ListItemText, Divider } from "@mui/material";
import { Link } from "react-router-dom";

const Author = () => {
  const { loading, data, errors } = useQuery(GET_AUTHOR);
  if (loading) return <p>.</p>;
  if (errors) return <h4>errors ...</h4>;

  return (
    <div>
      <List
        sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: "2" }}
      >
        {data.authors.map((author) => (
          <React.Fragment key={author.id}>
            <ListItem sx={{ marginBottom: "20px" }} button>
              <Link
                style={{
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                }}
                to={`/authors/${author.slug}`}
              >
                <ListItemAvatar>
                  <Avatar src={author.photo.url}></Avatar>
                </ListItemAvatar>
                <ListItemText sx={{ textAlign: "right" }} color="text.primary">
                  {author.name}
                </ListItemText>
              </Link>
            </ListItem>

            <Divider variant="middle" />
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default Author;
