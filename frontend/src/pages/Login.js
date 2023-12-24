import { useState } from "react";
import { useLogin } from '../hooks/useLogin';
import Load from "../Download/Load";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  }

  return (
    <div className="">
      <form className="login" onSubmit={handleSubmit}>
        <h3>Login now</h3>
        <label>Email: </label>
        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password: </label>
        <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Logging...' : 'Login'}
        </button>

        {isLoading && <h1 className="Success"><Load /></h1>}

        {error && <p className="error">{error}</p>}
      </form>
    </div>
  )
}

export default Login;