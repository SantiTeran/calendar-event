import React from 'react';
import { View } from 'react-native';
import TicTacToeSquare from './TicTacToeSquare';
import theme from '../../constants/theme'

const TicTacToeBoard = () => {
  const renderSquare = (index) => {
    return <TicTacToeSquare key={index} value={index} />;
  };

  return (
    <View style={styles.board}>
      {Array(9)
        .fill()
        .map((_, index) => renderSquare(index))}
    </View>
  );
};

export default TicTacToeBoard;