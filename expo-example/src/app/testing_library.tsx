import { useEffect, useMemo, useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const FEATURE_CARDS = [
  {
    title: "Find by role and label",
    copy: "Buttons and inputs are labeled so tests can mirror real user interactions.",
  },
  {
    title: "Type and assert state",
    copy: "Text input updates live so you can test changes after typing.",
  },
  {
    title: "Handle async updates",
    copy: "The save action moves through loading, success, and reset states.",
  },
  {
    title: "Test conditionals and lists",
    copy: "Hidden content, empty states, and dynamic rows are all represented here.",
  },
];

const SAMPLE_ITEMS = ["Milk", "Eggs", "Butter"];

export default function TestingLibraryShowcasePage() {
  const [message, setMessage] = useState("Testing Library is ready.");
  const [query, setQuery] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved">(
    "idle"
  );
  const [items, setItems] = useState(SAMPLE_ITEMS);

  useEffect(() => {
    if (saveStatus !== "saving") {
      return;
    }

    const timeoutId = setTimeout(() => {
      setIsSaving(false);
      setSaveStatus("saved");
    }, 1400);

    return () => clearTimeout(timeoutId);
  }, [saveStatus]);

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return items;
    }

    return items.filter((item) => item.toLowerCase().includes(normalizedQuery));
  }, [items, query]);

  const characterCount = query.length;
  const hasMatches = filteredItems.length > 0;

  const handleAddItem = () => {
    const nextItem = `Ingredient ${items.length + 1}`;
    setItems((currentItems) => [...currentItems, nextItem]);
  };

  const handleSave = () => {
    setIsSaving(true);
    setSaveStatus("saving");
  };

  const handleReset = () => {
    setMessage("Testing Library is ready.");
    setQuery("");
    setShowDetails(false);
    setIsSaving(false);
    setSaveStatus("idle");
    setItems(SAMPLE_ITEMS);
  };

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.hero}>
        <Text style={styles.eyebrow}>React Native Testing Library</Text>
        <Text style={styles.title}>A playground for user-centered tests</Text>
        <Text style={styles.subtitle}>
          This screen is built to be exercised the way people actually use the
          app: by finding accessible controls, typing text, waiting for async
          updates, and checking visible output.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>What this page demonstrates</Text>
        <View style={styles.grid}>
          {FEATURE_CARDS.map((card) => (
            <View key={card.title} style={styles.featureCard}>
              <Text style={styles.featureTitle}>{card.title}</Text>
              <Text style={styles.featureCopy}>{card.copy}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Interactive target</Text>
        <Text style={styles.sectionCopy}>
          Tests can query the button below by role and label, then assert the
          text updates after pressing it.
        </Text>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Update demo message"
          onPress={() => setMessage("Message updated by a press action.")}
          style={({ pressed }) => [
            styles.primaryButton,
            pressed && styles.primaryButtonPressed,
          ]}
        >
          <Text style={styles.primaryButtonText}>Update Message</Text>
        </Pressable>

        <Text style={styles.liveMessage}>{message}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Typing and filtering</Text>
        <Text style={styles.sectionCopy}>
          The input has a label and placeholder, so tests can use either one.
          The count below changes as text is entered.
        </Text>

        <TextInput
          accessibilityLabel="Filter ingredients"
          placeholder="Type to filter ingredients"
          value={query}
          onChangeText={setQuery}
          style={styles.input}
        />

        <View style={styles.metaRow}>
          <Text style={styles.metaText}>Characters: {characterCount}</Text>
          <Text style={styles.metaText}>
            Matches: {hasMatches ? filteredItems.length : 0}
          </Text>
        </View>

        <View style={styles.listBox}>
          {hasMatches ? (
            filteredItems.map((item) => (
              <Text key={item} style={styles.listItem}>
                {item}
              </Text>
            ))
          ) : (
            <Text style={styles.emptyState}>No ingredients match that text.</Text>
          )}
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Conditional content and async state</Text>
        <Text style={styles.sectionCopy}>
          This section gives you something to query with findBy and waitFor:
          press save, then wait for the success message.
        </Text>

        <View style={styles.buttonRow}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Toggle details"
            onPress={() => setShowDetails((currentValue) => !currentValue)}
            style={({ pressed }) => [
              styles.secondaryButton,
              pressed && styles.secondaryButtonPressed,
            ]}
          >
            <Text style={styles.secondaryButtonText}>
              {showDetails ? "Hide details" : "Show details"}
            </Text>
          </Pressable>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Save demo state"
            onPress={handleSave}
            disabled={isSaving}
            style={({ pressed }) => [
              styles.secondaryButton,
              isSaving && styles.disabledButton,
              pressed && !isSaving && styles.secondaryButtonPressed,
            ]}
          >
            <Text style={styles.secondaryButtonText}>
              {isSaving ? "Saving..." : "Save"}
            </Text>
          </Pressable>
        </View>

        <Text style={styles.statusText}>
          Status: {saveStatus === "idle" ? "Ready" : saveStatus}
        </Text>

        {showDetails ? (
          <View style={styles.detailsBox}>
            <Text style={styles.detailsTitle}>Visible details</Text>
            <Text style={styles.detailsCopy}>
              This block appears and disappears, which makes it ideal for tests
              that assert conditional rendering.
            </Text>
          </View>
        ) : null}
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Dynamic list</Text>
        <Text style={styles.sectionCopy}>
          The list below can grow as items are added, which is useful for
          verifying repeated queries and list assertions.
        </Text>

        <View style={styles.buttonRow}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Add ingredient"
            onPress={handleAddItem}
            style={({ pressed }) => [
              styles.secondaryButton,
              pressed && styles.secondaryButtonPressed,
            ]}
          >
            <Text style={styles.secondaryButtonText}>Add Item</Text>
          </Pressable>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Reset testing library demo"
            onPress={handleReset}
            style={({ pressed }) => [
              styles.tertiaryButton,
              pressed && styles.tertiaryButtonPressed,
            ]}
          >
            <Text style={styles.tertiaryButtonText}>Reset Demo</Text>
          </Pressable>
        </View>

        <View style={styles.listBox}>
          {items.map((item, index) => (
            <Text key={`${item}-${index}`} style={styles.listItem}>
              {index + 1}. {item}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#08111f",
  },
  content: {
    padding: 20,
    gap: 16,
    paddingBottom: 36,
  },
  hero: {
    paddingVertical: 12,
    gap: 10,
  },
  eyebrow: {
    color: "#7dd3fc",
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 1.6,
    textTransform: "uppercase",
  },
  title: {
    color: "#f8fafc",
    fontSize: 34,
    fontWeight: "800",
    lineHeight: 40,
  },
  subtitle: {
    color: "#cbd5e1",
    fontSize: 16,
    lineHeight: 24,
  },
  card: {
    backgroundColor: "#102238",
    borderRadius: 24,
    padding: 18,
    gap: 14,
    borderWidth: 1,
    borderColor: "#1f3a5d",
  },
  sectionTitle: {
    color: "#f8fafc",
    fontSize: 22,
    fontWeight: "800",
  },
  sectionCopy: {
    color: "#cbd5e1",
    fontSize: 15,
    lineHeight: 22,
  },
  grid: {
    gap: 12,
  },
  featureCard: {
    backgroundColor: "#16314d",
    borderRadius: 18,
    padding: 14,
    gap: 6,
  },
  featureTitle: {
    color: "#e2e8f0",
    fontSize: 16,
    fontWeight: "700",
  },
  featureCopy: {
    color: "#94a3b8",
    fontSize: 14,
    lineHeight: 20,
  },
  primaryButton: {
    alignSelf: "flex-start",
    backgroundColor: "#22c55e",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 999,
  },
  primaryButtonPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  primaryButtonText: {
    color: "#04210f",
    fontSize: 16,
    fontWeight: "800",
  },
  liveMessage: {
    color: "#f8fafc",
    fontSize: 16,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "#f8fafc",
    color: "#0f172a",
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
  },
  metaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  metaText: {
    color: "#7dd3fc",
    fontSize: 14,
    fontWeight: "600",
  },
  listBox: {
    backgroundColor: "#08111f",
    borderRadius: 18,
    padding: 14,
    gap: 8,
  },
  listItem: {
    color: "#e2e8f0",
    fontSize: 15,
  },
  emptyState: {
    color: "#94a3b8",
    fontSize: 15,
    fontStyle: "italic",
  },
  buttonRow: {
    flexDirection: "row",
    gap: 12,
    flexWrap: "wrap",
  },
  secondaryButton: {
    backgroundColor: "#0ea5e9",
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 16,
  },
  secondaryButtonPressed: {
    opacity: 0.85,
  },
  secondaryButtonText: {
    color: "#e0f2fe",
    fontSize: 15,
    fontWeight: "700",
  },
  tertiaryButton: {
    backgroundColor: "#1e293b",
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#475569",
  },
  tertiaryButtonPressed: {
    opacity: 0.85,
  },
  tertiaryButtonText: {
    color: "#e2e8f0",
    fontSize: 15,
    fontWeight: "700",
  },
  disabledButton: {
    opacity: 0.55,
  },
  statusText: {
    color: "#f8fafc",
    fontSize: 15,
    fontWeight: "600",
  },
  detailsBox: {
    backgroundColor: "#12304a",
    borderRadius: 18,
    padding: 14,
    gap: 8,
  },
  detailsTitle: {
    color: "#f8fafc",
    fontSize: 16,
    fontWeight: "700",
  },
  detailsCopy: {
    color: "#cbd5e1",
    fontSize: 14,
    lineHeight: 20,
  },
});