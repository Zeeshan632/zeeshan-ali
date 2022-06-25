import "./about.css";
import ME from "../../assets/about-me.jpg";

// importing icons from React Icons
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
	return (
		<section id="about">
			<h5>Get To Know</h5>
			<h2>About Me</h2>

			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src={ME} alt="About Img" />
					</div>
				</div>
				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<VscFolderLibrary className="about__icon" />
							<h5>Projects</h5>
							<small>14 Personal Projects</small>
						</article>
						<article className="about__card">
							<FiUsers className="about__icon" />
							<h5>Self Taught</h5>
							<small>1+ year of self learning experience</small>
						</article>
					</div>

					<p>
						Hey, I am a React JS developer and I have been building personal
						projects for a few months. I am a self taught developer which means
						that I have experience in learning new skills by myself.
					</p>

					<a href="#contact" className="btn btn-primary">
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
