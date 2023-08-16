import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import store from "./store";

import Images from "./screens/Images";
import AddImage from "./screens/AddImage";
import IconButton from "./components/UI/IconButton";

import { Colors } from "./constants/colors";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar />
      <Provider store={store}>
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
              name="imagesList"
              component={Images}
              options={({ navigation }) => ({
                title: "Your favorites camera images",
                headerRight: ({ tintColor }) => (
                  <IconButton
                    color={tintColor}
                    size={30}
                    icon="add"
                    onPress={() => navigation.navigate("addImage")}
                  />
                ),
              })}
            ></Stack.Screen>
            <Stack.Screen
              name="addImage"
              component={AddImage}
              options={{
                presentation: "modal",
                title: "Add new image",
              }}
            ></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
