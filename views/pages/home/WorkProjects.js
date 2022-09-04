import ProjectCard from "../../../components/card/ProjectCard";
import { imageBuilder } from "../../../lib/sanity";

const WorkProjects = ({ projects }) => {
	return (
		<>
			<section className="p_s__projects">
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
		</>
	);
};

export default WorkProjects;
