import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import ImagesList from "../components/images/ImagesList";

const Images = () => {
  const imagesList = useSelector((state) => state.images.images);
  return (
    <View style={styles.container}>
      <ImagesList images={imagesList} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16
  }
});

export default Images;
