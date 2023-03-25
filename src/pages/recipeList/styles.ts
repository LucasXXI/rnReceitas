import { StyleSheet } from "react-native/";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  //add a style for header container
  header: {
    color: '#fff',
    backgroundColor: '#2196F3',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    padding: 15,
    marginBottom: 20,
    width: '100%',
  },
  recipeContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
});