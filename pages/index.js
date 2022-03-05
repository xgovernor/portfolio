// Core Components
// Custom Components
import HomeAbout from "../components/home/HomeAbout";
import HomeArticles from "../components/home/HomeArticles";
import HomeHero from "../components/home/HomeHero";
import HomeProjects from "../components/home/HomeProjects";
import PageBanner from "../components/PageBanner";
import Layout from "../views/shared/Layout/Layout";


export default function Index() {
    const pageData = {
        title: 'Abu Taher Muhammad',
        class: 'p_page_home'
    }
    const dataImg = {
        url: "/images/index.jpg",
        alt: 'About banner Image',
        width: 1444,
        height: 579
    }
    return (
        <>
            <Layout data={pageData}>
                <HomeHero />
                <HomeAbout />
                <HomeProjects />
                <HomeArticles />
            </Layout>
        </>
    )
}