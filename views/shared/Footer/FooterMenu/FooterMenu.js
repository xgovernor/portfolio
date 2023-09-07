import Link from "next/link";

const FooterMenu = ({ links }) => {
  return (
    <>
      {links &&
        links.map(
          (
            link // Looping through footer menu list object.
          ) => (
            <li key={link._id}>
              <Link href={link.url}>{link.title}</Link>
            </li>
          )
        )}
    </>
  );
};

export default FooterMenu;
