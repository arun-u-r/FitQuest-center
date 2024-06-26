import React from 'react'
import {Link} from 'react-router-dom';
import { Button, Stack, Typography} from '@mui/material';

const ExerciseGif = ({ exercise }) => {

  // console.log(exercise)
  return (
    <Link className='exercise-gif' to={ `/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
      <Stack direction ='row'>
        <Button sx={{ ml: '21px', color: '#fff', background: '#fcc9a9',
        fontSize: '14px', borderRadius: '20px' , textTransform: 'capitalize'
      }}>
        {exercise.bodyPart}
        </Button>
        <Button sx={{ ml: '21px', color: '#fff', background: '#fcc757',
        fontSize: '14px', borderRadius: '20px' , textTransform: 'capitalize'
      }}>
        {exercise.target}
        </Button>
      </Stack>
      <Typography sx={{ ml: '21px', color: '#000', fontWeight: 'bold', mt: '11px', pb: '10px', textTransform: 'capitalize', fontSize: '20px' }} >
        {exercise.name} {exercise.equipment}
      </Typography>
    </Link>
  )
}

export default ExerciseGif