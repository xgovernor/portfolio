import Container from "../Container";
import Date from "../Date";
import Link from "next/link";

function SingleHeader({ data }) {
  const formatSlug = (title) =>
    title?.toLowerCase()?.split(" ").join("-") || "uncategorized";

  return (
    <header className="max-md:min-h-[calc(100vh-350px)] flex items-end">
      <Container
        className="pt-10 pb-10 md:pt-14 lg:pt-10 lg:pb-14 xl:pt-[130px] xl:pb-[100px]"
        size="md"
      >
        {/* Categories */}
        <nav
          aria-label="Article categories"
          className="font-primary font-bold text-black uppercase max-xl:mb-2.5 max-xl:text-xs xl:text-sm"
        >
          {data?.category?.length > 0 ? (
            data.category.map((item, i) => (
              <span key={item._id}>
                {i !== 0 && <span aria-hidden="true"> | </span>}
                <Link
                  href={`/article?category=${formatSlug(item.title)}`}
                  className="text-[#000c19] cursor-pointer hover:text-[#717171]"
                  aria-label={`Category: ${item.title}`}
                >
                  {item.title}
                </Link>
              </span>
            ))
          ) : (
            <span className="text-gray-500">Uncategorized</span>
          )}
        </nav>

        {/* Title */}
        <h1 className="font-bold text-[#000c19] [overflow-wrap:break-all] [hyphens:manual] mb-2.5 text-5xl md:text-[48px] md:leading-[58px] lg:text-[58px] lg:leading-[72px] xl:text-[62px] xl:leading-[72px]">
          {data?.title || "Untitled Article"}
        </h1>

        {/* Date */}
        <p className="font-sans text-[#000c19b3] text-sm leading-4">
          {data?.date?._updatedAt ? "Updated " : ""}
          <Date
            dateString={
              data?.date?._updatedAt || data?.date?._createAt || "N/A"
            }
          />
        </p>
      </Container>
    </header>
  );
}

export default SingleHeader;
