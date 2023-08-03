import { useParams } from 'react-router-dom'
import PostModule from '../../components/PostModule'

import postJson from '../../json/posts.json'
import './PostPage.css'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

const PostPage = () => {

    const params = useParams()

    const postFromParam = postJson.find((post) => post.id === Number(params.id))

    if (!postFromParam){
        return(
            <h1>Post not found...</h1>
        )
    }

    return (
        <PostModule 
            Title={postFromParam.titulo} 
            Banner={require(`../../assets/posts/${params.id}/capa.png`)}
        >
            <ReactMarkdown>
                {postFromParam.texto}
            </ReactMarkdown>
        </PostModule>
    )
}

export default PostPage