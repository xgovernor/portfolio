import { memo } from "react";
import ProjectCard from "../../../../components/card/ProjectCard";
import Container from "../../../../components/components/Container";
import { imageBuilder } from "../../../../lib/sanity";
import S from "./HomeProjects.module.sass";
import clsx from "clsx";

const HomeProjects = ({ className, title, description, projects, ...rest }) => {
  return (
    <section className={clsx(S.__section, className)} {...rest}>
      <div className={S.__header}>
        <Container className={S.__container}>
          <h4 className={S.__subHeading}>{ title }</h4>
          <h2 className={S.__heading}>{ description }</h2>
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
