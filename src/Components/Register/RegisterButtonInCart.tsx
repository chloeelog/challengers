import React from "react";
import { StyleProp, ViewStyle } from "react-native";

import styled from "styled-components/native";

import { useAppDispatch } from "../../store/config";
import { deleteFromCart } from "../../store/slices/cartSlice";
import { register } from "../../store/slices/registerSlice";

import { ChallengeType } from "../../utils/types/challenge";

type RegisterButtonProps = {
  challenge: ChallengeType,
  style?: StyleProp<ViewStyle>,
}

const RegisterButton: React.FC<RegisterButtonProps> = ({ challenge, style }) => {
  const dispatch = useAppDispatch();
  
  function onPress() {
    dispatch(register(challenge));
    dispatch(deleteFromCart(challenge));
  }

  return (
    <Container
      style={style}
      onPress={onPress}
    >
      <Label>참가하기</Label>
    </Container>
  )
}

const Container = styled.TouchableHighlight`
  width: 160px;
  height: 40px;

  background-color: greenyellow;

  display: flex;
  justify-content: center;
  align-items: center;
`

const Label = styled.Text`
  font-size: 12px;
`

export default RegisterButton;