import Image from 'next/image';
import Link from 'next/link';
import Container from '../../shared/Container/Container';

const HomeAbout = ({}) => {
    return (
        <>
            <section className='p_home_about'>
                <Container>

                    {/* Image */}
                    <div className='p_about_image'>
                        <Image className='p_image' src={`/images/home-about.jpg`} alt='about' width={1088} height={437} />
                    </div>
                    
                    <div className='p_about_description'>
                        <div className='p_home__left'>
                            <h4 className="p_subheading">ABOUT ME</h4>
                            <h1 className='p_heading'>Believe in <br/>being different</h1>
                        </div>

                        <div className='p_home__right'>
                            <div className='p_content'>
                                <p className='p_body'>Anyone who knows me knows that I&apos;m a tech nerd who loves the internet. Or rather the possibilities that open up to us today. I used to play with WordPress. nowadays,  I primarily focused on MERN stack development. Isn&apos;t it fascinating to play with our favorite things? Oh! another thing, I love sharing, Sometimes, I arrange concise workshops/boot camps to share my knowledge with others.</p>
                                <Link href={`/about`}>
                                    <a className="p_link">
                                        KNOW MORE
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                        
                </Container>
            </section>
        </>
    );
}

export default HomeAbout;
