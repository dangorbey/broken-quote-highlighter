import { View, Text } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";

const CreatePage = () => {
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
      <Text>Create a Quote</Text>
    </View>
  );
};

export default CreatePage;
