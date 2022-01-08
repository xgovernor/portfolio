// Core Components
import Link from 'next/link'
// Custom Components
import Container from './Container'


export default function Navigation() {
    return (
        <>
            <header>
                <nav className="p_navigation_bar">
                    <Container>
                        <Link href={`/`}>
                            <a className="p_brand">
                                Abu Taher Muhammad
                            </a>
                        </Link>

                        <ul className="p_navigation_menu p__im">
                            <li>
                                <Link href={`/about`}>
                                    <a>
                                        ABOUT
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href={`/work`}>
                                    <a>
                                        WORKS
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href={`/articles`}>
                                    <a>
                                        BLOG
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href={`/contact`}>
                                    <a>
                                        CONTACT
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </Container>
                </nav>
            </header>
        </>
    )
}