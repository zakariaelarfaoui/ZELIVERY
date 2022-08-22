import styled from "styled-components/native";

export const Item = styled.View`
  flex-direction: row;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: #fff;
`;

export const ItemInfo = styled.View`
  position: relative;
  flex: 1;
`;

export const Name = styled.Text`
  font-size: 17px;
  font-weight: bold;
`;

export const Description = styled.Text``;

export const Price = styled.Text`
  font-size: 17px;
  font-weight: bold;
  position: absolute;
  right: 0;
  top: 0;
  color: orange;
`;

export const Quantity = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 80px;
`;

export const QuantityText = styled.Text`
  font-size: 16px;
`;
