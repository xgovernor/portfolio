import Link from "next/link";
import { memo } from "react";

function NavBrand() {
  return (
    <>
      <span className="p_brand font-bold text-black md:text-base lg:text-lg xl:text-xl">
        <Link
          href={"/"}
          style={{
            color: "#000000",
            textDecoration: "none",
          }}
        >
          {" "}
          Abu Taher Muhammad
        </Link>
      </span>
    </>
  );
}

function LeftNav() {
  return (
    <>
      <div className="p_rightNav">
        <NavBrand />
      </div>

      <style jsx>{`
        .p_rightNav {
        }
      `}</style>
    </>
  );
}

export default memo(LeftNav);
