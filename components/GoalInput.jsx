import React, { useState } from "react";
import { Button, Image, Modal, StyleSheet, Text, TextInput, View } from "react-native";

const GoalInput = ({ setGoalList, visible, onCancel }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (text) => {
    setEnteredGoal(text);
  };

  const addGoalHandler = () => {
    setGoalList((prev) => [...prev, enteredGoal]);
    setEnteredGoal("");
    onCancel();
  };
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/goal.png")} />
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder="your course goal"
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.botton}>
            <Button title="add goal" onPress={addGoalHandler} color="#b180f0" />
          </View>
          <View style={styles.botton}>
            <Button title="cancel" onPress={onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#313b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    width: "100%",
    padding: 15,
    borderRadius: 6,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  botton: {
    width: 100,
    margin: 8,
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
});

export default GoalInput;
