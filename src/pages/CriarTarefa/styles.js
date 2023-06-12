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
    paddingHorizontal: 100,
    paddingVertical: 25,
    borderRadius: 10,
    marginTop: 5,
  },
  button: {
    borderRadius: 10,
    marginTop: 30,
    padding: 15,
    backgroundColor: "#0494fc",
  },
});
