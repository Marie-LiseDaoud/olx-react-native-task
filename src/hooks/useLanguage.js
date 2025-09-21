import { useSelector } from "react-redux";
import { translate } from "../utils/localization";

const useLanguage = () => {
  const dir = useSelector((state) => state.preferences.dir);
  const language = useSelector((state) => state.preferences.language);

  const isRTL = dir === "rtl";

  const flexDirection = isRTL ? "row-reverse" : "row";

  const languageOptions = [
    {
      label: "EN",
      value: "en",
      dir: "ltr",
      fullLabel: "English",
    },
    {
      label: "AR",
      value: "ar",
      dir: "rtl",
      fullLabel: "العربية",
    },
  ];

  const t = (screen, path) => {
    try {
      return translate(language, screen, path);
    } catch (error) {
      console.log(error);
      return "";
    }
  };

  const getLocalized = (obj, key) => {
    if (!obj) return "";
    return language === "ar" ? obj[key + "_l1"] ?? obj[key] : obj[key];
  };

  return {
    dir,
    isRTL,
    language,
    flexDirection,
    t,
    languageOptions,
    getLocalized,
  };
};

export default useLanguage;
