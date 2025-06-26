import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function CardOne ({ item, index }) {
  return (
    <>
      <View key={index} style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.cardImage} /> 
        <Text style={styles.cardContent}> 
          <Text style={styles.cardTitle}>{item.title}</Text> {"\n"}
          <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
        </Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  card: {
    width: 160,
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    marginRight: 12,
  },
  cardImage: {
    width: "100%",
    height: 100,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    marginBottom: 8,
    resizeMode: "contain",
  },
  cardContent: {
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 30
  },
  cardSubtitle: {
    fontSize: 12,
    color: "#555",
  },
});