import { View, Text, TouchableOpacity, Image } from "react-native";
import colors from "../colors";

export default function MyProfile({
  username,
  email,
  name,
  avatarURL,
  totalFollowing,
  totalFollowers,
}) {
  //console.log(avatarURL);
  return (
    <View>
      <Image
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
        source={{
          uri: avatarURL,
        }}
      />
      <Text style={{ color: colors.accent, fontSize: 18 }}>{username}</Text>
      <Text style={{ color: colors.accent, fontSize: 18 }}>{name}</Text>
      <Text style={{ color: colors.accent, fontSize: 18 }}>{email}</Text>
      <Text style={{ color: colors.accent, fontSize: 18 }}>
        {totalFollowing}
      </Text>
      <Text style={{ color: colors.accent, fontSize: 18 }}>
        {totalFollowers}
      </Text>
    </View>
  );
}
