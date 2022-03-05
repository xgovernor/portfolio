// Core Components
import Head from 'next/head';
// Custom Component
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';


export default function Layout({data, children}) {
    return (
        <>
            <Head>
                <title>{data?.title}</title>
            </Head>

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