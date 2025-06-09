import { StyleSheet, Text, View } from "react-native";

export default function Marketplace() {
  return (
    <View
      style={styles.container}
    >
      <Text>Marketplace Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f1f1f1",
  },
});
