import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const ListItem = ({ text, onPressItem }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable android_ripple={{ color: "#9g9zcc" }} onPress={onPressItem.bind(this, text)}>
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 10,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    padding: 15,
    color: "white",
    fontSize: 16,
  },
});
export default ListItem;
