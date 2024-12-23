import { Suspense, memo } from "react";
import BlogCard from "../card/BlogCard";
import Container from "../Container";

function BlogGrid({ className, articles = [], sectionTitle = "Latest Articles", ...rest }) {
  return (
    <section
      className={`blog-grid ${className}`}
      role="region"
      aria-labelledby="blog-grid-title"
      {...rest}
    >
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7 lg:gap-9 xl:gap-11 py-10 md:pt-[70px] md:pb-[45px] md:px-[50px] lg:pt-[100px] lg:pb-[75px] lg:px-[60px] xl:py-[130px]">
        {articles.length > 0 ? (
          articles.map(({ slug, title, category, excerpt, date }, i) => (
            <Suspense fallback={<div>Loading...</div>} key={i}>
              <BlogCard
                category={category?.title || "Uncategorized"}
                date={date?._updatedAt || date?.publishedAt || ""}
                slug={slug}
                title={title || "Untitled"}
                excerpt={excerpt || "No description available."}
                url={`/article/${slug}`}
              />
            </Suspense>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            <p>No articles to display at the moment.</p>
          </div>
        )}
      </Container>
    </section>
  );
}

export default memo(BlogGrid);
