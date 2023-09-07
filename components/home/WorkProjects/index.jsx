import ProjectCard from "../../../../components/card/ProjectCard";
import { imageBuilder } from "../../../../lib/sanity";
import S from "./WorkProjects.module.sass";

const WorkProjects = ({ projects }) => {
  return (
    <>
      <section className={S.__projects}>
        <div className={S.__projectsBody}>
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
