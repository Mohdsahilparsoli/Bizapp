import React from "react";
import {
    ActivityIndicator,
    Platform,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { WebView } from "react-native-webview";

const Website = () => {
  // ❌ Web browser me WebView support nahi hota
  if (Platform.OS === "web") {
    return (
      <View style={styles.webContainer}>
        <Text style={styles.webText}>
          WebView sirf Android / iOS me kaam karta hai.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: "https://starting5.net/sign-up-for-the-shootout/" }}
        startInLoadingState={true}
        renderLoading={() => (
          <ActivityIndicator size="large" style={styles.loader} />
        )}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </View>
  );
};

export default Website;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loader: {
    flex: 1,
  },
  webContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  webText: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
  },
});
