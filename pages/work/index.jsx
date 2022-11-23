import { groq } from "next-sanity";
import PageBanner from "../../components/PageBanner";
import PageHeader from "../../components/PageHeader";
import Layout from "../../components/scene/Layout";
import { getClient } from "../../lib/sanity.server";
import WorkProjects from "../../views/pages/home/WorkProjects";
import IMG from "../../assets/images/work.jpg";

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

export default function Work({ data }) {
  return (
    <>
      <Layout className="page__work">
        <PageHeader
          data={{
            heading: "WORKS",
            subheading: [
              "Craft. Experiences",
              "where creativity",
              "meets technology.",
            ],
          }}
        />
        <PageBanner img={IMG} />

        <WorkProjects projects={data?.projects} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const projects = await getClient(preview).fetch(QUERY);

  return {
    props: {
      data: { projects },
    },
    revalidate: 86400,
  };
}
