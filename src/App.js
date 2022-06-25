import {
	Header,
	Nav,
	ABout,
	Experience,
	Services,
	Portfolio,
	Testimonial,
	Contact,
	Footer,
} from "./components";

const App = () => {
	return (
		<>
			<Header />
			<Nav />
			<ABout />
			<Experience />
			{/* <Services />    //=> for now I don't need a services section */}
			<Portfolio />
			{/* <Testimonial />    //=> for now I don't need a Testimonial section */}
			<Contact />
			<Footer />
		</>
	);
};

export default App;
