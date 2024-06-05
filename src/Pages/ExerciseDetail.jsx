import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import Discription from '../components/Discription'
import ExercisesVideos from '../components/ExercisesVideos'
import SimilarExercises from '../components/SimilarExercises'
import { exerciseOptions, fetchData, youtubeOptions} from '../utilities/fetchData'

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] =useState({});
  const [exerciseVideos, setexerciseVideos] = useState([]);
  const [targetMuscleExercise, settargetMuscleExercise] = useState([]);
  const [equipmentMuscleExercise, setequipmentMuscleExercise] = useState([]);

  
  const { id } = useParams();
   
  useEffect(() => {
    const fetchExerciseData = async () =>{
    const exerciseDBUrl = 'https://exercisedb.p.rapidapi.com';
    const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

    const exerciseDetailData = await fetchData(`${exerciseDBUrl}/exercises/exercise/${id}`, exerciseOptions)
    console.log("exercisesDetailData",{exerciseDetailData});
    setExerciseDetail(exerciseDetailData);

    const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
    setexerciseVideos(exerciseVideosData.contents);

    const targetMuscleExercisesData = await fetchData(`${exerciseDBUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
    settargetMuscleExercise(targetMuscleExercisesData);
    //console.log({targetMuscleExercisesData});
    const equipmentMuscleExerciseData = await fetchData(`${exerciseDBUrl}/exercises/equipment/${exerciseDetailData}.equipment`,exerciseOptions)
    setequipmentMuscleExercise(equipmentMuscleExerciseData);
    }
    fetchExerciseData();
  },[id]);
  return (
    <Box>
      <Discription exerciseDetail={exerciseDetail} />
      <ExercisesVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercise={targetMuscleExercise} equipmentMuscleExercise={equipmentMuscleExercise} />
      
    </Box>
  )
}

export default ExerciseDetail