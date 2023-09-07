import { memo } from "react";
import BlogCard from "./card/BlogCard";
import Container from "./components/Container";

function NavigationalArticles({ articles }) {
  return (
    <section className="p_navaigation_articles">
      <Container className="p_header">
        <h2>Navigational Articles</h2>
      </Container>

      <Container className="p_content">
        {articles.map((data, i) => (
          <BlogCard
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
  );
}

export default memo(NavigationalArticles);
