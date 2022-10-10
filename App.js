import { useEffect, useCallback } from 'react';
import { Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { AppNavigation } from './src/navigation/AppNavigation';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [fontsLoaded] = useFonts({
    'open-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'open-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
  });
  
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  (useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]))();

  if (!fontsLoaded) {
    return null;
  }

  return <AppNavigation />
}



  
  
  // <View >
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <Text style={{fontFamily: 'open-bold'}}>Open up App.js to start working on your app!</Text>
    // </View>