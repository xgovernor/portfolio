import Container from "../Container";

function ProjectHeader({ project, title, cover }) {
  return (
    <>
      <section className="relative flex h-[calc(100vh-75px)] w-full items-end overflow-hidden object-contain [box-shadow:inset_0_0_100px_#00000040] max-md:max-h-[650px]">
        <div className="__image after:[content=''] absolute top-0 right-0 bottom-0 left-0 z-0 after:absolute after:z-[2] after:h-full after:w-full" />
        <Container className="text-shadow-lg z-10 py-6 md:py-14 xl:py-20">
          <h4 className="text-sm font-bold text-white uppercase opacity-[0.7] md:mb-2 lg:mb-2.5">
            {project}
          </h4>
          <h1 className="text-shadow-lg text-[34px] leading-10 text-white md:text-[42px] md:leading-[48px] lg:text-[52px] lg:leading-[62px] lg:max-xl:w-[724px] xl:text-6xl xl:leading-[82px]">
            {title}
          </h1>
        </Container>
      </section>

      <style jsx>{`
        .__image {
          background: url("${cover}");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed;
        }
        .__image:after {
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.3) 100%
          );
        }
      `}</style>
    </>
  );
}

export default ProjectHeader;
