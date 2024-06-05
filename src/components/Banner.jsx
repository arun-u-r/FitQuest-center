import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import BannerImage from '../assets/images/banner.png'



const Banner = () => {
  return (
    <Box sx={{
      mt: { lg: '100px', xs: '70px' },
      ml: { sm: '50px' }
    }}
      position='relative' p='20px'>
      <Typography color='#FF2625'
        fontWeight='700px' fontSize='26px'
        sx={{ fontSize: { lg: '44px', xs: '40px' } }} >
        No Pain No Gain....
      </Typography>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '34px', xs: '30px' } }} mb='25px' mt='25px'>
        GO for IT

      </Typography>
      <Typography sx={{ mt: '20px' }} mb={5}>
        “I don’t count my sit-ups. <br /> I only start counting when it starts hurting-<br /> because they’re the only ones that count.” <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <a href='https://en.wikipedia.org/wiki/Muhammad_Ali' style={{ textDecoration: 'none' }} >-Muhammad Ali </a>

      </Typography>
      <Typography fontSize='22px' lineHeight='35px' mb={5} >
        Checkout The Exercises
      </Typography>
      <Stack>
        <a href='#exercise' style={{ marginTop: '10px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
      </Stack>

      <Typography
        fontWeight={650}
        color="#ff2625"
        sx={{
          opacity: 0.1,
          display: { lg: 'block', xs: 'none' }
        }} fontSize='200px'>
        Exercises
      </Typography>

      <img src={BannerImage} alt='banner' className="banner-img" />

    </Box>
  )
}

export default Banner