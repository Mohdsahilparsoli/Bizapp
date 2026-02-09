import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0b0b",
    paddingHorizontal: 16,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },

  welcome: {
    color: "#aaa",
    fontSize: 14,
  },

  name: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
  },

  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },

  statCard: {
    backgroundColor: "#1a1a1a",
    width: "31%",
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: "center",
  },

  statValue: {
    color: "#f97316",
    fontSize: 20,
    fontWeight: "700",
  },

  statLabel: {
    color: "#aaa",
    fontSize: 12,
    marginTop: 6,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },

  viewAll: {
    color: "#f97316",
    fontSize: 13,
  },

  programGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  programCard: {
    width: "48%",
    backgroundColor: "#1c1c1e",
    borderRadius: 16,
    marginBottom: 16,
    overflow: "hidden",
  },

  programImage: {
    width: "100%",
    height: 110,
  },

  programContent: {
    padding: 10,
  },

  programCategory: {
    color: "#f97316",
    fontSize: 11,
    marginBottom: 4,
  },

  programTitle: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "600",
  },

  ctaBox: {
    backgroundColor: "#f97316",
    borderRadius: 20,
    padding: 20,
    marginVertical: 24,
  },

  ctaTitle: {
    color: "#000",
    fontSize: 18,
    fontWeight: "700",
  },

  ctaDesc: {
    color: "#111",
    fontSize: 13,
    marginVertical: 6,
  },

  ctaBtn: {
    backgroundColor: "#000",
    marginTop: 12,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },

  ctaText: {
    color: "#fff",
    fontWeight: "600",
  },
});
