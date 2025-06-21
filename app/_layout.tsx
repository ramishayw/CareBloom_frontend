import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="forum-answers" options={{ headerShown: false }} />
      <Stack.Screen name="forum-addquestion" options={{ headerShown: false }} />
      <Stack.Screen name="pregnancy-category" options={{ headerShown: false }} />
    </Stack>
  );
}
