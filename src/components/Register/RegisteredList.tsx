import React from "react";
import { FlatList } from "react-native";

import styled from "styled-components/native";

import { useAppSelector } from "../../store/config";
import { ChallengeType } from "../../utils/types/challenge";

import Challenge from "../Challenges/ChallengeInRegisteredList";

const RegisteredList: React.FC = () => {
  const { registered } = useAppSelector((state) => state.registerStore)

  return (
    <Container
      data={registered}
      renderItem={({ item }: { item: ChallengeType }) => <Challenge { ...item } />}
    />
  );
}

const Container = (styled.FlatList`
  padding: 3%;
` as unknown) as typeof FlatList;

export default RegisteredList;