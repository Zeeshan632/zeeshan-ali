import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
	return (
		<section id="services">
			<h5>What I Offer</h5>
			<h2>Services</h2>

			<div className="container services__container">
				<article className="service">
					<div className="service__head">
						<h3>HTML, CSS, and JavaScript Websites</h3>
					</div>
					<ul className="service__list">
						<li>
							<BiCheck className="tick-icon" />
							<p>Complete Static Website</p>
						</li>
						<li>
							<BiCheck className="tick-icon" />
							<p>Any Number Of Pages</p>
						</li>
						<li>
							<BiCheck className="tick-icon" />
							<p>Deploying the Website</p>
						</li>
						<li>
							<BiCheck className="tick-icon" />
							<p>Content Upload</p>
						</li>
						<li>
							<BiCheck className="tick-icon" />
							<p>Landing Page Development</p>
						</li>
					</ul>
				</article>
				<article className="service">
					<div className="service__head">
						<h3>React Js Website Development</h3>
					</div>
					<ul className="service__list">
						<li>
							<BiCheck className="tick-icon" />
							<p>Complete Front End or Ui Development with React Js</p>
						</li>
						<li>
							<BiCheck className="tick-icon" />
							<p>Full Stack Website Development Using React Js and Firebase</p>
						</li>
						<li>
							<BiCheck className="tick-icon" />
							<p>Deploy React Js Website</p>
						</li>
						<li>
							<BiCheck className="tick-icon" />
							<p>Resolving Bugs In React Js Websites</p>
						</li>
						<li>
							<BiCheck className="tick-icon" />
							<p>UI or Layout Changes in React Js Websites</p>
						</li>
					</ul>
				</article>
				<article className="service">
					<div className="service__head">
						<h3>PHP</h3>
					</div>
					<ul className="service__list">
						<li>
							<BiCheck className="tick-icon" />
							<p>Wordpress Theme Development using PHP</p>
						</li>
						<li>
							<BiCheck className="tick-icon" />
							<p>Wordpress Theme Customization using PHP</p>
						</li>
						<li>
							<BiCheck className="tick-icon" />
							<p>Complete Website Using PHP</p>
						</li>
						<li>
							<BiCheck className="tick-icon" />
							<p>PHP Script Writing</p>
						</li>
						<li>
							<BiCheck className="tick-icon" />
							<p>PHP API Development</p>
						</li>
						<li>
							<BiCheck className="tick-icon" />
							<p>Single Page Websites using PHP</p>
						</li>
					</ul>
				</article>
			</div>
		</section>
	);
};

export default Services;
