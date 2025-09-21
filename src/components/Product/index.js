import React from "react";
import { View, Image, TouchableOpacity, Dimensions } from "react-native";
import Text from "../common/Text";
import useLanguage from "../../hooks/useLanguage";
import styles from "./styles";
import colors from "../../config/colors";
const { width: screenWidth } = Dimensions.get("window");

const Product = ({ product, fullWidth = false }) => {
  const { router } = require("expo-router");
  const handlePress = () => {
    router.push({
      pathname: "/home/product/product-details",
      params: { externalID: product.externalID },
    });
  };
  const { getLocalized } = useLanguage();
  const location = product.location
    ? product.location.map((loc) => getLocalized(loc, "name")).join(", ")
    : "";
  const categories = product.category
    ? product.category.map((cat) => getLocalized(cat, "name")).join(" / ")
    : "";
  const date = product.createdAt
    ? new Date(product.createdAt * 1000).toLocaleDateString()
    : "";
  const price = product.extraFields?.price ?? product.price;

  // Static labels using localization
  const { t } = useLanguage();

  const firstPhotoId =
    product.photos && product.photos.length > 0 ? product.photos[0].id : null;

  const photoUrl = `https://images.olx.com.lb/thumbnails/${firstPhotoId}-800x600.webp`;

  return (
    <TouchableOpacity
      style={[
        styles.card,
        {
          width: fullWidth ? screenWidth - 40 : screenWidth / 1.5,
          marginLeft: fullWidth ? 0 : 20,
        },
      ]}
      onPress={handlePress}
    >
      <Image source={{ uri: photoUrl }} style={styles.image} />
      <View style={styles.info}>
        <Text
          color={colors.black.normal.default}
          weight="bold"
          numberOfLines={2}
        >
          {product.title}
        </Text>
        <Text color={colors.orange.dark.default} weight="bold" fontSize={14}>
          {t("home", "price")}: ${price}
        </Text>
        {location ? (
          <Text color={colors.grey.dark.default} fontSize={13}>
            {t("home", "location")}: {location}
          </Text>
        ) : null}
        {categories ? (
          <Text color={colors.grey.dark.hover} fontSize={13}>
            {t("home", "category")}: {categories}
          </Text>
        ) : null}
        {date ? (
          <Text color={colors.grey.normal.active} fontSize={13}>
            {t("home", "postedOn")}: {date}
          </Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default Product;
