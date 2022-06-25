import { useRef } from "react";
import emailjs from "emailjs-com";

import "./contact.css";

// importing icons
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
// import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_fgwakio",
				"template_izf09gc",
				form.current,
				"xlrLDBcB4CHqNnBUx"
			)
			.then(
				(result) => {
					if (result.text === "OK") {
						alert("Your message has been sent. Thanks for connecting.");
						e.target.reset();
					}
				},
				(error) => {
					if (error) {
						alert("Sorry something went wrong");
					}
				}
			);
	};

	return (
		<section id="contact">
			<h5>Get in touch</h5>
			<h2>Contact Me</h2>

			<div className="container contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<MdOutlineEmail className="contact__option-icon" />
						<h4>Email</h4>
						<h5>zeeshanadil632@gmail.com</h5>
						<a href="mailto:zeeshanadil632@gmail.com">Send a message</a>
					</article>
					<article className="contact__option">
						<RiMessengerLine className="contact__option-icon" />
						<h4>Messenger</h4>
						<h5>Zeeshan Ali Shaikh</h5>
						<a
							href="https://m.me/zeeshan.adil.3511"
							target="_blank"
							rel="noreferrer"
						>
							Send a message
						</a>
					</article>
					{/* <article className="contact__option">
						<BsWhatsapp />
						<h4>Whatsapp</h4>
						<h5>MyNumber</h5>
						<a href="https://api.whatsapp.com/send?phone=+9233444444">
							Send a message
						</a>
					</article> */}
				</div>

				{/* contact Form */}
				<form ref={form} onSubmit={sendEmail}>
					<input
						type="text"
						name="name"
						placeholder="Your Full Name"
						required
					/>
					<input
						type="email"
						name="email"
						placeholder="Type Your Email"
						required
					/>
					<textarea
						name="message"
						rows="7"
						placeholder="Your Message"
						required
					></textarea>
					<button type="submit" className="btn btn-primary">
						Send the message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
