import React from "react";
import { ActivityIndicator } from "react-native-web";
import styled from "styled-components/native";
import colors from "../../colors";

const Button = styled.TouchableOpacity`
  background-color: ${colors.authButton};
  padding: ${(props) => (props.size === "100%" ? "15px 10px" : "10px 5px")};
  border-radius: 3px;
  width: ${(props) => props.size};
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: 600;
  text-align: center;
`;

export default function AuthButton({
  onPress,
  disabled,
  text,
  loading,
  size = "100%",
}) {
  return (
    <Button disabled={disabled} onPress={onPress} size={size}>
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <ButtonText>{text}</ButtonText>
      )}
    </Button>
  );
}
