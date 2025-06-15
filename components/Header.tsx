import { Image, StatusBar, StyleSheet, Text, View } from "react-native";

export default function Header () {
    return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="#776391" />
    <View style={styles.header}>
      <Image
        source={{
          uri: "https://randomuser.me/api/portraits/women/44.jpg",
        }}
        style={styles.avatar}
      />
      <Text style={styles.logo}>CareBloom</Text>
      <Image
        source={{
          uri: "https://img.icons8.com/ios-filled/50/000000/appointment-reminders--v1.png",
        }}
        style={styles.bellIcon}
      />
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
    justifyContent: "space-between",
    backgroundColor: "#776391",
    paddingHorizontal: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  logo: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff",
  },
  bellIcon: {
    width: 24,
    height: 24,
    tintColor: "#fff",
  },
});