import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function SectionTitle ({ title }) {
  return (
    <Text style={styles.sectionTitle}>{title}</Text>
  )
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 12,
    marginHorizontal: 16,
    color: "#776391",
  },
});