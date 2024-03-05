import Link from "next/link";
// import S from "./HomeHero.module.css";
import NodeJsIcon from "../../../assets/icons/nodejs";
import NextJsIcon from "../../../assets/icons/NextJsIcon";
import SassIcon from "../../../assets/icons/SassIcon";
import WordpressIcon from "../../../assets/icons/WordpressIcon";
import VimIcon from "../../../assets/icons/VimIcon";
// import TypescriptIcon from "./../../../assets/images/icons/TypescriptIcon";
import SQLite from "../../../assets/icons/SQLite";
// import ReduxIcon from "./../../../assets/images/icons/ReduxIcon";
import RedisIcon from "../../../assets/icons/RedisIcon";
import ReactIcon from "../../../assets/icons/ReactIcon";
import PhpIcon from "../../../assets/icons/PhpIcon";
import MongoDb from "../../../assets/icons/MongoDb";
import MySqlIcon from "../../../assets/icons/MySqlIcon";
import PythonIcon from "../../../assets/icons/PythonIcon";
import LinuxIcon from "../../../assets/icons/LinuxIcon";
// import TailwindIcon from "./../../../assets/images/icons/TailwindIcon";
import LaravelIcon from "../../../assets/icons/LaravelIcon";
import GitIcon from "../../../assets/icons/GitIcon";
// import GraphQlIcon from "./../../../assets/images/icons/GraphQlIcon";
// import JestIcon from "./../../../assets/images/icons/JestIcon";
import FigmaIcon from "../../../assets/icons/FigmaIcon";
import DockerIcon from "../../../assets/icons/DockerIcon";
import CIcon from "../../../assets/icons/CIcon";
import AwsIcon from "../../../assets/icons/AwsIcon";
import Container from "../../Container";
import { memo } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { IconContext } from "react-icons";

const SOCIAL_MEDIA = [
  {
    icon: <FaLinkedin />,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/abutahermuhammad/",
  },
  {
    icon: <FaGithub />,
    name: "GitHub",
    url: "https://github.com/abutahermuhammad",
  },
  {
    icon: <FaMediumM />,
    name: "Medium",
    url: "https://abutaher-muhammad.medium.com/",
  },
  {
    icon: <FaBehance />,
    name: "Behance",
    url: "https://www.behance.net/abut10812466",
  },
  {
    icon: <FaEnvelope />,
    name: "Email",
    url: "mailto:abutahermuhammad@outlook.com",
  },
];

const HomeHero = ({ title, cvURL }) => {
  return (
    <section className="xl:[padding:165px_0_80px]">
      <Container className="max-md:max-w-[360px] max-md:[padding:55px_30px_40px] md:[padding:85px_50px_100px] lg:[padding:105px_150px_100px] xl:p-0">
        <h1 className="text-center text-black [font-family:'NHaasGroteskDSPro'] uppercase max-md:text-[32px] max-md:leading-[42px] md:text-[62px] md:leading-[72px] lg:text-[72px] lg:leading-[90px] xl:leading-[106px]">
          {title.map((line, index) => (
            <span key={index}>
              <span>{line}</span>
              {index !== title.length - 1 && <br />}
            </span>
          ))}
        </h1>

        <div className="max-h-auto mt-2.5 flex gap-4 justify-center">
          <IconContext.Provider value={{ className: "w-6 h-6" }}>
            {SOCIAL_MEDIA.map((social, index) => (
              <a
                key={index}
                href={social.url}
                title={social.name}
                className="text-[#B2B5B7] hover:text-black w-7 h-7 flex justify-center items-center"
                target="_blank"
              >
                {social.icon}
                {/* {social.name} */}
              </a>
            ))}
          </IconContext.Provider>
        </div>

        <div className="hidden max-h-auto mt-2.5 flex gap-3 justify-center [&>svg]:max-w-[28px] [&>svg]:opacity-[0.6] hover:[&>svg]:opacity-100">
          {/* Apache */}
          {/* Babel */}
          {/* CSS3 */}
          {/* EsLint */}
          {/* HTML5 */}
          {/* Markdown */}
          {/* NGINX */}
          {/* Postman */}
          <NextJsIcon />
          <ReactIcon />
          <LaravelIcon />
          <WordpressIcon />
          <MySqlIcon />
          <MongoDb />
          <SQLite />
          <RedisIcon />
          {/* <ReduxIcon /> */}
          <NodeJsIcon />
          <PythonIcon />
          <PhpIcon />
          <CIcon />
          <LinuxIcon />
          {/* <TailwindIcon /> */}
          <GitIcon />
          {/* <GraphQlIcon /> */}
          {/* <JestIcon /> */}
          <FigmaIcon />
          <DockerIcon />
          <AwsIcon />
          <SassIcon />
          <VimIcon />
        </div>

        <div className="flex justify-center items-center max-xl:mt-20 xl:mt-[130px]">
          <Link
            href={cvURL}
            className=" text-black font-bold text-sm [font-family:'NHaasGroteskDSPro'] underline"
            target="_blank"
          >
            DOWNLOAD CV
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default memo(HomeHero);
