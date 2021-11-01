import React from 'react';
import './TopBanner.css';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import { cyan } from '@mui/material/colors';

const cyanColor = cyan['A400'];


const TopBanner = () => {
    return (
        <Container className="top-banner" sx={{ mt: 2, p: 10 }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }}>
                    <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} item xs={12} sm={5} md={5}>
                        <div>
                            <Typography variant="h3">
                                Your New Smile
                            </Typography>

                            <Typography sx={{ mt: 1 }} variant="h3">
                                Starts Here
                            </Typography>

                            <Typography sx={{ mt: 3, color: 'text.disabled' }} variant="body2">
                                A smile makeover combines a variety of cosmetic dental procedures, including: Teeth whitening, to brighten up discolored teeth Braces or Invisalign,
                            </Typography>

                            <Button sx={{ mt: 3, borderRadius: 0, py: 1.5, bgcolor: cyanColor }} variant="contained">GET APPOINTMENT</Button>
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={7} md={7}>
                        <img className="top-banner-img" src="https://i.ibb.co/sgC89nC/chair.png" alt="doctors chamber" />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default TopBanner;