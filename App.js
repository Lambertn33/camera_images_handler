import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Places from "./screens/Places";
import AddPlace from "./screens/AddPlace";
import IconButton from "./components/UI/IconButton";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="placesList"
            component={Places}
            options={{
              title: "List of places",
              headerRight: ({ tintColor }) => (
                <IconButton
                  color={tintColor}
                  size={23}
                  icon="add"
                  onPress={() => {}}
                />
              ),
            }}
          ></Stack.Screen>
          <Stack.Screen name="addPlace" component={AddPlace}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
