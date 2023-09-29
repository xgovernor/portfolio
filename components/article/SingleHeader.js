import { memo } from "react";
import Container from "../components/Container";
import Date from "../Date";
import Link from "next/link";

function SingleHeader({ data }) {
  return (
    <section className="p_single_header">
      <Container>
        <p className="p_meta_cat">
          {data?.category?.map((item, i) => (
            <span key={item._id}>
              {(i !== 0) ? (<span> | </span>) : ""}
              <Link className="p__cat_item" href={`/article?category=${(item.title).toLowerCase().split(' ').join("-")}`}>{item.title} </Link>
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
