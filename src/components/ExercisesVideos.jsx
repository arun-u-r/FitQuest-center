import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Loader from './Loader';



const ExercisesVideos = ({exerciseVideos, name}) => {
  console.log(exerciseVideos)
  if(!exerciseVideos.length) return <Loader />

  return (
    <Box sx={{ marginTop: { lg: '200px'}}} p='20px'>
      <Typography variant='h4' mb="33px">
        Watch <span style={{color:'#ff2525', textTransform: 'capitalize'}} > {name} </span>  Exercise Videos
      </Typography>
      <Stack justifyContent= 'flex-start' flexWrap='wrap' alignItems='center' 
      sx={{
        flexDirection: { lg: "row" },
        gap: { lg: '70px',xs:'0'}, 
      }}
      
      >
        {exerciseVideos?.slice(0, 12).map((item, index) => (
          <a 
          key={index}
          className='exercise-video'
          href={`http://www.youtube.com/watch?v=${item.video.videoId}`}
          target='_blank'
          rel='noreferrer'
          >
           <img src={item.video.thumbnails[0].url} alt={item.video.title} /> 
           <Box>
            <Typography>
              {item.video.title}
            </Typography>
           </Box>                         
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExercisesVideos