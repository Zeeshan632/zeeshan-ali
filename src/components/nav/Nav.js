import { useState } from "react";
import "./nav.css";

// importing icons from React Icons Library
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

const Nav = () => {
	const [activeNav, setActiveNav] = useState("#home");

	return (
		<nav>
			<a
				href="#home"
				className={activeNav === "#home" ? "active" : ""}
				onClick={() => setActiveNav("#home")}
			>
				<AiOutlineHome />
			</a>
			<a
				href="#about"
				className={activeNav === "#about" ? "active" : ""}
				onClick={() => setActiveNav("#about")}
			>
				<AiOutlineUser />
			</a>
			<a
				href="#experience"
				className={activeNav === "#experience" ? "active" : ""}
				onClick={() => setActiveNav("#experience")}
			>
				<BiBook />
			</a>
			<a
				href="#portfolio"
				className={activeNav === "#services" ? "active" : ""}
				onClick={() => setActiveNav("#services")}
			>
				<RiServiceLine />
			</a>
			<a
				href="#contact"
				className={activeNav === "#contact" ? "active" : ""}
				onClick={() => setActiveNav("#contact")}
			>
				<BiMessageSquareDetail />
			</a>
		</nav>
	);
};

export default Nav;
