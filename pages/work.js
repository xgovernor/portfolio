// Core Components
// Custom Components
import PageHeader from "../components/PageHeader";
import PageBanner from "../components/PageBanner";
import Layout from "../views/shared/Layout/Layout";


export default function Work() {
    const dataImg = {
        url: "/images/work.jpg",
        alt: 'About banner Image',
        width: 1444,
        height: 579
    }

    return (
        <>
            <Layout>
                <PageHeader data={{heading: 'WORKS', subheading: "Muhammad crafts accessible web experiences where creativity meets technology."}} />
                <PageBanner dataImg={dataImg} />

                <h1>Comming  Soon</h1>
            </Layout>
        </>
    )
}