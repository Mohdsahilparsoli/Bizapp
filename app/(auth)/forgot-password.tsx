import { Link } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./forgot-password.styles";

export default function ForgotPasswordScreen() {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoBox}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>Forgot Password?</Text>
        <Text style={styles.subtitle}>
          Enter your email and we’ll send you a reset link
        </Text>
      </View>

      {/* Input */}
      <View style={styles.form}>
        <TextInput
          placeholder="Email address"
          placeholderTextColor="#999"
          style={styles.input}
          keyboardType="email-address"
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Send Reset Link</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Remember your password?
          <Link href="/(auth)/login">
            <Text style={styles.login}> Login</Text>
          </Link>
        </Text>
      </View>
    </View>
  );
}
