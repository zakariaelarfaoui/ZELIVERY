import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { Image, Pressable } from "react-native";
import { API_BASE_URL } from "../../api/axios";
import {
  Description,
  Item,
  ItemInfo,
  Name,
  Price,
  Quantity,
  QuantityText,
} from "./CartItem.styles";


const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handelIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handelDecrement = () => {
    setQuantity((prev) => prev - 1);
  };

  return (
    <Item
      style={{
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
      }}
    >
      <Image
        source={{
          uri: `${API_BASE_URL}/uploads/${item.images[0]}`,
          width: 80,
          height: 80,
        }}
        style={{ borderRadius: 10, marginRight: 10 }}
      />
      <ItemInfo>
        <Name>{item.name}</Name>
        <Description>{item.category}</Description>
        <Price>{item.price}</Price>
        <Quantity>
          <Pressable onPress={handelDecrement}>
            <AntDesign name="minuscircleo" size={24} color="orange" />
          </Pressable>
          <QuantityText>{quantity}</QuantityText>
          <Pressable onPress={handelIncrement}>
            <AntDesign name="pluscircle" size={24} color="orange" />
          </Pressable>
        </Quantity>
      </ItemInfo>
    </Item>
  );
};

export default CartItem;
