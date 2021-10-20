import React from 'react';
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';


const Footer = () => {
    const today = new Date()
    return (
        <AppBar position="static" color="primary">
            <Container maxWidth="md">
                <Toolbar>
                    <Typography variant="body1" color="inherit">
                        ABDULLAH KARACAOĞLU {today.getFullYear()}
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
}


export default Footer;
