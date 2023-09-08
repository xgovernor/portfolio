import { memo } from "react";
import SingleContent from "../../components/article/SingleContent";
import SingleCover from "../../components/article/SingleCover";
import SingleHeader from "../../components/article/SingleHeader";
import SingleUpdateStatus from "../../components/article/SingleUpdateStatus";
import NavigationalArticles from "../../components/NavigationArticles";
import Layout from "../../components/scene/Layout";
import Meta from "../../components/Meta";
import groq from "groq";
import { getClient, imageBuilder } from "../../utils/sanity";
import Date from "../../components/Date";

const DATA_BLOG = [
  {
    slug: "jh",
    title: "You need to learn Kubernetes RIGHT NOW!! 🚀",
    excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.`,
    url: "/articles/jh",
    meta: "PUBLISHED MARCH 21, 2021",
  },
  {
    slug: "jh",
    title: "20 Awesome Website You Didn't Know About",
    excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.`,
    url: "/articles/jh",
    meta: "PUBLISHED MARCH 21, 2021",
  },
];

function ArticlesSingle({ article }) {
  const singleArticleHeader = {
    title: article?.title || "",
    date: (
      <Date dateString={article?.date._updatedAt || article?.date._createdAt} />
    ),
    category: article.category,
  };

  const singleArticleCover = {
    url: imageBuilder(article?.image).width(1088).height(370).url(), // || "/images/singleCover.jpg",
    alt: article?.title || "Abu Taher Muhammad",
    width: 1088,
    height: 370,
  };

  console.log("ARTICLE", article);

  return (
    <>
      <Meta />
      <Layout style={{ background: "#f6f6f6" }}>
        <SingleHeader data={singleArticleHeader} />
        <SingleCover data={singleArticleCover} />
        <SingleContent content={article.body} />
        <SingleUpdateStatus />
        <NavigationalArticles articles={DATA_BLOG} />
      </Layout>
    </>
  );
}

// export async function getStaticProps({ params, preview = false }) {
export async function getServerSideProps({ params }) {
  const { id: slug } = params;

  try {
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

    const article = await getClient(false).fetch(QUERY, { slug });

    if (!article) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
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

export default memo(ArticlesSingle);
