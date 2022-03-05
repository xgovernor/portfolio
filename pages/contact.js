// Core Components
import Link from 'next/link'
// Custom Components
import PageHeader from "../components/PageHeader";
import PageBanner from "../components/PageBanner";
import Container from '../components/Container';
import ContactForm from './ContactForm';
import { motion } from "framer-motion";
import { SmoothScrollProvider } from '../hooks/useScroll'
import Layout from '../views/shared/Layout/Layout';


export default function Contact() {
    const dataImg = {
        url: "/images/contact.jpg",
        alt: 'About banner Image',
        width: 1444,
        height: 579
    }

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                // exit={{ opacity: 0 }} 
            >
                
                    <Layout>
                        <PageHeader data={{heading: 'GET IN TOUCH', subheading: "Muhammad is currently not looking for new opportunities, but happily answers all types of inquiries"}} />
                        
                        <PageBanner dataImg={dataImg} />

                        <section className="p_contact_form" data-scroll-section>
                            <Container dataClass="p_header">
                                <h2 data-scroll className="p__title">CONTACT OPTIONS</h2>
                                <h1 data-scroll className="p__subtitle">Contact me</h1>
                            </Container>

                            <Container dataClass="p_content">

                                <div className="p__left">
                                    <ContactForm />
                                </div>
                                <div className="p__right">
                                    <div className="p_right_content">
                                        <h4 data-scroll className="p__title">Email</h4>
                                        <ul className="p__list mb_20">
                                            <li data-scroll>
                                                <Link href="mailto:abut1081@gmail.com">
                                                    <a>
                                                        abut1081@gmail.com
                                                    </a>
                                                </Link>
                                                - Probably the easiest way to reach out to Muhammad..
                                            </li>
                                        </ul>

                                        
                                        <h4 className="p__title">Social</h4>
                                        <ul className="p__list">
                                            <li data-scroll>
                                                <Link href="mailto:abut1081@gmail.com">
                                                    <a>
                                                        Linkedin
                                                    </a>
                                                </Link>
                                                 - Where Muhammad strives to look professional 😎.
                                            </li>
                                            <li data-scroll>
                                                <Link href="mailto:abut1081@gmail.com">
                                                    <a>
                                                        Dribbble
                                                    </a>
                                                </Link>
                                                 - Where Muhammad hopefully will post design related stuff occasionally 🎨.
                                            </li>
                                        </ul>

                                        <p data-scroll className="mt_20">So in case you wonder anything, reach out to Henrik, it&apos;ll be fun!✌️</p>
                                    </div>
                                </div>

                            </Container>
                        </section>
                    </Layout>
                
            </motion.div>
        </>
    )
}