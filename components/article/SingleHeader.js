// Custom Components
import { motion } from "framer-motion";
import { memo } from "react";
import Container from "../components/Container";

function SingleHeader({ data }) {
  return (
    <>
      <section className="p_single_header">
        <Container>
          <p className="p_meta_cat">{data?.cat}</p>
          <h1 className="p__title">{data?.title}</h1>
          <p className="p_meta_date">{data.date}</p>
        </Container>
      </section>
    </>
  );
}

export default memo(SingleHeader);
