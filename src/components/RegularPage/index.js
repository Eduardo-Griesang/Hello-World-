import { Outlet } from 'react-router-dom'
import Banner from '../Banner'
import './RegularPage.css'

const RegularPage = () => {
    /* <Outlet/> renderiza diferentes elementos dependendo da url onde a página está */
    return (
        <main>
            <Banner />
            <Outlet />
        </main>
    )
}

export default RegularPage