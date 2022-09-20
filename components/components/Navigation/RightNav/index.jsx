import React from "react";
import NavMenu from "./NavMenu";
import ThemeChanger from "./ThemeChanger";

const RightNav = () => {
	return (
		<>
			<div className="p_navMenu">
				<NavMenu />
				<ThemeChanger />
			</div>

			<style jsx>{`
				.p_navMenu {
					display: flex;
					align-items: center;
					gap: 30px;
				}
			`}</style>
		</>
	);
};

export default RightNav;
