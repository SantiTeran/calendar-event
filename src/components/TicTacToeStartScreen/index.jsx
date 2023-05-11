import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import styles from './styles'


const TicTacToeStartScreen = ({ onStartGame }) => {
  return (
    <View style={styles.container}>
      <Text>Tic Tac Toe</Text>
      <Button onPress={onStartGame}>Start Game</Button>
    </View>
  );
};

export default TicTacToeStartScreen;