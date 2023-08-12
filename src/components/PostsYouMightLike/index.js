import Posts from '../Posts';
import './PostsYouMightLike.css';

const PostsYouMightLike = ({ CurrentPost, PostsToBeShouned }) =>{

    /* deleta o post atual para não recomendar o mesmo post que já esta sendo mostrado */
    delete PostsToBeShouned[CurrentPost -1]

    const FourPostToBeShouned = PostsToBeShouned.slice(0, 5)
    console.log(PostsToBeShouned)

    return (
        <div className='you-migth-like'>
            <h1>Other posts you might like:</h1>
            <div>
                <Posts show={FourPostToBeShouned} />
            </div>
        </div>
    )
}

export default PostsYouMightLike