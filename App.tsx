import React  from "react";
import { SafeAreaView } from "react-native";
import { RecipeList }  from "./src/pages/recipeList/recipeList";

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <RecipeList />
    </SafeAreaView>
  );
}
