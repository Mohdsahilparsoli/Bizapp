import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const prepareApp = async () => {
      // yahan future me:
      // 1. token check
      // 2. redux hydrate
      // 3. api call
      // 4. asyncStorage

      setTimeout(() => {
        router.replace("/(auth)/login"); // next screen
      }, 1500);
    };

    prepareApp();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/splash-icon.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      {/* <ActivityIndicator size="large" color="#000" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 160,
    height: 160,
    marginBottom: 20,
  },
});
