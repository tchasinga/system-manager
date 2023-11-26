import { useEffect} from 'react';
import WorkoutDetails from '../components/workoutDetails'; // Adjust the casing here
import WorkoutForm from '../components/Workoutform'
import {useWorkoutsContext} from '../hooks/useWorkoutsContext';

const Home = () => {
  const {workouts, dispatch} = useWorkoutsContext()

  useEffect(() => {
    const fetchWorkout = async () => {
      const response = await fetch('http://localhost:4000/api/workouts');
      const json = await response.json();
      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: json})
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
     <WorkoutForm />
    </div>
  );
};

export default Home;
