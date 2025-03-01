import localFont from "next/font/local";
import "../styles/global.css";
// import { GoogleTagManager } from "@next/third-parties/google";

const nHGDP = localFont({
  src: [
    {
      path: "./../assets/fonts/NHaasGroteskDSPro/NHaasGroteskDSPro-75Bd.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./../assets/fonts/NHaasGroteskDSPro/NHaasGroteskDSPro-95Blk.otf",
      weight: "900",
      style: "normal",
    },
  ],
  display: 'swap',
  variable: "--font-sans"// "--nh-grotesk-dsp",
});

const nHG = localFont({
  src: [
    // {
    //   path: "./../assets/fonts/NeueMontreal/NeueMontreal-Light.otf",
    //   weight: "300",
    //   style: "normal",
    // },
    // {
    //   path: "./../assets/fonts/NeueMontreal/NeueMontreal-LightItalic.otf",
    //   weight: "300",
    //   style: "italic",
    // },
    {
      path: "./../assets/fonts/NeueMontreal/NeueMontreal-Regular.otf",
      weight: "400",
      style: "normal",
    },
    // {
    //   path: "./../assets/fonts/NeueMontreal/NeueMontreal-Italic.otf",
    //   weight: "400",
    //   style: "italic",
    // },
    {
      path: "./../assets/fonts/NeueMontreal/NeueMontreal-Medium.otf",
      weight: "500",
      style: "normal",
    },
    // {
    //   path: "./../assets/fonts/NeueMontreal/NeueMontreal-MediumItalic.otf",
    //   weight: "500",
    //   style: "italic",
    // },
    // {
    //   path: "./../assets/fonts/NeueMontreal/NeueMontreal-Bold.otf",
    //   weight: "700",
    //   style: "normal",
    // },
    // {
    //   path: "./../assets/fonts/NeueMontreal/NeueMontreal-BoldItalic.otf",
    //   weight: "700",
    //   style: "italic",
    // }
  ],
  display: 'swap',
  variable: "--font-serif" // "--font-nh-grotesk-txp",
});

const cascadiaCode = localFont({
  src: [
    {
      path: "./../assets/fonts/CascadiaCode/CascadiaCodeItalic.woff2",
      weight: "400",
      style: "italic",
    }
  ],
  display: 'swap',
  variable: "--font-mono", // "--font-cascadia-code",
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <NextNProgress
        color=" radial-gradient(400.96% 3527.54% at 0% 100%, #576C6F 0%, #000000 10.24%, #FE0000 18.58%, #B06D61 25.6%, #000000 37.11%, #8FE3F2 67.87%, #FD0000 69.79%, #190B00 93.75%, #FF6A00 100%, #FE0000 100%)"
        height={3}
        options={{ easing: "ease", speed: 500 }}
      /> */}

        <div className={`${cascadiaCode.variable} ${nHGDP.variable} ${nHG.variable}`}>
        <Component
          {...pageProps}
          />
      </div>

      {/* <GoogleTagManager gtmId="GTM-N3QF76C" /> */}
    </>
  );
}

export default MyApp;
