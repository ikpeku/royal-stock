
import { AllPhotos } from '../../contants';
import "./Navbar.scss"
import { NavLink, Link } from 'react-router-dom';




const Navbar = () => {
    return (
        <div className='home-navbar'>
            <div className='logo-section'>
                <Link to='/'><img src={AllPhotos.Logo} alt="royal stock logo" /></Link>
            </div>
            <div className='link-section'>
                <div id='translator'>

                </div>
                <div className='link-section__nav'>
                    <ul>
                        <li>
                            <NavLink to="/" className={({isActive}) => isActive ? "active-link" : "not-active"}>
                               Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about"
                            className={({isActive}) => isActive ? "active-link" : "not-active"}
                            >About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/faq" 
                           className={({isActive}) => isActive ? "active-link" : "not-active"}
                            >FAQ</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" 
                           className={({isActive}) => isActive ? "active-link" : "not-active"}
                            >Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;