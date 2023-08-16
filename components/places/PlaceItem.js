import { Image, Pressable, StyleSheet, Text } from "react-native";

const PlaceItem = ({ place, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Image source={{ uri: place.imageUri }} />
      <View>
        <Text>{place.title}</Text>
        <Text>{place.address}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({});

export default PlaceItem;
