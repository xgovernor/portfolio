import { memo } from "react";
import clsx from "clsx";
import Container from "../../components/Container";
import ProjectCard from "./../../card/ProjectCard";
import { imageBuilder } from "../../../utils/sanity";

const HomeProjects = ({ className, title, description, projects }) => {
  return (
    <section
      className={clsx(
        "bg-[#efefef] max-md:pb-10 md:pb-[60px] lg:pb-20 xl:py-[130px] ",
        className
      )}
    >
      <div className="">
        <Container className="text-center max-md:[padding:40px_30px_40px] md:max-lg:max-w-[693px] md:max-xl:[padding:80px_90px_50px] lg:max-xl:max-w-[1003px] xl:w-[823px] xl:mb-20">
          <h4 className="[font-family:'NHaasGroteskDSPro'] mb-2.5 max-xl:text-[12px] leading-[16px] xl:text-[14px]">
            {title}
          </h4>
          <h2 className="mx-auto w-full [font-family:'NHaasGroteskDSPro'] font-bold text-center [letter-spacing:-0.01em] text-black uppercase mt-2.5 max-md:text-xl md:text-[28px] md:leading-[38px] lg:text-[38px] lg:leading-[48px] xl:text-[42px] xl:leading-[52px] [word-spacing:4px]">
            {description}
          </h2>
        </Container>
      </div>

      <div className="flex flex-col max-md:gap-10 md:gap-[60px] lg:gap-[80px] xl:gap-[130px]">
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
