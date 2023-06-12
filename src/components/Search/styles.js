import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  title: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    marginBottom: 10,
    fontSize: 15,
    fontWeight: "500",
  },
  filtro: {
    flex: 0,
    flexDirection: "row",
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#0494fc",
  },
  image: {
    width: 15,
    height: 15,
    marginRight: 16,
  },
  containerModal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  modal: { backgroundColor: "#fff", padding: 20 },

  sidebyside: {
    flex: 0,
    flexDirection: "row",
    padding: 10,
    width: "100%",
    justifyContent: "space-around",
  },

  button: {
    fontSize: 10,
  },
});
