import { ScrollView } from "react-native";
import Product from "./index";
import { fetchProducts } from "./fetchProducts";
import useLanguage from "../../hooks/useLanguage";

import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

const ProductList = () => {
  const { language } = useLanguage();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <View style={{ height: 180, justifyContent: "center", alignItems: "center" }}>
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
      {products.map((product) => (
        <Product key={product.externalID} product={product} language={language} />
      ))}
    </ScrollView>
  );
};

export default ProductList;
