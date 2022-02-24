import { gql, useQuery, useReactiveVar } from "@apollo/client";
import { View, Text, TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native";
import { isLoggedInVar, logUserOut } from "../apollo";
import AuthButton from "../components/auth/AuthButton";
import MyProfile from "../components/MyProfile";
import Login from "./Login";

const MYPROFILE_QUERY = gql`
  query myProfile {
    myProfile {
      username
      email
      name
      avatarURL
      totalFollowing
      totalFollowers
    }
  }
`;

export default function Profile() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const { data, loading, refetch } = useQuery(MYPROFILE_QUERY);
  if (isLoggedIn) {
    refetch();
    //console.log(data);
  }

  return isLoggedIn ? (
    <View style={{ flex: 1 }}>
      {loading ? (
        <ActivityIndicator
          style={{
            justifyContent: "center",
            alignContent: "center",
            size: "large",
          }}
        />
      ) : (
        <MyProfile {...data?.myProfile} />
      )}
      <AuthButton
        onPress={logUserOut}
        disabled={false}
        text="로그아웃"
        loading={false}
        size="25%"
      />
    </View>
  ) : (
    <Login />
  );
}
