import Image from "next/image";
import Link from "next/link";
import { Parallax } from "react-scroll-parallax";
import Container from "../../shared/Container/Container";

const HomeAbout = ({}) => {
	return (
		<>
			<section className="p_home_about">
				<Container>
					{/* Image */}
					<div className="p_about_image" style={{ overflow: "hidden" }}>
						<Parallax speed={-5}>
							<Image
								className="p_image"
								src={`/images/home-about.jpg`}
								alt="about"
								width={1088}
								height={437}
							/>
						</Parallax>
					</div>

					<div className="p_about_description">
						<div className="p_home__left">
							<h4 className="p_subheading">ABOUT ME</h4>
							<h1 className="p_heading">
								Believe in <br />
								being different
							</h1>
						</div>

						<div className="p_home__right">
							<div className="p_content">
								<p className="p_body">
									Anyone who knows me knows that I&apos;m a tech nerd who loves
									the internet. Or rather the possibilities that open up to us
									today. How I used to play with WordPress has become muscle
									memory today. This is one among many. These days, I primarily
									focus on MERN stack development. Isn&apos;t it fascinating to
									play with our favorite things? Oh! I forgot, I love to share
									my enthusiasm with others. , Sometimes, I arrange concise
									workshops/boot camps to help them see how uniquely different
									ways you could see a problem and find paths to solve it.
								</p>

								<Link href={`/about`}>
									<a className="p_link">KNOW MORE</a>
								</Link>
							</div>
						</div>
					</div>
				</Container>
			</section>
		</>
	);
};

export default HomeAbout;
