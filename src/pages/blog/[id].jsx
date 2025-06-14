import SingleContent from "../../components/article/SingleContent";
import SingleCover from "../../components/article/SingleCover";
import SingleHeader from "../../components/article/SingleHeader";
import NavigationalArticles from "../../components/NavigationArticles";
import Layout from "../../components/Layout";
import groq from "groq";
import { getClient, imageBuilder } from "../../utils/sanity";
// No need for Script import here, as it's handled by Meta component now
// import Script from "next/script"; // REMOVE THIS
import { info } from "./../../components/Meta/meta.constant.js"; // Import info for base URLs

const QUERY = groq`
        *[_type == "article" && slug.current == $slug] | order(_updatedAt desc)[0] {
          _id,
          title,
          'slug': slug.current,
          "date": {
            _createdAt,
            publishedAt,
            _updatedAt
          },
          featured,
          excerpt,
          image,
          category[]->{ // Make sure you're fetching category title
            _id,
            title
          },
          topic[]->{ // Make sure you're fetching topic title
            _id,
            title
          },
          body,
          references,
          importantLinks,
        }
      `;
// GROQ query for featured Projects & Articles.
// (No change here, as it's for NavigationalArticles, not the main article's meta)
const RELATED_ARTICLE_QUERY = groq`*[_type == "article"] {
  _id,
  "date": {
    _createdAt,
    publishedAt,
    _updatedAt
  },
  featured,
  "category": category[0] -> {
    _id,
    title
  },
  thumbnail,
  title,
  excerpt,
  "slug": slug.current,
  }[0...2]`;

function ArticlesSingle({ articles, article }) {
  if (!article) {
    // This case should ideally be handled by getServerSideProps's notFound
    return (
      <Layout>
        <p>Article not found.</p>
      </Layout>
    );
  }

  // Define meta information specific to this single article page
  const articlePageMeta = {
    pageTitle: article.title, // Use the article's title
    pageDescription: article.excerpt, // Use the article's excerpt for description
    pageImage: imageBuilder(article.image).width(1200).height(630).url(), // Use the article's image for social sharing
    pageUrl: `${info.website}/blog/${article.slug}`, // Canonical URL for the article
    blogArticleData: article, // <--- NEW: Pass the entire article object for JSON-LD
  };

  return (
    <>
      {/* Pass the full meta object to the Layout component */}
      <Layout meta={articlePageMeta}>
        <SingleHeader
          title={article?.title}
          categories={article?.category}
          updatedAt={article?.date._updatedAt}
          createdAt={article?.date._createdAt}
        />
        <SingleCover
          src={imageBuilder(article?.image).width(1088).height(370).url()}
          alt={article?.title}
        />
        <SingleContent content={article.body} />
        <NavigationalArticles articles={articles} />
      </Layout>
    </>
  );
}

export async function getServerSideProps({ params, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=31536000, stale-while-revalidate=59",
  );
  const { id: slug } = params; // params.id is the slug from the URL

  try {
    const article = await getClient(false).fetch(QUERY, { slug });
    const articles = await getClient(false).fetch(RELATED_ARTICLE_QUERY);

    if (!article) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        articles,
        article,
        // slug, // No need to pass slug explicitly if it's already in article.slug
      },
    };
  } catch (error) {
    console.error("Error fetching article data:", error);
    return {
      notFound: true,
    };
  }
}

export default ArticlesSingle;
