import { StyleSheet, View } from "react-native";
import Quadrado from "./Quadrado";

export default ({}) => {
  return (
    <View style={styles.FlexV1}>
      <Quadrado />
      <Quadrado color="#900" />
      <Quadrado color="#090" />
      <Quadrado color="#009" />
      <Quadrado color="#0009" />
    </View>
  );
};

const styles = StyleSheet.create({
  FlexV1: {
    backgroundColor: "lightgray",
    flexGrow: 1,
    justifyContent: "center",
  },
});
