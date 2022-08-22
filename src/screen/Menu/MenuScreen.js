import { View, Text, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { Filter } from "./MenuScreen.styles";
import MenuItem from "../../components/MenuItem/MenuItem";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import { Container } from "../../styles/Global.styles";
const MenuScreen = () => {
  const axiosPrivate = useAxiosPrivate();
  const [food, setFood] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const { data } = await axiosPrivate.get("/meal");
      setFood(data.data);
    } catch (error) {
      if (error?.response?.data?.message) {
        console.log(error?.response?.data?.message);
      } else {
        console.log(error.message);
      }
    }
  };

  const renderItem = ({ item }) => <MenuItem item={item} />;

  return (
    <>
      <Header />
      <Container>
        <Filter></Filter>
        <FlatList
          data={food}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: 60 }}
        />
      </Container>
      <Navbar />
    </>
  );
};

export default MenuScreen;
