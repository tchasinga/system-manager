import { useEffect, useState } from 'react';
import WorkoutDetails from '../components/WorkoutDetails'; // Adjust the casing here
import WorkoutForm from '../components/WorkoutForm'; // Adjust the casing here
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorkout = async () => {
      try {
        // Simulate a 3-second delay
        await new Promise((resolve) => setTimeout(resolve, 3000));

        const response = await fetch('https://management-api-location.onrender.com/api/workouts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        dispatch({ type: 'SET_WORKOUTS', payload: json });
        setIsPending(false);
      } catch (error) {
        setError(error.message);
        setIsPending(false);
      }
    };

    fetchWorkout();
  }, [dispatch]);

  return (
    <div className="home">
      {error && <div className="error">{error}</div>}
      {isPending && <div className="loading">Loading...</div>}
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
