import { Image, Pressable, StyleSheet, Text } from "react-native";

const ImageItem = ({ image, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Image source={{ uri: image.imageUri }} />
      <View>
        <Text>{image.title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({});

export default ImageItem;
