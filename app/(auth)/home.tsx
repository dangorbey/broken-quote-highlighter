import { View, Text } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";

const HomePage = () => {
  const { user } = useUser();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Welcome, {user?.emailAddresses[0].emailAddress}</Text>
    </View>
  );
};

export default HomePage;
