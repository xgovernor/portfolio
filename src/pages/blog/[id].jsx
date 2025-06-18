import SingleContent from "../../components/article/SingleContent";
import SingleCover from "../../components/article/SingleCover";
import SingleHeader from "../../components/article/SingleHeader";
import NavigationalArticles from "../../components/NavigationArticles";
import Layout from "../../components/Layout";
import groq from "groq";
import { getClient, imageBuilder } from "../../utils/sanity";
import { info } from "./../../components/Meta/meta.constant.js"; // Import info for base URLs
import { PropTypes } from "prop-types";

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
    category[]->{
      _id,
      title
    },
    topic[]->{
      _id,
      title
    },
    body,
    references,
    importantLinks,
  }
`;

// Fetch related articles based on shared topics or categories, excluding the current article
const RELATED_ARTICLE_QUERY = groq`
  *[
    _type == "article" &&
    slug.current != $slug &&
    (
      count(topic[@._ref in $topicIds]) > 0 ||
      count(category[@._ref in $categoryIds]) > 0
    )
  ] | order(_updatedAt desc)[0...4] {
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
  }
`;

export async function getServerSideProps({ params, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=31536000, stale-while-revalidate=59",
  );
  const { id: slug } = params;

  try {
    const article = await getClient(false).fetch(QUERY, { slug });

    if (!article) {
      return {
        notFound: true,
      };
    }

    // Extract topic and category IDs for related articles query
    const topicIds = (article.topic || []).map((t) => t._id);
    const categoryIds = (article.category || []).map((c) => c._id);

    const articles = await getClient(false).fetch(RELATED_ARTICLE_QUERY, {
      slug,
      topicIds,
      categoryIds,
    });

    return {
      props: {
        articles,
        article,
      },
    };
  } catch (error) {
    console.error("Error fetching article data:", error);
    return {
      notFound: true,
    };
  }
}

function ArticlesSingle({ articles, article }) {
  if (!article) {
    // This case should ideally be handled by getServerSideProps's notFound
    return (
      <Layout>
        <p>Article not found.</p>
      </Layout>
    );
  }

  const heroThumbnail = imageBuilder(article?.image)
    .width(1500)
    .height(500)
    .url();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    // Consider adding "Article" to the type array if the post is substantial, e.g., ["BlogPosting", "Article"]

    headline: article.title, // The main title of your blog post
    name: article.title, // Also include 'name' for broader compatibility
    description: article.excerpt, // A concise summary of the article's content

    // Provide multiple image sizes for better rich result eligibility
    image: [
      {
        "@type": "ImageObject",
        url: imageBuilder(article.image).width(1200).height(630).url(), // 16:9 aspect ratio, common for social/featured
        width: 1200,
        height: 630,
        caption: `Featured image for '${article.title}'`, // Descriptive caption
      },
      {
        "@type": "ImageObject",
        url: imageBuilder(article.image).width(800).height(450).url(), // Another common 16:9 size
        width: 800,
        height: 450,
        caption: `Featured image for '${article.title}'`,
      },
      {
        "@type": "ImageObject",
        url: imageBuilder(article.image).width(480).height(360).url(), // 4:3 aspect ratio
        width: 480,
        height: 360,
        caption: `Featured image for '${article.title}'`,
      },
      // Add more image sizes/aspect ratios if your CMS or image builder supports them
    ],

    url: `${info.website}/blog/${article.slug}`, // The canonical URL of the blog post

    // Dates are crucial for freshness and relevance
    datePublished: article.date.publishedAt || article.date._createdAt, // Ensure ISO 8601 format (e.g., "YYYY-MM-DDTHH:MM:SSZ")
    dateModified: article.date._updatedAt || article.date._createdAt, // Ensure ISO 8601 format

    // Author information for E-A-T (Expertise, Authoritativeness, Trustworthiness)
    author: {
      "@type": "Person",
      name: info.author,
      url: info.website, // Link to your "about me" or author profile page
      // Add 'sameAs' to link to your social media or professional profiles
      sameAs: [
        "https://linkedin.com/in/yourlinkedinprofile", // Replace with your LinkedIn URL
        "https://twitter.com/yourtwitterhandle", // Replace with your Twitter URL
        "https://github.com/yourgithubprofile", // Replace with your GitHub URL
        // Add other relevant professional profiles
      ],
    },

    // Publisher information (your website/brand)
    publisher: {
      "@type": "Organization", // Use "Organization" if your website acts as a publishing entity
      // If it's purely a personal blog and you are the only entity, "Person" is also acceptable here.
      name: info.websiteName || info.author + " Portfolio", // Use your website's name, or a descriptive name
      url: info.website, // Your website's main URL
      logo: {
        "@type": "ImageObject",
        url: `${info.website}/images/your-logo.png`, // IMPORTANT: Full URL to your brand's official logo
        width: 600, // Google recommends max width 600px
        height: 60, // Google recommends max height 60px
        // Ensure this logo is crawlable and represents your brand/website
      },
    },

    // Essential for linking the structured data to the page itself
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${info.website}/blog/${article.slug}`, // Canonical URL
    },

    // Categorization and keywords for relevance
    articleSection: article.category?.map((cat) => cat.title) || [], // Use this for main categories/sections
    keywords: article.topic?.map((topic) => topic.title).join(", ") || "", // Comma-separated list of relevant keywords

    // Optional but highly recommended for better SEO and understanding:
    // articleBody: article.fullContent, // If you have the full article content as a string, include it here.
    // This is incredibly powerful for Google to understand your content.
    // wordCount: article.wordCount, // If you track the word count of the article
    // inLanguage: "en-US", // Specify the language of the article

    // Add `@id` for this specific blog post within your structured data graph
    "@id": `${info.website}/blog/${article.slug}#blogpost`,
  };

  return (
    <>
      {/* Pass the full meta object to the Layout component */}
      <Layout
        meta={{
          children: (
            <script
              id="structured-data-single-article"
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(structuredData),
              }}
            />
          ),
        }}
      >
        <SingleHeader
          title={article?.title}
          categories={article?.category}
          updatedAt={article?.date._updatedAt}
          createdAt={article?.date._createdAt}
        />
        <SingleCover src={heroThumbnail} alt={article?.title} />
        <SingleContent content={article.body} />

        {articles.length > 0 ? (
          <NavigationalArticles articles={articles} />
        ) : null}
      </Layout>
    </>
  );
}

ArticlesSingle.propTypes = {
  articles: PropTypes.array,
  article: PropTypes.object,
};

export default ArticlesSingle;
