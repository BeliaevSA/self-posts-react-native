
import { createStackNavigator } from "@react-navigation/stack";
import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";

const PostNavigator = createStackNavigator()

export const AppNavigation = () => {
  return (
      <PostNavigator.Navigator initialRouteName="Main" >
        <PostNavigator.Screen name="Main" component={MainScreen} />
        <PostNavigator.Screen name="Post" component={PostScreen} />
      </PostNavigator.Navigator>
  )
}