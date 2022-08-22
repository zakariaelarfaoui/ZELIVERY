import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { ForgotPasswordScreen, SigninScreen, SignupScreen } from "../screen";

const AuthRoute = () => {
  const AuthStack = createNativeStackNavigator();

  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Login" component={SigninScreen} />
      <AuthStack.Screen name="Register" component={SignupScreen} />
      <AuthStack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
      />
    </AuthStack.Navigator>
  );
};

export default AuthRoute;
