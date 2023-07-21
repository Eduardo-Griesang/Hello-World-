import './Posts.css'
import posts from '../../json/posts.json'
import Post from '../Post'

const Posts = () => {
    return(
        <ul className='post-wrapper'>
            {posts.map((post) => {
                return(
                    <li key={post.id}>
                        <Post element={post} />
                    </li>
                )
            })}
        </ul>
    )
}

export default Posts