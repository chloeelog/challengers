import React from "react";
import { GestureResponderEvent, StyleProp, ViewStyle } from "react-native";

import styled from "styled-components/native";

type CartButtonType = "ADD" | "DELETE";

type CartButtonProps = {
  type: CartButtonType
  style?: StyleProp<ViewStyle>,
}

const CartButton = ({ type, style }: CartButtonProps) => {
  function onPress() {
    if (type === "ADD") {
      console.log("추가할게요!")
    } else {
      console.log("삭제할게요!")
    }
  }

  return (
    <Button
      type={type}
      style={style}
      onPress={onPress}
    >
      <Label>{ type === "ADD" ? "추가" : "삭제" }</Label>
    </Button>
  )
};

const Button = styled.TouchableHighlight<{ type: CartButtonType }>`
  width: 30px;
  height: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.type === "ADD" ? "red" : "blue"};
`
const Label = styled.Text`
  font-size: 10px;
`

export default CartButton;