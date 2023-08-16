import { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Colors } from "../constants/colors";

const ImageDetails = ({ route, navigation }) => {
  const { image } = route.params;
  useEffect(() => {
    navigation.setOptions({
      title: image.title,
    });
  }, [route, image]);
  return (
    <View style={styles.container}>
      <Image source={{ uri: image.imageUri }} style={styles.image} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{image.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: Colors.primary500,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 250,
    marginBottom: 10
  },
  titleContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: '700'
  },
});

export default ImageDetails;
