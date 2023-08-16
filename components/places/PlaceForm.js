import { useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";

import { Colors } from "../../constants/colors";

const PlaceForm = () => {
  const [title, setTitle] = useState("");
  const handleChangeTitle = (enteredTitle) => setTitle(enteredTitle);

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={handleChangeTitle}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
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
    fontSize: 18
  },
});

export default PlaceForm;
