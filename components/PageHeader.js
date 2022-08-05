import Container from "../views/shared/Container/Container";

export default function PageHeader({ data }) {
	return (
		<>
			<section className="p_page_header">
				<Container dataClass="p_content">
					<div className="p_header__title__area">
						<h4 className="p_heading">{data.heading}</h4>
					</div>

					<div className="p_header__subheading__area">
						<h1 className="p_subheading">
							{data.subheading &&
								data.subheading?.map((line, i) => (
									<>
										<span className="heading__line" key={i}>
											{line}
										</span>
									</>
								))}
						</h1>
					</div>
				</Container>
			</section>
		</>
	);
}
