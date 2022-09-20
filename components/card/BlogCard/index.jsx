import Link from "next/link";
import PropTypes from "prop-types";

export default function BlogCard({
	className,
	meta,
	url,
	title,
	excerpt,
	...rest
}) {
	return (
		<>
			<div className={`p_c__blogCard ${className ? className : ""}`} {...rest}>
				<h4 className="p__meta">{meta}</h4>
				<Link href={url}>
					<a className="p__title__link">
						<h3 className="p__title">{title}</h3>
					</a>
				</Link>

				<p className="p__excerpt">{excerpt}</p>
				<Link href={url}>
					<a className="p__readmore">Read in details</a>
				</Link>
			</div>
		</>
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
