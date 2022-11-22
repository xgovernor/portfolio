// Custom Components
import { groq } from "next-sanity";
import BlogGrid from "../../components/BlogGrid";
import PageBanner from "../../components/PageBanner";
import PageHeader from "../../components/PageHeader";
import Layout from "../../components/scene/Layout";
import { getClient } from "../../lib/sanity.server";

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

export default function Blog({ data }) {
  const dataImg = {
    url: "/images/blog_banner.jpg",
    // url: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "About banner Image",
    width: 1444,
    height: 579,
  };

  return (
    <Layout>
      <PageHeader
        data={{
          heading: "KNOWLEDGE BOOK",
          subheading: [
            // "Occasional thoughts and insights from Muhammad's everyday life.",
            "Occasional",
            "thoughts & insights.",
            "from Muhammad's life.",
          ],
        }}
      />
      <PageBanner dataImg={dataImg} />
      {/* <BlogGrid articles={data?.articles} /> */}
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const articles = await getClient(preview).fetch(QUERY);

  return {
    props: {
      data: { articles },
    },
    revalidate: 86400,
  };
}
