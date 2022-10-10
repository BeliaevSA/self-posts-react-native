import { View, Text, StyleSheet, Button, FlatList } from "react-native";

import { Post } from "../components/Post";
import { DATA } from '../data'
import { AppHeaderIcon } from "../components/AppHeaderIcon";

export const MainScreen = ({navigation}) => {
const openPostHandler = post => {
  navigation.navigate('Post', {postId: post.id, date: post.date, booked: post.booked})
}

  return (
    <View style={styles.wraper}>
      <FlatList 
        data={DATA}
        keyExtractor={post => post.id.toString()}
        renderItem={({item}) => <Post post={item} onOpen={openPostHandler}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wraper: {
    padding: 10
  }
})