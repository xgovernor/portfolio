import React, { memo } from "react";
import Container from "../../components/Container";
import BlogCard from "../../card/BlogCard";
import Date from "../../Date";

const HomeArticles = ({ className, articles }) => {
  return (
    <section className="max-md:pb-[15px] md:max-lg:pb-[55px] lg:max-lg:[padding:80px_0_80px] xl:[padding:130px_0_105px]">
      <div className="">
        <Container className="text-center max-md:[padding:40px_30px_40px] md:max-lg:max-w-[693px] md:max-xl:[padding:80px_90px_50px] lg:max-xl:max-w-[1003px] xl:w-[823px] xl:mb-20">
          <h4 className="[font-family:'NHaasGroteskDSPro'] mb-2.5 max-xl:text-[12px] leading-[16px] xl:text-[14px]">
            LATEST INSIGHTS
          </h4>
          <h2 className="mx-auto w-full [font-family:'NHaasGroteskDSPro'] font-bold text-center [letter-spacing:-0.01em] text-black uppercase mt-2.5 max-md:text-xl md:text-[28px] md:leading-[38px] lg:text-[38px] lg:leading-[48px] xl:text-[42px] xl:leading-[52px] [word-spacing:4px]">
            Occasional thoughts and insights from everyday life.
          </h2>
        </Container>
      </div>

      <div className="">
        <Container className="flex justify-between max-md:flex-wrap max-md:px-[30px] md:max-lg:px-[50px] lg:max-xl:px-[60px]">
          {articles.map((article, i) => (
            <BlogCard
              key={i}
              category={article?.category?.title}
              meta={
                <Date
                  dateString={
                    article.date?._updatedAt || article.date?.publishedAt
                  }
                />
              }
              slug={article?.slug}
              title={article?.title}
              excerpt={article?.excerpt}
              url={`/article/${article?.slug}`}
            />
          ))}
        </Container>
      </div>
    </section>
  );
};

export default memo(HomeArticles);
