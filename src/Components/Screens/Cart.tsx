import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import { useAppSelector } from "../../store/config";
import { ChallengeType } from "../../utils/types/challenge";

import Challenge from "../Challenges/ChallengeInCart";

const Cart: React.FC = () => {
  const { cart } = useAppSelector((state) => state.cartStore)

  return (
    <Container
      data={cart}
      renderItem={({ item }: { item: ChallengeType }) => <Challenge { ...item } />}
    />
  );
}

const Container = (styled.FlatList`
  padding: 3%;
` as unknown) as typeof FlatList;

export default Cart;