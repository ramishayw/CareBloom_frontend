import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { Button, Card, Title, TextInput, HelperText, Divider } from 'react-native-paper';

//login 
const loginMother = async (hospitalId: string, regNo: string, password: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      //demo
      resolve({ success: true, token: 'mock-token', user: { id: '1', name: 'Test User' } });
    }, 1000);
  });
};

export default function HospitalLogin() {
  const router = useRouter();
  const { hospitalId, hospitalName } = useLocalSearchParams<{
    hospitalId: string;
    hospitalName: string;
  }>();
  
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    registrationNumber: '',
    password: '',
    general: '',
  });

  const validateForm = () => {
    const newErrors = {
      registrationNumber: '',
      password: '',
      general: '',
    };

    if (!registrationNumber.trim()) {
      newErrors.registrationNumber = 'Registration number is required';
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return !newErrors.registrationNumber && !newErrors.password;
  };

  const handleLogin = async () => {
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setErrors({ registrationNumber: '', password: '', general: '' });

    try {
      await loginMother(hospitalId || '', registrationNumber, password);
      
      //navigate to hospital dashboard
      Alert.alert(
        'Login Successful',
        'Welcome to the MOH Portal!',
        [
          {
            text: 'OK',
            onPress: () => {
              router.push('/hospital-dashboard' as any);
            },
          },
        ]
      );
    } catch (error) {
      setErrors({
        registrationNumber: '',
        password: '',
        general: error instanceof Error ? error.message : 'Login failed. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    Alert.alert(
      'Forgot Password',
      'Please contact your hospital administrator to reset your password.',
      [{ text: 'OK' }]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => router.back()}
        >
          <MaterialIcons name="arrow-back" size={24} color="#776391" />
        </TouchableOpacity>
        <Title style={styles.title}>Login to Hospital Portal</Title>
      </View>

      <Card style={styles.card}>
        <Card.Content>
          {/* hospital name display */}
          <View style={styles.hospitalInfo}>
            <MaterialIcons name="local-hospital" size={24} color="#776391" />
            <Text style={styles.hospitalName}>{hospitalName}</Text>
          </View>
          
          <Divider style={styles.divider} />

          {errors.general ? (
            <View style={styles.errorContainer}>
              <MaterialIcons name="error" size={20} color="#d32f2f" />
              <Text style={styles.errorText}>{errors.general}</Text>
            </View>
          ) : null}

          {/* Registration Number Input */}
          <TextInput
            label="Registration Number"
            value={registrationNumber}
            onChangeText={setRegistrationNumber}
            mode="outlined"
            style={styles.input}
            error={!!errors.registrationNumber}
            theme={{
              colors: {
                primary: '#776391',
                outline: errors.registrationNumber ? '#d32f2f' : '#ddd',
              }
            }}
            left={<TextInput.Icon icon="account" />}
          />
          <HelperText type="error" visible={!!errors.registrationNumber}>
            {errors.registrationNumber}
          </HelperText>

          {/* Password Input */}
          <TextInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            mode="outlined"
            secureTextEntry={!showPassword}
            style={styles.input}
            error={!!errors.password}
            theme={{
              colors: {
                primary: '#776391',
                outline: errors.password ? '#d32f2f' : '#ddd',
              }
            }}
            left={<TextInput.Icon icon="lock" />}
            right={
              <TextInput.Icon
                icon={showPassword ? 'eye-off' : 'eye'}
                onPress={() => setShowPassword(!showPassword)}
              />
            }
          />
          <HelperText type="error" visible={!!errors.password}>
            {errors.password}
          </HelperText>

          {/* Forgot Password Link */}
          <TouchableOpacity 
            style={styles.forgotPasswordContainer}
            onPress={handleForgotPassword}
          >
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>

          {/* Login Button */}
          <Button
            mode="contained"
            onPress={handleLogin}
            style={styles.loginButton}
            buttonColor="#776391"
            contentStyle={styles.buttonContent}
            loading={loading}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </Button>

          {/* Demo Credentials Info */}
          {/* <View style={styles.demoInfo}>
            <Text style={styles.demoTitle}>Demo Credentials:</Text>
            <Text style={styles.demoText}>Registration: test123</Text>
            <Text style={styles.demoText}>Password: password</Text>
          </View> */}
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
    paddingTop: 60,
  },
  backButton: {
    marginRight: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  card: {
    margin: 16,
    elevation: 4,
    backgroundColor: '#fff',
  },
  hospitalInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#f8f9ff',
    borderRadius: 8,
  },
  hospitalName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginLeft: 12,
    flex: 1,
  },
  divider: {
    marginBottom: 24,
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffebee',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  errorText: {
    color: '#d32f2f',
    fontSize: 14,
    marginLeft: 8,
    flex: 1,
  },
  input: {
    marginBottom: 8,
    backgroundColor: '#fff',
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  forgotPasswordText: {
    color: '#776391',
    fontSize: 14,
    fontWeight: '500',
  },
  loginButton: {
    borderRadius: 8,
    marginBottom: 24,
  },
  buttonContent: {
    paddingVertical: 8,
  },
  demoInfo: {
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#776391',
  },
  demoTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  demoText: {
    fontSize: 12,
    color: '#666',
    fontFamily: 'monospace',
  },
});
