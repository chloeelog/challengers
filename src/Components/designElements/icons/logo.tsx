import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconStyleProps } from "../../../utils/types/icon";

export const Logo: React.FC<IconStyleProps> = ({ size, color }) => {
  return (
    <Icon 
      name="flag"
      size={size}
      color={color}
    />
  )
}
