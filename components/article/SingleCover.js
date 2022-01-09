// Core Components
import Image from "next/image";
// Custom Components
import Container from "../Container";


export default function SingleCover({ data }) {
    return (
        <>
            <section className="p_single_cover"  data-scroll-section>
                <Container data-scroll>
                    <Image src={data?.url} width={data?.width} height={data?.height} alt={data?.alt} layout="responsive" />
                </Container>
            </section>
        </>
    )
}