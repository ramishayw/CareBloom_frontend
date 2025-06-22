import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function HealthTipCard ({ tip, index, screenWidth }) {
  return (
    <View key={index} style={[styles.healthTipContainer, { width: screenWidth - 32 }]}>
      <Image
        source={tip.image}
        style={styles.tipImage}
        resizeMode="cover" 
      />
      <Text style={styles.tipText}>
        <Text style={styles.bold}>{tip.title}</Text> {"\n\n"}
        <Text style={styles.text}>{tip.desciption}</Text>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  healthTipContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#efe8f4",
    borderRadius: 12,
    paddingRight: 16,
    marginRight: 16,
  },
  tipImage: {
    width: 140,
    height: 140,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  tipText: {
    paddingLeft: 16,
    flex: 1,
  },
  bold: {
    fontWeight: "bold",
    color: "#776391",
    fontSize: 16,
  },
  text: {
    marginTop: 8,
    color: "#333",
    fontSize: 12,
    textAlign: "justify",
  },
});