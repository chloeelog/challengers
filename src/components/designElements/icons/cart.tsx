import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconStyleProps } from "../../../utils/types/icon";

export const Cart: React.FC<IconStyleProps> = ({ size, color }) => {
  return (
    <Icon 
      name="cart"
      size={size}
      color={color}
    />
  )
}

export const CartAdd: React.FC<IconStyleProps> = ({ size, color }) => {
  return (
    <Icon 
      name="cart-plus"
      size={size}
      color={color}
    />
  )
}

export const CartDelete: React.FC<IconStyleProps> = ({ size, color }) => {
  return (
    <Icon 
      name="cart-remove"
      size={size}
      color={color}
    />
  )
}