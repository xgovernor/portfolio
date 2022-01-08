// Custom Components
import BlogGrid from "../../components/BlogGrid"
import PageBanner from "../../components/PageBanner"
import PageHeader from "../../components/PageHeader"
import Layout from "../../components/Layout"


export default function Blog() {
    const dataImg = {
        url: "/images/blog_banner.jpg",
        alt: 'About banner Image',
        width: 1444,
        height: 579
    }

    return (
        <>
            <Layout>
                <PageHeader data={{heading: 'KNOWLEDGE BOOK', subheading: "Occasional thoughts and insights from Muhammad's everyday life."}} />
                <PageBanner dataImg={dataImg} />
                <BlogGrid />
            </Layout>
        </>
    )
}