import Image from "next/image";
import Link from "next/link";

function ProjectCard({
  className,
  serial,
  projectName,
  thumbnail,
  title,
  excerpt,
  url,
  ...rest
}) {
  const img = thumbnail ? thumbnail : "/images/placeholder.png";

  return (
    <div
      className={`${className} sticky top-0 bg-[#f5f3f5]` }
      {...rest}
    >
      <div className="flex max-md:flex-col gap-8">
        <div className="w-full md:max-w-[45%] h-auto pt-7 grid grid-cols-[48px,1fr] gap-5 border-t border-[#0000001f]">
          <div className="w-full max-w-6 md:max-w-36">
            <p className="font-sans text-black/70 text-xl leading-[14px]">{serial}</p>
          </div>

          <div className="w-full max-w-[calc(100%-44px)]">
            <div className="w-full">
              <h3 className="md:max-w-64 md:mb-2.5 font-black text-2xl md:text-3xl text-[#000c19] leading-8 uppercase">
                <Link href={url} className="hover:text-[#717171]">
                {projectName}
                </Link>
              </h3>
              <h2 className="font-serif text-md text-[#555]">
                  {title}
              </h2>
            </div>

          </div>
        </div>

        <div className="w-full md:max-w-[55%] h-full max-h-96 overflow-hidden flex  items-center justify-center rounded-lg">
          <Link href={url}>
            <Image
              className="rounded hover:opacity-70"
                src={img}
                // src={WORK_1}
                alt={title}
                width={697}
                height={444}
                loading="lazy"
              />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
