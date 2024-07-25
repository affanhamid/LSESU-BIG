import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

const NavBar: React.FC = () => {
    return (
        <AppBar position="static" className="bg-BIGBlue py-5">
            <Container maxWidth="lg">
                <Toolbar>
                    <div className="flex-grow">
                        <Image src="/logo.jpg" alt="LSESU BIG Logo" width={200} height={100} />
                    </div>
                    <Link href="/" passHref>
                        <Button color="inherit" sx={{ mx: 3 }}>Home</Button>
                    </Link>
                    <Link href="/about" passHref>
                        <Button color="inherit" sx={{ mx: 3 }}>About</Button>
                    </Link>
                    <Link href="/events" passHref>
                        <Button color="inherit" sx={{ mx: 3 }}>Events</Button>
                    </Link>
                    <Link href="/contact" passHref>
                        <Button color="inherit" sx={{ mx: 3 }}>Contact US</Button>
                    </Link>
                    <Link href="/tracker" passHref>
                        <Button color="inherit" sx={{ mx: 3 }}>BIG Tracker</Button>
                    </Link>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;
