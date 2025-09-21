import { ScrollView } from "react-native";
import Product from "./index";
import { fetchLatestProducts } from "./fetchProducts";
import useLanguage from "../../hooks/useLanguage";

import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import latestProducts from "../../data/latestProducts";

const LatestProductList = () => {
  const { language } = useLanguage();
  const [loading, setLoading] = useState(true);
  const [latestProductsData, setLatestProductsData] = useState(latestProducts);

  useEffect(() => {
    fetchLatestProducts().then((data) => {
      setLatestProductsData(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <View
        style={{ height: 180, justifyContent: "center", alignItems: "center" }}
      >
        <ActivityIndicator size="large" color="#F57C00" />
      </View>
    );
  }

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ marginVertical: 16 }}
    >
      {latestProductsData.map((product) => (
        <Product
          key={product.externalID}
          product={product}
          language={language}
        />
      ))}
    </ScrollView>
  );
};

export default LatestProductList;
