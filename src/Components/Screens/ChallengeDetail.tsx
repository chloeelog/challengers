import React from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import styled from "styled-components/native";

import { AppStackParamList } from "../../utils/types/paramList";

const ChallengeDetail: React.FC = () => {
  const { challenge } = useRoute<RouteProp<AppStackParamList, 'ChallengeDetail'>>().params;
  const { title, thumbnailImageUrl, startDate, registerStartDate, registerEndDate, registerCount, type } = challenge;

  return (
    <Container>
      <Thumbnail 
        source={{ uri: thumbnailImageUrl }}
      />
      <RegisterBtn
        title="참가하기"
      />
    </Container>
  )
}

const Container = styled.View``

const Thumbnail = styled.Image`
  width: 100%;
  height: 60%;
`

const RegisterBtn = styled.Button``

export default ChallengeDetail;