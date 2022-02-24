import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Text,
  TextInput,
  View,
  ActivityIndicator,
  FlatList,
} from "react-native";
import styled from "styled-components/native";
import DismissKeyboard from "../components/DismissKeyboard";
import { gql, useLazyQuery } from "@apollo/client";
import { ShopItem } from "../components/ShopItem";

const SEE_COFFEE_SHOP_QUERY = gql`
  query seeCoffeeShop($name: String!) {
    seeCoffeeShop(name: $name) {
      id
      name
      photos {
        url
      }
    }
  }
`;

const MessageContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
const MessageText = styled.Text`
  margin-top: 15px;
  color: black;
  font-weight: 600;
`;

export default function Search({ navigation }) {
  const { setValue, register, watch, handleSubmit } = useForm();
  const [startQueryFn, { loading, data, called }] = useLazyQuery(
    SEE_COFFEE_SHOP_QUERY
  );
  const onValid = ({ name }) => {
    startQueryFn({
      variables: {
        name,
      },
    });
    //console.log(data);
    // seeCoffeShop->[{id,photo[]}, ...]
  };
  const SearchBox = () => (
    <TextInput
      style={{ backgroundColor: "white" }}
      placeholderTextColor="black"
      placeholder="Search Photos"
      autoCapitalize="none"
      returnKeyLabel="Search"
      returnKeyType="search"
      autoCorrect={false}
      onChangeText={(text) => setValue("name", text)}
      onSubmitEditing={handleSubmit(onValid)}
    />
  );
  useEffect(() => {
    navigation.setOptions({
      headerTitle: SearchBox,
    });
    register("name", {
      required: true,
      minLength: 3,
    });
  }, []);

  const renderItem = ({ item }) => <ShopItem item={item} />;

  return (
    <DismissKeyboard>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        {loading ? (
          <MessageContainer>
            <ActivityIndicator size="large" />
            <MessageText>Searching...</MessageText>
          </MessageContainer>
        ) : null}
        {!called ? (
          <MessageContainer>
            <MessageText>Search by shop name</MessageText>
          </MessageContainer>
        ) : null}
        {data?.seeCoffeeShop !== undefined ? (
          data?.seeCoffeeShop?.length === 0 ? (
            <MessageContainer>
              <MessageText>Could not find anything.</MessageText>
            </MessageContainer>
          ) : (
            <FlatList
              data={data?.seeCoffeeShop}
              keyExtractor={(shop) => shop.id}
              renderItem={renderItem}
            />
          )
        ) : null}
      </View>
    </DismissKeyboard>
  );
}
