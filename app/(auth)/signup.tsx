import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import { Link } from "expo-router";
import styles from "./signup.styles";

export default function SignupScreen() {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoBox}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.logo}
        />
        <Text style={styles.brand}>Starting5</Text>
        <Text style={styles.subtitle}>Create your fitness journey</Text>
      </View>

      {/* Form */}
      <View style={styles.form}>
        <TextInput
          placeholder="Full name"
          placeholderTextColor="#999"
          style={styles.input}
        />

        <TextInput
          placeholder="Email address"
          placeholderTextColor="#999"
          style={styles.input}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          style={styles.input}
        />

        <TextInput
          placeholder="Confirm password"
          placeholderTextColor="#999"
          secureTextEntry
          style={styles.input}
        />

        <TouchableOpacity style={styles.signupBtn}>
          <Text style={styles.signupText}>Create Account</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Already have an account?
          <Link href="/(auth)/login">
            <Text style={styles.login}> Login</Text>
          </Link>
        </Text>
      </View>
    </View>
  );
}
