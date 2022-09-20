// Core Components
import Link from "next/link";
import { useEffect, useState } from "react";
import { navigationRoutes } from "../../../routes/navigation.routes";
import Container from "../Container";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";

const Navigation = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		document.addEventListener("scroll", () => {
			scroll();
		});
	}, []);

	const scroll = () => {
		let scrollTop = window.scrollY;

		scrollTop > 75 ? setScrolled(true) : setScrolled(false);
	};

	return (
		<>
			<header>
				<nav
					className={`p_navigation_bar ${
						scrolled ? "p_fixed" : "p_not_fixed"
					}`}>
					{/**
					 * Initial Navigation
					 *
					 * This Navigation gets visible when someone visit a page and did not scrolled yet.
					 */}
					{!scrolled && (
						<>
							<Container className="container">
								{/* Brand */}
								<LeftNav />

								{/* Menu */}
								<RightNav links={navigationRoutes} />
							</Container>
						</>
					)}

					{/**
					 * Scrolled Version
					 *
					 * This Navigation gets visible when someone scroll into any page.
					 */}
					{scrolled && (
						<>
							<Container>
								<Link href={`/`}>
									<a className="p_brand">
										<svg
											width="29.65"
											height="30"
											viewBox="0 0 35 35"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M0 7.12209L7.12209 0V27.8779L0 35V7.12209Z"
												fill="#000000"
											/>
											<path
												d="M9.15625 0L16.2783 7.12209V35L9.15625 27.8779V0Z"
												fill="#000000"
											/>
											<path
												d="M18.3145 7.02035L25.4365 0V27.8779L18.3145 35V7.02035Z"
												fill="#000000"
											/>
											<path
												d="M27.4707 0L34.5928 7.12209V35L27.4707 27.8779V0Z"
												fill="#000000"
											/>
										</svg>
									</a>
								</Link>

								<button className="p_menu_tog">
									<svg
										width="26"
										height="19"
										viewBox="0 0 26 19"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<line
											x1="25.5"
											y1="1"
											x2="5.63462e-06"
											y2="0.999998"
											stroke="black"
											strokeWidth="2"
										/>
										<line
											x1="25.5"
											y1="9.5"
											x2="7.72727"
											y2="9.5"
											stroke="black"
											strokeWidth="2"
										/>
										<line
											x1="25.5"
											y1="18"
											x2="5.63462e-06"
											y2="18"
											stroke="black"
											strokeWidth="2"
										/>
									</svg>
								</button>
							</Container>
						</>
					)}
				</nav>
			</header>

			<style jsx>{`
				header {
					padding-top: 25px;
					padding-bottom: 25px;
				}
				.p_c__container {
					background: red;
				}
			`}</style>
		</>
	);
};

export default Navigation;
