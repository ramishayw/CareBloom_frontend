import { Stack } from "expo-router";
import { PaperProvider } from 'react-native-paper';

export default function RootLayout() {
  return (
    <PaperProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="forum-answers" options={{ headerShown: false }} />
        <Stack.Screen name="forum-addquestion" options={{ headerShown: false }} />
        <Stack.Screen name="pregnancy-category" options={{ headerShown: false }} />
        <Stack.Screen name="marketplace-category-pregnancy" options={{ headerShown: false }} />
        <Stack.Screen name="marketplace-category-postpartum" options={{ headerShown: false }} />
        <Stack.Screen name="hospital-login" options={{ headerShown: false }} />
        <Stack.Screen name="hospital-dashboard" options={{ headerShown: false }} />
      </Stack>
    </PaperProvider>
  );
}
