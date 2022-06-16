import React from "react";
import { StyleProp, Text, ViewStyle } from "react-native";
import styled from "styled-components/native";
import { ChallengeType } from "../../utils/types/challenge";

type RegisterButtonProps = {
  challenge: ChallengeType,
  style?: StyleProp<ViewStyle>,
}

const RegisterButton: React.FC<RegisterButtonProps> = ({ challenge, style }) => {
  function onPress() {
    console.log("참가할게요!", challenge.title)
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
  background-color: greenyellow;

  display: flex;
  justify-content: center;
  align-items: center;
`

const Label = styled.Text`
  font-size: 20px;
`

export default RegisterButton;