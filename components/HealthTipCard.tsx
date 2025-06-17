import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, Image, StyleSheet, Text, View } from 'react-native';

export default function HealthTipCard () {
  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const slideAnim = useRef(new Animated.Value(0)).current;
  const screenWidth = Dimensions.get('window').width;

  const healthTips = [
    {
      title: "Stay Hyderated",
      desciption: "Drinking plenty of water is essential for both you and your baby's health. Aim for at least 8 glasses a day.",
      image: require("../assets/images/Home/Dehydration-During-Pregnancy-1.jpg"),
    },
    {
      title: "Healthy Eating",
      desciption: "Eating a balanced diet is important for both you and your baby's health. Focus on whole, nutrient-dense foods.",
      image: require("../assets/images/Home/pexels-ella-olsson-572949-1640777.jpg"),
    },
    {
      title: "Sleep Well",
      desciption: "Sleep is essential for both you and your baby's health. Get enough quality sleep each night.",
      image: require("../assets/images/Home/pexels-olly-3807624.jpg"),
    }
  ];

  // Auto-cycle health tips every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentTipIndex + 1) % healthTips.length;
      
      // Slide to next tip
      Animated.timing(slideAnim, {
        toValue: -screenWidth * nextIndex,
        duration: 500,
        useNativeDriver: true,
      }).start();
      
      setCurrentTipIndex(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentTipIndex, slideAnim, healthTips.length, screenWidth]);
  
  // const currentTip = healthTips[currentTipIndex];
  
  // Handle tip navigation dots
  // const handleTipNavigation = (index) => {
  //   Animated.timing(slideAnim, {
  //     toValue: -screenWidth * index,
  //     duration: 300,
  //     useNativeDriver: true,
  //   }).start();
  //   setCurrentTipIndex(index);
  // };

  return (
    <View>
      <Text style={styles.sectionTitle}>Health Tips</Text>
      <View style={styles.healthTipWrapper}>
        <Animated.View 
          style={[
            styles.healthTipSlider,
            {
              transform: [{ translateX: slideAnim }],
              width: screenWidth * healthTips.length
            }
          ]}
        >
          {healthTips.map((tip, index) => (
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
          ))}
        </Animated.View>
      </View>
      {/* Health tip indicators */}
      {/* <View style={styles.indicatorContainer}>
        {healthTips.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.indicator,
              currentTipIndex === index ? styles.activeIndicator : styles.inactiveIndicator
            ]}
            onPress={() => handleTipNavigation(index)}
          />
        ))}
      </View> */}
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
  healthTipWrapper: {
    overflow: 'hidden',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  healthTipSlider: {
    flexDirection: 'row',
  },
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
  // indicator styling
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 8,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeIndicator: {
    backgroundColor: '#776391',
  },
  inactiveIndicator: {
    backgroundColor: '#c4c4c4',
  },
});