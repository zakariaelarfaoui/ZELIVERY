import React from "react";
import { Image } from "react-native";
import { useDispatch } from "react-redux";
import { API_BASE_URL } from "../../api/axios";
import { addToCart } from "../../features/Cart/cartSlice";
import {
  AddToCart,
  AddToCartText,
  Description,
  Info,
  Item,
  Name,
  Price,
} from "./MenuItem.styles";

const MenuItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <Item
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
      }}
    >
      <Image
        source={{
          uri: `${API_BASE_URL}/uploads/${item.images[0]}`,
          width: "100%",
          height: 150,
        }}
        style={{ borderRadius: 20 }}
      />
      <Info>
        <Name>{item.name}</Name>
        <Description>
          {item.description.length <= 45
            ? meal.description
            : `${item.description.slice(0, 45)}...`}
        </Description>
      </Info>
      <Price
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 6,
        }}
      >
        {item.price}
      </Price>
      <AddToCart onPress={() => dispatch(addToCart(item))}>
        <AddToCartText>Add</AddToCartText>
      </AddToCart>
    </Item>
  );
};

export default MenuItem;
