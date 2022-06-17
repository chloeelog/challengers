import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CartAdd } from "../designElements/icons/cart";
import { GestureResponderEvent } from "react-native";
import styled from "styled-components/native";

type CartIconProps = {
  onPress?: (e:GestureResponderEvent) => void 
}

const CartIcon: React.FC<CartIconProps> = ({ onPress }) => {
  const Stack = createNativeStackNavigator();

  return (
    <Button onPress={onPress}>
      <CartAdd size={20}/>
    </Button>
  )
}

const Button = styled.TouchableOpacity`
  width: 56px;
  height: 100%;

  justify-content: center;
  align-items: center;
`

export default CartIcon;