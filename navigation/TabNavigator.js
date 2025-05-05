import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import SellScreen from "../screens/SellScreen";
import AccountScreen from "../screens/AccountScreen";

const Tab = createBottomTabNavigator();

const CustomSellButton = ({ children, onPress }) => (
  <TouchableOpacity style={styles.sellButton} onPress={onPress}>
    <View style={styles.sellButtonInner}>{children}</View>
  </TouchableOpacity>
);

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          backgroundColor: "#fff",
          borderTopWidth: 0,
          elevation: 10,
          position: "absolute",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home"
              size={24}
              color={focused ? "#007AFF" : "#888"}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Sell"
        component={SellScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="plus" size={32} color="#007AFF" />
          ),
          tabBarButton: (props) => <CustomSellButton {...props} />,
        }}
      />

      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="person"
              size={24}
              color={focused ? "#007AFF" : "#888"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  sellButton: {
    top: -30,
    justifyContent: "center",
    alignItems: "center",
  },
  sellButtonInner: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 8,
  },
});

export default TabNavigator;
