import { useParams } from 'react-router-dom'
import PostModule from '../../components/PostModule'

import postJson from '../../json/posts.json'
import './PostPage.css'

const PostPage = () => {

    const params = useParams()

    const postFromParam = postJson.find((post) => post.id === Number(params.id))

    console.log(postFromParam)

    return (
        <PostModule 
            Title={postFromParam.titulo} 
            Banner={require(`../../assets/posts/${params.id}/capa.png`)}
        >
            <div>
                {postFromParam.texto}
            </div>
        </PostModule>
    )
}

export default PostPage