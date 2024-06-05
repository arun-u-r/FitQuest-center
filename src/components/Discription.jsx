import React from 'react'
import { Typography, Stack, Button} from '@mui/material'

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png'

const Discription = ({ exerciseDetail }) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
    const extraDetail =[
        {
            icon: BodyPartImage,
            name: bodyPart,
        },
        {
            icon: TargetImage,
            name: target,
        },
        {
            icon: EquipmentImage,
            name: equipment,
        },
    ];

  return (
    <Stack gap="60px" sx={{flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
        <img src={gifUrl} alt={name} loading='Lazy' className='detail-image' />
        <Stack sx={{ gap: {lg: '35px', xs: '20px'}}}>
            <Typography textTransform='capitalize' variant='h4'>
               <b> {name} </b>
            </Typography>
            <Typography>
                Exercises find the perfect version of yourself. {name} {` `} is the one of the great exercises to {target}. It will help you to burn your kalories and improve your vibe and gain energy .
            </Typography>
            {extraDetail.map((item) => (
                <Stack key= {item.name} direction="row" gap="24px" alignItems='center'>
                <Button sx={{ background : '#fff2db', borderRadius: '50%' , width: '100px', height: '100px'}}>
                    <img src={item.icon} alt={bodyPart} style={{width:'50px',height:'50px'}}/>
                    </Button>
                        <Typography textTransform ='capitalize' variant='h6'>
                            {item.name}
                        </Typography>
                    
                </Stack>
            ))}
        </Stack>
    </Stack>

  )
}

export default Discription