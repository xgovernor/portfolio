import { memo } from "react";
import ProjectCard from "../../../components/card/ProjectCard";
import { imageBuilder } from "../../../lib/sanity";
import Container from "../../shared/Container/Container";

const HomeProjects = ({ className, projects, ...rest }) => {
	return (
		<section className="p_s__projects">
			<div className="p_projects_header">
				<Container>
					<h4 className="p_subtitle_1">FEATURED PROJECTS</h4>
					<h2 className="p_heading">
						Projects in which Muhammad has been involved in recent years.
					</h2>
				</Container>
			</div>

			<div className="p_projects__body">
				{projects.map((project, i) => (
					<ProjectCard
						key={i}
						className=""
						category={project.category?.title}
						thumbnail={imageBuilder(project.thumbnail)
							.width(562)
							.height(323)
							.url()}
						title={project.title}
						excerpt={project.excerpt}
						technologies={project.technology}
						url={project.liveUrl}
					/>
				))}
			</div>
		</section>
	);
};

export default memo(HomeProjects);
