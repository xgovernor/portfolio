import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";
import Container from "../../components/Container";

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
		<div className="p_projectCard" {...rest}>
			<Container className="p_projectCard__container">
				<div className="p_projectCard__content">
					<h4 className="p_subtitle_1">{category}</h4>
					<h2 className="p_projectCard__title">{title}</h2>
					<p className="p_body">
						{excerpt}
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
				<div className="p_projectCard__thumbnail">
					<div className="p_projectCard__image">
						<Image
							src={`/images/p1.jpg`}
							alt={title}
							width={562}
							height={323}
						/>
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
