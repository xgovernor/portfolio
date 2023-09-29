import { Suspense, memo } from "react";
import BlogCard from "../card/BlogCard";
import Container from "../components/Container";
import S from "./BlogGrid.module.sass";
import clsx from "clsx";

function BlogGrid({ className, articles, ...rest }) {
  return (
    <section className={clsx(S.__grid, className)} {...rest}>
      <Container className={S.__content}>
        <Suspense fallback={<div>Loading...</div>}>
          {articles?.map(({ slug, title, category, excerpt, date }, i) => {
            return (
              <BlogCard
                key={i}
                category={category?.title}
                date={date._updatedAt ? date._updatedAt : date.publishedAt}
                slug={slug}
                title={title}
                excerpt={excerpt}
                url={`/article/${slug}`}
              />
            );
          })}
        </Suspense>
      </Container>
    </section>
  );
}

export default memo(BlogGrid);
