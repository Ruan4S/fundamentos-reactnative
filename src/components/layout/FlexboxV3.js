import { StyleSheet, View } from "react-native";
import Quadrado from "./Quadrado";

export default ({}) => {
  return (
    <View style={styles.FlexV3}>
      <Quadrado color="#000" lado={20} />
      <Quadrado color="#900" lado={30} />
      <Quadrado color="#090" lado={40} />
      <Quadrado color="#009" lado={50} />
      <Quadrado color="#0009" lado={60} />
    </View>
  );
};

const styles = StyleSheet.create({
  FlexV3: {
    backgroundColor: "lightgray",
    height: 350,
    width: "100%",

    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
  },
});
