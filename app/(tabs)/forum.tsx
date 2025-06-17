import Header from "@/components/Header";
import { StyleSheet, Text, View } from "react-native";

export default function Forum() {
  return (
    <>
      <Header />
      <View
        style={styles.container}
      >
        <Text>Forum Page</Text>
      </View>
    </>
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
