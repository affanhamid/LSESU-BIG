import * as React from 'react';
import { Container, Typography, Box } from '@mui/material';

const ContactPage: React.FC = () => {
    return (
        <Container maxWidth="lg">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Contact Us
                </Typography>
                <Typography variant="body1" component="p">
                    Contact details.
                </Typography>
            </Box>
        </Container>
    );
};

export default ContactPage;
