import React from "react";
import { Text as RNText, useWindowDimensions } from "react-native";

import colors from "../../../config/colors.js";
import useLanguage from "../../../hooks/useLanguage.js";

const Text = ({
  weight = "regular",
  fontSize = 16,
  color = colors.white.normal.default,
  children,
  textAlign,
  style,
  onPress,
}) => {
  const { fontScale } = useWindowDimensions();
  const { isRTL } = useLanguage();
  const customTextAlign = isRTL ? "right" : "left";
  return (
    <RNText
      onPress={onPress}
      adjustsFontSizeToFit
      style={[
        {
          fontSize: fontSize / fontScale,
          color: color,
          textAlign: textAlign ? textAlign : customTextAlign,
          fontWeight: weight,
        },
        style,
      ]}
    >
      {children}
    </RNText>
  );
};

export default Text;
