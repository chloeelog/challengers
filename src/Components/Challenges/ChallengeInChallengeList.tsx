import React from "react";

import { ChallengeType } from "../../Types/challenge";
import styled from "styled-components/native";

const Challenge: React.FC<ChallengeType> = ({
  title, 
  thumbnailImageUrl,
  startDate,
  registerStartDate,
  registerEndDate,
  registerCount,
  type,
}) => {
  return (
    <Container>
      <Thumbnail source={{uri: thumbnailImageUrl}}/>
      <Title>{title}</Title>
      <Registered>{registerCount}</Registered>
    </Container>
  )
}

const Container = styled.View`
  width: 46%;
  height: 200px;

  margin: 2%;

  position: relative;
`

const Thumbnail = styled.Image`
  width: 100%;
  height: 60%;

  position: absolute;
  top: 0;
`

const Title = styled.Text`
  position: absolute;
  top: 60%;
`

const Registered = styled.Text`
  position: absolute;
  top: 5px;
  right: 5px;
`
export default Challenge;