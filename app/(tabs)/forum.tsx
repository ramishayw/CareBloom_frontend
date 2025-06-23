import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Forum() {
  const forumQuestions = [
    {
      id: 1,
      question: "What are common first trimester",
      answers: 12
    },
    {
      id: 2,
      question: "Need help choosing baby names!",
      answers: 25
    },
    {
      id: 3,
      question: "Ideas for nursery decor?",
      answers: 8
    },
    {
      id: 4,
      question: "What's a good pregnancy diet?",
      answers: 15
    },
    {
      id: 5,
      question: "Safe exercises during pregnancy?",
      answers: 10
    }
  ];

  const handleQuestionPress = (questionId, question) => {
    router.push({
      pathname: "/forum-answers",
      params: { 
        id: questionId,
        question: question,
        answers: forumQuestions.find(q => q.id === questionId)?.answers || 0
      }
    });
  };

  const handleAddQuestion = () => {
    router.push("/forum-addquestion");
  };

  return (
    <>
      <Header />
      <View style={styles.container}>
        {/* Search Bar */}
        <SearchBar />

        {/* Forum Questions List */}
        <ScrollView style={styles.questionsList} showsVerticalScrollIndicator={false}>
          {forumQuestions.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.questionRow}
              onPress={() => handleQuestionPress(item.id, item.question)}
            >
              <View style={styles.questionContent}>
                <Text style={styles.questionText}>{item.question}</Text>
                <Text style={styles.answersText}>{item.answers} answers</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#766391" />
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Add Question Button */}
        <TouchableOpacity style={styles.addQuestionButton} onPress={handleAddQuestion}>
          <Text style={styles.addQuestionText}>Add Question</Text>
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
  searchContainer: {
    paddingHorizontal: 16,
    marginVertical: 20,
    backgroundColor: "#f1f1f1",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  questionsList: {
    flex: 1,
    backgroundColor: "#f1f1f1",
  },
  questionRow: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#efe8f4",
    backgroundColor: "#f1f1f1",
    padding: 16
  },
  questionContent: {
    flex: 1,
  },
  questionText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
    marginBottom: 4,
  },
  answersText: {
    fontSize: 14,
    color: "#666",
  },
  addQuestionButton: {
    backgroundColor: "#776391",
    marginHorizontal: 16,
    marginVertical: 16,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 130,
  },
  addQuestionText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});