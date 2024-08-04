import { Link } from 'react-router-dom';
const NavBar=()=>{
    return(
        <nav className='navbar navbar-expand-sm bg-light justify-content-center'>
            <ul className='navbar-nav'>
                <li className='nav-item bg-primary btn'><Link className='nav-link' to='/'>Home</Link></li>
                <li className='nav-item bg-primary ms-5 btn'><Link className='nav-link' to='/about'>About</Link></li>
                <li className='nav-item bg-primary ms-5 btn'><Link className='nav-link' to='/reg'>Register</Link></li>
                <li className='nav-item bg-primary ms-5 btn'><Link className='nav-link ' to='/log'>Login</Link></li>
                <li className='nav-item bg-primary ms-5 btn'><Link className='nav-link' to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    )
}
export default NavBar