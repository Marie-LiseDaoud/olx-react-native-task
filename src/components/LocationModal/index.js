import React, { useState } from "react";
import { Modal, View, FlatList, TouchableOpacity } from "react-native";
import colors from "../../config/colors";
import { locations } from "../../data/locations";
import useLanguage from "../../hooks/useLanguage";
import styles from "./styles";
import Text from "../common/Text";
import SearchInput from "../common/SearchInput";

const LocationModal = ({ visible, onClose, onSelect }) => {
  const [search, setSearch] = useState("");
  const { getLocalized, t, flexDirection, isRTL } = useLanguage();
  const lebanon = {
    id: 10452,
    name: "Lebanon",
    name_l1: "لبنان",
  };
  const allLocations = [
    lebanon,
    ...locations.responses[0].hits.hits.map((loc) => loc._source),
  ];
  const filteredLocations = allLocations.filter((loc) => {
    const label = getLocalized(loc, "name");
    return label && label.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <View style={styles.overlay}>
        <View style={[styles.header, { flexDirection }]}>
          <Text style={styles.title}>{t("home", "chooseLocation")}</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
            <Text style={{ fontSize: 18, color: colors.orange.dark.default }}>
              {t("home", "close")}
            </Text>
          </TouchableOpacity>
        </View>
        <SearchInput
          title={t("home", "searchLocation")}
          value={search}
          onChangeText={setSearch}
          color={colors.black.normal.default}
          placeholder={t("home", "searchLocationPlaceholder")}
        />
        <FlatList
          data={filteredLocations}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            const label = getLocalized(item, "name");
            return (
              <TouchableOpacity
                style={styles.locationItem}
                onPress={() => {
                  onSelect(item.name);
                  onClose();
                }}
              >
                <Text style={styles.locationText}>{label}</Text>
              </TouchableOpacity>
            );
          }}
          ListEmptyComponent={
            <Text style={styles.empty}>No locations found.</Text>
          }
        />
      </View>
    </Modal>
  );
};

export default LocationModal;
