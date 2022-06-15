import React from "react";
import { ScrollView, Text } from "react-native";

type ChallengeListProps = {
  category: string;
}

const ChallengeList = ({ category }: ChallengeListProps) => {
  return (
    <ScrollView>
      <Text>{category}</Text>
    </ScrollView>
  )
}

export default ChallengeList;