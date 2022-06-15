import React from "react";
import { ScrollView, Text } from "react-native";

import { useQuery } from "react-query";

import request from "../../Api/api";

import { Challenge } from "../../Types/challenge";

type ChallengeListProps = {
  category: string;
}

const ChallengeList = ({ category }: ChallengeListProps) => {

  const { data } = useQuery(category, () => request({ category }))

  return (
    <ScrollView>
      {data && data.data.data.challenges.map((challenge: Challenge) => {
        console.log(challenge);
        const { title } = challenge;
        return <Text>{title}</Text>
      })}
    </ScrollView>
  )
}

export default ChallengeList;