import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import ME from "../../assets/my-img.png";

const Header = () => {
	return (
		<header id="home">
			<div className="container header__container">
				<h5>Hello I'm</h5>
				<h1>Zeeshan Ali</h1>
				<h5 className="text-light">Fullstack Developer</h5>
				<CTA />
				<HeaderSocials />

				<div className="me">
					<img src={ME} alt="me" />
				</div>

				<a href="#contact" className="scroll__down">
					Scroll Down
				</a>
			</div>
		</header>
	);
};

export default Header;
