import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconProps } from "react-native-vector-icons/Icon";

export const Logo: React.FC<IconProps> = ({ size, color }) => {
  return (
    <Icon 
      name="flag"
      size={size}
      color={color}
    />
  )
}
