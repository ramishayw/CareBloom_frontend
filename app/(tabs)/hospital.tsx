import Header from '@/components/Header';
import { MaterialIcons } from '@expo/vector-icons';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Picker } from '@react-native-picker/picker';

interface DropdownOption {
  label: string;
  value: string;
}

interface HospitalOption {
  label: string;
  value: string;
  id: string;
}

const mockData = {
  provinces: [
    { label: 'Western Province', value: 'western' },
    { label: 'Central Province', value: 'central' },
   
  ] as DropdownOption[],
  districts: {
    western: [
      { label: 'Colombo', value: 'colombo' },
      { label: 'Gampaha', value: 'gampaha' },
      { label: 'Kalutara', value: 'kalutara' },
    ]

   
  // } as Record<string, DropdownOption[]>,
  // mohRegions: {
  //   colombo: [
  //     { label: 'Colombo', value: 'colombo' },
  //     { label: 'Nugegoda', value: 'nugegoda' },
  //     { label: 'Dehiwala', value: 'dehiwala' },
  //   ],
  
   
  } as Record<string, DropdownOption[]>,
  hospitals: {
    colombo: [
      { label: 'Boralesgamuwa', value: 'b', id: 'hosp_001' },
      { label: 'Dehiwala', value: 'cgh', id: 'hosp_002' },
      { label: 'Nugegoda', value: 'lrh', id: 'hosp_003' },
    ],
    nugegoda: [
      { label: 'Sri Jayewardenepura General Hospital', value: 'sjgh', id: 'hosp_004' },
      { label: 'Colombo South Teaching Hospital', value: 'csth', id: 'hosp_005' },
    ],
   
  } as Record<string, HospitalOption[]>,
};

export default function HospitalSelection() {
  const router = useRouter();
  
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  // const [selectedMohRegion, setSelectedMohRegion] = useState('');
  const [selectedHospital, setSelectedHospital] = useState('');
  
  const [districtOptions, setDistrictOptions] = useState<DropdownOption[]>([]);
  // const [mohRegionOptions, setMohRegionOptions] = useState<DropdownOption[]>([]);
  const [hospitalOptions, setHospitalOptions] = useState<HospitalOption[]>([]);

  useEffect(() => {
    if (selectedProvince) {
      setDistrictOptions(mockData.districts[selectedProvince] || []);
      setSelectedDistrict('');
      // setSelectedMohRegion('');
      setSelectedHospital('');
    }
  }, [selectedProvince]);

  useEffect(() => {
    if (selectedDistrict) {
      setHospitalOptions(mockData.hospitals[selectedDistrict] || []);
      setSelectedHospital('');
    }
  }, [selectedDistrict]);

  // useEffect(() => {
  //   if (selectedMohRegion) {
     
  //   }
  // }, [selectedMohRegion]);

  const handleContinue = () => {
    const selectedHospitalData = hospitalOptions.find(h => h.value === selectedHospital);
    if (selectedHospitalData) {
      router.push({
        pathname: '/hospital-login' as any,
        params: {
          hospitalId: selectedHospitalData.id,
          hospitalName: selectedHospitalData.label,
        },
      });
    }
  };

  return (
    <>
      <Header />
      
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      
        <View style={styles.headerContainer}>
          <MaskedView
            maskElement={
              <Text style={[styles.title, { backgroundColor: 'transparent' }]}>
                MOH Portal
              </Text>
            }
          >
            <LinearGradient
              colors={['#776391', '#9577a6', '#ed4a82', '#ed4a82', '#9577a6', '#776391']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradientText}
            />
          </MaskedView>
          
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitleText}>Find your hospital and access your portal</Text>
          
          </View>
        </View>

        <View style={styles.selectionCard}>
          <View style={styles.cardHeader}>
            <LinearGradient
              colors={['#776391', '#9577a6']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.cardHeaderGradient}
            >
              <MaterialIcons name="local-hospital" size={24} color="#fff" />
              <Text style={styles.cardTitle}>Select Your MOH </Text>
            </LinearGradient>
          </View>

          <View style={styles.formContainer}>
            <View style={styles.dropdownContainer}>
              <Text style={styles.label}>
                <MaterialIcons name="location-on" size={16} color="#776391" /> Province
              </Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={selectedProvince}
                  onValueChange={(itemValue) => setSelectedProvince(itemValue as string)}
                  style={styles.picker}
                >
                  <Picker.Item label="Select Province" value="" />
                  {mockData.provinces.map((province) => (
                    <Picker.Item key={province.value} label={province.label} value={province.value} />
                  ))}
                </Picker>
              </View>
            </View>

            <View style={styles.dropdownContainer}>
              <Text style={styles.label}>
                <MaterialIcons name="location-city" size={16} color="#776391" /> District
              </Text>
              <View style={[styles.pickerContainer, !selectedProvince && styles.disabledPicker]}>
                <Picker
                  selectedValue={selectedDistrict}
                  onValueChange={(itemValue) => setSelectedDistrict(itemValue as string)}
                  style={styles.picker}
                  enabled={!!selectedProvince}
                >
                  <Picker.Item label="Select District" value="" />
                  {districtOptions.map((district) => (
                    <Picker.Item key={district.value} label={district.label} value={district.value} />
                  ))}
                </Picker>
              </View>
            </View>

            {/* <View style={styles.dropdownContainer}>
              <Text style={styles.label}>
                <MaterialIcons name="domain" size={16} color="#776391" /> MOH Region
              </Text>
              <View style={[styles.pickerContainer, !selectedDistrict && styles.disabledPicker]}>
                <Picker
                  selectedValue={selectedMohRegion}
                  onValueChange={(itemValue) => setSelectedMohRegion(itemValue as string)}
                  style={styles.picker}
                  enabled={!!selectedDistrict}
                >
                  <Picker.Item label="Select MOH Region" value="" />
                  {mohRegionOptions.map((region) => (
                    <Picker.Item key={region.value} label={region.label} value={region.value} />
                  ))}
                </Picker>
              </View>
            </View> */}

            <View style={styles.dropdownContainer}>
              <Text style={styles.label}>
                <MaterialIcons name="local-hospital" size={16} color="#776391" /> MOH Office
              </Text>
              <View style={[styles.pickerContainer, !selectedDistrict && styles.disabledPicker]}>
                <Picker
                  selectedValue={selectedHospital}
                  onValueChange={(itemValue) => setSelectedHospital(itemValue as string)}
                  style={styles.picker}
                  enabled={!!selectedDistrict}
                >
                  <Picker.Item label="Select Hospital" value="" />
                  {hospitalOptions.map((hospital) => (
                    <Picker.Item key={hospital.value} label={hospital.label} value={hospital.value} />
                  ))}
                </Picker>
              </View>
            </View>

            {selectedHospital && (
              <TouchableOpacity
                style={styles.continueButton}
                onPress={handleContinue}
              >
                <MaterialIcons name="login" size={20} color="#fff" />
                <Text style={styles.continueButtonText}>Continue</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* help */}
        {/* <View style={styles.helpSection}>
          <Text style={styles.helpTitle}>Need Help?</Text>
          <Text style={styles.helpText}>
            If you can&apos;t find your hospital or need assistance with login, please contact your hospital&apos;s IT support or call our help desk.
          </Text>
          <TouchableOpacity style={styles.helpButton}>
            <MaterialIcons name="help-outline" size={18} color="#776391" />
            <Text style={styles.helpButtonText}>Contact Support</Text>
          </TouchableOpacity>
        </View> */}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 100,
  },
  headerContainer: {
    marginBottom: 30,
    paddingHorizontal: 16,
    marginTop: 20,
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    lineHeight: 45,
  },
  gradientText: {
    height: 50,
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
  subtitleHighlight: {
    fontSize: 16,
    fontWeight: "bold",
  },
  gradientHighlight: {
    height: 25,
    width: 140,
  },
  selectionCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    marginHorizontal: 16,
    marginBottom: 0,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  cardHeader: {
    marginBottom: 0,
  },
  cardHeaderGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 12,
  },
  formContainer: {
    padding: 20,
  },
  dropdownContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  pickerContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    overflow: 'hidden',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  picker: {
    height: 50,
    backgroundColor: '#fff',
  },
  disabledPicker: {
    opacity: 0.5,
    backgroundColor: '#f5f5f5',
  },
  continueButton: {
    backgroundColor: '#776391',
    borderRadius: 12,
    marginTop: 12,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  helpSection: {
    backgroundColor: '#efe8f4',
    borderRadius: 16,
    marginHorizontal: 16,
    marginBottom: 110,
    padding: 20,
  },
  helpTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  helpText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 16,
  },
  helpButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#776391',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  helpButtonText: {
    color: '#776391',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 6,
  },
});
