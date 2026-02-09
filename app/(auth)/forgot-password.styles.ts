import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    justifyContent: "space-between",
  },

  logoBox: {
    alignItems: "center",
    marginTop: 80,
  },

  logo: {
    width: 90,
    height: 90,
    resizeMode: "contain",
    marginBottom: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    lineHeight: 20,
    maxWidth: 280,
  },

  form: {
    marginTop: 40,
  },

  input: {
    height: 54,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 15,
    color: "#000",
    marginBottom: 20,
  },

  button: {
    height: 54,
    backgroundColor: "#000",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  footer: {
    alignItems: "center",
    marginBottom: 30,
  },

  footerText: {
    fontSize: 14,
    color: "#555",
  },

  login: {
    color: "#000",
    fontWeight: "600",
  },
});

export default styles;
