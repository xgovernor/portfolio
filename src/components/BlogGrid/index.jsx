import { Suspense, memo } from "react";
import BlogCard from "../card/BlogCard";
import Container from "../Container";
import clsx from "clsx";

function BlogGrid({ className, articles, ...rest }) {
  return (
    <section className={clsx("xl:py-[130px]", className)} {...rest}>
      <Container className="grid max-md:grid-cols-1 grid-cols-2 max-md:gap-5 md:gap-7 lg:gap-9 xl:gap-11 max-md:py-10 md:max-lg:pt-[70px] md:max-lg:pb-[45px] md:max-lg:px-[50px]  lg:max-xl:pt-[100px] lg:max-xl:pb-[75px] lg:max-xl:px-[60px]">
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
      </Container>
    </section>
  );
}

export default memo(BlogGrid);
