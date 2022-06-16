import React from "react";

import styled from "styled-components/native";

import DeregisterButton from "../Register/DeregisterButtonInRegisteredList";

import { ChallengeType } from "../../utils/types/challenge";

const Challenge: React.FC<ChallengeType> = (challenge) => {
  const { title, thumbnailImageUrl, startDate, registerStartDate, registerEndDate, registerCount, type } = challenge;

  return (
    <Container>
      <Thumbnail source={{uri: thumbnailImageUrl}} />
      <Title>{title}</Title>
      <DeregisterButton challenge={challenge} />
    </Container>
  )
}

const Container = styled.View`
  width: 100%;
  height: 100px;

  margin-bottom: 8px;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Thumbnail = styled.Image`
  width: 40%;
  height: 100%;

  position: absolute;
  top: 0;
  right: 0;
`

const Title = styled.Text``

export default Challenge;