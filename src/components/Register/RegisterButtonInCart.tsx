import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styled from "styled-components/native";

import { useAppDispatch } from "../../store/config";
import { deleteFromCart } from "../../store/slices/cartSlice";
import { register } from "../../store/slices/registerSlice";

import { ChallengeType } from "../../utils/types/challenge";

import { theme } from "../../utils/theme/theme";

const { fontScheme, colorScheme } = theme

type RegisterButtonProps = {
  challenge: ChallengeType,
  style?: StyleProp<ViewStyle>,
}

const RegisterButton: React.FC<RegisterButtonProps> = ({ challenge, style }) => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  
  function onPress() {
    dispatch(register(challenge));
    dispatch(deleteFromCart(challenge));
    navigation.navigate("인증하기");
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

export default RegisterButton;