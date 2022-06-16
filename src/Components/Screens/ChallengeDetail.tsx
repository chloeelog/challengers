import React from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import styled from "styled-components/native";

import { AppStackParamList } from "../../utils/types/paramList";
import RegisterButton from "../Register/RegisterButtonInChallengeDetail";

const ChallengeDetail: React.FC = () => {
  const { challenge } = useRoute<RouteProp<AppStackParamList, 'ChallengeDetail'>>().params;
  const { title, thumbnailImageUrl, startDate, registerStartDate, registerEndDate, registerCount, type } = challenge;

  return (
    <Container>
      <Thumbnail 
        source={{ uri: thumbnailImageUrl }}
      />
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
`

const RegisterBtn = styled(RegisterButton)`
  width: 100%;
  height: 80px;

  position: absolute;
  bottom: 0;
`

export default ChallengeDetail;