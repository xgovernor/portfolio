import { memo } from "react";
import PropTypes from "prop-types";

function ProjectContentBlock({ node }) {
  const {
    subheading,
    heading,
    paragraphs = [],
    alignment = "center",
  } = node || {};

  // Determine alignment class
  const alignmentClass =
    alignment === "right"
      ? "justify-end"
      : alignment === "left"
        ? "justify-start"
        : "justify-center";
  const widthClass =
    paragraphs.length == 1 ? "max-w-2/5 text-center" : "max-w-[calc(100%/4)]";

  return (
    <section className="flex flex-col gap-y-7 px-5 py-10 md:px-10 md:py-16">
      {(subheading || heading) && (
        <header>
          {subheading && (
            <h6 className="mb-2 text-sm text-[#000c19] uppercase">
              {subheading}
            </h6>
          )}
          {heading && (
            <h2 className="w-full max-w-5xl text-2xl text-[#000c19] lg:text-4xl lg:leading-11 xl:text-5xl xl:leading-[3.8rem]">
              {heading}
            </h2>
          )}
        </header>
      )}
      {paragraphs.length > 0 && (
        <div
          className={`${alignmentClass} relative flex w-full gap-7 max-md:flex-col ${alignmentClass}`}
        >
          {paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className={`w-full ${widthClass} font-serif !leading-[160%]`}
            >
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </section>
  );
}

ProjectContentBlock.propTypes = {
  node: PropTypes.shape({
    subheading: PropTypes.string,
    heading: PropTypes.string,
    paragraphs: PropTypes.arrayOf(PropTypes.string),
    alignment: PropTypes.oneOf(["left", "center", "right"]),
  }).isRequired,
};

export default memo(ProjectContentBlock);
