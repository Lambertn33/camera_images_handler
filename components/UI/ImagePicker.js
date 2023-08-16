import { launchCameraAsync } from "expo-image-picker";
import { useState } from "react";
import { View, Button, Image, StyleSheet, Text } from "react-native";
import { Colors } from "../../constants/colors";

const ImagePicker = () => {
  const [image, setImage] = useState(null);
  const pickImageHandler = async () => {
    const pickedImage = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    setImage(pickedImage.assets[0].uri);
  };

  const removeImageHandler = () => setImage(null);

  return (
    <>
      <View style={styles.imageContainer}>
        {!image ? (
          <Text style={styles.emptyImageText}>No image selected</Text>
        ) : (
          <Image source={{ uri: image }} style={styles.image} />
        )}
      </View>
      <Button
        title={image ? "Remove image" : "Take Image"}
        onPress={image ? removeImageHandler : pickImageHandler}
        color={image ? "red" : ""}
      />
    </>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: 200,
    backgroundColor: Colors.primary200,
    marginBottom: 16,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  emptyImageText: {
    fontSize: 18,
    fontWeight: "700",
  },
});

export default ImagePicker;
