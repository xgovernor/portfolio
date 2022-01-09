// Core Components
import Image from "next/image";
import Link from 'next/link'
// Custom Components
import Container from "./Container";


export default function Footer() {
    return (
        <>
            <footer  data-scroll-section>
                <Container dataClass="p_content">
                    <div className="p__left">
                        <div className="p_img_wrapper">
                            <Image src={`/images/branding/logo.svg`} width={34.59} height={35} layout="responsive" alt="Logo" />
                        </div>
                        
                        <h4 className="p_slug">LET’S MAKE <br/>SOMETHING GREAT</h4>
                    </div>
                    <div className="p__right">
                        <ul className="p_menu p__im">
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
                                <Link href={`/blog`}>
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
                    </div>
                </Container>

                <Container dataClass="p_copyright">
                    <p>© 2021 - All right reserved by author.</p>
                </Container>
            </footer>
        </>
    )
}