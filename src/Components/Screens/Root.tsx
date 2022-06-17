import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./Home";
import Certification from "./Certification";

import CartIcon from "../Cart/CartInHeader";
import { useNavigation } from "@react-navigation/native";
import { HomeTab } from "../designElements/icons/tab";

const Root: React.FC = () => {
  const Tab = createBottomTabNavigator();

  const navigation = useNavigation();

  function onCartPress() {
    navigation.navigate("Cart");
  }

  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="챌린지" 
        children={() => <Home />} 
        options={{
          tabBarIcon: () => (
            <HomeTab />
          ),
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