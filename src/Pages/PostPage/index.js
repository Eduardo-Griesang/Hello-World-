import { Routes, Route, useParams } from 'react-router-dom'
import PostModule from '../../components/PostModule'

import postJson from '../../json/posts.json'
import './PostPage.css'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import NotFound from '../NotFound'
import RegularPage from '../../components/RegularPage'
import PostsYouMightLike from '../../components/PostsYouMightLike'

const PostPage = () => {

    const params = useParams()

    const postFromParam = postJson.find((post) => post.id === Number(params.id))

    if (!postFromParam){
        return(
            <NotFound />
        )
    }

    return (
        <Routes>
            <Route path='*' element={<RegularPage />}>
                <Route index element={
                    <PostModule 
                        Title={postFromParam.titulo} 
                        Banner={require(`../../assets/posts/${params.id}/capa.png`)}
                    >
                        <ReactMarkdown>
                            {postFromParam.texto}
                        </ReactMarkdown>
                        
                        <PostsYouMightLike CurrentPost={postFromParam.id} PostsToBeShouned={postJson} />
                    </PostModule>
                } />
            </Route>
        </Routes>
    )
}

export default PostPage