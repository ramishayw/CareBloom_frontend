import Header from '@/components/Header';
import HealthTipCard from '@/components/HealthTipCard';
import { MaterialIcons } from '@expo/vector-icons';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useRef, useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

export default function Home() {
  const name = "Evelyn";

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const workshopsScrollRef = useRef(null);
  const productsScrollRef = useRef(null);
  const [workshopsScrollPosition, setWorkshopsScrollPosition] = useState(0);
  const [productsScrollPosition, setProductsScrollPosition] = useState(0);

  const workshops = [
    {
      title: "Prenatal Yoga",
      subtitle: "Learn gentle exercises to prepare for labor.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi9PL4kSTOuI_Oaf8cSGX8fwBIxjGcE_jKXQ&s",
    },
    {
      title: "Breastfeeding Basics",
      subtitle: "Master the art of breastfeeding.",
      image: "https://cdn-icons-png.flaticon.com/512/3793/3793589.png",
    },
    {
      title: "Baby Care 101",
      subtitle: "Essential care tips for new parents.",
      image: "https://cdn-icons-png.flaticon.com/512/3793/3793589.png",
    },
    {
      title: "Prenatal Yoga",
      subtitle: "Learn gentle exercises to prepare for labor.",
      image: "https://cdn-icons-png.flaticon.com/512/4151/4151526.png",
    },
    {
      title: "Breastfeeding Basics",
      subtitle: "Master the art of breastfeeding.",
      image: "https://cdn-icons-png.flaticon.com/512/3793/3793596.png",
    },
    {
      title: "Baby Care 101",
      subtitle: "Essential care tips for new parents.",
      image: "https://cdn-icons-png.flaticon.com/512/3793/3793589.png",
    },
  ];

  const products = [
    {
      title: "Stroller",
      subtitle: "Comfortable and safe for your baby.",
      image: "https://cdn-icons-png.flaticon.com/512/3343/3343677.png",
    },
    {
      title: "Carrier",
      subtitle: "Keep your baby close and secure.",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135706.png",
    },
    {
      title: "Monitor",
      subtitle: "Peace of mind with real-time alerts.",
      image: "https://cdn-icons-png.flaticon.com/512/4040/4040440.png",
    },
    {
      title: "Stroller",
      subtitle: "Comfortable and safe for your baby.",
      image: "https://cdn-icons-png.flaticon.com/512/3343/3343677.png",
    },
    {
      title: "Carrier",
      subtitle: "Keep your baby close and secure.",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135706.png",
    },
  ];

  const cardWidth = 172; // 160 card width + 12 margin

  const handleWorkshopsNext = () => {
    const newPosition = workshopsScrollPosition + cardWidth;
    const maxScroll = (workshops.length - 2) * cardWidth; // Show 2 cards at a time
    const scrollTo = Math.min(newPosition, maxScroll);
    
    workshopsScrollRef.current?.scrollTo({ x: scrollTo, animated: true });
    setWorkshopsScrollPosition(scrollTo);
  };

  const handleWorkshopsPrev = () => {
    const newPosition = Math.max(workshopsScrollPosition - cardWidth, 0);
    
    workshopsScrollRef.current?.scrollTo({ x: newPosition, animated: true });
    setWorkshopsScrollPosition(newPosition);
  };

  const handleProductsNext = () => {
    const newPosition = productsScrollPosition + cardWidth;
    const maxScroll = (products.length - 2) * cardWidth; // Show 2 cards at a time
    const scrollTo = Math.min(newPosition, maxScroll);
    
    productsScrollRef.current?.scrollTo({ x: scrollTo, animated: true });
    setProductsScrollPosition(scrollTo);
  };

  const handleProductsPrev = () => {
    const newPosition = Math.max(productsScrollPosition - cardWidth, 0);
    
    productsScrollRef.current?.scrollTo({ x: newPosition, animated: true });
    setProductsScrollPosition(newPosition);
  };

  const isWorkshopsAtStart = workshopsScrollPosition === 0;
  const isWorkshopsAtEnd = workshopsScrollPosition >= (workshops.length - 2) * cardWidth;
  const isProductsAtStart = productsScrollPosition === 0;
  const isProductsAtEnd = productsScrollPosition >= (products.length - 2) * cardWidth;

  return (
    <>
    <Header />

    <ScrollView style={styles.container}>
      {/* Greeting */}
      <View style={styles.greetingContainer}>
        <MaskedView
          maskElement={
            <Text style={[styles.greeting, { backgroundColor: 'transparent' }]}>
              {getGreeting()}, {name}!
            </Text>
          }
        >
          <LinearGradient
            colors={['#776391', '#9577a6', '#ed4a82', '#ed4a82', '#9577a6', '#776391']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[styles.gradientText, {height: 110}]}
          />
        </MaskedView>
        
        <View style={styles.bundleContainer}>
          <Text style={styles.bundleText}>Your bundle of joy is </Text>
          <MaskedView
            maskElement={
              <Text style={[styles.bundleHighlight, { backgroundColor: 'transparent' }]}>
                5 months away!
              </Text>
            }
          >
            <LinearGradient
              colors={['#776391', '#9577a6', '#ed4a82', '#ed4a82', '#9577a6', '#776391']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradientHighlight}
            />
          </MaskedView>
        </View>
      </View>

      {/* Health Tip */}
      <HealthTipCard />

      {/* Workshops */}
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

      {/* Featured Products */}
      <View style={styles.featuredContainer}>
        <Text style={styles.sectionTitle}>Featured Products</Text>
        <View style={styles.carouselContainer}>
          {!isProductsAtStart && (
            <TouchableOpacity onPress={handleProductsPrev} style={[styles.navButton, styles.leftButton]}>
              <MaterialIcons name="navigate-before" size={24} color="#333" />
            </TouchableOpacity>
          )}

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.baseContainer}
            ref={productsScrollRef}
            scrollEnabled={false}
          >
            {products.map((item, index) => (
              <View key={index} style={styles.card}>
                <Image source={{ uri: item.image }} style={styles.cardImage} />
                <Text style={styles.cardContent}> 
                  <Text style={styles.cardTitle}>{item.title}</Text> {"\n"}
                  <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
                </Text>
              </View>
            ))}
          </ScrollView>

          {!isProductsAtEnd && (
            <TouchableOpacity onPress={handleProductsNext} style={[styles.navButton, styles.rightButton]}>
              <MaterialIcons name="navigate-next" size={24} color="#333" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ScrollView>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
  },
  greetingContainer: {
    marginBottom: 30,
    paddingHorizontal: 16,
    marginTop: 20,
  },
  greeting: {
    fontSize: 55,
    fontWeight: "bold",
    lineHeight: 55,
  },
  gradientText: {
    height: 60,
    width: '100%',
  },
  bundleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  bundleText: {
    fontSize: 16,
    fontWeight: "normal",
    color: '#333',
  },
  bundleHighlight: {
    fontSize: 16,
    fontWeight: "bold",
  },
  gradientHighlight: {
    height: 25,
    width: 150,
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
  tipTitle: {
    marginBottom: 10,
    fontSize: 14,
    paddingLeft: 16,
  },
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
  baseContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    marginHorizontal: 16,
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 12,
    marginHorizontal: 16,
    color: "#776391",
  },
  carouselContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    marginRight: 12,
  },
  card: {
    width: 160,
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    // padding: 12,
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
  navButton: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    zIndex: 1,
  },
  leftButton: {
    position: 'absolute',
    left: 8,
    top: '50%',
    transform: [{ translateY: -20 }],
  },
  rightButton: {
    position: 'absolute',
    right: 8,
    top: '50%',
    transform: [{ translateY: -20 }],
  },
  featuredContainer: {
    marginBottom: 110,
  }
});