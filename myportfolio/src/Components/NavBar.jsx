import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav className='navbar'>
            <div className='nav-content'>
               <h1 className='nav-logo'>Thando Funeka</h1>

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