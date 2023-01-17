import {
  Text,
  Animated,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

//styles
import styles from "./styles/globalStyles";

//mocks
import mocks from "../mocks/text";

export default function Login({ navigation }) {
  const posMain = new Animated.Value(-700);
  const posFooter = new Animated.Value(-50);

  Animated.timing(posMain, {
    toValue: 0,
    duration: 500,
    useNativeDriver: false,
  }).start();

  Animated.timing(posFooter, {
    toValue: 20,
    duration: 800,
    useNativeDriver: false,
  }).start();

  return (
    <View style={styles.screen}>
      <Animated.View
        style={{
          width: "100%",
          position: "relative",
          top: posMain,
        }}
      >
        <View style={styles.logoLogin}>
          <Image
            source={require("../assets/logo.png")}
            style={styles.iconLogin}
          />
          <Text style={styles.titleLogin}>{"Habit.me"}</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.inputsContainer}>
            <TextInput style={styles.inputs} placeholder={"Email"} />
            <TextInput
              style={styles.inputs}
              placeholder={"Password"}
              secureTextEntry
            />
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{mocks.login.signIn}</Text>
          </TouchableOpacity>

          <View style={styles.formFooter}>
            <Text style={styles.text}>
              {mocks.login.account}{" "}
              <Text
                onPress={() => navigation.navigate("Profile")}
                style={styles.textBold}
              >
                {mocks.login.signUp}
              </Text>
            </Text>
          </View>
        </View>
      </Animated.View>

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
