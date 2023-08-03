import { Link } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='container404'>
            <h1 className='title404'>404</h1>
            <h2 className='subtitle404'>Page Not Found</h2>
            <p className='text404'>Are you sure you it's this what you are looking for?</p>
            <Link to={'/'} className='button404'>Go back</Link>
        </div>
    )
}

export default NotFound