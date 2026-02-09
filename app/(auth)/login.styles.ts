import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0B0B",
    paddingHorizontal: 24,
  },

  logoBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 90,
    height: 90,
    marginBottom: 16,
  },

  brand: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "700",
    letterSpacing: 1,
  },

  subtitle: {
    color: "#aaa",
    marginTop: 6,
    fontSize: 14,
  },

  form: {
    flex: 1,
  },

  input: {
    backgroundColor: "#1A1A1A",
    borderRadius: 14,
    paddingHorizontal: 18,
    paddingVertical: 16,
    color: "#fff",
    fontSize: 15,
    marginBottom: 14,
  },

  loginBtn: {
    backgroundColor: "#E10600",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 10,
  },

  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  forgot: {
    color: "#aaa",
    textAlign: "center",
    marginTop: 16,
    fontSize: 14,
  },

  footer: {
    paddingBottom: 30,
    alignItems: "center",
  },

  footerText: {
    color: "#aaa",
    fontSize: 14,
  },

  signup: {
    color: "#E10600",
    fontWeight: "600",
  },
});

export default styles;
