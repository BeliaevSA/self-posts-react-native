import { View, Text, StyleSheet, Image, Button, ScrollView, Alert } from "react-native";
import { DATA } from "../data";
import { THEME } from "../theme";

export const PostScreen = ({ route }) => {
  const postId = route.params.postId

  const post = DATA.find(post => post.id === postId)

  const removeHandler = () => {
    Alert.alert(
      "Удаление поста",
      "Вы точно хотите удалить пост?",
      [
        {
          text: "Отменить",
          style: "cancel"
        },
        { text: "Удалить",
        style: "destructive",
        onPress: () => console.log("OK Pressed") }
      ],
      {cancelable: false}
    );
  }

  return (
    <ScrollView>
      <Image source={{uri: post.img}} style={styles.image}/>
      <View style={styles.textWrap}>
        <Text style={styles.title}>{post.text}</Text>
      </View>
      <Button title='Удалить' color={THEME.DANGER_COLOR} onPress={removeHandler}/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  textWrap: {
    padding: 10
  },
  title: {
    fontFamily: 'open-regular'
  }
})