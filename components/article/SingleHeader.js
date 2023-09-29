import { motion } from "framer-motion";
import { memo } from "react";
import Container from "../components/Container";
import Date from "../Date";
import { date } from "yup";

function SingleHeader({ data }) {
  return (
    <section className="p_single_header">
      <Container>
        <p className="p_meta_cat">
          {data?.category?.map((item, i) => (
            <span key={item._id}>
              {(i !== 0) ? (<span> | </span>) : ""}
              <span className="p__cat_item">{item.title} </span>
            </span>
          ))}
        </p>
        <h1 className="p__title">{data?.title}</h1>
        <p className="p_meta_date">
          {data.date._updatedAt ? "Updated " : ""}
          <Date dateString={data.date._updatedAt ? data.date._updatedAt : data.date._createAt} />
        </p>
      </Container>
    </section>
  );
}

export default memo(SingleHeader);
