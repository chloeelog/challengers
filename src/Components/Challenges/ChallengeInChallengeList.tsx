import React from "react";
import { useNavigation } from "@react-navigation/native";

import styled from "styled-components/native";

import CartButton from "../Cart/CartButton";

import { ChallengeType } from "../../utils/types/challenge";
import { challengeStartDateInfo, challengeDurationInfo } from "../../utils/challengeInfo";

import ChallengeInfoTag from "../designElements/tags/ChallengeInfoTag";
import { Logo } from "../designElements/icons/logo";

import { theme } from "../../utils/theme/theme";
import RegisteredCountTag from "../designElements/tags/RegisteredCountTag";

const { fontScheme, iconScheme, colorScheme } = theme

const Challenge: React.FC<ChallengeType> = (challenge) => {
  const { title, thumbnailImageUrl, startDate, endDate, registerStartDate, registerEndDate, registerCount, type } = challenge;
  
  const navigation = useNavigation();

  const startDateTag = challengeStartDateInfo(startDate);
  const durationTag = challengeDurationInfo(startDate, endDate);

  function onChallengePress() {
    navigation.navigate("ChallengeDetail", {
      challenge: challenge,
    });
  }

  return (
    <Container
      onPress={onChallengePress}
    >
      <Thumbnail source={{ uri: thumbnailImageUrl }} />
      { type === "official"
        ? <OfficialTag>
            <Logo size={iconScheme.tagIconSize} color={colorScheme.gray} />
            <OffitialTagText>공식 챌린지</OffitialTagText>
          </OfficialTag> 
        : null
      }
      <Title>{title}</Title>
      <Counter tag={registerCount} />
      <InfoTags>
        <ChallengeInfoTag tag={startDateTag} />
        <ChallengeInfoTag tag={durationTag} />
      </InfoTags>
      <CartBtn challenge={challenge} />
    </Container>
  )
}

const Container = styled.TouchableOpacity`
  width: 46%;
  height: 200px;

  margin: 2%;

  position: relative;

  display: flex;
`

const Thumbnail = styled.Image`
  width: 100%;
  height: 60%;

  border-radius: 4px;
`

const Title = styled.Text`
  margin: 2px 4px 4px;

  color: ${ colorScheme.black };
  font-size: ${ fontScheme.medium };
  font-weight: 700;
`

const Counter = styled(RegisteredCountTag)`
  margin: 4px;

  position: absolute;
  top: 0;
  left: 0;
`

const CartBtn = styled(CartButton)`
  margin: 4px;

  position: absolute;
  top: 0;
  right: 0;
`

const OfficialTag = styled.View`
  margin: 4px 4px 2px;

  display: flex;
  flex-direction: row;
`

const OffitialTagText = styled.Text`
  margin-left: 4px;

  color: ${ colorScheme.gray };
  font-size: ${ fontScheme.small };
`

const InfoTags = styled.View`
  display: flex;
  flex-direction: row;
`

export default Challenge;