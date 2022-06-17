import React from "react";
import { GestureResponderEvent } from "react-native";

import styled from "styled-components/native";

import { CartAdd } from "../designElements/icons/cart";

import { theme } from "../../utils/theme/theme";

type CartIconProps = {
  onPress?: (e:GestureResponderEvent) => void 
}

const CartIcon: React.FC<CartIconProps> = ({ onPress }) => {
  const { colorScheme, iconScheme } = theme;

  return (
    <Button onPress={onPress}>
      <CartAdd size={iconScheme.tabHeaderIconSize} color={colorScheme.black} />
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