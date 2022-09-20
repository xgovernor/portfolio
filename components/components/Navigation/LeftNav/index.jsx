import React, { memo } from "react";
import NavBrand from "./NavBrand";

const LeftNav = () => {
	return (
		<>
			<div className="p_rightNav">
				<NavBrand />
			</div>

			<style jsx>{`
				.p_rightNav {
				}
			`}</style>
		</>
	);
};

export default memo(LeftNav);
