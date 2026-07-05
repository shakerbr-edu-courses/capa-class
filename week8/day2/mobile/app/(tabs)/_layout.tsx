import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
      <Tabs screenOptions={{
        tabBarStyle: {
          backgroundColor: "#007fff",
          borderRadius: 100,
          bottom: 20,
          height: 54,
          width: "80%",
          alignSelf: "center",
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#cce6ff",
      }}>
      <Tabs.Screen name="index" options={{ 
        title: "Home",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" color={color} size={size} />
        ),
      }} />
      <Tabs.Screen name="about" options={{ 
        title: "About",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="information-circle" color={color} size={size} />
        ),
      }} />
    </Tabs>
  );
}