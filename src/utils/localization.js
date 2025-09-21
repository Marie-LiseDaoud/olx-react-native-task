import localization from "../localization/index";

export const translate = (language, screen, path) => {
  const getValue = (obj, path) =>
    path?.split(".").reduce((acc, part) => acc && acc[part], obj);
  return (
    getValue(localization[screen][language], path) ||
    getValue(localization[screen]["en"], path) ||
    ""
  );
};
