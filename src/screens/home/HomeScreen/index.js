import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import ScrollView from "../../../components/common/ScrollView";
import Text from "../../../components/common/Text";
import ImageCarousel from "../../../components/ImagesCarousel";
import CircleCategories from "../../../components/CircleCategories";
import ProductList from "../../../components/Product/ProductList";
import useLanguage from "../../../hooks/useLanguage";
import LatestProductList from "../../../components/Product/LatestProductList";

export default function HomeScreen() {
  const { t } = useLanguage();
  return (
    <ScrollView>
      <ImageCarousel />

      <CircleCategories />

      <View style={{ paddingHorizontal: 20 }}>
        <Text fontSize={20} weight="bold">
          {t("home", "featuredProducts")}
        </Text>
      </View>
      <ProductList />
      <View style={{ paddingHorizontal: 20 }}>
        <Text fontSize={20} weight="bold">
          {t("home", "latestProducts")}
        </Text>
      </View>
      <LatestProductList />
    </ScrollView>
  );
}
