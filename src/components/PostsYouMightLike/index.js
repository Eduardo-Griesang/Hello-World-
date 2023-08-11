import Posts from '../Posts';
import './PostsYouMightLike.css';

const PostsYouMightLike = ({ CurrentPost, PostsToBeShouned }) =>{

    const posts = PostsToBeShouned.map((post) => {
        if(post.id !== CurrentPost){
            return post
        }    
    })
    console.log(posts)

    return (
        <div>
            <h1>Other posts you might like:</h1>
            <div>
                <Posts show={posts} />
            </div>
        </div>
    )
}

export default PostsYouMightLike