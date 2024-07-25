import * as React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Slider from '../components/Slider';

const HomePage: React.FC = () => {
  return (
    <Box sx={{ mt: 4, textAlign: 'center' }}>
      <Box sx={{ mt: 4 }}>
        <div className='w-full left-0 top-40 h-[80vh] px-10'>
          <div className='bg-gray-300 w-full h-full flex justify-center items-center'>VIDEO</div>
        </div>
        {/* <video width="100%" controls>
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
      </Box>
      <Box sx={{ mt: 10, px: 20, display: 'flex', alignItems: 'center' }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1" component="p">
            The LSESU Business & Investment Group is the premier finance and business society in Europe. It is the largest and most active society at the London School of Economics.
          </Typography>
          <Typography variant="body1" component="p">
            It was established in 2019 through the combination of the LSE's two largest societies, the LSESU Investment Society (founded 2003) and the LSESU Business and Finance Guild (founded 1996). With each society having built a strong reputation, we are committed to maintaining our professionalism, dedication, innovation and creativity.
          </Typography>
          <Typography variant="body1" component="p">
            Actively working with industry giants spanning investment banking, asset management, legal, professional and financial services sectors, we distribute timely career information and work with our industry contacts to help identify and attract talented LSE students.
          </Typography>
          <Typography variant="body1" component="p">
            Our aim is to maximise the potential of our members and committee, equip them with the technical and professional skills needed to succeed in their chosen profession, and develop leaders for the 21st century. Previous members have gone on to secure highly competitive roles across a range of disciplines linked to the sectors which we cover.
          </Typography>

        </Box>
        <Box sx={{ flex: 1, textAlign: 'right', ml: 20 }}>
          {/* <img src="/about-image.jpg" alt="Image" style={{ maxWidth: '100%', height: 'auto' }} /> */}
          <div className='aspect-[3/4] w-[500px] bg-gray-300 flex justify-center items-center'>Image</div>
        </Box>
      </Box>
      <Box>
        <div className='w-screen left-0 bg-BIGBlue mt-10 pt-10 pb-20 text-white'>
          <Typography variant="h3" component="h2" gutterBottom>
            Past Events
          </Typography>
          <div className='w-3/4 mx-auto'>
            <Slider />
          </div>
        </div>
      </Box>

      <Box>
        <div className='w-screen left-0  mt-10 pt-10 pb-20 '>
          <Typography variant="h3" component="h2" gutterBottom>
            Our Sponsors
          </Typography>
        </div>
      </Box>
    </Box>
  );
};

export default HomePage;
