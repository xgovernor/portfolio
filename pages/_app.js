/** @format */

import { AnimatePresence } from "framer-motion";
import "../styles/index.sass";

function MyApp({ Component, pageProps }) {
	return (
		<AnimatePresence exitBeforeEnter>
			{/* <SmoothScrollProvider options={{ smooth: true, lerp: 0.1 }}> */}
			{/* <div data-scroll-container > */}
			<Component {...pageProps} />
			{/*</div> */}
			{/* </SmoothScrollProvider> */}
		</AnimatePresence>
	);
}

export default MyApp;
