import { memo } from "react";
import BlogCard from "./card/BlogCard";
import Container from "./Container";

function NavigationalArticles({ articles }) {
  return (
    <section className="p_navaigation_articles bg-white">
      <Container className="p_header max-md:mb-5 max-md:py-0 max-md:px-[30px] md:max-lg:py-0 md:max-lg:px-[50px] lg:max-xl:mb-5 lg:max-xl:py-0 lg:max-xl:px-[80px] xl:mb-[30px]">
        <h2 className="[font-family:'NHaasGroteskDSPro'] [letter-spacing:0.02em] items-center max-md:mb-2.5 max-md:text-[28px] max-md:leading-[34px] md:max-lg:mb-2.5 md:max-lg:text-[28px] md:max-lg:leading-[34px] lg:max-xl:mb-2.5 lg:max-xl:text-[28px] lg:max-xl:leading-[34px] xl:mb-[35px] xl:text-[38px] xl:leading-[48px] uppercase">
          Navigational Articles
        </h2>
      </Container>

      <Container className="p_content">
        {articles.map(({ slug, title, category, excerpt, date }, i) => (
          <BlogCard
            key={i}
            category={category?.title}
            date={date._updatedAt ? date._updatedAt : date.publishedAt}
            slug={slug}
            title={title}
            excerpt={excerpt}
            url={`/article/${slug}`}
          />
        ))}
      </Container>
    </section>
  );
}

export default memo(NavigationalArticles);
