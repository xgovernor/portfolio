/** @format */

import Image from "next/image";
import Link from "next/link";
import Container from "../../shared/Container/Container";

const HomeProjects = () => {
	return (
		<>
			<section className='p_home_projects'>
				<div className='p_projects_header'>
					<Container>
						<h4 className='p_subtitle_1'>FEATURED PROJECTS</h4>
						<h2 className='p_heading'>
							Projects in which Muhammad has been involved in
							recent years.
						</h2>
					</Container>
				</div>

				<div className='p_projects_body'>
					<div className='p_projects_card'>
						<Container>
							<div className='p_card_left'>
								<h4 className='p_subtitle_1'>WEBSITE</h4>
								<h2 className='p_heading'>The Gisthive</h2>
								<p className='p_body'>
									The Gisthive is a multidisciplinary science
									journal. An innovative place to study and
									learn about science & its facts. The
									Gisthive publishes works of enthusiastic
									people & welcomes Bengali readers from all
									over the world.
									<br />
									<br />
									<strong>Technologies: </strong>
									Next.JS, SASS, Sanity, Vercel, Figma(for
									UI/UX)
								</p>

								<Link href={`https://gisthive.org`}>
									<a className='p_link' target='_blank'>
										Visit Website
									</a>
								</Link>
							</div>
							<div className='p_card_right'>
								<div className='p_image'>
									<Image
										src={`/images/p1.jpg`}
										alt='The Gisthive'
										width={562}
										height={323}
									/>
								</div>
							</div>
						</Container>
					</div>

					<div className='p_projects_card'>
						<Container>
							<div className='p_card_left'>
								<h4 className='p_subtitle_1'>Website</h4>
								<h2 className='p_heading'>Islamer Kantho</h2>
								<p className='p_body'>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip
									ex ea commodo consequat. Duis aute irure
									dolor in reprehenderit in voluptate velit
									esse cillum dolore eu fugiat nulla pariatur.
									Excepteur sint occaecat cupidatat non
									proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</p>

								<Link href={`/`}>
									<a className='p_link' target='_blank'>
										Comming soon
									</a>
								</Link>
							</div>
							<div className='p_card_right'>
								<div className='p_image'>
									<Image
										src={`/images/p2.jpg`}
										alt='The Gisthive'
										width={562}
										height={323}
									/>
								</div>
							</div>
						</Container>
					</div>

					<div className='p_projects_card'>
						<Container>
							<div className='p_card_left'>
								<h4 className='p_subtitle_1'>Website</h4>
								<h2 className='p_heading'>Solution Flows</h2>
								<p className='p_body'>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip
									ex ea commodo consequat. Duis aute irure
									dolor in reprehenderit in voluptate velit
									esse cillum dolore eu fugiat nulla pariatur.
									Excepteur sint occaecat cupidatat non
									proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</p>

								<Link href={`https://solutionflows.com`}>
									<a className='p_link' target='_blank'>
										VISIT WEBSITE
									</a>
								</Link>
							</div>
							<div className='p_card_right'>
								<div className='p_image'>
									<Image
										src={`/images/p3.jpg`}
										alt='The Gisthive'
										width={562}
										height={323}
									/>
								</div>
							</div>
						</Container>
					</div>
				</div>
			</section>
		</>
	);
};

export default HomeProjects;
