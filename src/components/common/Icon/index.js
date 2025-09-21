import { TouchableOpacity } from "react-native";
import React from "react";

import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Fontisto from "@expo/vector-icons/Fontisto";
import Foundation from "@expo/vector-icons/Foundation";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Octicons from "@expo/vector-icons/Octicons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Zocial from "@expo/vector-icons/Zocial";

import colors from "../../../config/colors";

const iconMap = {
  AD: AntDesign,
  EN: Entypo,
  EI: EvilIcons,
  FE: Feather,
  FA: FontAwesome,
  FA5: FontAwesome5,
  FS: Fontisto,
  FO: Foundation,
  IO: Ionicons,
  MC: MaterialCommunityIcons,
  MI: MaterialIcons,
  OC: Octicons,
  SL: SimpleLineIcons,
  ZO: Zocial,
};

/**
 * Renders a dynamic icon based on the provided props.
 *
 * @param {Object} props - The props for the component.
 * @param {('AD'|'EN'|'EI'|'FE'|'FA'|'FA5'|'FA6P'|'FS'|'FO'|'IO'|'MC'|'MI'|'OC'|'SL'|'ZO')} props.lib - The abbreviation for the icon library.
 * - 'AD' for AntDesign
 * - 'EN' for Entypo
 * - 'EI' for EvilIcons
 * - 'FE' for Feather
 * - 'FA' for FontAwesome
 * - 'FA5' for FontAwesome5
 * - 'FS' for Fontisto
 * - 'FO' for Foundation
 * - 'IO' for Ionicons
 * - 'MC' for MaterialCommunityIcons
 * - 'MI' for MaterialIcons
 * - 'OC' for Octicons
 * - 'SL' for SimpleLineIcons
 * - 'ZO' for Zocial
 * @param {string} props.name - The name of the icon to render (depends on the library being used, e.g., 'home', 'star').
 * @param {number} [props.size=24] - The size of the icon.
 * @param {string} [props.color='black'] - The color of the icon.
 * @returns {JSX.Element|null} The rendered icon component or null if the library doesn't exist.
 */

const Icon = ({
  lib = "AD",
  name,
  size = 24,
  color = colors.grey,
  onPress,
  ...props
}) => {
  const IconComponent = iconMap[lib]; // Select the correct icon library

  if (!IconComponent) {
    return null; // Return nothing if the library doesn't exist
  }

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress}>
        <IconComponent name={name} size={size} color={color} {...props} />
      </TouchableOpacity>
    );
  }

  return <IconComponent name={name} size={size} color={color} {...props} />;
};

export default Icon;
