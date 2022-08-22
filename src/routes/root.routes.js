import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { CartScreen, ForgotPasswordScreen, HomeScreen, MenuScreen, SigninScreen, SignupScreen } from "../screen";
import OrderScreen from "../screen/Order/OrderScreen";

const RootRoute = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Menu" component={MenuScreen} />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
          />
        <Tab.Screen name="Order" component={OrderScreen} />
    </Tab.Navigator>
  );
};

export default RootRoute;
