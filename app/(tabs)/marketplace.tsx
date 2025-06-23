import CardThree from "@/components/CardThree";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import SectionTitle from "@/components/SectionTitle";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

export default function Marketplace() {
  const workshopsScrollRef = useRef(null);
  const [workshopsScrollPosition, setWorkshopsScrollPosition] = useState(0);

  const handleCategoryPress = (categoryName: string) => {
    if (categoryName === 'Pregnancy') {
      router.push('/marketplace-category-pregnancy');
    }
    else if (categoryName === 'Postpartum') {
      router.push('/marketplace-category-postpartum');
    }
  };

  const resourceCategories = [
    { name: "Pregnancy", icon: "pregnant-woman" },
    { name: "Postpartum", icon: "child-friendly" },
    { name: "Baby Care", icon: "baby-changing-station" },
    { name: "Nutrition", icon: "local-dining" },
    { name: "Mental Health", icon: "self-improvement" },
    { name: "Workshops", icon: "group-work" },
    { name: "Workshops", icon: "group-work" },
  ];

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

  const cardWidth = 132; 

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

  const isWorkshopsAtStart = workshopsScrollPosition === 0;
  const isWorkshopsAtEnd = workshopsScrollPosition >= (workshops.length - 2) * cardWidth;

  return (
    <>
      <Header />
      <View style={styles.container}>
        <SearchBar />

        {/* categories */}
        <View>
          <SectionTitle title={"Categories"} />
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
              {resourceCategories.map((item, index) => (
                <CardThree category={item} index={index} handleCategoryPress={handleCategoryPress} key={index} />
              ))}
            </ScrollView>

            {!isWorkshopsAtEnd && (
              <TouchableOpacity onPress={handleWorkshopsNext} style={[styles.navButton, styles.rightButton]}>
                <MaterialIcons name="navigate-next" size={24} color="#333" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* top sellers this month */}
        <View>
          <SectionTitle title={"Top Sellers This Month"} />
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
              {resourceCategories.map((item, index) => (
                <CardThree category={item} index={index} handleCategoryPress={handleCategoryPress} key={index} />
              ))}
            </ScrollView>

            {!isWorkshopsAtEnd && (
              <TouchableOpacity onPress={handleWorkshopsNext} style={[styles.navButton, styles.rightButton]}>
                <MaterialIcons name="navigate-next" size={24} color="#333" />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
  },
  carouselContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    marginRight: 12,
  },
  baseContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    marginHorizontal: 16,
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
    transform: [{ translateY: -20 }],
  },
  rightButton: {
    position: 'absolute',
    right: 8,
    transform: [{ translateY: -20 }],
  },
});