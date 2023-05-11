import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import styles from './styles'

const TicTacToeSquare = ({ value, onPress }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handlePress = () => {
    setIsSelected(true);
    onPress();
  };

  return (
    <TouchableOpacity
      style={[styles.square, isSelected && styles.selectedSquare]}
      onPress={handlePress}
    >
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
};

export default TicTacToeSquare;