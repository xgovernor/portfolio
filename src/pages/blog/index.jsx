import { groq } from "next-sanity";
import PageHeader from "../../components/PageHeader";
import Layout from "../../components/Layout";
import { getClient } from "../../utils/sanity";
import IMG from "../../assets/images/blog.png";
import { info } from "./../../components/Meta/meta.constant.js"; // Import info for base URLs
import PageBanner from "../../components/PageBanner";
import BlogGrid from "../../components/BlogGrid";

// GROQ query for featured Projects & Articles.
const QUERY = groq`*[_type == "article"] {
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
  }`;

function Blog({ data }) {
  // Define meta information specific to the /blog page
  const blogPageMeta = {
    // A more specific and keyword-rich title for your blog index
    pageTitle: "Blog | Insights & Thoughts from Abu Taher Muhammad",
    // A detailed description for search results and social shares
    pageDescription:
      "Explore Abu Taher Muhammad's blog for occasional thoughts, insights, and technical articles on web development, software engineering, and industry trends.",
    // A specific image for the blog page, if you have one, otherwise fallback to a generic one
    pageImage: `${info.website}${IMG.src}`, // Assuming IMG.src gives the relative path to blog.png
    // The canonical URL for the blog index page
    pageUrl: `${info.website}/blog`,
    blogArticlesData: data?.articles,
  };

  return (
    <>
      {/* Pass the full meta object to the Layout component */}
      <Layout className="page__blog" meta={blogPageMeta}>
        <PageHeader
          heading="KNOWLEDGE BOOK"
          subheading={[
            "Occasional",
            "thoughts & insights.",
            "from Muhammad's life.",
          ]}
        />
        <PageBanner img={IMG} />
        <BlogGrid articles={data?.articles} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const articles = await getClient(preview).fetch(QUERY);

  return {
    props: {
      data: { articles },
    },
    revalidate: 60 * 60 * 6, // Revalidate every 6 hours
  };
}

export default Blog;
