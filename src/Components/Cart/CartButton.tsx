import React, { useMemo } from "react";
import { StyleProp, ViewStyle } from "react-native";
import styled from "styled-components/native";

import { useAppDispatch, useAppSelector } from "../../store/config";
import { addToCart, deleteFromCart } from "../../store/slices/cartSlice";

import { ChallengeType } from "../../utils/types/challenge";
import { CartAdd, CartDelete } from "../designElements/icons/cart";

import { theme } from "../../utils/theme/theme";

const { colorScheme, iconScheme } = theme

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
      <Label>{ isInCart 
        ? <CartDelete color={colorScheme.black} size={iconScheme.buttonIconSize} />
        : <CartAdd color={colorScheme.white} size={iconScheme.buttonIconSize} />
        }
      </Label>
    </Button>
  )
};

const Button = styled.TouchableHighlight<{ isInCart: Boolean }>`
  width: 24px;
  height: 24px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.isInCart ? colorScheme.lightGray : colorScheme.primary};
`
const Label = styled.View`
  font-size: 10px;
`

export default CartButton;