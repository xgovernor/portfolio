import Link from 'next/link';
import Container from '../../shared/Container/Container';

const HomeHero = ({title, cvURL}) => {
    return (
        <>
            <section className='p_home_hero'>
                <Container>
                    <h1 className='p_title_hero'>
                        {title.map((line, index) => (
                            <span key={index}>
                                <span>{line}</span>
                                {(index !== (title.length - 1)) && (<br/>)}
                            </span>
                        ))}
                    </h1>

                    <p className='p_download_cv'>
                        <Link href={cvURL}>
                            <a className='p__btn' target="_blank">
                                DOWNLOAD CV
                            </a>
                        </Link>
                    </p>
                </Container>
            </section>
        </>
    );
}

export default HomeHero;
