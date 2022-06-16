import React from "react";

import styled from "styled-components/native";

import CartButton from "../Cart/CartButton";

import { ChallengeType } from "../../utils/types/challenge";

const Challenge: React.FC<ChallengeType> = (challenge) => {
  const { title, thumbnailImageUrl, startDate, registerStartDate, registerEndDate, registerCount, type } = challenge;

  return (
    <Container>
      <Thumbnail source={{uri: thumbnailImageUrl}} />
      <Title>{title}</Title>
      <CartBtn type="ADD" challenge={challenge} />
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
`

const Thumbnail = styled.Image`
  width: 40%;
  height: 100%;

  position: absolute;
  top: 0;
  right: 0;
`

const Title = styled.Text``

const CartBtn = styled(CartButton)`
  position: absolute;
  bottom: 5px;
  right: 5px;
`

export default Challenge;