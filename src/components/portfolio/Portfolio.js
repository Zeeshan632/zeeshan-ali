import "./portfolio.css";
import img1 from "../../assets/img-1.PNG";
import img2 from "../../assets/img-2.PNG";
import img3 from "../../assets/img-3.PNG";
import img4 from "../../assets/img-4.PNG";
import img5 from "../../assets/img-5.PNG";
import img6 from "../../assets/img-6.PNG";
import img7 from "../../assets/img-7.PNG";
import img8 from "../../assets/img-8.PNG";
import img9 from "../../assets/img-9.PNG";
import img10 from "../../assets/img-10.PNG";
import img11 from "../../assets/img-11.PNG";
import img12 from "../../assets/img-12.PNG";
import img13 from "../../assets/img-13.PNG";
import img14 from "../../assets/img-14.PNG";

const htmlCssJavascript = [
	{
		projectName: "Jane Smith Portfolio Website",
		projectImg: img1,
		githubLink: "https://github.com/Zeeshan632/jane-smith-sample-website",
		demoLink: "https://zeeshan632.github.io/jane-smith-sample-website/",
	},
	{
		projectName: "Canva Templates Showcase Web page",
		projectImg: img2,
		githubLink: "https://github.com/Zeeshan632/fiza-ali-canva-tempates",
		demoLink: "https://zeeshan632.github.io/fiza-ali-canva-tempates/",
	},
	{
		projectName: "Educational Insititute Website",
		projectImg: img3,
		githubLink: "https://github.com/Zeeshan632/xypo-website",
		demoLink: "https://zeeshan632.github.io/xypo-website/",
	},
	{
		projectName: "Academy Website",
		projectImg: img4,
		githubLink: "https://github.com/Zeeshan632/academy-website",
		demoLink: "https://drfizaali.com/",
	},
	{
		projectName: "Todo List Web App",
		projectImg: img5,
		githubLink: "https://github.com/Zeeshan632/todo",
		demoLink: "https://zeeshan632.github.io/todo/",
	},
	{
		projectName: "Weather Web App",
		projectImg: img6,
		githubLink: "https://github.com/Zeeshan632/weather-app",
		demoLink: "https://zeeshan632.github.io/weather-app/",
	},
	{
		projectName: "TicTacToe Web App Game ",
		projectImg: img7,
		githubLink: "https://github.com/Zeeshan632/tic-tac-toe",
		demoLink: "https://zeeshan632.github.io/tic-tac-toe/",
	},
];

const reactProjects = [
	{
		projectName: "Youtube Videos React Web App",
		projectImg: img8,
		githubLink: "https://github.com/Zeeshan632/videos",
		demoLink: "#",
	},
	{
		projectName: "React Task Tracker",
		projectImg: img10,
		githubLink: "https://github.com/Zeeshan632/task-tracker",
		demoLink: "https://symphonious-brigadeiros-cf36ff.netlify.app/",
	},
	{
		projectName: "React Blogging Website",
		projectImg: img9,
		githubLink: "https://github.com/Zeeshan632/big-blogger",
		demoLink: "https://big-blogger.netlify.app/",
	},
	{
		projectName: "Online Exercise React Web App",
		projectImg: img11,
		githubLink: "https://github.com/Zeeshan632/zee-gym",
		demoLink: "https://zee-gym.netlify.app/",
	},
	{
		projectName: "React Widgets App",
		projectImg: img12,
		githubLink: "https://github.com/Zeeshan632/widgets",
		demoLink: "https://thriving-speculoos-5feb59.netlify.app/translate",
	},
	{
		projectName: "React Restaurant App",
		projectImg: img13,
		githubLink: "https://github.com/Zeeshan632/recipes-app",
		demoLink: "https://magical-selkie-f2249c.netlify.app/",
	},
	{
		projectName: "React Recipes App",
		projectImg: img14,
		githubLink: "https://github.com/Zeeshan632/react-recipes-app",
		demoLink: "https://effulgent-narwhal-331b60.netlify.app/",
	},
];

const Portfolio = () => {
	const renderReactProjects = reactProjects.map((eachProject, index) => {
		return (
			<article className="portfolio__item" key={index}>
				<div className="portfolio__item-image">
					<img src={eachProject.projectImg} alt="portfolio SS" />
				</div>
				<h3>{eachProject.projectName}</h3>
				<div className="portfolio__item-cta">
					<a href={eachProject.githubLink} className="btn">
						Github
					</a>
					<a href={eachProject.demoLink} className="btn btn-primary">
						Live Demo
					</a>
				</div>
			</article>
		);
	});
	const renderHtmlProjects = htmlCssJavascript.map((eachProject, index) => {
		return (
			<article className="portfolio__item" key={index}>
				<div className="portfolio__item-image">
					<img src={eachProject.projectImg} alt="portfolio SS" />
				</div>
				<h3>{eachProject.projectName}</h3>
				<div className="portfolio__item-cta">
					<a href={eachProject.githubLink} className="btn">
						Github
					</a>
					<a href={eachProject.demoLink} className="btn btn-primary">
						Live Demo
					</a>
				</div>
			</article>
		);
	});

	return (
		<section id="portfolio">
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>

			<div className="container portfolio__container">
				<h2>React Projects</h2>
				{renderReactProjects}
			</div>

			<div className="container portfolio__container">
				<h2>HTML, CSS, JavaScript Projects</h2>
				{renderHtmlProjects}
			</div>
		</section>
	);
};

export default Portfolio;
