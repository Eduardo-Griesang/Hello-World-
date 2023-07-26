import './PostModule.css'

const PostModule = ({ Banner, Title, PostContent }) =>{
    console.log(Banner)
    return(
        <article>
            <div className='post-banner' style={{backgroundImage: `url(${Banner})`}}></div>
            <h2 className='post-title'>{Title}</h2>
            <div className='post-content'>
                {PostContent}
            </div>
        </article>
    )
}

export default PostModule