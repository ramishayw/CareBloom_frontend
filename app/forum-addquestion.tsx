import Subheader from "@/components/Subheader";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
    Alert,
    Dimensions,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

const { width: screenWidth } = Dimensions.get('window');

export default function ForumAddQuestion() {
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Image carousel data
  const carouselData = [
    {
      image: require("@/assets/images/Forum/question1.jpg"), // Replace with your actual image paths
      title: "Ask Questions",
      description: "Get answers from the community"
    },
    {
      image: require("@/assets/images/Forum/question2.jpg"),
      title: "Share Knowledge",
      description: "Help others learn and grow"
    },
    {
      image: require("@/assets/images/Forum/question3.jpg"),
      title: "Join Discussions",
      description: "Connect with like-minded people"
    },
    {
      image: require("@/assets/images/Forum/question4.jpg"),
      title: "Learn Together",
      description: "Discover new perspectives"
    }
  ];

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handlePostQuestion = () => {
    if (!subject.trim() || !content.trim()) {
      Alert.alert("Error", "Please fill in both subject and content fields.");
      return;
    }

    // Here you would typically handle the API call to post the question
    Alert.alert(
      "Question Posted!",
      "Your question has been posted successfully.",
      [
        {
          text: "OK",
          onPress: () => router.back()
        }
      ]
    );
  };

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }} 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Subheader title="Question" />
      
      {/* Image Carousel */}
      <View style={styles.carouselContainer}>
        <Image 
          source={carouselData[currentImageIndex].image}
          style={styles.carouselImage}
          resizeMode="cover"
        />
        <View style={styles.imageOverlay}>
          <Text style={styles.overlayTitle}>
            {carouselData[currentImageIndex].title}
          </Text>
          <Text style={styles.overlayDescription}>
            {carouselData[currentImageIndex].description}
          </Text>
        </View>
        
        {/* Dots Indicator */}
        {/* <View style={styles.dotsContainer}>
          {carouselData.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === currentImageIndex && styles.activeDot
              ]}
            />
          ))}
        </View> */}
      </View>

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          
          {/* Subject Input */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.subjectInput}
              placeholder="Title"
              placeholderTextColor="#999"
              value={subject}
              onChangeText={setSubject}
              maxLength={100}
            />
          </View>

          {/* Content Input */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.contentInput}
              placeholder="Description"
              placeholderTextColor="#999"
              value={content}
              onChangeText={setContent}
              multiline
              textAlignVertical="top"
              maxLength={500}
            />
          </View>

          {/* Character count */}
          <Text style={styles.characterCount}>
            {content.length}/500 characters
          </Text>
        </View>
      </ScrollView>

      {/* Post Question Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[
            styles.postButton,
            (!subject.trim() || !content.trim()) && styles.disabledButton
          ]} 
          onPress={handlePostQuestion}
          disabled={!subject.trim() || !content.trim()}
        >
          <Text style={styles.postButtonText}>Post Question</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
  },
  carouselContainer: {
    height: 200,
    position: "relative",
    marginVertical: 20,
    marginHorizontal: 16,
  },
  carouselImage: {
    width: screenWidth - 32,
    height: 200,
    borderRadius: 12,
  },
  imageOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(119, 99, 145, 0.5)",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomEndRadius: 12,
    borderBottomLeftRadius  : 12,
  },
  overlayTitle: {
    color: "#fff", 
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
  },
  overlayDescription: {
    color: "#fff",
    fontSize: 14,
    opacity: 0.9,
  },
  dotsContainer: {
    position: "absolute",
    bottom: 10,
    right: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    marginLeft: 6,
  },
  activeDot: {
    backgroundColor: "#fff",
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
    marginBottom: 30,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
    marginBottom: 8,
  },
  subjectInput: {
    backgroundColor: "#f9f9f9",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
    color: "#333",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    minHeight: 50,
  },
  contentInput: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: "#333",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    minHeight: 120,
  },
  characterCount: {
    fontSize: 12,
    color: "#666",
    textAlign: "right",
    marginTop: -10,
    marginBottom: 20,
  },
  buttonContainer: {
    paddingHorizontal: 16,
    // paddingBottom: 130,
    paddingBottom: 52,
    paddingTop: 10,
    backgroundColor: "#f1f1f1",
  },
  postButton: {
    backgroundColor: "#776391",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  disabledButton: {
    backgroundColor: "#ccc",
  },
  postButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});