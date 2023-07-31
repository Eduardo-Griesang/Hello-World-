import './Post.css'

import { Link } from 'react-router-dom'

const Post = ({element}) => {
    /* é necessário utilizar require() no src da imagem para poder passar uma template string */
    return (
        <div className='post'>
            <img src={require(`../../assets/posts/${element.id}/capa.png`)}/>
            <h5>{element.titulo}</h5>
            <Link to={`/PostPage/${element.id}`} >
                <button>Read</button>
            </Link>
        </div>
    )
}

export default Post