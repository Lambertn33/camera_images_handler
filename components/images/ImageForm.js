import { useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";

import { Colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";
import { Button } from "react-native";

const ImageForm = () => {
  const [title, setTitle] = useState("");
  const handleChangeTitle = (enteredTitle) => setTitle(enteredTitle);

  return (
    <ScrollView style={styles.form}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={handleChangeTitle}
        />
      </View>
      <ImagePicker />
      <View style={styles.actions}>
        <View style={styles.action}>
          <Button title="Submit" />
        </View>
        <View style={styles.action}>
          <Button title="Cancel" />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  inputContainer: {
    marginBottom: 16,
  },

  label: {
    color: Colors.primary200,
    fontWeight: "600",
    marginBottom: 6,
  },

  input: {
    backgroundColor: Colors.primary200,
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 4,
    fontSize: 18,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    marginTop: 16,
  },
  action: {
    flex: 1,
  },
});

export default ImageForm;
