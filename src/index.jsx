import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Home/index';
import TicTacToeGame from './components/TicTacToeGame/index';
import {theme} from './constants/theme'


const Stack = createStackNavigator();

const App = () => {

  const [loaded] = useFonts({
    'ChakraPetch-Regular': require('../assets/fonts/ChakraPetch-Regular.ttf'),
    'ChakraPetch-Bold': require('../assets/fonts/ChakraPetch-Bold.ttf'),
    'ChakraPetch-SemiBold': require('../assets/fonts/ChakraPetch-SemiBold.ttf'),
  });

  if (!loaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="Regular" color={theme.colors.primary} />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TicTacToeGame" component={TicTacToeGame} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;