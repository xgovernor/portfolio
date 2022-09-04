import React from "react";
import BlogGridCard from "../../../components/BlogGridCard";
import Container from "../../shared/Container/Container";

const HomeArticles = ({ className, articles, ...rest }) => {
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
						{articles.map((article, i) => {
							const meta = article.date._updatedAt
								? `UPDATED ${article.date._updatedAt}`
								: `PUBLISHED ${article.date.publishedAt}`;

							return (
								<BlogGridCard
									key={i}
									category={article?.category?.title}
									meta={meta}
									slug={article?.slug}
									title={article?.title}
									excerpt={article?.excerpt}
									url={`/article/${article.slug}`}
								/>
							);
						})}
					</Container>
				</div>
			</section>
		</>
	);
};

export default HomeArticles;
