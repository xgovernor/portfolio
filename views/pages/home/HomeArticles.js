import React from "react";
import BlgoGridCard from "../../../components/BlogGridCard";
import Container from "../../shared/Container/Container";

const DATA_BLOG = [
	{
		slug: "jh",
		title: "You need to learn Kubernetes RIGHT NOW!! 🚀",
		excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.`,
		url: "/articles/jh",
		meta: "PUBLISHED MARCH 21, 2021",
	},
	{
		slug: "jh",
		title: "20 Awesome Website You Didn't Know About",
		excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.`,
		url: "/articles/jh",
		meta: "PUBLISHED MARCH 21, 2021",
	},
];

const HomeArticles = () => {
	return (
		<>
			<section className="p_home_blog">
				<div className="p_blog_header">
					<Container>
						<h4 className="p_subtitle_1">LATEST INSIGHTS</h4>
						<h2 className="p_heading">
							Occasional thoughts and insights from Muhammad&apos;s everyday
							life.
						</h2>
					</Container>
				</div>

				<div className="p_blog_body">
					<Container>
						{DATA_BLOG.map((data, i) => (
							<BlgoGridCard
								key={i}
								meta={data.meta}
								slug={data.slug}
								title={data.title}
								excerpt={data.excerpt}
								url={data.url}
							/>
						))}
					</Container>
				</div>
			</section>
		</>
	);
};

export default HomeArticles;
