import React from "react";
import { StyleProp, ViewStyle } from "react-native";

import styled from "styled-components/native";

import { useAppDispatch } from "../../store/config";
import { deleteFromCart } from "../../store/slices/cartSlice";
import { deregister } from "../../store/slices/registerSlice";

import { ChallengeType } from "../../utils/types/challenge";

type DeregisterButtonProps = {
  challenge: ChallengeType,
  style?: StyleProp<ViewStyle>,
}

const DeregisterButton: React.FC<DeregisterButtonProps> = ({ challenge, style }) => {
  const dispatch = useAppDispatch();
  
  function onPress() {
    dispatch(deregister(challenge));
  }

  return (
    <Container
      style={style}
      onPress={onPress}
    >
      <Label>취소하기</Label>
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

export default DeregisterButton;