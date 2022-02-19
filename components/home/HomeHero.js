import Link from 'next/link';
import Container from '../Container';

const HomeHero = () => {
    return (
        <>
            <section className='p_home_hero'>
                <Container>
                    <h1 className='p_title_hero'>Designer, developer <br/>and freethinker.</h1>

                    <p className='p_download_cv'>
                        <Link href={`https://drive.google.com/file/d/1osz9wNueb0Ac9gGXk1QQgRwlu5UnKN6B/view?usp=sharing`}>
                            <a className='p__btn' download>
                                DOWNLOAD CV
                            </a>
                        </Link>
                    </p>
                </Container>
            </section>
        </>
    )
}

export default HomeHero
