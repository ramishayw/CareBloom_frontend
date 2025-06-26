import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CardThree ({ category, index, handleCategoryPress }) {
  return (
    <TouchableOpacity 
      key={index} 
      style={styles.categoryCard}
      onPress={() => handleCategoryPress(category.name)}
    >
      <View style={styles.categoryIconContainer}>
        <MaterialIcons name={category.icon as any} size={32} color="#776391" />
      </View>
      <Text style={styles.categoryName}>{category.name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  categoryCard: {
    width: 120,
    height: 120,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    marginRight: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  categoryIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#efe8f4',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
});