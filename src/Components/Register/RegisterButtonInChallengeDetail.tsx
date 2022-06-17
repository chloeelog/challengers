import React, { useMemo } from "react";
import { StyleProp, ViewStyle } from "react-native";

import styled from "styled-components/native";

import { useAppDispatch, useAppSelector } from "../../store/config";
import { register } from "../../store/slices/registerSlice";

import { ChallengeType } from "../../utils/types/challenge";

import { theme } from "../../utils/theme/theme";

const { colorScheme, fontScheme } = theme;

type RegisterButtonProps = {
  challenge: ChallengeType,
  style?: StyleProp<ViewStyle>,
}

const RegisterButton: React.FC<RegisterButtonProps> = ({ challenge, style }) => {
  const { registered } = useAppSelector((state) => state.registerStore);
  const dispatch = useAppDispatch();

  const isRegistered = useMemo(() => {
    return Boolean(registered.find((item) => item.id === challenge.id));
  }, [registered])

  function onPress() {
    console.log("pressed!")
    dispatch(register(challenge));
  };

  return (
    <Container
      style={style}
      disabled={isRegistered}
      onPress={onPress}
    >
      <Label disabled={isRegistered} >{ isRegistered ? "이미 참여중인 챌린지예요" : "참가하기"}</Label>
    </Container>
  )
}

const Container = styled.TouchableHighlight<{ disabled: Boolean }>`
  background-color: ${(props) => (props.disabled ? colorScheme.lightGray : colorScheme.primary)};
  
  display: flex;
  justify-content: center;
  align-items: center;
  `

const Label = styled.Text<{ disabled: Boolean }>`
  color: ${(props) => (props.disabled ? colorScheme.gray : colorScheme.white)};
  font-size: ${(props) => (props.disabled ? fontScheme.mediumLarge : fontScheme.large)};
  font-weight: ${(props) => (props.disabled ? 700 : 500)};
`

export default RegisterButton;