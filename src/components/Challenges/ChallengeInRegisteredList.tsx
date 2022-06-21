import React from "react";

import styled from "styled-components/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import DeregisterButton from "../Register/DeregisterButtonInRegisteredList";
import ChallengeInfoTag from "../designElements/tags/ChallengeInfoTag";

import { ChallengeType } from "../../utils/types/challenge";

import { theme } from "../../utils/theme/theme";


const { fontScheme, colorScheme, iconScheme } = theme

const Challenge: React.FC<ChallengeType> = (challenge) => {
  const { title, thumbnailImageUrl, startDate, registerStartDate, registerEndDate, registerCount, type } = challenge;

  return (
    <Container>
      <Thumbnail source={{uri: thumbnailImageUrl}} />
      <Title>{title}</Title>
      <InfoTags>
        <AchievementTag tag="예상 달성률 90%" />
        <RefundTag tag="전액 환급 가능" />
      </InfoTags>
      <AchievementInfoSection>
        <AchievementInfo>
          <Icon name="clock-time-two" size={iconScheme.tagIconSize} color={colorScheme.gray} />
          <AchievementInfoText>00:00:00 ~ 24:00:00</AchievementInfoText>
        </AchievementInfo>
        <AchievementInfo>
          <Icon name="calendar" size={iconScheme.tagIconSize} color={colorScheme.gray} />
          <AchievementInfoText>2일 뒤 종료</AchievementInfoText>
        </AchievementInfo>
        <AchievementInfo>
          <Icon name="checkbox-marked-outline" size={iconScheme.tagIconSize} color={colorScheme.gray} />
          <AchievementInfoText>주 5일</AchievementInfoText>
        </AchievementInfo>
        <AchievementInfo>
          <Icon name="brightness-percent" size={iconScheme.tagIconSize} color={colorScheme.gray} />
          <AchievementInfoText>현재 80% 달성</AchievementInfoText>
        </AchievementInfo>
      </AchievementInfoSection>
      <DeregisterBtn challenge={challenge} />
    </Container>
  )
}

const Container = styled.View`
  width: 100%;
  height: 180px;

  margin-bottom: 8px;
  padding: 8px;

  position: relative;

  display: flex;
  flex-direction: column;
`

const Thumbnail = styled.Image`
  width: 100%;
  height: 100px;

  border-radius: 4px;
`

const Title = styled.Text`
  margin-top: 8px;

  color: ${ colorScheme.black };
  font-size: ${ fontScheme.mediumLarge };
  font-weight: 700;
`

const DeregisterBtn = styled(DeregisterButton)`
  position: absolute;
  top: 116px;
  right: 8px;
`

const InfoTags = styled.View`
  position: absolute;
  top: 12px;
  right: 12px;

  display: flex;
  flex-direction: column;
`

const AchievementTag = styled(ChallengeInfoTag)`
  align-self: flex-end;

  background-color: ${ colorScheme.primaryBackground };
  `

const RefundTag = styled(ChallengeInfoTag)`
  align-self: flex-end;
  
  background-color: ${ colorScheme.white };
`

const AchievementInfoSection = styled.View`
  width: 60%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const AchievementInfo = styled.View`
  margin: 2px 4px;

  display: flex;
  flex-direction: row;
  align-items: center;
`

const AchievementInfoText = styled.Text`
  margin-left: 2px;

  color: ${ colorScheme.gray };
  font-size: ${ fontScheme.small };
`

export default Challenge;