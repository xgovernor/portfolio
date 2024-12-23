import Head from "next/head";
import Script from "next/script";
import { memo } from "react";
import { info } from "../../assets/data/information";

function Meta({ title=info.title, description=info.description, image=info.avatar, children }) {
	const fullTitle = title
		? `${title} - ${info.title}`
		: `${info.title} || ${info.jobTitle}`;

	return (
		<>
			<Head>
				{/* General Tags */}
				<title>{fullTitle}</title>
				<meta name="description" content={description} />
				<meta name="author" content={title} />
				<meta
				name="keywords"
				content="Font-end, web developer, top web developer, Abu Taher Muhammad, MERN stack developer, upwork, ferne health, dot9.dev, SIMBIO"
				/>
				<meta name="robots" content="index, follow" />
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				{/* Open Graph */}
				<meta property="og:title" content={fullTitle} />
				<meta property="og:site_name" content={title} />
				<meta property="og:url" content={info.website} />
				<meta property="og:description" content={description} />
				<meta property="og:type" content="website" />
				<meta property="og:image" content={image} />

				{/* Twitter */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={fullTitle} />
				<meta name="twitter:description" content={description} />
				<meta name="twitter:image" content={image} />
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
				<link rel="canonical" href={info.website} />
			</Head>

			{/* JSON-LD:Person */}
			<Script
				id="structured-data-person"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
				__html: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Person",
					name: {title},
					jobTitle: info.jobTitle,
					gender: "Male",
					url: info.website,
					sameAs: [
					"https://www.linkedin.com/in/abutahermuhammad/",
					"https://github.com/abutahermuhammad",
					],
					image: image,
					address: {
						"@type": "PostalAddress",
						streetAddress: "Shahjalal Uposhahar",
						addressLocality: "Sylhet",
						addressRegion: "Sylhet",
						postalCode: "3100",
						addressCountry: "Bangladesh",
					},
					email: info.email,
					birthDate: "2003-02-10",
					birthPlace: "Sylhet",
					nationality: "Bangladeshi",
				}),
				}}
			/>


			{children}
		</>
	);
};

export default memo(Meta);
