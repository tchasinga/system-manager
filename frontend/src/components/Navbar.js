 import {Link} from 'react-router-dom'

 const Navbar = () => {
    return (
        <header>
            <div className="container">
                <Link to="">Program your workout</Link>
                <nav>
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