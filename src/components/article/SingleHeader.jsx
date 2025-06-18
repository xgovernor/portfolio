import Container from "../Container";
import DateFormat from "../Date";
import Link from "next/link";
import PropTypes from "prop-types";
import { useMemo } from "react";

function SingleHeader({ title, categories, createdAt, updatedAt }) {
  const formatSlug = useMemo(
    () => (title) =>
      title?.toLowerCase()?.split(" ").join("-") || "uncategorized",
    [],
  );

  return (
    <header className="flex flex-col justify-end max-md:min-h-[calc(100vh-350px)]">
      <Container
        className="pt-10 pb-10 max-lg:px-10 md:pt-14 lg:pt-[130px] lg:pb-[100px]"
        size="md"
      >
        <nav
          aria-label="Article categories"
          className="font-sans font-bold text-black uppercase max-xl:mb-2.5 max-xl:text-xs xl:text-sm"
        >
          {categories?.length > 0 && (
            <ul className="inline">
              {categories.map((item, i) => (
                <li key={item._id} className="inline">
                  {i !== 0 && <span aria-hidden="true"> | </span>}
                  <Link
                    href={`/blog?category=${formatSlug(item.title)}`}
                    className="cursor-pointer text-[#000c19] hover:text-[#717171]"
                    aria-label={`Category: ${item.title}`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </nav>
        {/* Title */}
        <h1 className="mb-2.5 text-[34px] leading-10 font-bold [overflow-wrap:break-all] [hyphens:manual] text-[#000c19] md:text-[48px] md:leading-[58px] lg:text-[58px] lg:leading-[72px] xl:text-[62px]">
          {title}
        </h1>
        {/* Date */}
        <p className="font-serif text-sm leading-4 text-[#000c19b3]">
          {updatedAt ? "Updated " : ""}
          <DateFormat dateString={updatedAt || createdAt} />
        </p>
      </Container>
    </header>
  );
}

SingleHeader.propTypes = {
  title: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string,
};

export default SingleHeader;
