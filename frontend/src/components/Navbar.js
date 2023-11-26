 import {Link} from 'react-router-dom'
 import {useLogout} from '../hooks/useLogout'

 const Navbar = () => {
  const { logout } = useLogout(true)

    const handleClicklogout = () =>{
        logout();
    }

    return (
        <header>
            <div className="container">
                <Link to="">Program your workout</Link>
                <nav>
                    <div>
                        <button onClick={handleClicklogout}>Logout-now</button>
                    </div>
                    <div>
                        <Link to="/login">Login</Link>
                        <Link to="/singup">Singup</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
} 

export default Navbar;