import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconStyleProps } from "../../../utils/types/icon";

export const HomeTab: React.FC<IconStyleProps> = ({ size, color }) => {
  return (
    <Icon 
      name="home-variant"
      size={size}
      color={color}
    />
  )
}

export const CertificationTab: React.FC<IconStyleProps> = ({ size, color }) => {
  return (
    <Icon 
      name="camera-plus"
      size={size}
      color={color}
    />
  )
}


