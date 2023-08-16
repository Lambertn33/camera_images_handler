import { FlatList, StyleSheet, Text, View } from "react-native";
import ImageItem from "./ImageItem";
import { Colors } from "../../constants/colors";

const ImagesList = ({ images }) => {
  if (!images || images.length === 0) {
    return (
      <View style={styles.imagesEmpty}>
        <Text style={styles.imagesEmptyText}>
          No Images yet... Please start uploading some
        </Text>
      </View>
    );
  }
  return (
    <FlatList
      data={images}
      keyExtractor={(image) => image.id}
      renderItem={({ item }) => <ImageItem image={item} key={item.id} />}
    />
  );
};

const styles = StyleSheet.create({
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

export default ImagesList;
