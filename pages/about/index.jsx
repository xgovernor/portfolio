// Core Components
// Custom Components
import PageBanner from "../../components/PageBanner";
import PageHeader from "../../components/PageHeader";
import Layout from "../../components/scene/Layout";
import AboutBody from "../../views/pages/about/AboutBody";
import IMG from "../../assets/images/about.jpg";

export default function About() {
  return (
    <>
      <Layout data={{ class: "p_page_about" }}>
        <PageHeader
          data={{
            heading: "FAMILY & FRIENDS, ACHIEVEMENTS, ETC.",
            subheading: ["Journey.", "Purification.", "Rewards reimagined."],
          }}
        />
        <PageBanner img={IMG} />
        {/* <AboutQuote /> */}
        <AboutBody />
      </Layout>
    </>
  );
}
