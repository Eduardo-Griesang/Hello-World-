import { Link } from 'react-router-dom'
import './Menu.css'

const Menu = () => {
    return (
        <header>
            <nav className='navigation'>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/AboutMe'>About Me</Link>
            </nav>
        </header>
    )
}

export default Menu