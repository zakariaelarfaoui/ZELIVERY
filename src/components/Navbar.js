import {
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import globalStyles from "../styles/global";
const Navbar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.navbar}>
      <Pressable
        style={styles.navbarItem}
        onPress={() => navigation.navigate("Home")}
      >
        <MaterialCommunityIcons
          name="home"
          size={24}
          color={globalStyles.color.button}
        />
        <Text style={styles.navbarItemText}>Home</Text>
      </Pressable>
      <Pressable
        style={styles.navbarItem}
        onPress={() => navigation.navigate("Menu")}
      >
        <Feather name="search" size={22} color="black" />
        <Text style={styles.navbarItemText}>Search</Text>
      </Pressable>
      <Pressable
        style={styles.CartScreen}
        onPress={() => navigation.navigate("Cart")}
      >
        <FontAwesome name="shopping-cart" size={24} color="#fff" />
      </Pressable>
      <Pressable
        style={styles.navbarItem}
        onPress={() => navigation.navigate("Order")}
      >
        <MaterialCommunityIcons name="note-text" size={24} color="black" />
        <Text style={styles.navbarItemText}>Order</Text>
      </Pressable>
      <Pressable
        style={styles.navbarItem}
        // onPress={() => navigation.navigate("Home")}
      >
        <MaterialCommunityIcons name="account" size={24} color="black" />
        <Text style={styles.navbarItemText}>Account</Text>
      </Pressable>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "95%",
    height: 50,
    marginHorizontal: "2.5%",
    position: "absolute",
    left: 0,
    bottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: globalStyles.color.white,
    borderRadius: 10,
    padding: 5,
  },
  navbarItem: {
    alignItems: "center",
    padding: 5,
  },
  navbarItemText: {
    fontSize: 11,
    fontWeight: "100",
  },

  CartScreen: {
    width: 50,
    height: 50,
    backgroundColor: globalStyles.color.button,
    borderRadius: 50 / 2,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    bottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
