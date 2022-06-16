import React from "react";
import { StyleProp, ViewStyle } from "react-native";

import styled from "styled-components/native";

import { useAppDispatch } from "../../store/config";
import { addToCart } from "../../store/slices/cartSlice";

import { ChallengeType } from "../../utils/types/challenge";

type CartButtonType = "ADD" | "DELETE";

type CartButtonProps = {
  type: CartButtonType,
  challenge: ChallengeType,
  style?: StyleProp<ViewStyle>,
}

const CartButton = ({ type, challenge, style }: CartButtonProps) => {
  const dispatch = useAppDispatch();

  function onPress() {
    if (type === "ADD") {
      dispatch(addToCart(challenge))
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