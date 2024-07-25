import React from 'react';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Typography from '@mui/material/Typography';

const Footer = () => {
    return (
        <footer className="bg-BIGBlue text-white p-4 text-center flex flex-col items-center pt-10">
            <div className="flex justify-evenly w-full">
                <div>
                    <img src="/logo.jpg" alt="LSESU BIG Logo" width={200} height={100} />
                </div>
                <div></div>
                <div className="flex gap-10">
                    <div>
                        <Typography variant="h6" component="h4">Follow Us:</Typography>
                        <div className="flex space-x-1">
                            <IconButton color="inherit" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <InstagramIcon />
                            </IconButton>
                            <IconButton color="inherit" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <FacebookIcon />
                            </IconButton>
                            <IconButton color="inherit" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon />
                            </IconButton>
                        </div>
                    </div>
                    <div className="flex flex-col text-left">
                        <Typography variant="body1">LSE Student Union</Typography>
                        <Typography variant="body1">Houghton Street</Typography>
                        <Typography variant="body1">London</Typography>
                        <Typography variant="body1">WC2A 2AE</Typography>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <Typography variant="body2">© {new Date().getFullYear()} LSESU Business & Investment Group. All rights reserved.</Typography>
            </div>
        </footer>
    );
};

export default Footer;
