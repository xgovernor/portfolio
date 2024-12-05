import Image from "next/image";
import Container from "../Container";

function SingleCover({ data }) {
  // Fallback values
  const defaultImage = {
    url: "/default-cover.jpg", // Replace with your placeholder image path
    width: 1200,
    height: 675,
    alt: "Default cover image",
  };

  const imageUrl = data?.url || defaultImage.url;
  const imageWidth = data?.width || defaultImage.width;
  const imageHeight = data?.height || defaultImage.height;
  const imageAlt = data?.alt || "Article cover image";

  return (
    <section>
      <Container className="max-lg:!px-0 max-md:h-[275px]">
        <Image
          className="min-h-[275px] h-[inherit] w-full object-cover lg:rounded-xl"
          src={imageUrl}
          width={imageWidth}
          height={imageHeight}
          alt={imageAlt}
          layout="responsive"
          priority // Adds preload for the image (optional for above-the-fold content)
          aria-hidden={!data?.alt && imageUrl === defaultImage.url ? "true" : "false"} // Decorative if fallback image
        />
      </Container>
    </section>
  );
}

export default SingleCover;
