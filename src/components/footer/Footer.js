import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
	return (
		<footer>
			<a href="#home" className="footer__logo">
				Zeeshan Ali
			</a>

			<ul className="permalinks">
				<li>
					<a href="#home">Home</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#experience">Experience</a>
				</li>
				<li>
					<a href="#services">Services</a>
				</li>
				<li>
					<a href="#portfolio">Portfolio</a>
				</li>
				<li>
					<a href="#testimonials">Testimonials</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>

			<div className="footer__socials">
				<a href="https://github.com/Zeeshan632">
					<FaGithub />
				</a>
				<a href="https://www.linkedin.com/in/zeeshan-ali-6182281a6/">
					<BsLinkedin />
				</a>
				<a href="https://twitter.com/ZeeshanAli632">
					<FaTwitterSquare />
				</a>
			</div>

			<div className="footer_copyright">
				<small>&copy; Zeeshan Ali. All rights reserved.</small>
			</div>
		</footer>
	);
};

export default Footer;
