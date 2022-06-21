/** @format */

import { AnimatePresence } from "framer-motion";
import Script from "next/script";
import "../styles/index.sass";
import Head from 'next/head';

const GOOGLE_GTAG_MEASUREMENT_ID = 'GTM-N3QF76C';

function MyApp({ Component, pageProps }) {
	return (
		<>
		<Head>
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
</Head>
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

			<AnimatePresence exitBeforeEnter>
				{/* <SmoothScrollProvider options={{ smooth: true, lerp: 0.1 }}> */}
				{/* <div data-scroll-container > */}
				<Component {...pageProps} />
				{/*</div> */}
				{/* </SmoothScrollProvider> */}
			</AnimatePresence>
		</>
	);
}

export default MyApp;
