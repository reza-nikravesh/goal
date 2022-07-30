import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "./ListItem";

const GoalList = ({ goalList, setGoalList }) => {
  const deleteItem = (item) => {
    setGoalList((prev) => [...prev.filter((goal) => goal !== item)]);
  };
  return (
    <View style={styles.goalsList}>
      <FlatList
        data={goalList}
        renderItem={({ item }) => <ListItem onPressItem={deleteItem} text={item} />}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  goalsList: {
    flex: 5,
  },
});
export default GoalList;
