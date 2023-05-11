import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TicTacToeBoard from './TicTacToeBoard';
import TicTacToeStartScreen from './TicTacToeStartScreen';

const TicTacToeGame = () => {
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = () => {
    setGameStarted(true);
  };

  if (!gameStarted) {
    return <TicTacToeStartScreen onStartGame={startGame} />;
  }

  return (
    <View style={styles.container}>
      <TicTacToeBoard />
    </View>
  );
};

export default TicTacToeGame;