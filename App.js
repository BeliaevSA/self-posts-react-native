import { useEffect, useCallback } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { AppNavigation } from './src/navigation/AppNavigation';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   'open-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  //   'open-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
  // });

  // useEffect(() => {
  //   async function prepare() {
  //     await SplashScreen.preventAutoHideAsync();
  //   }
  //   prepare();
  // }, []);

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    // <View onLayout={onLayoutRootView}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <Text style={{fontFamily: 'open-bold'}}>Open up App.js to start working on your app!</Text>
    // </View>
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
    
  );
}

