import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function CardOne () {
  return (
    <View>
      <Text style={styles.sectionTitle}>Workshops</Text>
      <View style={styles.carouselContainer}>
        {!isWorkshopsAtStart && (
          <TouchableOpacity onPress={handleWorkshopsPrev} style={[styles.navButton, styles.leftButton]}>
            <MaterialIcons name="navigate-before" size={24} color="#333" />
          </TouchableOpacity>
        )}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.baseContainer}
          ref={workshopsScrollRef}
          scrollEnabled={false}
        >
          {workshops.map((item, index) => (
            <View key={index} style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.cardImage} /> 
              <Text style={styles.cardContent}> 
                <Text style={styles.cardTitle}>{item.title}</Text> {"\n"}
                <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
              </Text>
            </View>
          ))}
        </ScrollView>
        {!isWorkshopsAtEnd && (
          <TouchableOpacity onPress={handleWorkshopsNext} style={[styles.navButton, styles.rightButton]}>
            <MaterialIcons name="navigate-next" size={24} color="#333" />
          </TouchableOpacity>
        )}
      </View>
    </View>
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