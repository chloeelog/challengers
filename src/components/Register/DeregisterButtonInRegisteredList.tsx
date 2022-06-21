import React from "react";
import { StyleProp, ViewStyle } from "react-native";

import styled from "styled-components/native";

import { useAppDispatch } from "../../store/config";
import { deregister } from "../../store/slices/registerSlice";

import { ChallengeType } from "../../utils/types/challenge";

import { theme } from "../../utils/theme/theme";

const { colorScheme, fontScheme } = theme

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
      <Label>참가취소</Label>
    </Container>
  )
}

const Container = styled.TouchableHighlight`
  width: 80px;
  height: 40px;

  background-color: ${ colorScheme.primary };

  display: flex;
  justify-content: center;
  align-items: center;
`

const Label = styled.Text`
  color: ${ colorScheme.white };
  font-size: ${ fontScheme.medium };
  font-weight: 700;
`

export default DeregisterButton;