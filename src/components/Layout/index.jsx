"use client"

import Navigation from "../Navigation";
import Footer from "../Footer";

function Layout({ children, ...rest }) {
  return (
    <>
    <Navigation />
      <main {...rest}>
        {children}
      </main>
    <Footer />
    </>
  );
};

export default Layout;
