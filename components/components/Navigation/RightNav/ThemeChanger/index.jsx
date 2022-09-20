import { useTheme } from "next-themes";
import { memo } from "react";
import { IconContext } from "react-icons";
import { FiSun } from "react-icons/fi";
import { MdOutlineDarkMode } from "react-icons/md";

const ThemeChanger = () => {
	const { theme, setTheme } = useTheme();

	const handleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<>
			<div className="p_themeToggler">
				<button className="tt__button" onClick={handleTheme}>
					<IconContext.Provider value={{ className: "tt__icon" }}>
						{theme === "light" ? <MdOutlineDarkMode /> : <FiSun />}
					</IconContext.Provider>
				</button>
			</div>

			<style jsx>{`
				.p_themeToggler {
					width: 36px;
					height: 36px;
				}

				.tt__button {
					width: 36px;
					height: 36px;
					color: #000c19;
					display: flex;
					justify-content: center;
					align-items: center;
					background: rgb(234, 234, 234);
					border-radius: 8px;
				}
				.tt__icon {
					height: 20px;
					width: 20px;
					font-size: 18px;
				}

				svg {
				}

				[data-theme="light"] .p_themeToggler {
					color: rgb(234, 234, 234);
					background: #000c19;
				}
				[data-theme="dark"] .p_themeToggler {
					color: #000c19;
					background: rgb(234, 234, 234);
				}
			`}</style>
		</>
	);
};

export default memo(ThemeChanger);
