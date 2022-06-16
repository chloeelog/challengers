import React from "react";
import { FlatList } from "react-native";
import { useQuery } from "react-query";

import styled from "styled-components/native";

import Challenge from "./ChallengeInChallengeList";

import { fetchChallenges } from "../../Api/api";

import { Category } from "../../Types/category";
import { ChallengesApiReponse } from "../../Types/apiResponse";


type ChallengeListProps = {
  category: Category,
}

const ChallengeList = ({ category }: ChallengeListProps) => {
  const query = useQuery(category, () => fetchChallenges<ChallengesApiReponse>({ category }))
  const { data:axiosResponse } = query;
  const sampleChallenges = axiosResponse?.data

  return (
    <Container>
      {sampleChallenges && <FlatList
        data={sampleChallenges.data.challenges}
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
