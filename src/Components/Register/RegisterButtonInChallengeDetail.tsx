import React, { useMemo } from "react";
import { StyleProp, ViewStyle } from "react-native";

import styled from "styled-components/native";

import { useAppDispatch, useAppSelector } from "../../store/config";
import { register } from "../../store/slices/registerSlice";

import { ChallengeType } from "../../utils/types/challenge";

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
      <Label>{ isRegistered ? "이미 참여중인 챌린지예요" : "참가하기"}</Label>
    </Container>
  )
}

const Container = styled.TouchableHighlight<{ disabled: Boolean }>`
  background-color: ${(props) => (props.disabled ? "gray" : "greenyellow")};

  display: flex;
  justify-content: center;
  align-items: center;
`

const Label = styled.Text`
  font-size: 20px;
`

export default RegisterButton;