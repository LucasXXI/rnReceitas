import React, { useEffect } from "react";
import { View, FlatList, Text, Image, StyleSheet } from "react-native";
import { Recipe } from "../../components/recipe/recipe";
import { styles } from "./styles";
import { RecipeProps } from "../../components/recipe/recipe";
import recipesData from "../../data/recipes";

//fix the type of the props
export const RecipeList = () => {
  console.log(recipesData)
  
  return (
     <View style={styles.container}>
      <Text style={styles.header}>Receitas</Text>
       <FlatList
         data={recipesData}
         renderItem={({ item }) => (
           <Recipe
             title={item.title}
             image={item.image}
             ingredients={item.ingredients}
           />
         )}
        />
      </View>
  );
};

