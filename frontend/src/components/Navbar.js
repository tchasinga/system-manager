 import {Link} from 'react-router-dom'
 import {useLogout} from '../hooks/useLogout'
 import { useAuthContext } from '../hooks/useAuthContext'

 const Navbar = () => {
  const { logout } = useLogout(true)
  const { user } = useAuthContext();

    const handleClicklogout = () =>{
        logout();
    }

    return (
        <header>
            <div className="container">
                <Link to="">Program your workout</Link>
                <nav>
                  {user && (
                      <div>
                      <span>Hi, {user.email}</span>
                          <button onClick={handleClicklogout}>Logout-now</button>
                      </div>
                  )}
                   {/* not user so that we can see this */}
                    {!user && (
                        <div>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Signup</Link>
                        </div>
                    )} 
                </nav>
            </div>
        </header>
    )
} 

export default Navbar;