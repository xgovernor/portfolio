import Layout from "../components/Layout";
import HomeHero from "../components/HomeHero";
import Meta from "../components/Meta";
import HomeAbout from "../components/HomeAbout";


function HomePage() {
  return (
    <>
      <Meta />

      <Layout>
        <HomeHero />
        <HomeAbout />
      </Layout>
    </>
  );
}

export default HomePage;
