import { useParams } from 'react-router-dom'
import './PostPage.css'

const PostPage = () => {

    const params = useParams()

    return (
        <h1>
            Post
        </h1>
    )
}

export default PostPage