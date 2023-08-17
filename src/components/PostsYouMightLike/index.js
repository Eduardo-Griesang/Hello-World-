import Posts from '../Posts';
import './PostsYouMightLike.css';

const PostsYouMightLike = ({ CurrentPost, PostsToBeShouned }) =>{

    /* recomendedPosts é um clone de PostsToBeShouned que foi passado como prop, esse clone é necessário para a manipulação
    da array sem afetar a prop em si */
    const recomendedPosts = PostsToBeShouned.slice()

    /* essa função encontra o id do post atual na array clone e o remove da array */
    const removeCurrentPost = recomendedPosts.findIndex(post => post.id === CurrentPost)
    if (removeCurrentPost !== -1){
        recomendedPosts.splice(removeCurrentPost, 1)
    }

    /* essa função pega os 4 primeiros post para mostrar apenas eles, não o array completo */
    const FourPostToBeShouned = recomendedPosts.slice(0,4)

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