import Link from "next/link";
import PropTypes from "prop-types";
import { truncate } from "../../../utils/string.utils";
import clsx from "clsx";
import { memo } from "react";
import Date from "../../Date";

function BlogCard({ className, date, url, title, excerpt, ...rest }) {
  return (
    <div className={clsx('p_c__blogCard', className)} {...rest}>
      <div>
        <h4 className="p__meta">
          <Date dateString={date} />
        </h4>
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

export default memo(BlogCard);
