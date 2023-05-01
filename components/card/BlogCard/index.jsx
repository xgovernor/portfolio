import Link from "next/link";
import PropTypes from "prop-types";
import { truncate } from "../../../utils/string.utils";
import clsx from "clsx";
import { memo } from "react";

function BlogCard({ className, meta, url, title, excerpt, ...rest }) {
  return (
    <div className={clsx('p_c__blogCard', className)} {...rest}>
      <div>
        <h4 className="p__meta">{meta}</h4>
        <Link href={url} className="p__title__link">
          <h3 className="p__title">{truncate(title, 85)}</h3>
        </Link>

        <p className="p__excerpt">{truncate(excerpt, 205)}</p>
      </div>

      <div>
        <Link href={url} className="p__readmore">
          Read in details
        </Link>
      </div>
    </div>
  );
}

BlogCard.propTypes = {
  className: PropTypes.string,
  meta: PropTypes.string,
  title: PropTypes.string,
  excerpt: PropTypes.string,
  slug: PropTypes.string,
  rest: PropTypes.object,
};

export default memo(BlogCard);
