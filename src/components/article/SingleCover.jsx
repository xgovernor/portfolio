import Image from "next/image";
import Container from "../Container";
import PropTypes from "prop-types";
import { memo } from "react";

function SingleCover({
  src = "/default-cover.jpg",
  width = 1088,
  height = 370,
  alt = "",
}) {
  // Fallback alt text for accessibility
  const altText = alt || "Article cover image";
  const isDecorative = !alt;

  return (
    <section>
      <Container className="max-lg:!px-0 max-md:h-[275px]">
        <Image
          className="h-[inherit] min-h-[275px] w-full object-cover lg:rounded-xl"
          src={src}
          width={width}
          height={height}
          alt={altText}
          priority
          aria-hidden={isDecorative ? "true" : undefined}
        />
      </Container>
    </section>
  );
}

SingleCover.propTypes = {
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string,
};

export default memo(SingleCover);
