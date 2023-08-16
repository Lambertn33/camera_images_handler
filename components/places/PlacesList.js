import { FlatList } from "react-native";
import PlaceItem from "./PlaceItem";

const PlaceList = ({ places }) => {
  return (
    <FlatList
      data={places}
      keyExtractor={(place) => place.id}
      renderItem={({ item }) => <PlaceItem place={item} key={item.id} />}
    />
  );
};

export default PlaceList;
