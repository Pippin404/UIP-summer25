import '../App'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-menu">
                <a href="/login">Login</a>
                <span className="navbar-separator">         |         </span>
                <a href="/register">Register</a>
            </div>
        </nav>
    );
}

export default Navbar;