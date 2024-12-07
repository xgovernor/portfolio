import Layout from "../components/Layout";
import HomeHero from "../components/HomeHero";
import Meta from "../components/Meta";
import HomeAbout from "../components/HomeAbout";
const pageData = {
  title: "Abu Taher Muhammad",
  class: "p_page_home",
};

// function HomePage({ data = { projects: [], articles: [] }, preview }) {
function HomePage() {
  return (
    <>
      <Meta />

      <Layout>
        <HomeHero
          title={["Designer, developer", "and freethinker."]}
          cvURL={
            "https://drive.google.com/file/d/1osz9wNueb0Ac9gGXk1QQgRwlu5UnKN6B/view?usp=sharing"
          }
        />

        <HomeAbout />

      </Layout>
    </>
  );
}

export default HomePage;
