import React from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import ChallengeList from "../Challenges/ChallengeList";

import { Category } from "../../Types/category";

const Home: React.FC = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="운동" children={() => <ChallengeList category={Category.Exercise} />}/>
      <Tab.Screen name="식습관" children={() => <ChallengeList category={Category.Diet} />}/>
      <Tab.Screen name="생활" children={() => <ChallengeList category={Category.Daily} />}/>
      <Tab.Screen name="정서" children={() => <ChallengeList category={Category.Mental} />}/>
      <Tab.Screen name="취미" children={() => <ChallengeList category={Category.Hobby} />}/>
      <Tab.Screen name="환경" children={() => <ChallengeList category={Category.Environment} />}/>
    </Tab.Navigator>
  )
}

export default Home;