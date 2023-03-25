import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { styles } from './styles';

export type RecipeProps = {
  title: string;
  image: string;
  ingredients: string[];
}

export const Recipe = ({ title, image, ingredients }: RecipeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.image} source={{ uri: image }} />
      <Text style={styles.ingredients}>Ingredients</Text>
      {ingredients.map(ingredient => (
        <Text style={styles.ingredient} key={ingredient}>{ingredient}</Text>
      ))}
    </View>
  );
};
