import Link from "next/link";
import { memo } from "react";
import { navigationRoutes } from "./../../../../../assets/data/routes";

function NavMenu() {
  return (
    <>
      <ul>
        {navigationRoutes &&
          navigationRoutes.map((link) => (
            <li key={link._id}>
              <span>
                <Link
                  href={link.url}
                  style={{
                    color: "inherit",
                    font: "inherit",
                    textDecoration: "inherit",
                  }}
                >
                  {link.title}
                </Link>
              </span>
            </li>
          ))}
      </ul>

      <style jsx>{`
        ul {
          list-style: none;
        }
        li {
          display: inline-block;
          opacity: 0.7;
          text-decoration: none;
          color: #000000;
        }

        li:last-of-type {
          margin-right: 0;
        }
        li:hover {
          opacity: 1;
        }

        @media screen and (max-width: 767px) {
          ul {
            display: none;
          }
        }

        @media screen and (min-width: 768px) and (max-width: 1023px) {
          li {
            margin-right: 25px;
            font-size: 14px;
            line-height: 18px;
          }
        }

        @media screen and (min-width: 1024px) and (max-width: 1365px) {
          li {
            margin-right: 35px;
            font-size: 14px;
            line-height: 16px;
          }
        }

        @media screen and (min-width: 1366px) {
          li {
            margin-right: 35px;
            font-size: 14px;
            line-height: 16px;
            text-decoration: none;
            font-weight: 500;
          }
        }
      `}</style>
    </>
  );
}

export default memo(NavMenu);
