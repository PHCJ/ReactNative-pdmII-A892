import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/pages/Home";
import Tela1 from "./src/pages/Tela1.jsx";
import Tela2 from "./src/pages/Tela2.jsx";
import Tela3 from "./src/pages/Tela3.jsx";
import Tela4 from "./src/pages/Tela4.jsx";
import Tela5 from "./src/pages/Tela5.jsx";
import Tela6 from "./src/pages/Tela6.jsx";
import Tela7 from "./src/pages/Tela7.jsx";


const { Screen, Navigator } = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
          <Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Screen
            name="Tela1"
            component={Tela1}
          />
          <Screen
            name="Tela2"
            component={Tela2}
          />
          <Screen
            name="Tela3"
            component={Tela3}
          />
          <Screen
            name="Tela4"
            component={Tela4}
          />
          <Screen
            name="Tela5"
            component={Tela5}
          />
          <Screen
            name="Tela6"
            component={Tela6}
          />
          <Screen
            name="Tela7"
            component={Tela7}
          />
        </Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff3",
    paddingTop: "12%",
  },
});
