import React, { useState } from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import Text from "../../components/common/Text";
import categories from "../../data/categories";
import colors from "../../config/colors";
import useLanguage from "../../hooks/useLanguage";
import { products } from "../../data/products";
import Product from "../../components/Product";
import { useSelector } from "react-redux";
import SearchInput from "../../components/common/SearchInput";
import CategoryChip from "../../components/CategoryChip";
import TextInput from "../../components/common/TextInput";
import styles from "./styles";
import { useRoute } from "@react-navigation/native";
import { useFocusEffect } from "expo-router";

const SearchScreen = () => {
  const [search, setSearch] = useState("");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");

  const route = useRoute();
  const categrory = route?.params?.categrory;
  const [selectedCategory, setSelectedCategory] = useState(
    categrory ? categrory : categories[0]?.externalID
  );
  useFocusEffect(
    React.useCallback(() => {
      setSelectedCategory(categrory ? categrory : categories[0]?.externalID);
      setSearch("");
      setPriceMin("");
      setPriceMax("");
    }, [categrory])
  );
  const { t, flexDirection } = useLanguage();
  const { location } = useSelector((state) => state.preferences);

  const searchText = search.trim().toLowerCase();

  const filteredProducts = products
    .map((p) => p._source)
    .filter((product) => {
      if (
        searchText &&
        ![product.title, product.title_l1].some((t) =>
          t?.toLowerCase().includes(searchText)
        )
      )
        return false;

      if (
        selectedCategory &&
        !product.category?.some((c) => c.externalID === selectedCategory)
      )
        return false;

      if (location && !product.location?.some((l) => l.name.includes(location)))
        return false;

      const price = product.extraFields?.price ?? 0;
      if (priceMin && price < +priceMin) return false;
      if (priceMax && price > +priceMax) return false;

      return true;
    });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.filter}>
        <SearchInput
          value={search}
          onChangeText={setSearch}
          placeholder={t("home", "search")}
        />
        <View style={[styles.price, { flexDirection }]}>
          <View style={{ flex: 1 }}>
            <TextInput
              placeholder={t("home", "minPrice")}
              keyboardType="numeric"
              value={priceMin}
              onChangeText={setPriceMin}
            />
          </View>
          <View style={{ flex: 1 }}>
            <TextInput
              placeholder={t("home", "maxPrice")}
              keyboardType="numeric"
              value={priceMax}
              onChangeText={setPriceMax}
            />
          </View>
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 20 }}
      >
        {categories.map((cat) => (
          <CategoryChip
            key={cat.externalID}
            category={cat}
            selectedCategory={selectedCategory}
            onPress={() => setSelectedCategory(cat.externalID)}
          />
        ))}
      </ScrollView>

      <View style={styles.productView}>
        {filteredProducts.length === 0 ? (
          <Text color={colors.white.normal.default} textAlign="center">
            {t("home", "noProductsFound")}
          </Text>
        ) : (
          filteredProducts.map((product) => (
            <Product
              fullWidth={true}
              key={product.externalID}
              product={product}
            />
          ))
        )}
      </View>
    </ScrollView>
  );
};

export default SearchScreen;
