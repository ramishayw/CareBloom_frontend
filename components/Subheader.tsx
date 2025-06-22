import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Subheader({ title }) {
  const handleBackPress = () => {
    router.back();
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#776391" />
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.logo}>{title}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 10,
    position: "relative",
    backgroundColor: "#776391",
    paddingHorizontal: 16,
  },
  backButton: {
    padding: 4,
    paddingTop: 8,
    marginRight: 16,
    height: 40,
    width: 40,
  },
  logo: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff",
    justifyContent: "space-between",
  },
});
