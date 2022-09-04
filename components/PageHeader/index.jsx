import PropTypes from "prop-types";
import Container from "../../views/shared/Container/Container";

export default function PageHeader({ data }) {
	return (
		<>
			<section className="p_c__pageHeader">
				<Container className="p_pageHeader__content">
					<div className="p_pageHeader__heading">
						<h4 className="p_pageHeader__title">{data.heading}</h4>
					</div>

					<div className="p_pageHeader__subHeading">
						<h1 className="p_pageHeader__subTitle">
							{data.subheading &&
								data.subheading?.map((line, i) => (
									<span className="p_pageHeader__subTitle__line" key={i}>
										{line}
									</span>
								))}
						</h1>
					</div>
				</Container>
			</section>
		</>
	);
}

PageHeader.propTypes = {
	data: PropTypes.object.isRequired,
};
