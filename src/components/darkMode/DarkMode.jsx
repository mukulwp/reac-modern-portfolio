import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import useDarkSide from "../../hooks/useDarkSide";

const DarkMode = () => {
  const [colorTheme, setTheme] = useDarkSide();

  const switchTheme = () => {
    setTheme(colorTheme);
  };

  return (
    <div className="flex items-center gap-4">
      <span
        className="text-2xl text-gray-300 cursor-pointer dark:text-bodyColor"
        onClick={switchTheme}
      >
        {colorTheme === "light" ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
      </span>
    </div>
  );
};

export default DarkMode;
