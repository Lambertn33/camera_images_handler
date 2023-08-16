import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";

const ImageItem = ({ image, onPress }) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={{ uri: image.imageUri }} style={styles.itemImage} />
      <View style={styles.itemTitleContainer}>
        <Text style={styles.itemTitle}>{image.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    height: 120,
    borderRadius: 8,
    backgroundColor: Colors.primary500,
    flexDirection: "row",
    marginBottom: 16,
  },
  itemImage: {
    flex: 2,
    height: "100%",
    width: "100%",
  },
  itemTitleContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "800",
  },
});

export default ImageItem;
