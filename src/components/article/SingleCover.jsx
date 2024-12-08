import Image from "next/image";
import Container from "../Container";

function SingleCover({ src="/default-cover.jpg", width=1088, height=370, alt="" }) {

  return (
    <section>
      <Container className="max-lg:!px-0 max-md:h-[275px]">
        <Image
          className="min-h-[275px] h-[inherit] w-full object-cover lg:rounded-xl"
          src={src}
          width={width}
          height={height}
          alt={alt}
          priority
          aria-hidden={!alt && src === src ? "true" : "false"}
        />
      </Container>
    </section>
  );
}

export default SingleCover;
