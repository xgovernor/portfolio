import Layout from "../components/Layout";
import HomeHero from "../components/HomeHero";
import HomeAbout from "../components/HomeAbout";


function HomePage() {
  return (
    <>
      <Layout>
        <HomeHero />
        <HomeAbout />
      </Layout>
    </>
  );
}

export default HomePage;
