import "./testimonial.css";
// import Swiper core and required modules
import { Navigation, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import avatar1 from "../../assets/avatar1.jpg";
import avatar2 from "../../assets/avatar2.jpg";
import avatar3 from "../../assets/avatar3.jpg";
import avatar4 from "../../assets/avatar4.jpg";

const allReviews = [
	{
		avatar: avatar1,
		name: "Tina Snow",
		review:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iste eumnostrum assumenda, odit consequuntur harum corporis esse hic. Iusto molestiae odio impedit nesciunt fugit quae eos vitae quasi veniam.",
	},
	{
		avatar: avatar2,
		name: "Shatte Wale",
		review:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iste eumnostrum assumenda, odit consequuntur harum corporis esse hic. Iusto molestiae odio impedit nesciunt fugit quae eos vitae quasi veniam.",
	},
	{
		avatar: avatar3,
		name: "Kwame Despite",
		review:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iste eumnostrum assumenda, odit consequuntur harum corporis esse hic. Iusto molestiae odio impedit nesciunt fugit quae eos vitae quasi veniam.",
	},
	{
		avatar: avatar4,
		name: "Binte Haya",
		review:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iste eumnostrum assumenda, odit consequuntur harum corporis esse hic. Iusto molestiae odio impedit nesciunt fugit quae eos vitae quasi veniam.",
	},
];

const Testimonial = () => {
	return (
		<section id="testimonial">
			<h5>Review from clients</h5>
			<h2>Testimonials</h2>

			<Swiper
				className="testimonial__container"
				modules={[Navigation, Scrollbar, A11y]}
				spaceBetween={50}
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
			>
				{allReviews.map((review, index) => {
					return (
						<SwiperSlide key={index} className="testimonial">
							<div className="client__avatar">
								<img src={review.avatar} alt="Avatar" />
							</div>
							<h5>{review.name}</h5>
							<small className="client__review">{review.review}</small>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

export default Testimonial;

/* <Swiper
	className="swiper"
	modules={[Pagination]}
	spaceBetween={50}
	slidesPerView={1}
	pagination={{ clickable: true }}
	onSlideChange={() => console.log("slide change")}
	onSwiper={(swiper) => console.log(swiper)}
 */
