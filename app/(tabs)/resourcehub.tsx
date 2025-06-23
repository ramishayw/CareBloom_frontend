import Header from '@/components/Header';
import { MaterialIcons } from '@expo/vector-icons';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

export default function ResourceHub() {
  const router = useRouter();
  const guidesScrollRef = useRef<ScrollView>(null);
  const videosScrollRef = useRef<ScrollView>(null);
  const [guidesScrollPosition, setGuidesScrollPosition] = useState(0);
  const [videosScrollPosition, setVideosScrollPosition] = useState(0);

  const guides = [
    {
      title: "Hospital Bag Checklist",
      subtitle: "Everything you need for delivery day.",
      image: "https://jasmineandjadeinteriors.com/cdn/shop/files/tcopy.png?v=1704988183&width=1445",
      category: "Pregnancy"
    },
    {
      title: "Birth Plan Template",
      subtitle: "Create your personalized birth plan.",
      image: "https://i.etsystatic.com/38814429/r/il/e16f17/6247403575/il_fullxfull.6247403575_3ygw.jpg",
      category: "Pregnancy"
    },
    {
      title: "Newborn Care Guide",
      subtitle: "First steps in caring for your baby.",
      image: "https://images.unsplash.com/photo-1552819289-e14fbbcea868?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG5ld2Jvcm58ZW58MHx8MHx8fDA%3D",
      category: "Baby Care"
    },
    {
      title: "Breastfeeding Guide",
      subtitle: "Complete guide to successful breastfeeding.",
      image: "https://plus.unsplash.com/premium_photo-1679934135314-3ad7205beac2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wzfHx8ZW58MHx8fHx8",
      category: "Baby Care"
    },
    {
      title: "Baby Proofing Home",
      subtitle: "Making your home safe for baby.",
      image: "https://www.eurokidsindia.com/blog/wp-content/uploads/2023/03/baby-proofing-your-house.jpg",
      category: "Baby Care"
    },
  ];

  const videos = [
    {
      title: "Breathing Techniques",
      subtitle: "Labor breathing exercises and relaxation.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi9PL4kSTOuI_Oaf8cSGX8fwBIxjGcE_jKXQ&s",
      duration: "15 min"
    },
    {
      title: "Baby Massage",
      subtitle: "Gentle massage techniques for newborns.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi9PL4kSTOuI_Oaf8cSGX8fwBIxjGcE_jKXQ&s",
      duration: "12 min"
    },
    {
      title: "Pregnancy Yoga",
      subtitle: "Safe yoga poses for each trimester.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi9PL4kSTOuI_Oaf8cSGX8fwBIxjGcE_jKXQ&s",
      duration: "25 min"
    },
    {
      title: "Diaper Changing",
      subtitle: "Step-by-step diaper changing guide.",
      image: "https://cdn-icons-png.flaticon.com/512/5078/5078791.png",
      duration: "8 min"
    },
    {
      title: "Swaddling Techniques",
      subtitle: "How to swaddle your baby properly.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi9PL4kSTOuI_Oaf8cSGX8fwBIxjGcE_jKXQ&s",
      
      duration: "10 min"
    },
  ];

  const cardWidth = 172;

  const handleGuidesNext = () => {
    const newPosition = guidesScrollPosition + cardWidth;
    const maxScroll = (guides.length - 2) * cardWidth;
    const scrollTo = Math.min(newPosition, maxScroll);
    
    guidesScrollRef.current?.scrollTo({ x: scrollTo, animated: true });
    setGuidesScrollPosition(scrollTo);
  };

  const handleGuidesPrev = () => {
    const newPosition = Math.max(guidesScrollPosition - cardWidth, 0);
    
    guidesScrollRef.current?.scrollTo({ x: newPosition, animated: true });
    setGuidesScrollPosition(newPosition);
  };

  const handleVideosNext = () => {
    const newPosition = videosScrollPosition + cardWidth;
    const maxScroll = (videos.length - 2) * cardWidth;
    const scrollTo = Math.min(newPosition, maxScroll);
    
    videosScrollRef.current?.scrollTo({ x: scrollTo, animated: true });
    setVideosScrollPosition(scrollTo);
  };

  const handleVideosPrev = () => {
    const newPosition = Math.max(videosScrollPosition - cardWidth, 0);
    
    videosScrollRef.current?.scrollTo({ x: newPosition, animated: true });
    setVideosScrollPosition(newPosition);
  };

  const isGuidesAtStart = guidesScrollPosition === 0;
  const isGuidesAtEnd = guidesScrollPosition >= (guides.length - 2) * cardWidth;
  const isVideosAtStart = videosScrollPosition === 0;
  const isVideosAtEnd = videosScrollPosition >= (videos.length - 2) * cardWidth;

  const handleCategoryPress = (categoryName: string) => {
    if (categoryName === 'Pregnancy') {
      router.push('/pregnancy-category');
    }
    
  };

  const resourceCategories = [
    { name: "Pregnancy", icon: "pregnant-woman" },
    { name: "Postpartum", icon: "child-friendly" },
    { name: "Baby Care", icon: "baby-changing-station" },
    { name: "Nutrition", icon: "local-dining" },
    { name: "Mental Health", icon: "self-improvement" },
    { name: "Workshops", icon: "group-work" },
  ];

  return (
    <>
      <Header />
      
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitleTextBold}>Everything you need for your </Text>
            <MaskedView
              maskElement={
                <Text style={[styles.subtitleHighlight, { backgroundColor: 'transparent' }]}>
                  pregnancy journey
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

        <View style={styles.categoriesContainer}>
          <Text style={styles.sectionTitle}>Browse Categories</Text>
          <View style={styles.categoriesGrid}>
            {resourceCategories.map((category, index) => (
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
              // <CardThree category={category} index={index} handleCategoryPress={handleCategoryPress} key={index} />
            ))}
          </View>
        </View>


        <View style={styles.featuredCard}>
          <Image 
            source={{ uri: "https://www.drmanishajain.com/assets/front/images/during-pregnancy.jpg" }} 
            style={styles.featuredImage} 
          />
          <View style={styles.featuredContent}>
            <View style={styles.featuredBadge}>
              <Text style={styles.featuredBadgeText}>FEATURED</Text>
            </View>
            <Text style={styles.featuredTitle}>Complete Pregnancy Guide</Text>
            <Text style={styles.featuredSubtitle}>
              Your comprehensive guide covering all aspects of pregnancy, from nutrition to delivery preparation.
            </Text>
          </View>
        </View>

        <View>
          <Text style={styles.sectionTitle}>Essential Guides</Text>
          <View style={styles.carouselContainer}>
            {!isGuidesAtStart && (
              <TouchableOpacity onPress={handleGuidesPrev} style={[styles.navButton, styles.leftButton]}>
                <MaterialIcons name="navigate-before" size={24} color="#333" />
              </TouchableOpacity>
            )}

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.baseContainer}
              ref={guidesScrollRef}
              scrollEnabled={false}
            >
              {guides.map((item, index) => (
                <View key={index} style={styles.card}>
                  <Image source={{ uri: item.image }} style={styles.cardImage} />
                  <View style={styles.cardContent}>
                    <View style={styles.categoryBadge}>
                      <Text style={styles.categoryText}>{item.category}</Text>
                    </View>
                    <Text style={styles.cardTitle}>{item.title}</Text>
                    <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
                  </View>
                </View>
              ))}
            </ScrollView>

            {!isGuidesAtEnd && (
              <TouchableOpacity onPress={handleGuidesNext} style={[styles.navButton, styles.rightButton]}>
                <MaterialIcons name="navigate-next" size={24} color="#333" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* Videos Section */}
        <View style={styles.videosContainer}>
          <Text style={styles.sectionTitle}>Video Tutorials</Text>
          <View style={styles.carouselContainer}>
            {!isVideosAtStart && (
              <TouchableOpacity onPress={handleVideosPrev} style={[styles.navButton, styles.leftButton]}>
                <MaterialIcons name="navigate-before" size={24} color="#333" />
              </TouchableOpacity>
            )}

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.baseContainer}
              ref={videosScrollRef}
              scrollEnabled={false}
            >
              {videos.map((item, index) => (
                <View key={index} style={styles.videoCard}>
                  <View style={styles.videoImageContainer}>
                    <Image source={{ uri: item.image }} style={styles.cardImage} />
                    <View style={styles.playButton}>
                      <MaterialIcons name="play-arrow" size={24} color="#fff" />
                    </View>
                  </View>
                  <View style={styles.cardContent}>
                    <View style={styles.durationBadge}>
                      <Text style={styles.durationText}>{item.duration}</Text>
                    </View>
                    <Text style={styles.cardTitle}>{item.title}</Text>
                    <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
                  </View>
                </View>
              ))}
            </ScrollView>

            {!isVideosAtEnd && (
              <TouchableOpacity onPress={handleVideosNext} style={[styles.navButton, styles.rightButton]}>
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
  headerContainer: {
    marginBottom: 30,
    paddingHorizontal: 16,
    marginTop: 20,
  },
  headerTitle: {
    fontSize: 48,
    fontWeight: "bold",
    lineHeight: 48,
  },
  gradientText: {
    height: 60,
    width: '100%',
  },
  subtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  subtitleText: {
    fontSize: 16,
    fontWeight: "normal",
    color: '#333',
  },
  subtitleTextBold: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#333',
  },
  subtitleHighlight: {
    fontSize: 20,
    fontWeight: "bold",
  },
  gradientHighlight: {
    height: 30,
    width: 180,
  },
  categoriesContainer: {
    marginBottom: 24,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '31.5%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
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
  featuredCard: {
    flexDirection: "row",
    backgroundColor: "#efe8f4",
    borderRadius: 16,
    marginHorizontal: 16,
    marginBottom: 24,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  featuredImage: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    backgroundColor: "#fff",
  },
  featuredContent: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  featuredBadge: {
    backgroundColor: '#776391',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  featuredBadgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  featuredTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  featuredSubtitle: {
    fontSize: 12,
    color: '#666',
    lineHeight: 16,
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
  baseContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    marginHorizontal: 16,
  },
  card: {
    width: 160,
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    marginRight: 12,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  videoCard: {
    width: 160,
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    marginRight: 12,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  cardImage: {
    width: "100%",
    height: 100,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    marginBottom: 8,
    resizeMode: "contain",
    backgroundColor: "#fff",
  },
  videoImageContainer: {
    position: 'relative',
  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -15 }, { translateY: -15 }],
    backgroundColor: 'rgba(119, 99, 145, 0.8)',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContent: {
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  categoryBadge: {
    backgroundColor: '#ed4a82',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    alignSelf: 'flex-start',
    marginBottom: 6,
  },
  categoryText: {
    color: '#fff',
    fontSize: 8,
    fontWeight: 'bold',
  },
  durationBadge: {
    backgroundColor: '#776391',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    alignSelf: 'flex-start',
    marginBottom: 6,
  },
  durationText: {
    color: '#fff',
    fontSize: 8,
    fontWeight: 'bold',
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 18,
    marginBottom: 4,
    color: '#333',
  },
  cardSubtitle: {
    fontSize: 12,
    color: "#666",
    lineHeight: 16,
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
  videosContainer: {
    marginBottom: 110,
  },
});
