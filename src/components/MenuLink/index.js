import "./MenuLink.css"
import { NavLink } from "react-router-dom"

const MenuLink = ({ filterURL, text }) => {
    return (
        <NavLink className={({ isActive, notActive }) => 
                notActive ? "nav-link" : isActive ? "nav-link nav-link-underline" : "nav-link"
            } 
            to={filterURL}> {text}
        </NavLink>
    )
}

export default MenuLink