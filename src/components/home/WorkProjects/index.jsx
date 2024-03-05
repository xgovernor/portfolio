import { memo } from "react";
import ProjectCard from "../../../components/card/ProjectCard";
import { imageBuilder } from "../../../utils/sanity";
// import S from "./WorkProjects.module.css";

const WorkProjects = ({ projects }) => {
  return (
    <section className="bg-[#0000000d]">
      <div className="flex flex-col max-md:py-10 md:py-[60px] lg:py-[80px] xl:py-[130px] max-md:gap-10 md:gap-[60px] lg:gap-[80px] xl:gap-[130px]">
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

export default memo(WorkProjects);
