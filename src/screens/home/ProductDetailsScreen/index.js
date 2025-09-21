import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Linking,
  Dimensions,
  ActivityIndicator,
  Image,
} from "react-native";
import Text from "../../../components/common/Text";
import { useRoute } from "@react-navigation/native";
import useLanguage from "../../../hooks/useLanguage";
import colors from "../../../config/colors";
import styles from "./styles";
import Button from "../../../components/common/Button";
import { useProducts } from "../../../hooks/useProducts";
const screenWidth = Dimensions.get("window").width;

const ProductDetailsScreen = () => {
  const route = useRoute();

  const { externalID } = route.params;
  const { product, isLoading, error } = useProducts(externalID);

  const { t, getLocalized, flexDirection } = useLanguage();
  const [carouselIndex, setCarouselIndex] = useState(0);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={colors.orange.dark.default} />
      </View>
    );
  }

  if (!product) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>{t("common", "productNotFound")}</Text>
      </View>
    );
  }

  const images =
    product.photos?.map(
      (photo) => `https://images.olx.com.lb/thumbnails/${photo.id}-800x600.webp`
    ) || [];

  const price = product.extraFields?.price ?? product.price;
  const title = getLocalized(product, "title");
  const saleRent =
    product.purpose === "for-sale"
      ? t("home", "forSale")
      : product.purpose === "for-rent"
      ? t("home", "forRent")
      : "";
  const date = product.createdAt
  ? new Date(product.createdAt * 1000).toLocaleDateString()
  : "";
  const description =
  getLocalized(product, "description") ||
  getLocalized(product, "rawDescription") ||
  "";
  const listedBy = product.contactInfo?.name || product.agency?.name || "";
  const lat = product.geography?.lat || product.geo_point?.[1];
  const lng = product.geography?.lng || product.geo_point?.[0];
  const mapUrl =
    lat && lng
      ? `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
      : null;

  const details =
    product.formattedExtraFields?.map((f) => ({
      label: getLocalized(f, "name"),
      value: getLocalized(f, "formattedValue"),
    })) || [];

  return (
    <ScrollView style={styles.scrollview}>
      {images.length > 0 && (
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={{ width: screenWidth, height: screenWidth * 0.6 }}
          onMomentumScrollEnd={(e) => {
            const index = Math.round(
              e.nativeEvent.contentOffset.x / screenWidth
            );
            setCarouselIndex(index);
          }}
        >
          {images.map((img, idx) => (
            <Image
              key={idx}
              source={{ uri: img }}
              style={styles.carouselImage}
            />
          ))}
        </ScrollView>
      )}
      {images.length > 1 && (
        <View style={styles.rowDot}>
          {images.map((_, idx) => (
            <View
              key={idx}
              style={[
                styles.dot,
                {
                  backgroundColor:
                    carouselIndex === idx
                      ? colors.orange.dark.default
                      : colors.grey.light.default,
                },
              ]}
            />
          ))}
        </View>
      )}

      <View style={styles.box}>
        <Text
          color={colors.black.normal.default}
          fontSize={22}
          weight="bold"
          style={{ marginBottom: 8 }}
        >
          {title}
        </Text>
        <Text
          color={colors.orange.dark.default}
          fontSize={18}
          weight="bold"
          style={{ marginBottom: 4 }}
        >
          {t("home", "price")}: {price ? `$${price}` : ""} {saleRent}
        </Text>
        {date && (
          <Text
            color={colors.grey.normal.active}
            fontSize={13}
            style={{ marginBottom: 8 }}
          >
            {t("home", "postedOn")}: {date}
          </Text>
        )}
        {details.length > 0 && (
          <View
            style={[
              styles.wrap,
              {
                flexDirection,
              },
            ]}
          >
            {details.map(
              (d, i) =>
                d.value && (
                  <View key={i} style={styles.detailView}>
                    <Text
                      color={colors.black.normal.default}
                      fontSize={14}
                      weight="bold"
                    >
                      {d.label}
                    </Text>
                    <Text color={colors.grey.dark.default} fontSize={13}>
                      {typeof d.value === "string"
                        ? getLocalized({ value: d.value }, "value")
                        : d.value}
                    </Text>
                  </View>
                )
            )}
          </View>
        )}
        {description && (
          <Text
            color={colors.grey.dark.default}
            fontSize={15}
            style={{ marginTop: 8 }}
          >
            {description}
          </Text>
        )}
        {listedBy && (
          <Text
            color={colors.grey.dark.default}
            fontSize={13}
            style={{ marginTop: 8 }}
          >
            {t("home", "listedBy")}: {listedBy}
          </Text>
        )}
      </View>
      {mapUrl && (
        <View style={{ marginHorizontal: 20 }}>
          <Button
            style={styles.btn}
            textStyle={styles.btnText}
            onPress={() => Linking.openURL(mapUrl)}
          >
            <Text
              color={colors.orange.dark.default}
              fontSize={16}
              weight="bold"
            >
              {t("home", "openInGoogleMaps")}
            </Text>
          </Button>
        </View>
      )}
    </ScrollView>
  );
};

export default ProductDetailsScreen;
