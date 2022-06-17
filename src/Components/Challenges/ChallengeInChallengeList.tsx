import React from "react";
import { useNavigation } from "@react-navigation/native";

import styled from "styled-components/native";

import CartButton from "../Cart/CartButton";

import { ChallengeType } from "../../utils/types/challenge";
import { challengeStartDateInfo, challengeDurationInfo } from "../../utils/challengeInfo";
import ChallengeInfoTag from "../designElements/tags/ChallengeInfoTag";

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
      <Registered>{registerCount}</Registered>
      <Title>{title}</Title>
      <ChallengeInfoTag tag={startDateTag}/>
      <ChallengeInfoTag tag={durationTag}/>
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
`

const Title = styled.Text``

const Registered = styled.Text`
  position: absolute;
  top: 5px;
  right: 5px;
`

const CartBtn = styled(CartButton)`
  align-self: flex-end;
`

export default Challenge;