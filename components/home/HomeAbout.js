import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Container from '../Container'

const HomeAbout = () => {
    return (
        <>
            <section className='p_home_about'>
                <Container>
                    <div className='p_about_image'>
                        <Image className='p_image' src={`/images/home-about.jpg`} alt='about' width={1088} height={437} />
                    </div>
                    
                    <div className='p_about_description'>
                        <div className='p_home__left'>
                            <h4 className="p_subheading">About me</h4>
                            <h1 className='p_heading_2'>Section 1.10.32 of &quot;de Finibus Bonorum et Malorum&quot;, written by Cicero in 45 BC</h1>
                        </div>

                        <div className='p_home__right'>
                            <div className='p_content'>
                                <p className='p_body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <Link href={`/`}>
                                    <a className="p_link">
                                        MORE ABOUT ME
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                        
                </Container>
            </section>
        </>
    )
}

export default HomeAbout
