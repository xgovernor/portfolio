import React from "react";
import BlogCard from "../../../../components/card/BlogCard";
import Container from "../../../../components/components/Container";
import S from "./HomeArticles.module.sass";

const HomeArticles = ({ className, articles, ...rest }) => {
  return (
    <>
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
            {articles.map((article, i) => {
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
        </div>
      </section>
    </>
  );
};

export default HomeArticles;
