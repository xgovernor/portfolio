import Head from "next/head";
import Script from "next/script";
import { memo } from "react";

const Meta = ({ title, description, image, children }) => {
	const desc =
		description ||
		"I'm a full-stack developer based on Bangladesh. I'm passionate about creating beautiful, intuitive online solutions with highly crafted user experiences.";
	const img = image || "https://abutahermuhammad.com/image/avater.png";


	return (
		<>
			<Head>
				{/* General Tags */}
				<title> {title ? `${title} - Abu Taher Muhammad` : "Abu Taher Muhammad || Full Stack Developer"}</title>

				<meta
					name="title"
					content={title ? `${title} - Abu Taher Muhammad` : "Abu Taher Muhammad || Full Stack Developer"}
				/>
				<meta name="author" content="Abu Taher Muhammad" />
				<meta
					name="deScription"
					content="Abu Taher Muhammad is a MERN stack web developer from Bangladesh. He is also experienced with WordPress, Data scraping with python. In his spare time,"
				/>
				<meta
					name="keywords"
					content="Font-end, web developer, top web developer, Abu Taher Muhammad, MERN stack developer, upwork, ferne health, dot9, simbio"
				/>
				<meta name="robots" content="index, follow" />
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="language" content="English" />

				{/* Open Graph Data */}
				<meta property="og:title" content="Abu Taher Muhammad" />
				<meta property="og:site_name" content="Abu Taher Muhammad" />
				<meta property="og:url" content="https://abutahermuhammad.com/" />
				<meta
					property="og:deScription"
					content="Abu Taher Muhammad, a MERN stack web developer from Bangladesh, is well-versed in Laravel, WordPress, and Python data scraping. Fascinated by Cyber Security, AI, and Medical technology, he aspires to build future tech startups in these domains. In his spare time, Abu Taher enjoys studying robotics and reading books. With a strong technical background and a thirst for knowledge, he is poised to make a significant impact in web development."
				/>
				<meta property="og:type" content="profile" />
				<meta
					property="og:image"
					content="https://abutahermuhammad.com/images/avater.png"
				/>

				{/* Twitter Card */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={title} key="title" />
				<meta name="twitter:description" content={desc} key="description" />
				<meta name="twitter:image" content={img} key="image" />
				<meta name="twitter:site" content="@abutahermuhammad" />
				<meta name="twitter:creator" content="@abutahermuhammad" />

				{/* Favicons */}
				<link rel="icon" href="/images/favicon.svg" />
				<link rel="icon" href="/images/favicon.svg" type="image/svg+xml" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
				<link rel="manifest" href="/manifest.json" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
				<meta name="msapplication-TileColor" content="#000000" />
				<meta name="theme-color" content="#000000" />

				{/* Canonical */}
				<link rel="canonical" href="https://abutahermuhammad.com" />
			</Head>

			{/* JSON-LD */}
			<Script
				id="Person-JSON-LD"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "http://www.schema.org",
						"@type": "person",
						name: "Abu Taher Muhammad",
						jobTitle: "Web Developer",
						gender: "male",
						url: "https://abutahermuhammad.com/",
						sameAs: [
							"https://www.linkedin.com/in/abutahermuhammad/",
							"https://github.com/abutahermuhammad",
						],
						image:
							"https://drive.google.com/file/d/13TQA24DvJCnwUWSfCaSIQv4Nd6n_D1Hs/view?usp=sharing",
						address: {
							"@type": "PostalAddress",
							streetAddress:
								"Shahjalal Uposhahar",
							postOfficeBoxNumber: "3100",
							addressLocality: "Sylhet",
							addressRegion: "Sylhet",
							postalCode: "3100",
							addressCountry: "Bangladesh",
						},
						email: "muhammad@dot9.dev",
						birthDate: "2003-02-10",
						birthPlace: "Sylhet",
						nationality: "Bangladeshi",
						telephone: "(+880) 1603-221292",
					}),
				}} />

			<Script
				id="WebPage-JSON-LD"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "http://schema.org",
						"@type": "WebPage",
						name: "Abu Taher Muhammad",
						deScription:
							"Abu Taher Muhammad is a MERN stack web developer from Bangladesh. He is also experienced with WordPress, Data scraping with python. In his spare time, he likes to study robotics, read books, etc.",
						publisher: {
							"@type": "ProfilePage",
							name: "Muhammad's Website",
						},
					}),
				}} />

			<Script
				id="WebSite-JSON-LD"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org/",
						"@type": "WebSite",
						name: "Abu Taher Muhammad",
						url: "https://abutahermuhammad.com/",
						potentialAction: {
							"@type": "SearchAction",
							target: "{search_term_string}",
							"query-input": "required name=search_term_string",
						},
					}),
				}} />

			{children}
		</>
	);
};

export default memo(Meta);
