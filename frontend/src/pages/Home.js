import { useEffect, useState } from 'react';
import WorkoutDetails from '../components/workoutDetails'; // Adjust the casing here

const Home = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkout = async () => {
      const response = await fetch('/api/workouts');
      const json = await response.json();
      if (response.ok) {
        setWorkouts(json);
      }
    };

    fetchWorkout();
  }, []);

  // By using props methode you can access and map everywhere... 
  return (
    <div className="home">
     <div className="workouts">
     {workouts && workouts.map((workout) => (
       <WorkoutDetails key={workout._id} workout={workout} />
      ))}
     </div>
    </div>
  );
};

export default Home;
