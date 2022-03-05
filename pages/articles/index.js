// Custom Components
import BlogGrid from "../../components/BlogGrid"
import PageBanner from "../../components/PageBanner"
import PageHeader from "../../components/PageHeader"
import { motion } from 'framer-motion'
import Layout from "../../views/shared/Layout/Layout"


export default function Blog() {
    const dataImg = {
        url: "/images/blog_banner.jpg",
        alt: 'About banner Image',
        width: 1444,
        height: 579
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} 
        >
            <Layout>
                <PageHeader data={{heading: 'Knowledge Book', subheading: "Occasional thoughts and insights from Muhammad's everyday life."}} />
                <PageBanner dataImg={dataImg} />
                <BlogGrid />
            </Layout>
        </motion.div>
    )
}