import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Places from "./screens/Places";
import AddPlace from "./screens/AddPlace";
import IconButton from "./components/UI/IconButton";

import { Colors } from "./constants/colors";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: Colors.primary500,
            },
            headerTintColor: Colors.gray700,
            contentStyle: {
              backgroundColor: Colors.gray700,
            },
          }}
        >
          <Stack.Screen
            name="placesList"
            component={Places}
            options={({ navigation }) => ({
              title: "Your favorites places",
              headerRight: ({ tintColor }) => (
                <IconButton
                  color={tintColor}
                  size={30}
                  icon="add"
                  onPress={() => navigation.navigate("addPlace")}
                />
              ),
            })}
          ></Stack.Screen>
          <Stack.Screen
            name="addPlace"
            component={AddPlace}
            options={{
              presentation: "modal",
              title: "Add new place",
            }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
