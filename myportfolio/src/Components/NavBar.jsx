import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav className='navbar'>
            <div className='nav-content'>
               <div className='navbar-left'>
                <img src="./favicon/android-chrome-192x192.png" alt="My Profile Picture" className='navbar-image' />
               </div>

               <div className='nav-links'>
                <Link to='/' className='nav-link'>Home</Link>
                <Link to='/Projects' className='nav-link'>Projects</Link>
                <a href="#contact" className='nav-link'>Contact</a>
               </div>
            </div>
        </nav>
    );
}

export default NavBar;