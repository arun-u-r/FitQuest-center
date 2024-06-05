import React from 'react';
import { Box, Typography, Container, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#333',
        color: '#fff',
        py: 3,
        borderTop: '1px solid #444',
      }}
    >
      <Container maxWidth="md">
        <Box display="flex" flexDirection="column" alignItems="center">
          <Link href="/" sx={{ mb: 1 }}>
            <img src='/public/urLogoDark.svg' width={100} height={54} alt="ur" />
          </Link>
          <Typography variant="body2" align="center">
            Copyright &copy; Arun.UR. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
