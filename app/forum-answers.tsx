import Header from "@/components/Header";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ForumAnswers() {
  const { id, question, answers } = useLocalSearchParams();

  // Sample answers data - replace with actual data fetching
  const sampleAnswers = [
    {
      id: 1,
      author: "MomToBe2024",
      content: "I experienced nausea and fatigue during my first trimester. Make sure to eat small, frequent meals and get plenty of rest!",
      likes: 15,
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      author: "HealthyMama",
      content: "Morning sickness, breast tenderness, and mood swings are very common. Don't worry, it gets better in the second trimester!",
      likes: 8,
      timestamp: "5 hours ago"
    },
    {
      id: 3,
      author: "FirstTimeMom",
      content: "I had food aversions and couldn't stand certain smells. Ginger tea really helped with the nausea.",
      likes: 12,
      timestamp: "1 day ago"
    }
  ];

  const handleBackPress = () => {
    router.back();
  };

  const handleLike = (answerId) => {
    console.log("Liked answer:", answerId);
    // Handle like functionality
  };

  return (
    <>
      <Header />
      <View style={styles.container}>
        {/* Back Button and Question Header */}
        <View style={styles.headerSection}>
          <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
            <Ionicons name="chevron-back" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.questionTitle}>{question}</Text>
          <Text style={styles.answersCount}>{answers} answers</Text>
        </View>

        {/* Answers List */}
        <ScrollView style={styles.answersList} showsVerticalScrollIndicator={false}>
          {sampleAnswers.map((answer) => (
            <View key={answer.id} style={styles.answerCard}>
              <View style={styles.answerHeader}>
                <Text style={styles.authorName}>{answer.author}</Text>
                <Text style={styles.timestamp}>{answer.timestamp}</Text>
              </View>
              <Text style={styles.answerContent}>{answer.content}</Text>
              <View style={styles.answerFooter}>
                <TouchableOpacity 
                  style={styles.likeButton}
                  onPress={() => handleLike(answer.id)}
                >
                  <Ionicons name="heart-outline" size={16} color="#666" />
                  <Text style={styles.likeCount}>{answer.likes}</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Add Answer Button */}
        <TouchableOpacity style={styles.addAnswerButton}>
          <Text style={styles.addAnswerText}>Add Answer</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
  },
  headerSection: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  backButton: {
    marginBottom: 12,
  },
  questionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  answersCount: {
    fontSize: 14,
    color: "#666",
  },
  answersList: {
    flex: 1,
    paddingTop: 8,
  },
  answerCard: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginBottom: 12,
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  answerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  authorName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#8B5CF6",
  },
  timestamp: {
    fontSize: 12,
    color: "#999",
  },
  answerContent: {
    fontSize: 16,
    color: "#333",
    lineHeight: 22,
    marginBottom: 12,
  },
  answerFooter: {
    flexDirection: "row",
    alignItems: "center",
  },
  likeButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  likeCount: {
    fontSize: 14,
    color: "#666",
    marginLeft: 4,
  },
  addAnswerButton: {
    backgroundColor: "#8B5CF6",
    marginHorizontal: 16,
    marginVertical: 16,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  addAnswerText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});