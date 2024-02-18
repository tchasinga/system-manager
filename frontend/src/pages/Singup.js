import { useState } from "react"
import '../index.css'
import { useSingup } from "../hooks/useSingup"; 

const Singup = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {singup, error, isLoading} = useSingup();

    const handleSubmit = async (e) =>{
        e.preventDefault();
      await  singup(email, password);
    }

  return(
    <div className="">
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Sign up</h3>
            <label>Email : </label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />

            <label>Password : </label>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            <button disabled={isLoading}>
              {
                isLoading ? 'Signing up...' : 'Sign up'
              }
            </button>
            {error && <p className="error">{error}</p>}
        </form>
    </div>
  )   
}

export default Singup