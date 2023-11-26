import { useState } from "react"
import '../index.css'

const Singup = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const res = await fetch('http://localhost:4000/api/user/signup', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({email, password})
        })
        const data = await res.json();
        console.log(data)
    }

  return(
    <div className="">
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Sign up</h3>
            <label>Email : </label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />

            <label>Password : </label>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            <button>Sign-up</button>
        </form>
    </div>
  )   
}

export default Singup