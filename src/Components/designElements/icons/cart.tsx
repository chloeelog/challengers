import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconProps } from "react-native-vector-icons/Icon";

export const Cart: React.FC<IconProps> = ({ size, color }) => {
  return (
    <Icon 
      name="cart"
      size={size}
      color={color}
    />
  )
}

export const CartAdd: React.FC<IconProps> = ({ size, color }) => {
  return (
    <Icon 
      name="cart-plus"
      size={size}
      color={color}
    />
  )
}

export const CartDelete: React.FC<IconProps> = ({ size, color }) => {
  return (
    <Icon 
      name="cart-remove"
      size={size}
      color={color}
    />
  )
}