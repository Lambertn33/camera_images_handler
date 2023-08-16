import { FlatList } from "react-native";
import ImageItem from "./ImageItem";

const ImagesList = ({ images }) => {
  return (
    <FlatList
      data={images}
      keyExtractor={(image) => image.id}
      renderItem={({ item }) => <ImageItem image={item} key={item.id} />}
    />
  );
};

export default ImagesList;
