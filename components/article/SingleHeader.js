// Custom Components
import ContactForm from "../../pages/ContactForm";
import Container from "../Container";
import { motion } from "framer-motion";


export default function SingleHeader({ data }) {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }} 
            >
                <section className="p_single_header"  data-scroll-section>
                    <Container>
                        <p data-scroll className="p_meta_cat">{data?.cat}</p>
                        <h1 data-scroll className="p__title">{data?.title}</h1>
                        <p data-scroll className="p_meta_date">{data.date}</p>
                    </Container>
                </section>
            </motion.div>
        </>
    )
}