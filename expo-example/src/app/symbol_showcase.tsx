import {
  SymbolView,
  type AnimationSpec,
  type AnimationType,
} from "expo-symbols";
import { useMemo, useState } from "react";
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const EFFECTS: Array<{
  label: string;
  type: AnimationType;
  description: string;
  direction?: "up" | "down";
  wholeSymbol?: boolean;
}> = [
  {
    label: "Bounce",
    type: "bounce",
    direction: "up",
    description: "A lively jump that makes the hero symbol feel reactive.",
  },
  {
    label: "Pulse",
    type: "pulse",
    wholeSymbol: true,
    description: "A soft attention-grabber that works well for emphasis.",
  },
  {
    label: "Scale",
    type: "scale",
    wholeSymbol: true,
    description: "A dramatic zoom that shows off the symbol silhouette.",
  },
];

const IOS_ONLY_MESSAGE =
  "The richest symbol colors and symbol effects in this demo are powered by expo-symbols on iOS.";

export default function SymbolShowcasePage() {
  const [selectedEffect, setSelectedEffect] = useState(EFFECTS[0]);
  const isIos = Platform.OS === "ios";

  const heroAnimationSpec = useMemo<AnimationSpec | undefined>(() => {
    if (!isIos) {
      return undefined;
    }

    return {
      effect: {
        type: selectedEffect.type,
        direction: selectedEffect.direction,
        wholeSymbol: selectedEffect.wholeSymbol,
      },
      repeating: true,
      speed: 0.85,
    };
  }, [isIos, selectedEffect]);

  const variableLayersAnimation = useMemo<AnimationSpec | undefined>(() => {
    if (!isIos) {
      return undefined;
    }

    return {
      repeating: true,
      speed: 1.2,
      variableAnimationSpec: {
        iterative: true,
        dimInactiveLayers: true,
        nonReversing: true,
      },
    };
  }, [isIos]);

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.heroCard}>
        <Text style={styles.eyebrow}>Expo Symbols</Text>
        <Text style={styles.title}>
          Native icon animation without another animation stack
        </Text>
        <Text style={styles.subtitle}>
          This page sticks to the current app pattern: one standalone route, a
          few interactive sections, and every motion effect comes from the
          symbols library itself.
        </Text>

        <View style={styles.heroSymbolWrap}>
          <SymbolView
            name={{
              ios: "sparkles",
              android: "auto_awesome",
              web: "auto_awesome",
            }}
            size={110}
            tintColor="#ff7a18"
            animationSpec={heroAnimationSpec}
            fallback={<Text style={styles.fallback}>*</Text>}
          />
        </View>

        <Text style={styles.effectHeading}>{selectedEffect.label}</Text>
        <Text style={styles.effectDescription}>
          {selectedEffect.description}
        </Text>

        <View style={styles.effectRow}>
          {EFFECTS.map((effect) => {
            const isSelected = effect.label === selectedEffect.label;

            return (
              <Pressable
                key={effect.label}
                onPress={() => setSelectedEffect(effect)}
                style={[
                  styles.effectButton,
                  isSelected && styles.effectButtonActive,
                ]}
              >
                <Text
                  style={[
                    styles.effectButtonText,
                    isSelected && styles.effectButtonTextActive,
                  ]}
                >
                  {effect.label}
                </Text>
              </Pressable>
            );
          })}
        </View>

        {!isIos ? <Text style={styles.note}>{IOS_ONLY_MESSAGE}</Text> : null}
      </View>

      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Color systems</Text>
        <Text style={styles.sectionCopy}>
          Hierarchical, palette, and multicolor rendering are the other big
          visual win.
        </Text>

        <View style={styles.symbolRow}>
          <FeatureSymbol
            label="Hierarchical"
            symbolProps={{
              name: {
                ios: "bell.badge.fill",
                android: "notifications",
                web: "notifications",
              },
              size: 52,
              tintColor: "#ef4444",
              ...(isIos ? { type: "hierarchical" as const } : null),
            }}
          />
          <FeatureSymbol
            label="Palette"
            symbolProps={{
              name: {
                ios: "cloud.sun.rain.fill",
                android: "partly_cloudy_day",
                web: "partly_cloudy_day",
              },
              size: 52,
              tintColor: "#0f172a",
              ...(isIos
                ? {
                    type: "palette" as const,
                    colors: ["#0ea5e9", "#facc15", "#fb7185"],
                  }
                : null),
            }}
          />
          <FeatureSymbol
            label="Multicolor"
            symbolProps={{
              name: {
                ios: "paintpalette.fill",
                android: "palette",
                web: "palette",
              },
              size: 52,
              tintColor: "#9333ea",
              ...(isIos ? { type: "multicolor" as const } : null),
            }}
          />
        </View>
      </View>

      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Variable layers</Text>
        <Text style={styles.sectionCopy}>
          Some SF Symbols have layered regions that can animate independently.
          This is the most distinctive effect in the library because the icon
          itself carries the motion.
        </Text>

        <View style={styles.variableRow}>
          <SymbolView
            name={{ ios: "wifi", android: "wifi", web: "wifi" }}
            size={74}
            tintColor="#2563eb"
            animationSpec={variableLayersAnimation}
            fallback={<Text style={styles.fallback}>wifi</Text>}
          />
          <View style={styles.variableCopyWrap}>
            <Text style={styles.variableTitle}>Iterative layer animation</Text>
            <Text style={styles.variableCopy}>
              The signal bars animate in sequence using `variableAnimationSpec`,
              not a separate animation library.
            </Text>
          </View>
        </View>

        {!isIos ? <Text style={styles.note}>{IOS_ONLY_MESSAGE}</Text> : null}
      </View>

      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Cross-platform naming</Text>
        <Text style={styles.sectionCopy}>
          The same `SymbolView` can map SF Symbols on iOS to Material Symbols on
          Android and web.
        </Text>

        <View style={styles.platformGrid}>
          <PlatformBadge
            label="Chat"
            tintColor="#14b8a6"
            name={{ ios: "message.fill", android: "chat", web: "chat" }}
          />
          <PlatformBadge
            label="Energy"
            tintColor="#f59e0b"
            name={{ ios: "bolt.fill", android: "bolt", web: "bolt" }}
          />
          <PlatformBadge
            label="Favorite"
            tintColor="#ec4899"
            name={{ ios: "heart.fill", android: "favorite", web: "favorite" }}
          />
          <PlatformBadge
            label="Reward"
            tintColor="#6366f1"
            name={{ ios: "star.fill", android: "star", web: "star" }}
          />
        </View>
      </View>
    </ScrollView>
  );
}

type FeatureSymbolProps = {
  label: string;
  symbolProps: React.ComponentProps<typeof SymbolView>;
};

function FeatureSymbol({ label, symbolProps }: FeatureSymbolProps) {
  return (
    <View style={styles.featureSymbolCard}>
      <SymbolView
        {...symbolProps}
        fallback={<Text style={styles.fallback}>?</Text>}
      />
      <Text style={styles.featureLabel}>{label}</Text>
    </View>
  );
}

type PlatformBadgeProps = {
  label: string;
  tintColor: string;
  name: React.ComponentProps<typeof SymbolView>["name"];
};

function PlatformBadge({ label, tintColor, name }: PlatformBadgeProps) {
  return (
    <View style={styles.platformBadge}>
      <SymbolView
        name={name}
        size={34}
        tintColor={tintColor}
        fallback={<Text style={styles.fallback}>?</Text>}
      />
      <Text style={styles.platformLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f7f7fb",
  },
  content: {
    padding: 18,
    gap: 16,
  },
  heroCard: {
    backgroundColor: "#101828",
    borderRadius: 24,
    padding: 20,
    gap: 14,
  },
  eyebrow: {
    color: "#fbbf24",
    fontSize: 13,
    fontWeight: "800",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  title: {
    color: "#f8fafc",
    fontSize: 30,
    fontWeight: "800",
    lineHeight: 36,
  },
  subtitle: {
    color: "#cbd5e1",
    fontSize: 16,
    lineHeight: 24,
  },
  heroSymbolWrap: {
    alignSelf: "center",
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: "#1e293b",
    alignItems: "center",
    justifyContent: "center",
  },
  effectHeading: {
    color: "#f8fafc",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
  },
  effectDescription: {
    color: "#cbd5e1",
    fontSize: 15,
    lineHeight: 22,
    textAlign: "center",
  },
  effectRow: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    flexWrap: "wrap",
  },
  effectButton: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 999,
    backgroundColor: "#334155",
  },
  effectButtonActive: {
    backgroundColor: "#f8fafc",
  },
  effectButtonText: {
    color: "#e2e8f0",
    fontSize: 14,
    fontWeight: "700",
  },
  effectButtonTextActive: {
    color: "#0f172a",
  },
  sectionCard: {
    backgroundColor: "#ffffff",
    borderRadius: 22,
    padding: 18,
    gap: 14,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#111827",
  },
  sectionCopy: {
    fontSize: 15,
    lineHeight: 22,
    color: "#475569",
  },
  symbolRow: {
    flexDirection: "row",
    gap: 12,
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  featureSymbolCard: {
    minWidth: 96,
    flex: 1,
    alignItems: "center",
    gap: 10,
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 18,
    backgroundColor: "#f8fafc",
  },
  featureLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1f2937",
    textAlign: "center",
  },
  variableRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    backgroundColor: "#eff6ff",
    borderRadius: 18,
    padding: 16,
  },
  variableCopyWrap: {
    flex: 1,
    gap: 4,
  },
  variableTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#1d4ed8",
  },
  variableCopy: {
    fontSize: 14,
    lineHeight: 21,
    color: "#334155",
  },
  platformGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  platformBadge: {
    width: "47%",
    minWidth: 130,
    borderRadius: 18,
    paddingVertical: 16,
    paddingHorizontal: 12,
    backgroundColor: "#f8fafc",
    alignItems: "center",
    gap: 8,
  },
  platformLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: "#334155",
  },
  note: {
    color: "#fcd34d",
    fontSize: 13,
    lineHeight: 19,
    textAlign: "center",
  },
  fallback: {
    color: "#64748b",
    fontSize: 20,
    fontWeight: "700",
  },
});
