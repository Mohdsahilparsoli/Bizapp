import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0b0b",
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },

  /* Logo Section */
  logoBox: {
    alignItems: "center",
    marginTop: 60,
  },

  logo: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    marginBottom: 12,
  },

  brand: {
    fontSize: 28,
    fontWeight: "700",
    color: "#fff",
  },

  subtitle: {
    fontSize: 14,
    color: "#aaa",
    marginTop: 6,
  },

  /* Form */
  form: {
    marginTop: 30,
  },

  input: {
    backgroundColor: "#1c1c1e",
    height: 52,
    borderRadius: 14,
    paddingHorizontal: 16,
    color: "#fff",
    fontSize: 15,
    marginBottom: 14,
  },

  signupBtn: {
    backgroundColor: "#f97316",
    height: 54,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },

  signupText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.4,
  },

  /* Footer */
  footer: {
    marginBottom: 30,
    alignItems: "center",
  },

  footerText: {
    color: "#aaa",
    fontSize: 14,
  },

  login: {
    color: "#f97316",
    fontWeight: "600",
  },
});
