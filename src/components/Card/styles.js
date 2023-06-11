import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    flexDirection: "row",
  },
  sideBar: {
    width: 8,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  contentContainer: {
    flex: 1,
    paddingLeft: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  cardTitle: {
    fontSize: 15,
    marginBottom: 8,
    padding: 5,
    flexWrap: "wrap",
  },

  row: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  image: {
    width: 35,
    height: 35,
    marginRight: 16,
  },
  tag: {
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: "#0494fc",
    borderWidth: 2,
  },
});
