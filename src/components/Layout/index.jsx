"use client"

import Navigation from "../Navigation";
import Footer from "../Footer";
import Meta from "../Meta";

function Layout({ children, meta, ...rest }) {
  return (
    <>
      <Meta {...meta} />
      <Navigation />
      <main {...rest}>
        {children}
      </main>
    <Footer />
    </>
  );
};

export default Layout;
