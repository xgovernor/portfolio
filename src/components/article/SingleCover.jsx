import Image from "next/image";
import Container from "../Container";

function SingleCover({ data }) {
  return (
    <>
      <section className="p_single_cover">
        <Container className="max-lg:!px-0">
          <Image
            src={data?.url}
            width={data?.width}
            height={data?.height}
            alt={data?.alt}
            layout="responsive"
          />
        </Container>
      </section>
    </>
  );
}

export default SingleCover;
