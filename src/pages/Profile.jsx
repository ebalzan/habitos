import {
  Animated,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
} from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";

import styles from "./styles/globalStyles";
import mocks from "../mocks/text";

export default function Profile({ navigation }) {
  const posFooter = new Animated.Value(-50);

  Animated.timing(posFooter, {
    toValue: 20,
    duration: 800,
    useNativeDriver: false,
  }).start();

  return (
    <View style={styles.screen}>
      <View style={styles.profileHeader}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Icon name={"arrow-back"} size={24} color={"#2365a7"} />
        </TouchableOpacity>
      </View>

      <View style={styles.profileContent}>
        <TouchableOpacity style={styles.photo}>
          <Image
            style={styles.photoImage}
            source={require("../assets/foto-perfil-melhorada.jpg")}
          />
        </TouchableOpacity>

        <View style={styles.form}>
          <View style={styles.inputsContainer}>
            <TextInput style={styles.inputs} placeholder={"Name"} />
            <TextInput style={styles.inputs} placeholder={"Last Name"} />
            <TextInput
              style={styles.inputs}
              placeholder={"Age"}
              keyboardType={"numeric"}
            />
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{mocks.next.title}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Animated.View
        style={{
          alignItems: "center",
          position: "absolute",
          bottom: posFooter,
        }}
      >
        <Text style={styles.footerText}>{mocks.footer.authors}</Text>
      </Animated.View>
    </View>
  );
}
