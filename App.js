import { useState } from "react";
import { Button, StatusBar, StyleSheet, Text, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalList from "./components/GoalList";

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const startAddGoal = () => {
    setModalIsVisible(true);
  };
  const finishAddGoal = () => {
    setModalIsVisible(false);
  };

  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <View style={styles.container}>
        <Button title="Add New Goal" onPress={startAddGoal} color="#a065ec" />
        <GoalInput setGoalList={setGoalList} visible={modalIsVisible} onCancel={finishAddGoal} />
        <Text style={styles.listTitle}>Your Goals : </Text>
        <GoalList setGoalList={setGoalList} goalList={goalList} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  listTitle: {
    fontSize: 18,
    marginTop: 20,
    color: "white",
    fontWeight: "bold",
  },
});
