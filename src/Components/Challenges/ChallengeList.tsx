import React from "react";
import { FlatList, ScrollView, Text } from "react-native";

import { useQuery } from "react-query";
import styled from "styled-components/native";

import request from "../../Api/api";

import { ChallengeType } from "../../Types/challenge";
import Challenge from "./ChallengeInChallengeList";

type ChallengeListProps = {
  category: string;
}

const ChallengeList = ({ category }: ChallengeListProps) => {

  const { data } = useQuery(category, () => request({ category }))

  return (
    <Container>
      {data && <FlatList
        data={data.data.data.challenges}
        renderItem={({ item }) => <Challenge {...item}/>}
        numColumns={2}
      />}
    </Container>
  )
}

export default ChallengeList;

const Container = styled.View`
  padding: 3%;
`
