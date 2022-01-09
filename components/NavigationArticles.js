// Custom Components
import Container from "./Container";
import BlgoGridCard from "./BlogGridCard";


export default function NavigationalArticles() {
    return (
        <>
            <section className="p_navaigation_articles">
                <Container dataClass="p_header">
                    <h2>Navigational Articles</h2>
                </Container>

                <Container dataClass="p_content">
                    <BlgoGridCard />
                    <BlgoGridCard />
                </Container>
            </section>
        </>
    )
}