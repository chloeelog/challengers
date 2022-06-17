import React from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import ChallengeList from "../Challenges/ChallengeList";

import { Category } from "../../utils/types/category"

import { theme } from "../../utils/theme/theme";

const Home: React.FC = () => {
  const Tab = createMaterialTopTabNavigator();

  const { colorScheme } = theme;

  const options = {
    tabBarActiveTintColor: colorScheme.primary, 
    tabBarIndicatorStyle: { 
      backgroundColor: colorScheme.primary,
    } 
  }

  return (
    <Tab.Navigator>
      <Tab.Screen name="운동" children={() => <ChallengeList category={Category.Exercise} />} options={options} />
      <Tab.Screen name="식습관" children={() => <ChallengeList category={Category.Diet} />} options={options} />
      <Tab.Screen name="생활" children={() => <ChallengeList category={Category.Daily} />} options={options} />
      <Tab.Screen name="정서" children={() => <ChallengeList category={Category.Mental} />} options={options} />
      <Tab.Screen name="취미" children={() => <ChallengeList category={Category.Hobby} />} options={options} />
      <Tab.Screen name="환경" children={() => <ChallengeList category={Category.Environment} />} options={options} />
    </Tab.Navigator>
  )
}

export default Home;