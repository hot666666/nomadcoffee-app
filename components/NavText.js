import { useNavigation } from "@react-navigation/native";
import React from "react";
import styled from "styled-components/native";

const Button = styled.TouchableOpacity`
  padding: 15px 10px;
  border-radius: 3px;
  width: 100%;
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: 600;
  text-align: center;
`;

export default function NavText({ text, navTo }) {
  const navigation = useNavigation();
  return (
    <Button
      onPress={() => {
        navigation.navigate(`${navTo}`);
      }}
    >
      <ButtonText>{text}</ButtonText>
    </Button>
  );
}
