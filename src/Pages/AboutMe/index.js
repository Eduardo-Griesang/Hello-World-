import PostModule from '../../components/PostModule'
import banner from '../../assets/Banner.jpg'
import './AboutMe.css'

const AboutMe = () => {
    return(
        <PostModule
            Banner={banner}
            Title={'About me'}

        />
    )
}

export default AboutMe