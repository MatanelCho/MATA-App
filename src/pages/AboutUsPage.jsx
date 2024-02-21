import React from 'react';
import { Container, Typography, Box, Grid, Button, Paper } from '@mui/material';

const AboutUsPage = () => {
  return (
    <Container maxWidth="lg">
      <Box my={4} sx={{ flexGrow: 1 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to MATA, Your Digital Showcase!
        </Typography>
        <Typography variant="body1" paragraph>
          At MATA, we're revolutionizing the way businesses connect with their customers. In today's fast-paced world, your online presence is more crucial than ever. That's why we've created a platform that allows businesses of all sizes to effortlessly publish, edit, and manage product cards that make their products shine online.
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h5" component="h3">For Businesses</Typography>
              <Typography variant="body1" paragraph>
                Showcase your products with ease, engage your audience, and expand your reach. Join MATA to make your products visible to thousands of potential customers every day.
              </Typography>
              <Button variant="contained" color="primary">Learn More</Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h5" component="h3">For Users</Typography>
              <Typography variant="body1" paragraph>
                Discover and save your next favorite products. Keep track of your favorite businesses and never miss an update with MATA.
              </Typography>
              <Button variant="contained" color="primary">Get Started</Button>
            </Paper>
          </Grid>
        </Grid>
        
        <Box mt={5}>
          <Typography variant="body1" paragraph>
            Join us today and experience the future of digital product showcasing with MATA.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};


export default AboutUsPage;
