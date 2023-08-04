import './Banner.css'
import Me from '../../assets/drawned-icon.jpg'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='presentation'>
                <h1>Hello World!</h1>
                <p>
                    Welcome to my personal space! I'm Eduardo Griesang, currently a Front-End Developer trying to migrate to 
                    a Full-Stack position. Here I will post about my day to day learning aswell as the knowledge I allready got.
                </p>
                <div className='button-presentation'>
                    <a href='https://portfolio-eduardo-griesang.vercel.app' target="_blank">
                        My Portfolio
                    </a>
                    <a href='https://www.linkedin.com/in/eduardo-griesang-0b779921b/' target="_blank">
                        My LinkedIn
                    </a>
                </div>
            </div>
            <div className='images'>
                <img src={Me} alt='Me' />
            </div>
        </div>
    )
}

export default Banner
