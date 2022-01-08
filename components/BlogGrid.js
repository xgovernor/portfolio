import BlgoGridCard from "./BlogGridCard";
import Container from "./Container";

export default function BlogGrid() {
    return (
        <>
            <section className="p_blog_grid">
                <Container dataClass="p_content">
                    <BlgoGridCard />
                    <BlgoGridCard />
                    <BlgoGridCard />
                    <BlgoGridCard />
                    <BlgoGridCard />
                    <BlgoGridCard />
                    <BlgoGridCard />
                    <BlgoGridCard />
                    <BlgoGridCard />
                    <BlgoGridCard />
                </Container>
            </section>
        </>
    )
}