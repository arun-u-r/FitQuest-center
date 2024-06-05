import React, { useState } from "react";
import { Box } from "@mui/material";
import Banner from "../components/Banner";
import Exercises from "../components/Exercises";
import SearchExercises from "../components/SearchExercises";

const Home = () => {
  const [bodyPart, setBodyPart] = useState(["all"]);
  const [exercises, setExercises] = useState([]);
  // console.log("bodyPart data==", bodyPart)
  return (
    <Box sx={{ backgroundColor: '#B4B4B4' }}>
      <Banner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
};

export default Home;
