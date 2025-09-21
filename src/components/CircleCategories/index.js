import React from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import categories from "../../data/categories";
import useLanguage from "../../hooks/useLanguage";
import { Image } from "expo-image";
import { styles } from "./styles";
import Text from "../common/Text";
import colors from "../../config/colors";
import { useRouter } from "expo-router";

const CircleCategories = () => {
  const { language, getLocalized } = useLanguage();
  const router = useRouter();
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scroll}
    >
      {categories.map((cat) => (
        <TouchableOpacity
          key={cat.externalID}
          style={styles.circleContainer}
          onPress={() => {
            router.push({
              pathname: "/search",
              params: { categrory: cat.externalID },
            });
          }}
        >
          <View style={styles.circle}>
            <Image source={cat.image} style={styles.image} />
          </View>
          <Text
            weight="bold"
            color={colors.white.normal.default}
            textAlign={"center"}
            fontSize={12}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {(() => {
              const label = getLocalized(cat, "name");
              const maxLen = 10;
              return label.length > maxLen ? label.slice(0, maxLen - 1) + "..." : label;
            })()}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default CircleCategories;
