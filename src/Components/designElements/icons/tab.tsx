import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconProps } from "react-native-vector-icons/Icon";

export const HomeTab: React.FC<IconProps> = ({ size, color }) => {
  return (
    <Icon 
      name="home-variant"
      size={size}
      color={color}
    />
  )
}

export const CertificationTab: React.FC<IconProps> = ({ size, color }) => {
  return (
    <Icon 
      name="camera-plus"
      size={size}
      color={color}
    />
  )
}


