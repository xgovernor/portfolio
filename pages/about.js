// Core Components
// Custom Components
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import PageBanner from "../components/PageBanner";
import AboutBody from "../components/about/AboutBody";


export default function About() {
    const dataImg = {
        url: "/images/about.jpg",
        alt: 'About banner Image',
        width: 1444,
        height: 579
    }

    return (
        <>
            <Layout data={{class: "p_page_about"}}>
                <PageHeader data={{heading: 'Family & friends, work, sports. In that order.', subheading: "Muhammad crafts accessible web experiences where creativity meets technology."}} />
                <PageBanner dataImg={dataImg} />
                <AboutBody />

            </Layout>
        </>
    )
}