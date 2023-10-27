import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";
import { useCallback } from "react";
import { Text, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

WebBrowser.maybeCompleteAuthSession();

export function OAuthButtons() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        if (setActive) {
          setActive({ session: createdSessionId });
        }
      } else {
        // not sure what this is for? it says to use for MFA?
      }
    } catch (err: any) {
      alert(err.errors[0].message);
    }
  }, []);

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Ionicons name="logo-google" color={"#fff"} />
      <Text style={styles.buttonText}>Sign in with Google</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  inputField: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderColor: "#6c47ff",
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fff",
    marginBottom: 20,
  },
  button: {
    marginVertical: 4,
    height: 50,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#6c47ff",
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
