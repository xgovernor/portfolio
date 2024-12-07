import {memo} from "react";
  import ProjectCard from "../card/ProjectCard";
import { imageBuilder } from "../../utils/sanity";
import Container from "../Container";

const WorkProjects = ({ projects }) => {

  return (
    <section className="">
      <Container className="lg:max-w-[888px] xl:max-w-[1088px] flex flex-col py-10 md:py-[60px] lg:py-[80px] xl:py-[130px] max-md:gap-10 md:gap-[60px] lg:gap-[80px] xl:gap-[130px]">
        {projects.map((project, i) => (
          <ProjectCard
            key={project._id}
            className=""
            category={project.category?.title}
            thumbnail={imageBuilder(project.thumbnail)
              .width(562)
              .height(323)
              .url()}
            title={project.title}
            excerpt={project.excerpt}
            technologies={project.technology}
            projectUrl={project.liveUrl}
            url={`/work/${project.slug}`}
          />
        ))}
      </Container>
    </section>
  );
};

export default memo(WorkProjects);
