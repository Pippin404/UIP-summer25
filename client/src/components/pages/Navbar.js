import '../../App.css'
import {Link, Outlet} from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">

            <div className="navbar">

                <Link to="/" className='navbar-link'>Login</Link>
                <span> | </span>
                <Link to="/register" className='navbar-link'>Register</Link>
                <span> | </span>
                <Link to="/Profile" className='navbar-link'>Profile</Link>



            </div>



            <Outlet />
        </nav>
    );
}

export default Navbar;