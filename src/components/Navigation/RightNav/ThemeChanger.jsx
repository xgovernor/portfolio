import { useTheme } from "next-themes";
import { memo } from "react";
import { IconContext } from "react-icons";
import { FiSun } from "react-icons/fi";
import { MdOutlineDarkMode } from "react-icons/md";

function ThemeChanger() {
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
          display: flex;
          justify-content: center;
          align-items: center;
           {
            /* background: #f6f6f6; */
          }
          border: 1px solid hsla(0deg, 0%, 0%, 0.12);
          border-radius: 8px;
        }
        .tt__icon {
          height: 20px;
          width: 20px;
          font-size: 18px;
        }

        svg {
        }

        [data-theme="light"] .p_themeToggler,
        [data-theme="light"] .tt__button {
          color: rgb(234, 234, 234);
          background: #000c19;
        }

        [data-theme="dark"] .p_themeToggler,
        [data-theme="dark"] .tt__button {
          color: rgb(234, 234, 234);
          background: #000c19;
        }
      `}</style>
    </>
  );
};

export default memo(ThemeChanger);
