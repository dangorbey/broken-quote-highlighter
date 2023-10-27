import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";
import { useCallback } from "react";
import { Text, Touchable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

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
      }
    } catch (err: any) {
      alert(err.errors[0].message);
    }
  }, []);

  return (
    <TouchableOpacity onPress={onPress}>
      <Text>Sign in with Google</Text>
    </TouchableOpacity>
  );
}
