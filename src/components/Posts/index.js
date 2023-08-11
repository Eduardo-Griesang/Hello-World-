import './Posts.css'
import posts from '../../json/posts.json'
import Post from '../Post'

const Posts = ({show}) => {
    return(
        <ul className='post-wrapper'>
            {show ? show.map((post) => {
                return(
                    <li key={post.id}>
                        <Post element={post} />
                    </li>
                )})
                : posts.map((post) => {
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