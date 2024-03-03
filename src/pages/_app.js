import { AnimatePresence } from "framer-motion";
import Script from "next/script";
import NextNProgress from "nextjs-progressbar";
import "./../styles/index.css";
import "../styles/theme.css";
import "../styles/global.css";

const GOOGLE_GTAG_MEASUREMENT_ID = "GTM-N3QF76C";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Google Tag Manager */}
      <Script
        id="GTag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
						new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
						j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
						'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
						})(window,document,'script','dataLayer','${GOOGLE_GTAG_MEASUREMENT_ID}');`,
        }}
      />
      {/* End Google Tag Manager */}

      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GOOGLE_GTAG_MEASUREMENT_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      {/* End Google Tag Manager (noscript) */}

      <NextNProgress
        color=" radial-gradient(400.96% 3527.54% at 0% 100%, #576C6F 0%, #000000 10.24%, #FE0000 18.58%, #B06D61 25.6%, #000000 37.11%, #8FE3F2 67.87%, #FD0000 69.79%, #190B00 93.75%, #FF6A00 100%, #FE0000 100%)"
        height={3}
        options={{ easing: "ease", speed: 500 }}
      />
      <AnimatePresence mode="wait">
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
