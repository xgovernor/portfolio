import clsx from "clsx";
import Container from "../Container";
import { memo } from "react";
// import S from "./AboutBody.module.css";

const AboutBody = () => {
  return (
    <>
      <section className="">
        <Container className="max-md:pt-10 max-md:pb-10 md:max-lg:py-[25px] md:max-lg:px-[50px] lg:max-xl:py-[55px] lg:max-xl:px-[60px] xl:pt-[85px] xl:pb-[100px] ">
          <BodySection title="Who am I ?">
            <Paragraph className="text-justify">
              There are some called Muhammad. Even only in Bangladesh. Before,
              my name was Abu Taher – and I only existed under this name once.
              But this is another story.
            </Paragraph>
            <Paragraph className="text-justify">
              What is true then as now: I am a designer and developer. To be
              precise, I solve people&apos;s problems thus and so that they get
              a smile on their face afterward look more beautiful than before or
              perform not like before. Maybe more practical to use. Websites,
              user interfaces, apps, and things like that. Some think I&apos;m
              totally creative and just one of those people; who make everything
              they put their hands on stunning. I see myself more as a problem
              solver who lives out his trained profession as a web developer
              with ambition and still wants to learn more today. I&apos;m more
              of a freethinker than a web developer. But that&apos;s just
              terminology anyway.
            </Paragraph>
          </BodySection>

          <BodySection title="What I have learned">
            <Paragraph className="text-justify">
              After completing junior high school, I started learning web
              development while continuing my school. After gaining enough
              skillset began my apprenticeship in a small digital studio in the
              middle of the beautiful Sylhet in Bangladesh. I had great seniors
              like Saidul Islam(CEO of Freelancerlab) brother and Arif uncle,
              who trained my vision and taught me how to make things innovative
              and legible.
            </Paragraph>
            <Paragraph className="text-justify">
              UI/UX - HTML5 - CSS3 - Javascript - PHP - MySQL - Node.js -
              React.js - Next.js - MondoDB - GSAP - Strapi - GraphQL - Wordpress
              - etc.
            </Paragraph>
          </BodySection>

          <BodySection title={"Experiences"}>
            <Paragraph className="text-justify">
              I then worked with various people/agencies. During these years, in
              addition to great mentors and orders, a highlight was Muhammad
              Abdullah, for whom I was allowed to be a web developer myself. We
              still work together today on various freelance projects, but
              Abdullah has long been in the fast lane.
            </Paragraph>
          </BodySection>

          <BodySection title={"What else do I do?"}>
            <Paragraph className="text-justify">
              In addition to workload, I enjoy attending webinars and meetings
              on web design and development or helping out my buddies by solving
              their problems on the Discord server.
            </Paragraph>
          </BodySection>

          <BodySection title={"Work History"}>
            <table className="p_table">
              <tbody>
                <TableRow
                  title="Front-end Engineer"
                  description={"Ferne Health"}
                  meta={"2022"}
                />
                <TableRow
                  title="Junior Web Developer"
                  description={"Freelancerlab"}
                  meta={"2020 - 2021"}
                />
                <TableRow
                  title="Web Developer"
                  description={"DigiYotta"}
                  meta={"2019 - 2020"}
                />
                <TableRow
                  title="Freelance Developer"
                  description={"..."}
                  meta={"2018 - Current"}
                />
              </tbody>
            </table>
          </BodySection>

          <BodySection className="py-2.5" title={"Education & Certification"}>
            <table className="p_table">
              <tbody>
                <TableRow
                  title="Complete Web Development"
                  description={"Programming Hero"}
                  meta={"2021"}
                />
                <TableRow
                  title="Computer Science & Engineering"
                  description={"Metropolitan University, Sylhet."}
                  meta={"2021 - Current"}
                />
                <TableRow
                  title="IELTS"
                  description={"British Council"}
                  meta={"2022"}
                />
              </tbody>
            </table>
          </BodySection>
        </Container>
      </section>
    </>
  );
};

const BodySection = ({ children, title, className }) => {
  return (
    <div
      className={clsx(
        "w-full flex border-b border-b-[1px_solid_#0000001f]  max-md:first-of-type:pb-5 max-md:last-of-type:pt-5 max-md:[&:not(:first-of-type)]:[&:not(:last-of-type)]:py-5   max-md:flex-col max-md:gap-5 md:py-[45px] md:justify-between md:max-lg:gap-[30px]",
        className
      )}
    >
      {/* Left Side */}
      <div className="md:max-lg:w-[30%] md:max-lg:max-w-[176px] lg:w-[250px]">
        <h4 className="text-black text-base ">
          {title}
        </h4>
      </div>

      <div className="md:max-lg:[width:calc(100%-236px)] md:max-lg:max-w-[650px] lg:max-xl:w-[693px] xl:w-[786px] ">
        {children}
      </div>
    </div>
  );
};

const Paragraph = ({ children, className }) => {
  return (
    <p
      className={clsx(
        "font-sans text-[#4D4D4D] [&:last-of-type]:mb-0] max-lg:mb-[15px] max-md:leading-5 md:leading-[23px] lg:leading-[25px] lg:mb-5 xl:text-[15px] xl:leading-[27px] ",
        className
      )}
    >
      {children}
    </p>
  );
};

const TableRow = ({ className, title, description, meta }) => {
  return (
    <tr
      className={clsx(
        "[&:first-of-type_td]:pb-5 [&:last-of-type_td]:pt-5 [&:not(:first-of-type):not(:last-of-type)_td]:py-5 border--b--motion [&:not(:last-of-type)]:border-b border-b-[1px_solid_#0000001f]",
        className
      )}
    >
      <td className="text-black text-left font-sans">
        <h4 className="font-sans text-[#4D4D4D] [&:last-of-type]:mb-0] max-md:leading-5 md:leading-[23px] lg:leading-[25px] xl:text-[15px] xl:leading-[27px] ">
          {title}
        </h4>
      </td>
      <td className="text-center">
        <Paragraph className="!mb-0">{description}</Paragraph>
      </td>
      <td className="text-right">
        <Paragraph className="!mb-0">{meta}</Paragraph>
      </td>
    </tr>
  );
};
export default memo(AboutBody);
