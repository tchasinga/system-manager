import { useState } from 'react'
import {useWorkoutsContext} from '../hooks/useWorkoutsContext';
import { Tooltip } from '@mui/material';


const WorkoutForm = () => {
    // use dispatch to updated componenent after submitting...
    const {dispatch} = useWorkoutsContext()
  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const workout = {title, load, reps}
    
    const response = await fetch('https://management-api-location.onrender.com/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json'
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

      <label>Place to reserve:</label>
      <input 
        type="number" 
        onChange={(e) => setLoad(e.target.value)} 
        value={load}
      />

      <label>Number of phone:</label>
      <input 
        type="number" 
        onChange={(e) => setReps(e.target.value)} 
        value={reps} 
      />

    <Tooltip title="add new program" arrow placement="bottom">
    <button>send request</button>
    </Tooltip>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default WorkoutForm