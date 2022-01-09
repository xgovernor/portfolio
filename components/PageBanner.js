// Core Components
import Image from 'next/image'


export default function PageBanner({dataImg}) {
    // console.log(dataImg)
    return (
        <>
            <section className="p_page_banner">
	            <Image src={dataImg.url} width={dataImg.width} height={dataImg.height} alt={dataImg.alt} layout="responsive" />
            </section>
        </>
    )
}