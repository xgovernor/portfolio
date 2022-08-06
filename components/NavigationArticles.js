// Custom Components
import Container from "../views/shared/Container/Container";
import BlgoGridCard from "./BlogGridCard";

export default function NavigationalArticles({ articles }) {
	return (
		<>
			<section className="p_navaigation_articles">
				<Container dataClass="p_header">
					<h2>Navigational Articles</h2>
				</Container>

				<Container dataClass="p_content">
					{articles.map((data, i) => (
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
			</section>
		</>
	);
}
