import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_SINGLE_AUTHOR } from '../Queary';
import { Container, Grid ,Avatar, Typography} from "@mui/material";
import Loader from '../Loader';
import sanitizeHtml from "sanitize-html"
import CartEL from '../blogs/CartEL';



const PageAuthors = () => {
    const slug = useParams()
    const {loading,data,error} = useQuery(GET_SINGLE_AUTHOR,{variables:{slug},});
    if (loading) return <Loader/>;
    if (error) return <h4>errors ...</h4>;
    console.log(data);
  
   const {author} = data
    return (
        <div>
        <Container maxWidth="lg">
            <Grid container mt={10}>
                <Grid item xs={12} sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <Avatar sx={{width:"250px",height:"250px"}} src={author.photo.url}></Avatar>
                    <Typography fontWeight={700} mt={4} component="h3" variant='h5'>{author.name}</Typography>
                    <Typography mt={2} color="text.secondary" component="p" variant='h5'>{author.field}</Typography>
                </Grid>
                <Grid item xs={12} mt={6}>
                        <div dangerouslySetInnerHTML={{__html:sanitizeHtml(author.describ.html)}}>

                        </div>
                </Grid>
                <Grid items xs={12} mt={6}>
<Typography  fontWeight={700} mt={4} component="h3" variant='h5'>{author.name}مقالات</Typography>
<Grid container spacing={2} mt={2}>
    {author.posts.map(post => <Grid key={post.id} itemm xs={12} sm={6} md={4}>
        <CartEL title={post.title} slug={post.slug} coverphoto={post.coverphoto}/>
    </Grid>)}
</Grid>

                </Grid>
            </Grid>
        </Container>

        </div>
    );
};

export default PageAuthors;