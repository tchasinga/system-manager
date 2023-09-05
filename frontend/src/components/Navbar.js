 import {Link} from 'react-router-dom'
import { Tooltip } from '@mui/material';
 const Navbar = () => {
    return (
        <header>
            <div className="container">
               <Tooltip title='this is an header..' arrow placement='right'>
               <Link to="/Animtion">Register data</Link>
               </Tooltip>
            </div>
        </header>
    )
} 

export default Navbar;