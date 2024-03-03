import { memo } from "react";
// import { Parallax } from "react-scroll-parallax";
import S from "./PageBanner.module.css";

function PageBanner({ dataImg, img }) {
  return (
    <>
      <section className={S.__banner}>
        {/* <Parallax speed={-20}> */}
        <div className="__image" />
        {/* </Parallax> */}
      </section>

      <style jsx>{`
        .__image {
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;
          background: url("${img.src ? img.src : img}");
          background-attachment: fixed;
          background-position: center;
          background-size: cover;
          z-index: -1;
        }
      `}</style>
    </>
  );
}

export default memo(PageBanner);
