import { Outlet } from 'react-router-dom'
import Banner from '../Banner'
import './RegularPage.css'

const RegularPage = () => {
    return (
        <main>
            <Banner />

            <Outlet />
        </main>
    )
}

export default RegularPage