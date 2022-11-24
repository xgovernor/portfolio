import { groq } from "next-sanity";
import BlogGrid from "../../components/BlogGrid";
import PageBanner from "../../components/PageBanner";
import PageHeader from "../../components/PageHeader";
import Layout from "../../components/scene/Layout";
import { getClient } from "../../lib/sanity.server";
import IMG from "../../assets/images/blog.png";
import { memo } from "react";

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
  return (
    <Layout>
      <PageHeader
        data={{
          heading: "KNOWLEDGE BOOK",
          subheading: [
            "Occasional",
            "thoughts & insights.",
            "from Muhammad's life.",
          ],
        }}
      />
      <PageBanner img={IMG} />
      <BlogGrid articles={data?.articles} />
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

export default memo(Blog);
