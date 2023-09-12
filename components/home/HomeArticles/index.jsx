import React, { memo } from "react";
import S from "./HomeArticles.module.sass";
import Container from "../../components/Container";
import BlogCard from "../../card/BlogCard";
import Date from "../../Date";

const HomeArticles = ({ className, articles }) => {
  return (
    <section className={S.__section}>
      <div className={S.__header}>
        <Container className={S.__headerContainer}>
          <h4 className={S.__subHeading}>LATEST INSIGHTS</h4>
          <h2 className={S.__heading}>
            Occasional thoughts and insights from everyday life.
          </h2>
        </Container>
      </div>

      <div className={S.__body}>
        <Container className={S.__bodyContainer}>
          {articles.map((article, i) => (
            <BlogCard
              key={i}
              category={article?.category?.title}
              meta={<Date dateString={article.date._updatedAt || article.date.publishedAt} />}
              slug={article?.slug}
              title={article?.title}
              excerpt={article?.excerpt}
              url={`/article/${article.slug}`}
            />
          ))}
        </Container>
      </div>
    </section>
  );
};

export default memo(HomeArticles);
