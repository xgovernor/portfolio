import PropTypes from "prop-types";

export default function Container({ className, children, ...rest }) {
	return (
		<>
			<div
				className={className ? `p_c__container ${className}` : `p_c__container`}
				{...rest}>
				{children}
			</div>
		</>
	);
}

Container.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
	rest: PropTypes.object,
};
