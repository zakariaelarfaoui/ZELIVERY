import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components/native";
import store from "./src/app/store";
import { AuthProvider } from "./src/context/AuthProvider";
import { CartProvider } from "./src/context/CartProvider";
import {
  CartScreen,
  HomeScreen,
  MenuScreen,
  SigninScreen,
  SignupScreen,
} from "./src/screen";
import OrderScreen from "./src/screen/Order/OrderScreen";
import ProfileScreen from "./src/screen/Profile";
import SearchScreen from "./src/screen/Search";
import { theme } from "./src/styles/Global.styles";

const App = () => {
  const auth = null;
  const [isLoading, setIsLoading] = useState(true);

  const AuthStack = createNativeStackNavigator();
  const AuthStackScreen = () => (
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

  const HomeStack = createNativeStackNavigator();

  const HomeStackScreen = () => (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen
        name="Details"
        // component={Details}
        // options={({ route }) => ({
        //   title: route.params.name,
        // })}
      />
    </HomeStack.Navigator>
  );

  const OrderStack = createNativeStackNavigator();

  const OrderStackScreen = () => (
    <OrderStack.Navigator>
      <OrderStack.Screen name="Order" component={OrderScreen} />
    </OrderStack.Navigator>
  );

  const MenuStack = createNativeStackNavigator();

  const MenuStackScreen = () => (
    <MenuStack.Navigator>
      <MenuStack.Screen name="Menu" component={MenuScreen} />
    </MenuStack.Navigator>
  );

  const CartStack = createNativeStackNavigator();

  const CartStackScreen = () => (
    <CartStack.Navigator>
      <CartStack.Screen name="Cart" component={CartScreen} />
    </CartStack.Navigator>
  );

  const ProfileStack = createNativeStackNavigator();

  const ProfileStackScreen = () => (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );

  const SearchStack = createNativeStackNavigator();

  const SearchStackScreen = () => (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={SearchScreen} />
    </SearchStack.Navigator>
  );

  const Tab = createBottomTabNavigator();

  const TabsScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Search" component={SearchStackScreen} />
      <Tab.Screen name="Cart" component={CartStackScreen} />
      <Tab.Screen name="Order" component={OrderStackScreen} />
      <Tab.Screen name="Profile" component={ProfileStackScreen} />
    </Tab.Navigator>
  );

  const RootStack = createNativeStackNavigator();
  const RootStackScreen = ({ auth }) => (
    <RootStack.Navigator headerMode="none">
      {auth ? (
        <RootStack.Screen
          name="App"
          component={TabsScreen}
          options={{
            animationEnabled: false,
          }}
        />
      ) : (
        <RootStack.Screen
          name="Auth"
          component={AuthStackScreen}
          options={{
            animationEnabled: false,
          }}
        />
      )}
    </RootStack.Navigator>
  );

  if (isLoading) {
    return (
      <View>
        {/* <Text>...Loading</Text> */}
      </View>
    );
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <CartProvider>
            <NavigationContainer>
              <SafeAreaView style={styles.container}>
                <StatusBar
                  barStyle="dark-content"
                  backgroundColor={theme.colors.background}
                />
                <RootStackScreen auth={auth} />
              </SafeAreaView>
            </NavigationContainer>
          </CartProvider>
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
  },
});
