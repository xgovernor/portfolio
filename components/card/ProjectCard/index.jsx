import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";
import Container from "../../../views/shared/Container/Container";

const ProjectCard = ({
	className,
	category,
	thumbnail,
	title,
	excerpt,
	technologies,
	url,
	...rest
}) => {
	console.log("URL", thumbnail);
	return (
		<div className="p_projects_card" {...rest}>
			<Container>
				<div className="p_card_left">
					<h4 className="p_subtitle_1">{category}</h4>
					<h2 className="p_heading">{title}</h2>
					<p className="p_body">
						T{excerpt}
						<br />
						<br />
						<strong>Technologies: </strong>
						{technologies.map((technology, i) => (
							<span key={i} className={`technology--${technology}`}>
								{technology}
							</span>
						))}
					</p>

					{url ? (
						<Link href={url}>
							<a className="p_link" target="_blank">
								Visit Website
							</a>
						</Link>
					) : (
						<p className="p_link">Coming soon</p>
					)}
				</div>
				<div className="p_card_right">
					<div className="p_image">
						<Image src={thumbnail} alt={title} width={562} height={323} />
					</div>
				</div>
			</Container>
		</div>
	);
};

ProjectCard.propTypes = {
	className: PropTypes.string,
	category: PropTypes.string.isRequired,
	thumbnail: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	excerpt: PropTypes.string.isRequired,
	technologies: PropTypes.array.isRequired,
	url: PropTypes.string,
	rest: PropTypes.object,
};

export default ProjectCard;
