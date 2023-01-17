import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

//pages
import Login from "./src/pages/Login";
import Profile from "./src/pages/Profile";

const { Navigator, Screen } = createNativeStackNavigator();

export default function App() {
  const [fontLoaded] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  if (!fontLoaded) return null;

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={"transparent"}
        translucent
      />
      <Navigator
        initialRouteName={"Login"}
        screenOptions={{ headerShown: false }}
      >
        <Screen name={"Login"} component={Login} />
        <Screen name={"Profile"} component={Profile} />
      </Navigator>
    </NavigationContainer>
  );
}
