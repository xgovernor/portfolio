// Core Components
import Head from 'next/head'
// Custom Component
import Navigation from './Navigation'
import Footer from './Footer'
import MousePointer from './MousePointer'
// import AnimatedCursor from 'react-animated-cursor'


export default function Layout({data, children}) {
    return (
        <>
            <Head>
                <title>{data?.title}</title>
            </Head>

            {/* <MousePointer /> */}
            {/* <AnimatedCursor
                innerSize={10}
                outerSize={40}
                color='0, 12, 26'
                outerAlpha={0.2}
                innerScale={0.7}
                outerScale={1.5}
            /> */}
            {/* Main Navigation */}
            <Navigation />

            {/* Page Body */}
            <main className={data?.class? `${data.class}`:``}>
                {children}
            </main>

            {/* Footer */}
            <Footer />
        </>
    )
}