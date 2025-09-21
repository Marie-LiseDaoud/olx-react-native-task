import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import categories from "./categories";
import useLanguage from "../../hooks/useLanguage";
import { Image } from "expo-image";
import { styles } from "./styles";
import Text from "../common/Text";
import colors from "../../config/colors";

const CircleCategories = () => {
  const { language } = useLanguage();
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scroll}
    >
      {categories.map((cat) => (
        <View key={cat.key} style={styles.circleContainer}>
          <View style={styles.circle}>
            <Image source={cat.image} style={styles.image} />
          </View>
          <Text
            weight="bold"
            color={colors.white.normal.default}
            textAlign={"center"}
            fontSize={12}
          >
            {language === "ar" ? cat.titleAr : cat.titleEn}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default CircleCategories;
