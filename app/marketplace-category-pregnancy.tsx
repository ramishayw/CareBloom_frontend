import Subheader from '@/components/Subheader';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function MarketplaceCategoryPregnancy () {
  return (
    <>
        <Subheader title="Pregnancy" />
        <View style={styles.container}>
            <Text>MArketplace Category Pregnency</Text>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
  },
});