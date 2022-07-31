import { StyleSheet, View } from "react-native";

export default ({}) => {
  return (
    <View style={styles.FlexV4}>
      <View style={styles.V0} />
      <View style={styles.V1} />
      <View style={styles.V2} />
    </View>
  );
};

const styles = StyleSheet.create({
  FlexV4: {
    backgroundColor: "lightgray",
    width: 100,

    flex: 1,
  },
  V0: {
    backgroundColor: "#900",
    height: 300,
  },
  V1: {
    backgroundColor: "#090",
    flex: 3,
  },
  V2: {
    backgroundColor: "#009",
    flex: 1,
  },
});
