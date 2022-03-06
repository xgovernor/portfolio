// Core Components
// Custom Components
import PageBanner from "../components/PageBanner";
import Layout from "../views/shared/Layout/Layout";
import HomeHero from '../views/pages/home/HomeHero';
import HomeAbout from "../views/pages/home/HomeAbout";
import HomeProjects from "../views/pages/home/HomeProjects";
import HomeArticles from '../views/pages/home/HomeArticles';


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
    const data = {
        hero: {
            title: ["Designer, developer", "and freethinker."],
            cvUrl: "https://drive.google.com/file/d/1osz9wNueb0Ac9gGXk1QQgRwlu5UnKN6B/view?usp=sharing"
        },
    }

    return (
        <>
            <Layout data={pageData}>
                <HomeHero title={data.hero.title} cvURL={data.hero.cvUrl} />
                <HomeAbout />
                <HomeProjects />
                <HomeArticles />
            </Layout>
        </>
    )
}