// Custom Components
import Container from "./Container";
import BlgoGridCard from "./BlogGridCard";


export default function NavigationalArticles() {
    return (
        <>
            <section className="p_navaigation_articles"  data-scroll-section>
                <Container dataClass="p_header">
                    <h2 data-scroll>Navigational Articles</h2>
                </Container>

                <Container dataClass="p_content">
                    <BlgoGridCard />
                    <BlgoGridCard />
                </Container>
            </section>
        </>
    )
}