import { StyleSheet } from "react-native";

const mainColor = "#2365a7";

const styles = StyleSheet.create({
  profileHeader: {
    width: "100%",
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 14,
  },
  profileContent: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: "100%",
    paddingHorizontal: 50,
  },
  inputsContainer: {
    paddingVertical: 20,
  },
  inputs: {
    color: "#585858",
    fontFamily: "MontserratRegular",
    fontSize: 16,
    width: "100%",
    borderWidth: 0.5,
    borderColor: "#bbbbbb",
    borderRadius: 10,
    padding: 20,
    marginVertical: 4,
    backgroundColor: "white",
  },
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  iconLogin: {
    width: 150,
    height: 150,
  },
  logoLogin: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  titleLogin: {
    fontFamily: "MontserratBold",
    color: mainColor,
    fontSize: 24,
    paddingVertical: 10,
  },
  formFooter: {
    alignItems: "center",
    paddingVertical: 16,
  },
  text: {
    color: mainColor,
    fontSize: 14,
    fontFamily: "MontserratRegular",
    paddingVertical: 10,
  },
  textBold: {
    color: mainColor,
    fontSize: 14,
    fontFamily: "MontserratBold",
    paddingVertical: 10,
  },
  button: {
    alignItems: "center",
    borderRadius: 10,
    padding: 12,
    backgroundColor: mainColor,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontFamily: "MontserratBold",
    textTransform: "uppercase",
  },
  footerText: {
    color: mainColor,
    fontSize: 12,
    fontFamily: "MontserratRegular",
  },
  photo: {
    width: 128,
    height: 128,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C8C8C8",
    borderWidth: 1.5,
    borderColor: mainColor,
    borderRadius: 100,
    marginVertical: 20,
  },
  photoImage: { width: "100%", height: "100%", borderRadius: 100 },
});

export default styles;
