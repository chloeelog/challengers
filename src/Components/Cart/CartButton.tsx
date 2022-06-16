import React, { useEffect, useMemo, useState } from "react";
import { StyleProp, ViewStyle } from "react-native";

import styled from "styled-components/native";

import { useAppDispatch, useAppSelector } from "../../store/config";
import { addToCart, deleteFromCart } from "../../store/slices/cartSlice";

import { ChallengeType } from "../../utils/types/challenge";

type CartButtonProps = {
  challenge: ChallengeType,
  style?: StyleProp<ViewStyle>,
}

const CartButton = ({ challenge, style }: CartButtonProps) => {
  const { cart } = useAppSelector((state) => state.cartStore);
  const dispatch = useAppDispatch();

  const isInCart = useMemo(() => {
    return Boolean(cart.find((item) => item.id === challenge.id));
  }, [cart, challenge]);

  function onPress() {
    if (isInCart) {
      dispatch(deleteFromCart(challenge))
    } else {
      dispatch(addToCart(challenge))
    }
  }

  return (
    <Button
      isInCart={isInCart}
      style={style}
      onPress={onPress}
    >
      <Label>{ isInCart ? "삭제" : "추가" }</Label>
    </Button>
  )
};

const Button = styled.TouchableHighlight<{ isInCart: Boolean }>`
  width: 30px;
  height: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.isInCart ? "red" : "blue"};
`
const Label = styled.Text`
  font-size: 10px;
`

export default CartButton;