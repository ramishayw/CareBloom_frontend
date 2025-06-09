import { StyleSheet, Text, View } from "react-native";

export default function Hospital() {
  return (
    <View
      style={styles.container}
    >
      <Text>Hospital Page</Text>
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
