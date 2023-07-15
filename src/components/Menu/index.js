import './Menu.css'
import MenuLink from '../MenuLink';

const Menu = () => {
    return (
        <header>
            <nav className='navigation'>
                <MenuLink filterURL={"/"} text={"Home"} />
                <MenuLink filterURL={"/AboutMe"} text={"AboutMe"} />
            </nav>
        </header>
    )
}

export default Menu