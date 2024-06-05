import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import ExerciseGif from "./ExerciseGif";
import Loader from "./Loader";
import { exerciseOptions, fetchData } from "../utilities/fetchData";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(9);
  console.log('Exercise are ' ,exercises)

  // useEffect(() => {
  //   let exercisesData = [];
  //   const fetchExercisesData = async () => {
  //       if (bodyPart === 'all') {
  //         exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
  //       } else {
  //         exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
  //       }
      
  //     setExercises(exercisesData);
  //   };

  //   fetchExercisesData();
  // }, [bodyPart]);

  // const indexOfLastExercise = currentPage * exercisesPerPage;
  // const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  // const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise) 

  const paginate = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  // if (!currentExercises.length) return <Loader />;

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {exercises.map((exercise, index) => (
          // <ExerciseGif key={index} exercise={exercise} />
          <p key={index}>{exercise.name}</p>
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack> 
    </Box>
  );
};

export default Exercises;
