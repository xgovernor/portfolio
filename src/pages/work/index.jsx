import { groq } from "next-sanity";
import PageHeader from "../../components/PageHeader";
import Layout from "../../components/Layout";
import IMG from "../../assets/images/work.webp";
import { memo } from "react";
import dynamic from "next/dynamic";
import Meta from "../../components/Meta";
import { getClient } from "../../utils/sanity";
import PageBanner from "../../components/PageBanner";
import WorkProjects from "../../components/home/WorkProjects";

// GROQ query for featured Projects & Articles.
const QUERY = groq`*[_type == "project"] {
	_id,
	_type,
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
	liveUrl,
	role,
	"slug": slug.current,
	technology,
  }`;

function Work({ data }) {
  return (
    <>
      <Meta title="Projects" />

      <Layout className="page__work">
        <PageHeader
          data={{
            heading: "WORK",
            subheading: [
              "FORGING EXPERIENCES",
              "WHERE CREATIVITY",
              "EMBRACES TECHNOLOGY.",
            ],
          }}
        />
        <PageBanner img={IMG} />

        <WorkProjects projects={data?.projects} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const projects = await getClient(preview).fetch(QUERY);

  return {
    props: {
      data: { projects },
    },
    revalidate: 60 * 60 * 24 * 30,
  };
}

export default memo(Work);
