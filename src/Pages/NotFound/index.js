import { useNavigate } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {

    const navigate = useNavigate();
    /* useNavigate passando (-1) funciona como o botão de voltar do navegador */

    return (
        <div className='container404'>
            <h1 className='title404'>404</h1>
            <h2 className='subtitle404'>Page Not Found</h2>
            
            <p className='text404'>Are you sure you it's this what you are looking for?</p>

            <button className='button404' onClick={() => navigate(-1)}>
                Go back
            </button>
        </div>
    )
}

export default NotFound