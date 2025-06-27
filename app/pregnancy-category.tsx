import Header from '@/components/Header';
import { MaterialIcons } from '@expo/vector-icons';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

export default function PregnancyCategory() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const pregnancyResources = [
    {
      title: "Hospital Bag Checklist",
      subtitle: "Everything you need for delivery day",
      image: "https://jasmineandjadeinteriors.com/cdn/shop/files/tcopy.png?v=1704988183&width=1445",
      type: "guide",
  
    },
    {
      title: "Birth Plan Template",
      subtitle: "Create your personalized birth plan",
      image: "https://i.etsystatic.com/38814429/r/il/e16f17/6247403575/il_fullxfull.6247403575_3ygw.jpg",
      type: "template",
   
    },
    {
      title: "Pregnancy Nutrition Guide",
      subtitle: "Essential nutrients for you and your baby",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&auto=format&fit=crop&q=60",
      type: "guide",
      
    }
  
  ];

  const pregnancyMilestones = [
    { week: "Week 4-6", title: "First Heartbeat", description: "Baby's heart begins to beat" },
    { week: "Week 12", title: "End of First Trimester", description: "Risk of miscarriage decreases" },
    { week: "Week 20", title: "Anatomy Scan", description: "Detailed ultrasound examination" },
    { week: "Week 24", title: "Viability", description: "Baby can survive outside the womb" },
    { week: "Week 36", title: "Full Term Soon", description: "Baby's organs are nearly mature" },
  ];



  return (
    <>
      <Header />
      
      <ScrollView style={styles.container}>
       {/* back button */}
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => router.back()}
        >
          <MaterialIcons name="arrow-back" size={24} color="#776391" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        {/* Header */}
        <View style={styles.headerContainer}>
          <MaskedView
            maskElement={
              <Text style={[styles.pregnancyTitle, { backgroundColor: 'transparent' }]}>
                Pregnancy
              </Text>
            }
          >
            <LinearGradient
              colors={['#776391', '#9577a6', '#ed4a82', '#ed4a82', '#9577a6', '#776391']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradientTitle}
            />
          </MaskedView>
          
          {/*search bar*/}
          <View style={styles.searchContainer}>
            <View style={styles.searchInputContainer}>
              <MaterialIcons name="search" size={20} color="#999" style={styles.searchIcon} />
              <TextInput
                style={styles.searchInput}
                placeholder="Search pregnancy resources..."
                value={searchQuery}
                onChangeText={setSearchQuery}
                placeholderTextColor="#999"
              />
            </View>
            <TouchableOpacity style={styles.searchButton}>
              <MaterialIcons name="search" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* milestones */}
        <View style={styles.milestonesSection}>
          <Text style={styles.sectionTitle}>Pregnancy Milestones</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.milestonesScroll}>
            {pregnancyMilestones.map((milestone, index) => (
              <View key={index} style={styles.milestoneCard}>
                <Text style={styles.milestoneWeek}>{milestone.week}</Text>
                <Text style={styles.milestoneTitle}>{milestone.title}</Text>
                <Text style={styles.milestoneDescription}>{milestone.description}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.tipsSection}>
          <Text style={styles.sectionTitle}>Quick Tips</Text>
          <View style={styles.tipCard}>
            <MaterialIcons name="lightbulb" size={24} color="#776391" />
            <View style={styles.tipContent}>
              <Text style={styles.tipTitle}>Stay Hydrated</Text>
              <Text style={styles.tipText}>
                Drink at least 8-10 glasses of water daily to support increased blood volume during pregnancy.
              </Text>
            </View>
          </View>
          <View style={styles.tipCard}>
            <MaterialIcons name="favorite" size={24} color="#ed4a82" />
            <View style={styles.tipContent}>
              <Text style={styles.tipTitle}>Take Prenatal Vitamins</Text>
              <Text style={styles.tipText}>
                Folic acid and other essential nutrients support your baby&apos;s healthy development.
              </Text>
            </View>
          </View>
        </View>

        {/* All Resources */}
        <View style={styles.resourcesSection}>
          <Text style={styles.sectionTitle}>All Pregnancy Resources</Text>
          <View style={styles.resourcesGrid}>
            {pregnancyResources.map((resource, index) => (
              <TouchableOpacity key={index} style={styles.resourceCard}>
                <Image source={{ uri: resource.image }} style={styles.resourceImage} />
                <View style={styles.resourceContent}>
                  <Text style={styles.resourceTitle}>{resource.title}</Text>
                  <Text style={styles.resourceSubtitle}>{resource.subtitle}</Text>
                </View>
              </TouchableOpacity>
            ))}
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
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginTop: 10,
  },
  backText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#776391',
    fontWeight: '500',
  },
  headerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    marginBottom: 10,
  },
  pregnancyTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 2,
  },
  gradientTitle: {
    height: 60,
    width: '100%',
    marginBottom: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  searchButton: {
    backgroundColor: '#776391',
    borderRadius: 25,
    padding: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#776391',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  milestonesSection: {
    marginBottom: 24,
  },
  milestonesScroll: {
    paddingLeft: 16,
  },
  milestoneCard: {
    width: 160,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginRight: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  milestoneWeek: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#776391',
    marginBottom: 4,
  },
  milestoneTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  milestoneDescription: {
    fontSize: 12,
    color: '#666',
    lineHeight: 16,
  },
  resourcesSection: {
    marginBottom: 24,
  },
  resourcesGrid: {
    paddingHorizontal: 16,
  },
  resourceCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  resourceImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  resourceContent: {
    padding: 12,
  },
  resourceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  resourceSubtitle: {
    fontSize: 14,
    color: '#666',
    lineHeight: 18,
  },
  tipsSection: {
    marginBottom: 10,
    paddingHorizontal: 16,
  },
  tipCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  tipContent: {
    flex: 1,
    marginLeft: 12,
  },
  tipTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  tipText: {
    fontSize: 12,
    color: '#666',
    lineHeight: 16,
  },
});
