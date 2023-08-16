import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Alert,
  Button,
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/core";

import { Colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";
import { imagesActions } from "../../store/images-slice";

const ImageForm = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [imageObject, setImageObject] = useState({
    title: "",
    imageUri: "",
  });

  const handleChangeInputHandler = (input, value) => {
    setImageObject((prevState) => {
      return {
        ...prevState,
        [input]: value,
      };
    });
  };

  const inputEmptyValidation = (input) => input.trim().length === 0;

  const handleSubmitForm = () => {
    if (
      inputEmptyValidation(imageObject.imageUri) ||
      inputEmptyValidation(imageObject.title)
    ) {
      Alert.alert("Error", "please provide the title and the image");
      return;
    }
    dispatch(imagesActions.addNewImage(imageObject));
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.form}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          value={imageObject.title}
          onChangeText={handleChangeInputHandler.bind(this, "title")}
        />
      </View>
      <ImagePicker
        onPickImage={handleChangeInputHandler.bind(this, "imageUri")}
      />
      <View style={styles.actions}>
        <View style={styles.action}>
          <Button title="Submit" onPress={handleSubmitForm} />
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
