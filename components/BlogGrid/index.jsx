import BlogCard from "../card/BlogCard";
import Container from "../components/Container";
import S from "./BlogGrid.module.sass";

export default function BlogGrid({ className, articles, ...rest }) {
  // console.log(articles);
  return (
    <>
      <section className={S.__grid}>
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

          {/* {DATA_BLOG.map((data, i) => (
						<BlgoGridCard
							key={i}
							meta={data.meta}
							slug={data.slug}
							title={data.title}
							excerpt={data.excerpt}
							url={data.url}
						/>
					))} */}
        </Container>
      </section>
    </>
  );
}
