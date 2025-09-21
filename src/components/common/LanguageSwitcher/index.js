import React from "react";
import useLanguage from "../../../hooks/useLanguage";
import { useDispatch } from "react-redux";
import { setLanguage } from "../../../redux/actions/preferencesActions";
import { TouchableOpacity } from "react-native";
import Icon from "../Icon";
import Text from "../Text";
import colors from "../../../config/colors";
import styles from "./styles";

const LanguageSwitcher = () => {
  const { language, flexDirection, t, languageOptions } = useLanguage();
  const dispatch = useDispatch();

  const currentLanguage =
    languageOptions.find((lang) => lang.value === language) ||
    languageOptions[0];

  const handleLanguageChange = (selectedLang) => {
    dispatch(
      setLanguage({
        language: selectedLang.value,
        dir: selectedLang.dir,
      })
    );
  };
  return (
    <TouchableOpacity
      onPress={() => {
        const currentIndex = languageOptions.findIndex(
          (opt) => opt.value === currentLanguage.value
        );
        const nextIndex = (currentIndex + 1) % languageOptions.length;
        handleLanguageChange(languageOptions[nextIndex]);
      }}
      style={[styles.globe, { flexDirection }]}
    >
      <Icon
        lib="FE"
        name="globe"
        size={20}
        color={colors.black.normal.default}
      />
      <Text color={colors.black.normal.default} weight="bold">
        {currentLanguage.label}
      </Text>
    </TouchableOpacity>
  );
};

export default LanguageSwitcher;
