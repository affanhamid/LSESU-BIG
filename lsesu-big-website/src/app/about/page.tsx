import * as React from 'react';
import { Container, Typography, Box } from '@mui/material';

const AboutPage: React.FC = () => {
    return (
        <Container maxWidth="lg">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    About LSESU BIG
                </Typography>
                <Typography variant="body1" component="p">
                    Information about LSESU BIG.
                </Typography>
            </Box>
        </Container>
    );
};

export default AboutPage;
