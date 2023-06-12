import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: "center",
    justifyContent: "space-around",
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
  label: {
    marginBottom: 10,
    fontSize: 15,
    fontWeight: "400",
  },
  input: {
    backgroundColor: "white",
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 5,
    maxWidth: 200,
    maxWidth: 200,
  },
  button: {
    borderRadius: 10,
    marginTop: 30,
    padding: 15,
    backgroundColor: "#0494fc",
  },
  sidebyside: {
    flex: 0,
    flexDirection: "row",
  },
});
