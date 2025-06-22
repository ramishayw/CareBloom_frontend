import Subheader from "@/components/Subheader";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function QuestionDetails() {
  const { id, question, answers } = useLocalSearchParams();

  // Sample question data
  const questionData = {
    author: "Sophia Clark",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    content: "I'm 10 weeks pregnant and I've been experiencing some spotting. Is this normal?",
    timestamp: "10w ago",
    comments: 3
  };

  // Sample answers data
  const answersData = [
    {
      id: 1,
      author: "Medical Advice",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
      content: "Spotting can be normal in early pregnancy, but it's important to consult your doctor to rule out any complications.",
      verifiedBy: "Verified by Dr. Olivia Bennett",
      comments: 1,
      isVerified: true
    }
  ];

  // Sample replies
  const replies = [
    {
      id: 1,
      author: "Sophia Clark",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b612?w=100&h=100&fit=crop&crop=face",
      content: "Thank you for your advice, Dr. Bennett. I'll schedule an appointment with my doctor.",
      timestamp: "2w ago"
    }
  ];

  const handleBackPress = () => {
    router.back();
  };

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }} 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        {/* Custom Header */}
        <Subheader title="Answers" />

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          {/* Original Question */}
          <View style={styles.questionCard}>
            <View style={styles.userRow}>
              <Image source={{ uri: questionData.avatar }} style={styles.avatar} />
              <View style={styles.userInfo}>
                <Text style={styles.userName}>{questionData.author}</Text>
                <Text style={styles.questionText}>{questionData.content}</Text>
                <Text style={styles.timestamp}>{questionData.timestamp}</Text>
              </View>
            </View>

            <View style={styles.interactionRow}>
              <View style={styles.commentCount}>
                <Ionicons name="chatbubble-outline" size={16} color="#666" />
                <Text style={styles.countText}>{questionData.comments}</Text>
              </View>
            </View>
          </View>

          {/* Answers Section */}
          <Text style={styles.sectionTitle}>Answers</Text>

          {answersData.map((answer) => (
            <View key={answer.id} style={styles.answerCard}>
              <View style={styles.userRow}>
                <Image source={{ uri: answer.avatar }} style={styles.avatar} />
                <View style={styles.userInfo}>
                  <Text style={styles.userName}>{answer.author}</Text>
                  <Text style={styles.answerText}>{answer.content}</Text>
                  {answer.isVerified && (
                    <Text style={styles.verifiedText}>{answer.verifiedBy}</Text>
                  )}
                </View>
              </View>
                
              <View style={styles.interactionRow}>
                <View style={styles.commentCount}>
                  <Ionicons name="chatbubble-outline" size={16} color="#666" />
                  <Text style={styles.countText}>{answer.comments}</Text>
                </View>
              </View>

              {/* Replies */}
              {replies.map((reply) => (
                <View key={reply.id} style={styles.replyContainer}>
                  <View style={styles.userRow}>
                    <Image source={{ uri: reply.avatar }} style={styles.smallAvatar} />
                    <View style={styles.userInfo}>
                      <View style={styles.replyHeader}>
                        <Text style={styles.userName}>{reply.author}</Text>
                        <Text style={styles.replyTimestamp}>{reply.timestamp}</Text>
                      </View>
                      <Text style={styles.replyText}>{reply.content}</Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          ))}
        </ScrollView>

        {/* Write Response Input */}
        <View style={styles.writeContainer}>
          <Image 
            source={{ uri: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face" }} 
            style={styles.writeAvatar} 
          />
          <TouchableOpacity style={styles.writeInput}>
            <Text style={styles.writePlaceholder}>Write</Text>
            <Text style={styles.writeSubtext}>RESPONSE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.attachButton}>
            <Ionicons name="image-outline" size={20} color="#666" />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  // header: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "space-between",
  //   paddingHorizontal: 16,
  //   paddingVertical: 12,
  //   paddingTop: 50,
  //   backgroundColor: "#fff",
  //   borderBottomWidth: 1,
  //   borderBottomColor: "#f0f0f0",
  // },
  // backButton: {
  //   padding: 4,
  // },
  // headerTitle: {
  //   fontSize: 18,
  //   fontWeight: "600",
  //   color: "#333",
  // },
  // headerRight: {
  //   width: 32,
  // },
  content: {
    flex: 1,
  },
  questionCard: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 8,
  },
  userRow: {
    flexDirection: "row",
    marginBottom: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  smallAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  questionText: {
    fontSize: 15,
    color: "#333",
    lineHeight: 20,
    marginBottom: 8,
  },
  answerText: {
    fontSize: 15,
    color: "#333",
    lineHeight: 20,
    marginBottom: 4,
  },
  timestamp: {
    fontSize: 13,
    color: "#666",
  },
  verifiedText: {
    fontSize: 13,
    color: "#666",
    fontStyle: "italic",
    marginTop: 4,
  },
  interactionRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 60,
  },
  commentCount: {
    flexDirection: "row",
    alignItems: "center",
  },
  countText: {
    fontSize: 14,
    color: "#666",
    marginLeft: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: "#f8f9fa",
  },
  answerCard: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 1,
  },
  replyContainer: {
    marginTop: 12,
    paddingLeft: 20,
  },
  replyHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  replyTimestamp: {
    fontSize: 13,
    color: "#666",
    marginLeft: 8,
  },
  replyText: {
    fontSize: 14,
    color: "#333",
    lineHeight: 18,
  },
  writeContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
  },
  writeAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 12,
  },
  writeInput: {
    flex: 1,
    paddingVertical: 8,
  },
  writePlaceholder: {
    fontSize: 16,
    color: "#333",
  },
  writeSubtext: {
    fontSize: 12,
    color: "#999",
    letterSpacing: 0.5,
  },
  attachButton: {
    padding: 8,
  },
});