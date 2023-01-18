import { AppBar, Container , Toolbar, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        
        <AppBar position='sticky'>
            <Container>
            <Toolbar>
            
            <Typography fontWeight='700' flex={1} variant="h6" component="h1"  >
            <Link style={{textDecoration:"none" , color:"#fff" , display:"flex" , justifyContent:"space-between"}} to="/"> وبلاگ مهدیون
            </Link>
          </Typography>
          
          <Link  style={{color:"#fff"}} to="/">
          <HomeIcon fontSize="large"/>
          </Link>
          


            
            </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;