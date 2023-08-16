import { View, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";
import ImagesList from "../components/images/ImagesList";
import { Colors } from "../constants/colors";

const Images = () => {
  const imagesList = useSelector((state) => state.images.images);
  if (imagesList.length === 0) {
    return (
      <View style={styles.imagesEmpty}>
        <Text style={styles.imagesEmptyText}>
          No Images yet... Please start uploading some
        </Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <ImagesList images={imagesList} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  imagesEmpty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imagesEmptyText: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.primary200,
  },
});

export default Images;
