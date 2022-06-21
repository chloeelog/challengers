import React from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import styled from "styled-components/native";

import RegisterButton from "../Register/RegisterButtonInChallengeDetail";

import { Logo } from "../designElements/icons/logo";

import { AppStackParamList } from "../../utils/types/paramList";

import { theme } from "../../utils/theme/theme";
import { challengeDurationInfo } from "../../utils/challengeInfo";
import ChallengeInfoTag from "../designElements/tags/ChallengeInfoTag";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const { colorScheme, fontScheme, iconScheme } = theme;

const ChallengeDetail: React.FC = () => {
  const { challenge } = useRoute<RouteProp<AppStackParamList, 'ChallengeDetail'>>().params;
  const { title, thumbnailImageUrl, startDate, endDate, registerStartDate, registerEndDate, registerCount, type } = challenge;

  const durationTag = challengeDurationInfo(startDate, endDate);

  return (
    <Container>
      <Thumbnail 
        source={{ uri: thumbnailImageUrl }}
      />
      { type === "official"
        ? <OfficialTag>
            <Logo size={iconScheme.buttonIconSize} color={colorScheme.gray} />
            <OffitialTagText>공식 챌린지</OffitialTagText>
          </OfficialTag> 
        : null
      }
      <Title>{title}</Title>
      <TagSection>
        <ChallengeInfoTag tag="주 3일" />
        <ChallengeInfoTag tag={durationTag} />
      </TagSection>
      <TagSection>
        <RateTag>
          <Icon name="star" size={iconScheme.buttonIconSize} color={colorScheme.primary} />
          <RateTagText>4.90</RateTagText>
        </RateTag>
        <RateTag>
          <Icon name="human-greeting-variant" size={iconScheme.buttonIconSize} color={colorScheme.primary} />
          <RateTagText>현재 {registerCount}명</RateTagText>
        </RateTag>
      </TagSection>
      <RegisterBtn challenge={challenge} />
    </Container>
  )
}

const Container = styled.View`
  height: 100%;
  position: relative;
`

const Thumbnail = styled.Image`
  width: 100%;
  height: 40%;

  margin-bottom: 16px;
`

const OfficialTag = styled.View`
  margin: 0px 16px;

  display: flex;
  flex-direction: row;
  align-items: center;
`

const OffitialTagText = styled.Text`
  margin-left: 4px;

  color: ${ colorScheme.gray };
  font-size: ${ fontScheme.mediumLarge };
`

const Title = styled.Text`
  margin: 8px 16px;

  color: ${ colorScheme.black };
  font-size: ${ fontScheme.large };
  font-weight: 700;
`

const TagSection = styled.View`
  margin-left: 16px;
  margin-bottom: 8px;

  display: flex;
  flex-direction: row;
`

const RegisterBtn = styled(RegisterButton)`
  width: 100%;
  height: 80px;

  position: absolute;
  bottom: 0;
`

const RateTag = styled.View`
  margin-right: 4px;

  display: flex;
  flex-direction: row;
  align-items: center;
`

const RateTagText = styled.Text`
  margin-left: 4px;

  color: ${ colorScheme.gray };
  font-size: ${ fontScheme.medium };
`

export default ChallengeDetail;