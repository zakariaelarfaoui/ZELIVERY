import { FlatList, Text } from "react-native";
import { useSelector } from "react-redux";
import CartItem from "../../components/CartItem/CartItem";
import Header from "../../components/Header";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { Container } from "../../styles/Global.styles";
import {
  Checkout,
  CheckoutText,
  PaymentDiscount,
  PaymentInfo,
  PaymentPrice,
  Separate,
} from "./CartScreen.styles";

const CartScreen = () => {
  const cart = useSelector((state) => state.cart.value);
  const axiosPrivate = useAxiosPrivate();

  const renderItem = ({ item }) => <CartItem item={item} />;

  const addOrder = () => {
    try {
      const { data } = axiosPrivate.post("/order", cart);
      console.log(data);
    } catch (error) {
      error?.response?.data?.message
        ? console.log(error.response.data.message)
        : console.error(error.message);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <FlatList
          data={cart}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
          showsVerticalScrollIndicator={false}
        />
        <Separate />
        <PaymentInfo>
          <PaymentDiscount>
            <Text>Discount</Text>
            <Text>0%</Text>
          </PaymentDiscount>
          <PaymentPrice>
            <Text>Total Price</Text>
            <Text>400 MAD</Text>
          </PaymentPrice>
        </PaymentInfo>
        <Checkout>
          <CheckoutText>Checkout</CheckoutText>
        </Checkout>
      </Container>
    </>
  );
};

export default CartScreen;
