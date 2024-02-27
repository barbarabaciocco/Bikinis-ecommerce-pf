import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return(
        <nav className= "NavBar">
            <Link to='/'>
                <h3>Bikinis Sumiks</h3>
            </Link>
            <div className="Categories">
                <NavLink to={"/category/Enterizas"} className={({ isActive}) => isActive? 'ActiveOption' : 'Option'}>Enterizas</NavLink>
                <NavLink to={"/category/Bikinis"} className={({ isActive}) => isActive? 'ActiveOption' : 'Option'}>Bikinis</NavLink>
                <NavLink to={"/category/Surf"} className={({ isActive}) => isActive? 'ActiveOption' : 'Option'}>Surf</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar


