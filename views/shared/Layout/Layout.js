// Core Components

// Custom Component
import Footer from '../Footer/Footer';
import Meta from '../Meta/Meta';
import Navigation from '../Navigation/Navigation';


export default function Layout({data, children}) {
    return (
        <>
            <Meta />

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