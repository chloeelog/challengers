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
      <Tab.Screen name="운동" children={() => <ChallengeList category="운동" />}/>
      <Tab.Screen name="식습관" children={() => <ChallengeList category="식습관" />}/>
      <Tab.Screen name="생활" children={() => <ChallengeList category="생활" />}/>
      <Tab.Screen name="정서" children={() => <ChallengeList category="정서" />}/>
      <Tab.Screen name="취미" children={() => <ChallengeList category="취미" />}/>
      <Tab.Screen name="환경" children={() => <ChallengeList category="환경" />}/>
    </Tab.Navigator>
  )
}

export default Home;