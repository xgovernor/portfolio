import BlogCard from "./card/BlogCard";
import Container from "./Container";

function NavigationalArticles({ articles }) {
  return (
    <section
      className="py-10 px-0 md:py-[60px] lg:py-[80px] xl:py-[100px] bg-white"
      aria-labelledby="navigational-articles-heading"
    >
      {/* Header Section */}
      <Container className="p_header mb-5 py-0 max-md:px-[30px] md:py-0 md:px-[50px] lg:mb-5 lg:py-0 lg:px-[80px] xl:mb-[30px]">
        <h2
          id="navigational-articles-heading"
          className="tracking-wide items-center max-md:mb-2.5 text-[28px] leading-[34px] md:mb-2.5 md:text-[28px] md:leading-[34px] lg:max-xl:mb-2.5 lg:text-[28px] lg:leading-[34px] xl:mb-[35px] xl:text-[38px] xl:leading-[48px] uppercase"
        >
          Navigational Articles
        </h2>
      </Container>

      {/* Articles Section */}
      <Container className="p_content flex flex-col md:flex-row justify-between items-center">
        {articles.map(
          ({ slug, title, category, excerpt, date }, index) => (
            <BlogCard
              key={slug || index} // Using slug as a more stable key
              category={category?.title || "Uncategorized"}
              date={date?._updatedAt || date?.publishedAt || "Unknown Date"}
              slug={slug}
              title={title}
              excerpt={excerpt}
              url={`/article/${slug}`}
            />
          )
        )}
      </Container>
    </section>
  );
}

export default NavigationalArticles;
