import { View } from "react-native";

export default ({ lado, color }) => {
  const ladoFinal = lado || 50;

  return <View style={{ height: ladoFinal, width: ladoFinal, backgroundColor: color || "#000" }} />;
};
