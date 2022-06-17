import React from "react";

import styled from "styled-components/native";

import CartButton from "../Cart/CartButton";

import { ChallengeType } from "../../utils/types/challenge";
import RegisterButton from "../Register/RegisterButtonInCart";

import { challengeDurationInfo, challengeStartDateInfo } from "../../utils/challengeInfo";

import { theme } from "../../utils/theme/theme";
import { formatDate } from "../../utils/formatDate";
import ChallengeInfoTag from "../designElements/tags/ChallengeInfoTag";

const { colorScheme, fontScheme } = theme

const Challenge: React.FC<ChallengeType> = (challenge) => {
  const { title, thumbnailImageUrl, startDate, endDate, registerStartDate, registerEndDate, registerCount, type } = challenge;

  const startInfo = challengeStartDateInfo(startDate);
  const formattedStartDate = formatDate(startDate);
  const formattedEndDate = formatDate(endDate);
  const durationTag = challengeDurationInfo(startDate, endDate);

  return (
    <Container>
      <ChallengeInfoSection>
        <Thumbnail source={{uri: thumbnailImageUrl}} />
        <Title>{title}</Title>
        <DateInfo>
          <StartInfo>{startInfo}</StartInfo>
          <DurationInfo>{formattedStartDate} ~ {formattedEndDate}</DurationInfo>
        </DateInfo>
        <InfoTag tag={durationTag} />
      </ChallengeInfoSection>
      <RegisterSection>
        <RegisterBtn challenge={challenge} />
        <CartBtn challenge={challenge} />
      </RegisterSection>
    </Container>
  )
}

const Container = styled.View`
  width: 100%;
  height: 140px;

  margin-bottom: 16px;
  padding: 8px;

  position: relative;

  display: flex;
  flex-direction: column;
`

const ChallengeInfoSection = styled.View`
  height: 100px;
`

const RegisterSection = styled.View`
  padding-top: 8px;
`

const Thumbnail = styled.Image`
  width: 40%;
  height: 100%;

  position: absolute;
  top: 0;
  right: 0;
  `

const Title = styled.Text`
  width: 60%;

  margin-bottom: 8px;

  font-size: ${ fontScheme.mediumLarge };
  font-weight: 700;
`

const RegisterBtn = styled(RegisterButton)`
  width: 83%;
  height: 40px;
`

const CartBtn = styled(CartButton)`
  width: 15%;
  height: 40px;

  position: absolute;
  top: 8px;
  right: 0;
`

const DateInfo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const StartInfo = styled.Text`
  color: ${ colorScheme.secondary };
  font-size: ${ fontScheme.medium };
  font-weight: 700;
  `

const DurationInfo = styled.Text`
  margin-left: 4px;
  color: ${ colorScheme.black };
  font-size: ${ fontScheme.small };
`

const InfoTag = styled(ChallengeInfoTag)`
  margin-top: 4px;

  align-self: flex-start;
`

export default Challenge;