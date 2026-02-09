import { useFormik } from "formik";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import { useAppDispatch } from "@/store/hooks";
import { loginUser } from "@/store/slices/authSlice";
import { Link } from "expo-router";
import styles from "./login.styles";

export default function LoginScreen() {
  const dispatch = useAppDispatch();

  const { handleBlur, handleChange, handleSubmit, values, errors } = useFormik({
    initialValues: { email: "testuser123@gmail.com", password: "12345678" },
    onSubmit: async (values, { resetForm }) => {
      let loginflow = await dispatch(loginUser(values)).unwrap();
      console.log(loginflow);
      resetForm();
    },
  });
  return (
    <View style={styles.container}>
      {/* Logo / Brand */}
      <View style={styles.logoBox}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.logo}
        />
        <Text style={styles.brand}>Starting5</Text>
        <Text style={styles.subtitle}>Train Hard. Stay Fit.</Text>
      </View>

      {/* Form */}
      <View style={styles.form}>
        <TextInput
          placeholder="Email address"
          placeholderTextColor="#999"
          style={styles.input}
          value={values.email}
          onChangeText={handleChange("email")}
          onBlur={handleBlur("email")}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          style={styles.input}
          value={values.password}
          onChangeText={handleChange("password")}
          onBlur={handleBlur("password")}
        />

        {/* <Link href="/(tabs)/home" asChild> */}
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => handleSubmit()}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        {/* </Link> */}

        {/* Extra */}
        <TouchableOpacity>
          <Link href="/(auth)/forgot-password">
            {" "}
            <Text style={styles.forgot}>Forgot password?</Text>
          </Link>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Don’t have an account?
          <Link href="/(auth)/signup">
            <Text style={styles.signup}> Sign up</Text>
          </Link>
        </Text>
      </View>
    </View>
  );
}
