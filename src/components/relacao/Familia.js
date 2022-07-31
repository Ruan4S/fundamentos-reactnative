import { Text } from "react-native";

export default ({ children }) => {
  return (
    <>
      <Text>[INÍCIO] Membros da Família :</Text>
      {children}
      <Text>[FIM] Membros da Família :</Text>
    </>
  );
};
