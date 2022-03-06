import React from 'react';
import BlgoGridCard from '../../../components/BlogGridCard';
import Container from '../../shared/Container/Container';


const HomeArticles = () => {
    return (
        <>
            <section className='p_home_blog'>
                <div className='p_blog_header'>
                    <Container>
                        <h4 className="p_subtitle_1">LATEST INSIGHTS</h4>
                        <h2 className="p_heading">Occasional thoughts and insights from Muhammad&apos;s everyday life.</h2>
                    </Container>
                </div>

                <div className='p_blog_body'>
                    <Container>
                        <BlgoGridCard />
                        <BlgoGridCard />
                    </Container>
                </div>
            </section>
        </>
    );
}

export default HomeArticles;
