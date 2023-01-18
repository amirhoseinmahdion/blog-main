import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  CardActions,
  Avatar,
  Typography,
  Divider,
  Button
 
} from "@mui/material";
import { Link } from "react-router-dom";


const CartEL = ({author , slug , title, coverphoto}) => {
   
  return (
    <Card sx={{boxShadow:"0px 1px 0px 2px" , borderRadius:"2"}}>
      {author &&      <CardHeader  avatar={
        <Avatar src={author.photo.url} >
        </Avatar>
      } title={<Typography color="text.secondary" fontWeight="700" marginRight="20px">{author.name}</Typography>} />}
   
      <CardMedia component="img"
        height="194"
        image={coverphoto.url}/>
      <CardContent > <Typography fontWeight="700" color="text.primary">{title}</Typography></CardContent>
      <Divider variant="middle" sx={{margin:"10px"}} />
      <CardActions>
        <Link style={{textDecoration:"none",width:"100%"}} to={`/blogs/${slug}`}>
      <Button  sx={{width:"100%",borderRadius:"3"}} size="small" variant="outlined">مطالعه مقاله</Button>
      </Link>
      </CardActions>
    </Card>
  );
};

export default CartEL;
