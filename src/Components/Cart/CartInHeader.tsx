import React from "react";

import { Button } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const CartIcon: React.FC = ({ onPress }) => {
  const Stack = createNativeStackNavigator();

  return (
    <Button
      onPress={onPress}
      title="장바구니"
    />
  )
}

export default CartIcon;