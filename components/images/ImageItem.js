import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Colors } from "../../constants/colors";

const ImageItem = ({ image }) => {
  const navigation = useNavigation();

  const navigateToImageDetailsHandler = () => {
    navigation.navigate("imageDetails", {
      image: image,
    });
  };
  return (
    <Pressable
      style={styles.itemContainer}
      onPress={navigateToImageDetailsHandler}
    >
      <Image source={{ uri: image.imageUri }} style={styles.itemImage} />
      <View style={styles.itemTitleContainer}>
        <Text style={styles.itemTitle}>{image.title}</Text>
      </View>
    </Pressable>
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
