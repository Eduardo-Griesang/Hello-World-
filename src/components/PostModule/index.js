import './PostModule.css'

const PostModule = ({ Banner, Title, children }) =>{
    /* recebendo o children faz com que todos os elementos filhos sejam renderizados ali, independente do nome passado a eles,
    qualquer outro nome não funcionaria */
    return(
        <article className='article-wrapper'>

            <div className='post-banner' style={{backgroundImage: `url(${Banner})`}}></div>
            <h2 className='post-title'>
                {Title}
            </h2>

            <div className='post-content'>
                {children}
            </div>
        </article>
    )
}

export default PostModule