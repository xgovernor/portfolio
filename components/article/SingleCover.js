// Core Components
import Image from "next/image";
// Custom Components
import Container from "../../views/shared/Container/Container";


export default function SingleCover({ data }) {
    return (
        <>
            <section className="p_single_cover">
                <Container>
                    <Image src={data?.url} width={data?.width} height={data?.height} alt={data?.alt} layout="responsive" />
                </Container>
            </section>
        </>
    )
}