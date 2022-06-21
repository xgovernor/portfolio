// Core Components
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

export default function PageBanner({ dataImg }) {
	// console.log(dataImg)
	return (
		<>
			<section className="p_page_banner">
				<Parallax speed={-20}>
					<Image
						src={dataImg.url}
						width={dataImg.width}
						height={dataImg.height}
						alt={dataImg.alt}
						priority={true}
						layout="responsive"
					/>
				</Parallax>
			</section>
		</>
	);
}
