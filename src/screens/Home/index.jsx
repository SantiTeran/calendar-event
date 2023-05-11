import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import TicTacToeStartScreen from '../../components/index';
import TicTacToeGame from '../../components/index';

const HomeScreen = () => {
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = () => {
    setGameStarted(true);
  };

  return (
    <View style={styles.container}>
      {!gameStarted ? (
        <TicTacToeStartScreen onStartGame={startGame} />
      ) : (
        <TicTacToeGame />
      )}
    </View>
  );
};

export default HomeScreen;
