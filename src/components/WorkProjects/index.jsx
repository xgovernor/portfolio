import {memo} from "react";
  import ProjectCard from "../card/ProjectCard";
import { imageBuilder } from "../../utils/sanity";
import Container from "../Container";

function WorkProjects ({ projects }) {

  return (
    <section className="">
      <Container className="xl:max-w-[1366px] flex flex-col px-10 py-10 md:py-[60px] lg:py-[80px] xl:py-[100px] gap-8">
        {projects.map((project, i) => (
          <ProjectCard
            key={project._id}
            serial={i + 1}
            projectName={project.projectName}
            thumbnail={imageBuilder(project.thumbnail)
              .width(562)
              .height(323)
              .url()}
            title={project.title}
            excerpt={project.excerpt}
            url={`/work/${project.slug}`}
          />
        ))}
      </Container>
    </section>
  );
};

export default memo(WorkProjects);
