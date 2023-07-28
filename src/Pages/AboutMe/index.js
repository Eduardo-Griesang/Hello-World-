import PostModule from "../../components/PostModule";
import banner from "../../assets/Banner.jpg";

import "./AboutMe.css";
import Eduardo from "../../assets/Eduardo.jpg";

const AboutMe = () => {
  return (
    <PostModule Banner={banner} Title={"About me"}>
      <h3 className="subtitle">Hello! I'm Eduardo</h3>

      <div className="about-me-wrapper">
        <img className="about-me-img" src={Eduardo} alt="Photo of Eduardo" />
        <div>
          <p className="about-me-paragraph">
            {" "}
            I'm 21 years old and I was borned and raised in Rio Grande do Sul
            Brasil. When I was 10 years old my parents got me my first computer,
            back then I used it for playing games and making schoold projects,
            with my first PC I got a passion for tecnologies, and that lead me
            to a carrer as a software developer.{" "}
          </p>

          <p className="about-me-paragraph">
            {" "}
            Ever since I started my journey coding, I had a special conection
            with Front-End, because it isn't only about the code, it's about
            making the user feel something looking at your page. Front-end
            development for me it's a form of art and expression.{" "}
          </p>

          <p className="about-me-paragraph">
            {" "}
            Currently I'm proficient in Front-End tecnologies such as HTML5,
            CSS3, BootStrap, TailWind, JavaScript, React.js, JSON and APIs. For
            the Back-End I've studied Python, Node.js and Next.js{" "}
          </p>
        </div>
      </div>
    </PostModule>
  );
};

export default AboutMe;
