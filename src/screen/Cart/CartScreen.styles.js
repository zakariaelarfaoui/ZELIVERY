import styled from "styled-components/native";

export const Items = styled.ScrollView`
  flex: 1;
  padding-top: 10px;
`;

export const Separate = styled.View`
  width: 90%;
  height: 1px;
  background-color: gray;
  margin: 10px auto;
`;

export const PaymentInfo = styled.View`
  padding: 0 10px;
  margin: 10px 0;
`;

export const PaymentPrice = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const PaymentDiscount = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Checkout = styled.Pressable`
  width: 250px;
  background-color: orange;
  padding: 15px 0;
  border-radius: 10px;
  margin: 0 auto 10px;
`;

export const CheckoutText = styled.Text`
  color: #fff;
  text-align: center;
`;
