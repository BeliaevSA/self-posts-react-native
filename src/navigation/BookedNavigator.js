import { createStackNavigator } from "@react-navigation/stack";
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { Platform } from "react-native";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { BookedScreen } from "../screens/BookedScreen";
import { PostScreen } from "../screens/PostScreen";
import { THEME }from '../theme'

export const BookedNavigator = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator 
      initialRouteName="Booked" 
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
        },
        headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
      }}
    >
      <Stack.Screen 
        name="Booked" 
        component={BookedScreen} 
        options={{
          title: 'Избранное',
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
              <Item 
                title='Toggle Drawer'
                iconName='ios-menu'
                onPress={() => console.log('Press menu')}
              />
            </HeaderButtons>
          )
        }}
      />
      <Stack.Screen 
        name="Post" 
        component={PostScreen} 
        options={({route}) => ({
          title: `Пост от ${new Date(route.params.date).toLocaleDateString()}`,
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
              <Item 
                title="Take photo"
                iconName={route.params.booked ? 'ios-star' : 'ios-star-outline'}  
                onPress={() => console.log('Press photo')}
              />
            </HeaderButtons>
          ),
        })}
      />
    </Stack.Navigator>
  )
}

