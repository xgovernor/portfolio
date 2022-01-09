import Container from "./Container";

export default function PageHeader({data}) {
    return (
        <>
            <section className="p_page_header">
                <Container dataClass="p_content">
                    <h4 className="p_heading">{data.heading}</h4>
                    <h1 className="p_subheading">{data.subheading}</h1>
                </Container>
            </section>
        </>
    )
}