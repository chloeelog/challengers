import React from "react";
import { ParamListBase, RouteProp, useRoute } from "@react-navigation/native";
import styled from "styled-components/native";
import { ChallengeType } from "../../utils/types/challenge";

type ParamListType = {
  params: {
    challenge: ChallengeType,
  }
} & ParamListBase;

const ChallengeDetail: React.FC = () => {
  const { params } = useRoute<RouteProp<ParamListType, 'params'>>();
  const { challenge } = params;

  return (
    <Container>{challenge.title}</Container>
  )
}

const Container = styled.Text``

export default ChallengeDetail;