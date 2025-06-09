import { StyleSheet, Text, View } from "react-native";

export default function ResourceHub() {
  return (
    <View
      style={styles.container}
    >
      <Text>Resiurce Hub Page</Text>
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
