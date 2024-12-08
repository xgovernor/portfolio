import { memo } from "react";
import SingleContent from "../../components/article/SingleContent";
import SingleCover from "../../components/article/SingleCover";
import SingleHeader from "../../components/article/SingleHeader";
import NavigationalArticles from "../../components/NavigationArticles";
import Layout from "../../components/Layout";
import Meta from "../../components/Meta";
import groq from "groq";
import { getClient, imageBuilder } from "../../utils/sanity";
import Script from "next/script";

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
// GROQ query for featured Projects & Articles.
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

  return (
    <>
      <Meta title={article?.title}>
        <Script
          id="WebSite-JSON-LD"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: article?.title,
              // "alternativeHeadline": "and the women who love them",
              image: imageBuilder(article?.image).url(),
              // "award": "Best article ever written",
              editor: "Abu Taher Muhammad",
              genre: "search engine optimization",
              keywords: "seo sales b2b",
              // "wordcount": "1120",
              publisher: "Abu Taher Muhammad",
              // "url": "http://www.example.com",
              url: "https://at-mah.vercel.app/article/slug",
              datePublished: article.publishedAt,
              dateCreated: article._createdAt,
              dateModified: article._updatedAt,
              description: article.excerpt,
              articleBody: article.body,
              author: {
                "@type": "Person",
                name: "Abu Taher Muhammad",
              },
            }),
          }}
        />
      </Meta>

      <Layout className="">
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
    "public, s-maxage=31536000, stale-while-revalidate=59"
  );
  const { id: slug } = params;

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
        slug,
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
