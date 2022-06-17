import React from "react";
import { useNavigation } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./Home";
import Certification from "./Certification";
import HomeScreenHeader from "./headers/HomeScreenHeader";
import ScreenHeader from "./headers/ScreenHeader";
import CartIcon from "../Cart/CartInHeader";

import { CertificationTab, HomeTab } from "../designElements/icons/tab";


import { theme } from "../../utils/theme/theme";

const Root: React.FC = () => {
  const Tab = createBottomTabNavigator();

  const navigation = useNavigation();

  const { colorScheme, iconScheme } = theme;

  function onCartPress() {
    navigation.navigate("Cart");
  }

  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="챌린지" 
        children={() => <Home />} 
        options={{
          tabBarIcon: ({ focused }) => (
            focused
            ? <HomeTab size={iconScheme.bottomTabIconSize} color={colorScheme.black} />
            : <HomeTab size={iconScheme.bottomTabIconSize} color={colorScheme.lightGray} />
          ),
          tabBarActiveTintColor: colorScheme.black,
          headerTitle: () => (
            <HomeScreenHeader />
          ),
          headerTitleAlign: "left",
          headerRight: () => (
            <CartIcon 
              onPress={onCartPress}
            />
          )
        }} 
      />
      <Tab.Screen 
        name="인증하기" 
        component={Certification}
        options={{
          tabBarIcon: ({ focused }) => (
            focused
            ? <CertificationTab size={iconScheme.bottomTabIconSize} color={colorScheme.black} />
            : <CertificationTab size={iconScheme.bottomTabIconSize} color={colorScheme.lightGray} />
          ),
          tabBarActiveTintColor: colorScheme.black,
          headerTitle: () => (
            <ScreenHeader title="내 챌린지 인증하기"/>
          ),
          headerTitleAlign: "left",
        }}
      />
    </Tab.Navigator>
  )
}

export default Root;