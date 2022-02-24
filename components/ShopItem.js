import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  margin-top: 20px;
  margin-right: 10px;
  margin-bottom: 10px;
  overflow: hidden;
  align-items: center;
`;

const Photo = styled.Image`
  width: 300px;
  height: 200px;
  border-radius: 5px;
`;
const ShopName = styled.Text`
  font-size: 18px;
  margin-top: 5px;
`;

export const ShopItem = ({ item }) => {
  //console.log("컴포넌트", item);
  return (
    <Container>
      <Photo source={{ uri: item?.photos[0]?.url }} />
      <ShopName>{item?.name}</ShopName>
    </Container>
  );
};
