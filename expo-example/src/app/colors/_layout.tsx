import { Tabs } from "expo-router";

export default function ColorsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ffffff",
        tabBarStyle: { backgroundColor: "#1a1a1a" },
        tabBarInactiveTintColor: "#888888",
        headerStyle: { backgroundColor: "#1a1a1a" },
        headerTintColor: "#ffffff",
      }}
    >
      <Tabs.Screen name="blue" options={{ title: "Blue" }} />
      <Tabs.Screen name="red" options={{ title: "Red" }} />
    </Tabs>
  );
}
