import { memo } from "react";
import ProjectCard from "../../../../components/card/ProjectCard";
import Container from "../../../../components/components/Container";
import { imageBuilder } from "../../../../lib/sanity";
import S from "./HomeProjects.module.sass";

const HomeProjects = ({ className, projects, ...rest }) => {
  return (
    <section className={S.__section}>
      <div className={S.__header}>
        <Container className={S.__container}>
          <h4 className={S.__subHeading}>FEATURED PROJECTS</h4>
          <h2 className={S.__heading}>
            Projects in which Muhammad has been involved in recent years.
          </h2>
        </Container>
      </div>

      <div className={S.__body}>
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
