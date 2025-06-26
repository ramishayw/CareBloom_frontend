import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Text,
  Card,
  Avatar,
  Button,
  Chip,
  Surface,
} from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '@/components/Header';

//dummy data
const mockData = {
  hospital: {
    name: 'Dehiwala MOH Office',
    location: 'Dehiwala, Colombo',
    contact: '+94 11 222 2261',
    
  },
  mother: {
    name: 'Thilina Jayatunga',
    registrationNumber: 'TH12345',
  },
  midwife: {
    name: 'Mrs. Kamani Perera',
    contact: '+94 77 123 4567',
    //profileImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face',
    specialization: 'Registered Midwife',
    experience: '12 years',
  },
  homeVisit: {
    date: '2025-06-30',
    time: '10:00 AM',
    // status: 'Confirmed',
    address: '45/2, James Pieris Rd, Colombo 02',
  },
  upcomingClinic: {
    date: '2025-07-05',
    time: '2:00 PM',
    type: 'Checkup - 1st Trimester',
    // weekNumber: 24,
  },
  workshops: {
    next: {
      title: 'Prenatal Yoga',
      date: '2025-07-02',
      time: '4:00 PM',
    //   location: 'Community Hall',
    },
    // enrolled: 3,
  },
};

export default function HospitalDashboard() {
  const handleCall = (number: string) => {
    Linking.openURL(`tel:${number}`);
  };

  const handleMessage = (number: string) => {
    Linking.openURL(`sms:${number}`);
  };

  const showRescheduleAlert = () => {
    Alert.alert(
      'Reschedule Home Visit',
      'Would you like to reschedule your upcoming home visit?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Reschedule', onPress: () => console.log('Reschedule pressed') },
      ]
    );
  };

  return (
    <>
      <Header />
      
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Hospital and User Info Card */}
        <Card style={styles.card}>
          <Card.Content>
            <LinearGradient
              colors={['#776391', '#776391']}
              style={styles.infoGradient}
            >
              <View style={styles.hospitalInfo}>
                
                <View style={styles.hospitalDetails}>
                  <Text style={styles.hospitalName}>{mockData.hospital.name}</Text>
                  <Text style={styles.hospitalLocation}>{mockData.hospital.location}</Text>
                  <Text style={styles.hospitalContact}>{mockData.hospital.contact}</Text>
                </View>
              </View>
              <View style={styles.motherInfo}>
                <Text style={styles.welcomeText}>Welcome back, {mockData.mother.name}</Text>
                <Text style={styles.registrationText}>ID: {mockData.mother.registrationNumber}</Text>
              </View>
            </LinearGradient>
          </Card.Content>
        </Card>

        <View style={styles.content}>
          {/* Assigned Midwife Card */}
          <Card style={styles.card}>
            <Card.Content>
              <View style={styles.cardHeader}>
                <MaterialIcons name="person" size={24} color="#776391" />
                <Text style={styles.cardTitle}>Your Assigned Midwife</Text>
              </View>
              
              <View style={styles.midwifeInfo}>
                {/* <Avatar.Image 
                  size={60} 
                  source={{ uri: mockData.midwife.profileImage }} 
                /> */}
                <View style={styles.midwifeDetails}>
                  <Text style={styles.midwifeName}>{mockData.midwife.name}</Text>
                  {/* <Text style={styles.midwifeSpecialization}>{mockData.midwife.specialization}</Text>
                  <Text style={styles.midwifeExperience}>{mockData.midwife.experience} experience</Text> */}
                </View>
              </View>
              
              {/* <View style={styles.contactButtons}>
                <TouchableOpacity 
                  style={styles.contactButton}
                  onPress={() => handleCall(mockData.midwife.contact)}
                >
                  <MaterialIcons name="phone" size={18} color="#776391" />
                  <Text style={styles.contactButtonText}>Call</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={styles.contactButton}
                  onPress={() => handleMessage(mockData.midwife.contact)}
                >
                  <MaterialIcons name="message" size={18} color="#776391" />
                  <Text style={styles.contactButtonText}>Message</Text>
                </TouchableOpacity>
              </View> */}
              
              <Button 
                mode="outlined" 
                style={styles.profileButton}
                labelStyle={styles.profileButtonText}
                onPress={() => console.log('View profile')}
              >
                View Midwife Profile
              </Button>
            </Card.Content>
          </Card>

          {/* Alert Section - Upcoming Home Visit */}
          <Card style={styles.card}>
            <Card.Content>
              <View style={styles.alertHeader}>
                <MaterialIcons name="home" size={24} color="#ed4a82" />
                <Text style={styles.alertTitle}>Upcoming Home Visit</Text>
                {/* <Chip 
                  style={styles.statusChip} 
                  textStyle={styles.statusChipText}
                >
                  {mockData.homeVisit.status}
                </Chip> */}
              </View>
              
              <View style={styles.visitDetails}>
                <View style={styles.visitRow}>
                  <MaterialIcons name="calendar-today" size={16} color="#666" />
                  <Text style={styles.visitText}>
                    {new Date(mockData.homeVisit.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </Text>
                </View>
                <View style={styles.visitRow}>
                  <MaterialIcons name="access-time" size={16} color="#666" />
                  <Text style={styles.visitText}>{mockData.homeVisit.time}</Text>
                </View>
                <View style={styles.visitRow}>
                  <MaterialIcons name="location-on" size={16} color="#666" />
                  <Text style={styles.visitText}>{mockData.homeVisit.address}</Text>
                </View>
              </View>
              
              <Button 
                mode="text" 
                onPress={showRescheduleAlert}
                labelStyle={styles.rescheduleButtonText}
              >
              Contact Midwife to Reschedule
              </Button>
            </Card.Content>
          </Card>

          {/* Upcoming Clinic Info */}
          <Card style={styles.card}>
            <Card.Content>
              <View style={styles.cardHeader}>
                <MaterialIcons name="local-hospital" size={24} color="#776391" />
                <Text style={styles.cardTitle}>Next Clinic Appointment</Text>
              </View>
              
              <Surface style={styles.clinicSurface}>
                <View style={styles.clinicHeader}>
                  <Text style={styles.clinicType}>{mockData.upcomingClinic.type}</Text>
                 
                </View>
                
                <View style={styles.clinicDetails}>
                  <View style={styles.clinicRow}>
                    <MaterialIcons name="calendar-today" size={16} color="#776391" />
                    <Text style={styles.clinicText}>
                      {new Date(mockData.upcomingClinic.date).toLocaleDateString('en-US', { 
                        weekday: 'short', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </Text>
                  </View>
                  <View style={styles.clinicRow}>
                    <MaterialIcons name="access-time" size={16} color="#776391" />
                    <Text style={styles.clinicText}>{mockData.upcomingClinic.time}</Text>
                  </View>
                  {/* <View style={styles.clinicRow}>
                    <MaterialIcons name="room" size={16} color="#776391" />
                    <Text style={styles.clinicText}>{mockData.upcomingClinic.location}</Text>
                  </View> */}
                </View>
              </Surface>
              
              <Button 
                mode="contained" 
                style={styles.viewClinicsButton}
                labelStyle={styles.viewClinicsButtonText}
                onPress={() => console.log('View all clinics')}
              >
                View All Clinics
              </Button>
            </Card.Content>
          </Card>

          {/* Records Section */}
          <View style={styles.recordsSection}>
            <Text style={styles.sectionTitle}>My Records</Text>
            
            <View style={styles.recordsGrid}>
              <TouchableOpacity 
                style={styles.recordTile}
                onPress={() => console.log('View clinic records')}
              >
                <LinearGradient
                  colors={['#776391', '#9577a6']}
                  style={styles.recordTileGradient}
                >
                  <MaterialIcons name="folder-shared" size={32} color="#fff" />
                  <Text style={styles.recordTileTitle}>Clinic Records</Text>
                  <Text style={styles.recordTileSubtitle}>View your medical history</Text>
                </LinearGradient>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={styles.recordTile}
                onPress={() => console.log('View child records')}
              >
                <View style={styles.recordTilePink}>
                  <MaterialIcons name="child-care" size={32} color="#fff" />
                  <Text style={styles.recordTileTitle}>Child Records</Text>
                  <Text style={styles.recordTileSubtitle}>Vaccination tracker</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* Registered Workshops */}
          <Card style={styles.card}>
            <Card.Content>
              <View style={styles.cardHeader}>
                <MaterialIcons name="school" size={24} color="#776391" />
                <Text style={styles.cardTitle}>Registered Workshops</Text>
                {/* <Chip style={styles.countChip}>
                  <Text style={styles.countChipText}>{mockData.workshops.enrolled}</Text>
                </Chip> */}
              </View>
              
              <Surface style={styles.workshopSurface}>
                <View style={styles.workshopInfo}>
                  <Text style={styles.workshopTitle}>Next Session: {mockData.workshops.next.title}</Text>
                  <View style={styles.workshopDetails}>
                    <View style={styles.workshopRow}>
                      <MaterialIcons name="calendar-today" size={14} color="#666" />
                      <Text style={styles.workshopText}>
                        {new Date(mockData.workshops.next.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })} at {mockData.workshops.next.time}
                      </Text>
                    </View>
                    <View style={styles.workshopRow}>
                      {/* <MaterialIcons name="location-on" size={14} color="#666" /> */}
                      {/* <Text style={styles.workshopText}>{mockData.workshops.next.location}</Text> */}
                    </View>
                  </View>
                </View>
              </Surface>
              
              <Button 
                mode="outlined" 
                style={styles.viewWorkshopsButton}
                labelStyle={styles.viewWorkshopsButtonText}
                onPress={() => console.log('View all workshops')}
              >
                View All Workshops
              </Button>
            </Card.Content>
          </Card>

         
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  infoGradient: {
    padding: 20,
    borderRadius: 12,
  },
  headerGradient: {
    paddingBottom: 20,
  },
  headerContent: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  hospitalInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  hospitalLogo: {
    fontSize: 32,
    marginRight: 12,
  },
  hospitalDetails: {
    flex: 1,
  },
  hospitalName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  hospitalLocation: {
    fontSize: 14,
    color: '#f0f0f0',
    marginBottom: 2,
  },
  hospitalContact: {
    fontSize: 12,
    color: '#e0e0e0',
  },
  motherInfo: {
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  registrationText: {
    fontSize: 12,
    color: '#e0e0e0',
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
  card: {
    marginBottom: 16,
    elevation: 2,
    backgroundColor: '#fff',
  },
  lastCard: {
    marginBottom: 0,
  },
//   alertCard: {
//     borderLeftWidth: 4,
//     borderLeftColor: '#ed4a82',
//   },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginLeft: 8,
    flex: 1,
  },
  midwifeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  midwifeDetails: {
    marginLeft: 16,
    flex: 1,
  },
  midwifeName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
  },
  midwifeSpecialization: {
    fontSize: 14,
    color: '#776391',
    marginBottom: 2,
  },
  midwifeExperience: {
    fontSize: 12,
    color: '#666',
  },
  contactButtons: {
    flexDirection: 'row',
    marginBottom: 16,
    gap: 12,
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#776391',
    backgroundColor: '#f8f5fc',
  },
  contactButtonText: {
    marginLeft: 6,
    color: '#776391',
    fontWeight: '500',
  },
  profileButton: {
    borderColor: '#776391',
  },
  profileButtonText: {
    color: '#776391',
  },
  alertHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  alertTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginLeft: 8,
    flex: 1,
  },
  statusChip: {
    backgroundColor: '#e8f5e8',
  },
  statusChipText: {
    color: '#2e7d32',
    fontSize: 12,
  },
  visitDetails: {
    marginBottom: 12,
  },
  visitRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  visitText: {
    marginLeft: 8,
    color: '#333',
    fontSize: 14,
  },
  rescheduleButtonText: {
    color: '#ed4a82',
  },
  clinicSurface: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#f8f5fc',
    marginBottom: 16,
  },
  clinicHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  clinicType: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  weekNumber: {
    fontSize: 12,
    color: '#776391',
    fontWeight: '500',
  },
  clinicDetails: {
    gap: 6,
  },
  clinicRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  clinicText: {
    marginLeft: 8,
    color: '#555',
    fontSize: 14,
  },
  viewClinicsButton: {
    backgroundColor: '#776391',
  },
  viewClinicsButtonText: {
    color: '#fff',
  },
  recordsSection: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  recordsGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  recordTile: {
    flex: 1,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
  },
  recordTileGradient: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 120,
  },
  recordTilePink: {
    backgroundColor: '#e91e63',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 120,
  },
  recordTileTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 8,
    marginBottom: 4,
    textAlign: 'center',
  },
  recordTileSubtitle: {
    fontSize: 12,
    color: '#f0f0f0',
    textAlign: 'center',
  },
  countChip: {
    backgroundColor: '#776391',
  },
  countChipText: {
    color: '#fff',
    fontSize: 12,
  },
  workshopSurface: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#f8f5fc',
    marginBottom: 16,
  },
  workshopInfo: {
    gap: 8,
  },
  workshopTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  workshopDetails: {
    gap: 4,
  },
  workshopRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  workshopText: {
    marginLeft: 6,
    color: '#000',
    fontSize: 13,
  },
  viewWorkshopsButton: {
    borderColor: '#776391',
  },
  viewWorkshopsButtonText: {
    color: '#776391',
  },
  resourcesDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
    lineHeight: 20,
  },
  resourceButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  resourceButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#f8f5fc',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  resourceButtonText: {
    marginLeft: 8,
    color: '#776391',
    fontWeight: '500',
    fontSize: 14,
  },
});
