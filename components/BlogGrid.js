import Container from "../views/shared/Container/Container";
import BlgoGridCard from "./BlogGridCard";

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