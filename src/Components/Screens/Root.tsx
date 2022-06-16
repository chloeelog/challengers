import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./Home";
import Certification from "./Certification";

import CartIcon from "../Cart/CartInHeader";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Root: React.FC = () => {
  const Tab = createBottomTabNavigator();

  const navigation = useNavigation();

  function onCartPress() {
    navigation.navigate("장바구니");
  }

  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="챌린지" 
        children={() => <Home />} 
        options={{
        headerRight: () => (
          <CartIcon onPress={onCartPress}/>
        )
        }} 
      />
      <Tab.Screen name="인증하기" component={Certification} />
    </Tab.Navigator>
  )
}

export default Root;