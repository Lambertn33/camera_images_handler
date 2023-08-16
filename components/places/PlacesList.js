import { FlatList, StyleSheet, Text, View } from "react-native";
import PlaceItem from "./PlaceItem";

const PlaceList = ({ places }) => {
  if (!places || places.length === 0) {
    return (
      <View style={styles.placesEmpty}>
        <Text style={styles.placesEmptyText}>
          No places yet... Please start adding some
        </Text>
      </View>
    );
  }
  return (
    <FlatList
      data={places}
      keyExtractor={(place) => place.id}
      renderItem={({ item }) => <PlaceItem place={item} key={item.id} />}
    />
  );
};

const styles = StyleSheet.create({
  placesEmpty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  placesEmptyText: {
    fontSize: 18,
    fontWeight: "600",
  },
});

export default PlaceList;
