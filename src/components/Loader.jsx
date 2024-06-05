import React from 'react'
import { Stack } from '@mui/material'
import { InfinitySpin } from 'react-loader-spinner'

const Loader = () => {
  return (
    <Stack direction ='row' justifyContent='center' alignItems='center' width='100vh' >
      <InfinitySpin color='red' />
    </Stack>
  )
}

export default Loader