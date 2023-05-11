import { StyleSheet } from 'react-native';
import {theme} from '../../constants/theme'


export const styles = StyleSheet.create({
    square: {
      width: 80,
      height: 80,
      backgroundColor: theme.colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 4,
    },
    selectedSquare: {
      backgroundColor: theme.colors.grey, // Cambia el color según tus preferencias
    },
    text: {
      fontSize: 40,
    },
  });