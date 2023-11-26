import { useState } from 'react'
import {useWorkoutsContext} from '../hooks/useWorkoutsContext';
import { Tooltip } from '@mui/material';
import {useAuthContext} from '../hooks/useAuthContext';


const WorkoutForm = () => {
    // use dispatch to updated componenent after submitting...
    const {dispatch} = useWorkoutsContext()
  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState(null)
  const {user} = useAuthContext()

  const handleSubmit = async (e) => {
    e.preventDefault()

    // If we miss user registration, we can't add new workout...
    if(!user) {
      setError('You must be logged in to add a new workout')
      return
    }

    const workout = {title, load, reps}
    
    const response = await fetch('https://management-api-location.onrender.com/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json',
         'Authorization': `Bearer ${user.token}`,
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
      setTitle('')
      setLoad('')
      setReps('')
      console.log('new workout added:', json)
      dispatch({type: 'CREATE_WORKOUT', payload: json})
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Workout</h3>

      <label>Excersize Title:</label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
      />

      <label>Load (in kg):</label>
      <input 
        type="number" 
        onChange={(e) => setLoad(e.target.value)} 
        value={load}
      />

      <label>Number of Reps:</label>
      <input 
        type="number" 
        onChange={(e) => setReps(e.target.value)} 
        value={reps} 
      />

    <Tooltip title="add new program" arrow placement="bottom">
    <button>Add program...</button>
    </Tooltip>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default WorkoutForm