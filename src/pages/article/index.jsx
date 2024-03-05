import { groq } from "next-sanity";
import PageHeader from "../../components/PageHeader";
import Layout from "../../components/Layout";
import { getClient } from "../../utils/sanity";
import IMG from "../../assets/images/blog.png";
import { memo } from "react";
import Meta from "../../components/Meta";
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
  return (
    <>
      <Meta title="Blog" />

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
    </>
  );
}

// export async function getStaticProps({ params, preview = false }) {
export async function getStaticProps({ preview = false }) {
  const articles = await getClient(preview).fetch(QUERY);

  return {
    props: {
      data: { articles },
    },
    revalidate: 60 * 60 * 24,
  };
}

export default memo(Blog);
