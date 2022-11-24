import { memo } from "react";
import BlogCard from "../card/BlogCard";
import Container from "../components/Container";
import S from "./BlogGrid.module.sass";

function BlogGrid({ className, articles, ...rest }) {
  return (
    <>
      <section className={S.__grid} {...rest}>
        <Container className={S.__content}>
          {articles?.map((article, i) => {
            const meta = article.date._updatedAt
              ? `UPDATED ${article.date._updatedAt}`
              : `PUBLISHED ${article.date.publishedAt}`;

            return (
              <BlogCard
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
      </section>
    </>
  );
}

export default memo(BlogGrid);
