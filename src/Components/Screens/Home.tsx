import React from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import { useQuery } from "react-query";

// import request from "../../Api/api";

import ChallengeList from "../Challenges/ChallengeList";
import { ScrollView } from "react-native";

const Home: React.FC = () => {

  const Tab = createMaterialTopTabNavigator();
  // const { data } = useQuery("test", () => request({ category: "운동" }))

  return (
    <Tab.Navigator>
      <Tab.Screen name="인기" children={() => <ChallengeList category="popular" />}/>
    </Tab.Navigator>
  )
}

export default Home;