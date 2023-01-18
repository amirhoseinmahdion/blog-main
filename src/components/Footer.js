import { Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer>
                <Typography component="p" variant='p' fontWeight="500" bgcolor="#f7f7f7" color="primary" padding="10px" textAlign="center" mt={10} >
پروژه وبلاگ با graphQl - امیرحسین مهدیون
                </Typography>
            </footer>
        </div>
    );
};

export default Footer;