import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PostNavigator } from "./PostNavigator";
import { BookedNavigator } from "./BookedNavigator";
import { Ionicons } from "@expo/vector-icons";
import { THEME } from "../theme";



export const AppNavigation = () => {

  const BottomNavigator = createBottomTabNavigator()

  return (
    <NavigationContainer>
      <BottomNavigator.Navigator 
        initialRouteName="Post" 
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: THEME.MAIN_COLOR
        }}
      >
        <BottomNavigator.Screen 
          name="Post" 
          component={PostNavigator} 
          options={{
            tabBarIcon: info => (
              <Ionicons 
                name='ios-albums' 
                size={25} 
                color={info.focused ? THEME.MAIN_COLOR : "#8E8E8F"}
              />
            ),
            tabBarBadgeStyle: {color: THEME.DANGER_COLOR}
          }}
        />
        <BottomNavigator.Screen 
          name="Booked" 
          component={BookedNavigator} 
          options={{
            tabBarIcon: info => (
              <Ionicons 
                name='ios-star' 
                size={25}
                color={info.focused ? THEME.MAIN_COLOR : "#8E8E8F"}
              />
            )
          }}
        />
      </BottomNavigator.Navigator>
    </NavigationContainer>
  )
}