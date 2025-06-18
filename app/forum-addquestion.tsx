import Header from "@/components/Header";
import { router } from "expo-router";
import { useState } from "react";
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

export default function ForumAddQuestion() {
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

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
      <Header />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.title}>Ask a Question</Text>
          
          {/* Subject Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Subject</Text>
            <TextInput
              style={styles.subjectInput}
              placeholder="What's your question about?"
              placeholderTextColor="#999"
              value={subject}
              onChangeText={setSubject}
              maxLength={100}
            />
          </View>

          {/* Content Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Content</Text>
            <TextInput
              style={styles.contentInput}
              placeholder="Describe your question in detail..."
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
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
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
    paddingBottom: 130,
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