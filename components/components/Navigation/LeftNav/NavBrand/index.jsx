import Link from "next/link";
import { memo } from "react";

function NavBrand() {
  return (
    <>
      <span className="p_brand">
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

      <style jsx>{`
        .p_brand {
          font-weight: bold;
          color: #000000;
          text-decoration: none;
        }
        @media screen and (min-width: 768px) and (max-width: 1023px) {
          .p_brand {
            font-size: 16px;
            line-height: 24px;
          }
        }
        @media screen and (min-width: 1024px) and (max-width: 1365px) {
          .p_brand {
            font-size: 18px;
            line-height: 25px;
          }
        }
        @media screen and (min-width: 1366px) {
          .p_brand {
            font-size: 20px;
            line-height: 25px;
          }
        }
      `}</style>
    </>
  );
}

export default memo(NavBrand);
