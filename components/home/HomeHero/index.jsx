import Link from "next/link";
import S from "./HomeHero.module.sass";
import NodeJsIcon from "./../../../assets/images/icons/nodejs";
import NextJsIcon from "./../../../assets/images/icons/NextJsIcon";
import SassIcon from "./../../../assets/images/icons/SassIcon";
import WordpressIcon from "./../../../assets/images/icons/WordpressIcon";
import VimIcon from "./../../../assets/images/icons/VimIcon";
import TypescriptIcon from "./../../../assets/images/icons/TypescriptIcon";
import SQLite from "./../../../assets/images/icons/SQLite";
import ReduxIcon from "./../../../assets/images/icons/ReduxIcon";
import RedisIcon from "./../../../assets/images/icons/RedisIcon";
import ReactIcon from "./../../../assets/images/icons/ReactIcon";
import PhpIcon from "./../../../assets/images/icons/PhpIcon";
import MongoDb from "./../../../assets/images/icons/MongoDb";
import MySqlIcon from "./../../../assets/images/icons/MySqlIcon";
import PythonIcon from "./../../../assets/images/icons/PythonIcon";
import LinuxIcon from "./../../../assets/images/icons/LinuxIcon";
import TailwindIcon from "./../../../assets/images/icons/TailwindIcon";
import LaravelIcon from "./../../../assets/images/icons/LaravelIcon";
import GitIcon from "./../../../assets/images/icons/GitIcon";
import GraphQlIcon from "./../../../assets/images/icons/GraphQlIcon";
import JestIcon from "./../../../assets/images/icons/JestIcon";
import FigmaIcon from "./../../../assets/images/icons/FigmaIcon";
import DockerIcon from "./../../../assets/images/icons/DockerIcon";
import CIcon from "./../../../assets/images/icons/CIcon";
import AwsIcon from "./../../../assets/images/icons/AwsIcon";
import Container from "../../components/Container";

const HomeHero = ({ title, cvURL }) => {
  return (
    <>
      <section className={S.__section}>
        <Container className={S.__container}>
          <h1 className={S.__title}>
            {title.map((line, index) => (
              <span key={index}>
                <span>{line}</span>
                {index !== title.length - 1 && <br />}
              </span>
            ))}
          </h1>

          <div className={S.__icons}>
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

          <p className={S.__downloadButton}>
            <Link href={cvURL} className="p__btn" target="_blank">
              DOWNLOAD CV
            </Link>
          </p>
        </Container>
      </section>
    </>
  );
};

export default HomeHero;
