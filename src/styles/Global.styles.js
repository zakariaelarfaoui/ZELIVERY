import styled from "styled-components/native";

export const theme = {
  colors: {
    black: "#000",
    white: "#fff",
    button: "#FE7F5E",
    border: "#dadae8",
    inputBackground: "#F8F8F8",
  },
  shadows: {
    light: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,

      elevation: 3,
    },
    medium: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,

      elevation: 7,
    },
    dark: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.41,
      shadowRadius: 9.11,

      elevation: 14,
    },
  },
};

export const Container = styled.View`
  flex: 1;
  padding: 0 10px;
  background-color: #fff;
`;

export const AuthContainer = styled.View`
  flex: 1;
  padding: 0 10px;
  background-color: #f4f7fe;
`;
