import React from 'react';
import { AppLoading } from 'expo';

import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';

import Routes from './src/routes/';
import { ThemeContextProvider } from './src/contexts/toggleTheme';

const App: React.FC = () => {

  let [fontsLoaded] = useFonts({
    roboto_400: Roboto_400Regular,
    roboto_500: Roboto_500Medium,
    roboto_700: Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeContextProvider>
       <Routes />
    </ThemeContextProvider>  
  );
}
export default App;