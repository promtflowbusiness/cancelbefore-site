# Phase 1: Design Overhaul — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform CancelBefore from a functional MVP into the best-designed subscription tracker on iOS — spending dashboard, calendar view, brand colors, dark mode, rich notifications, countdown timers, and upgraded cards.

**Architecture:** All changes are in the React Native/Expo app at `/Users/chad/Promt Flow LLC/PromptFlow-Business/cancelbefore/`. We add new components, a theme system, and a brand color mapping. No backend changes. No new native modules in Phase 1 (charts use SVG, calendar is pure RN).

**Tech Stack:** React Native 0.81.5, Expo 54, TypeScript, Expo Router, react-native-svg (new dep for donut chart), existing expo-notifications + expo-haptics + expo-linear-gradient.

**Checkpoint rule:** After each task, verify the work builds and renders correctly before moving to the next task. Report status to the user after each major feature (1.1 through 1.6).

---

## File Map

### New files to create
- `constants/brandColors.ts` — 50+ service → brand color mapping + icon letter
- `constants/theme.ts` — light/dark theme definitions, ThemeContext provider
- `constants/categories.ts` — subscription category definitions and icons
- `components/DonutChart.tsx` — SVG donut chart with animated segments
- `components/CalendarView.tsx` — monthly calendar grid with renewal dots
- `components/CountdownBadge.tsx` — animated countdown timer (Xd Xh)
- `components/UpgradeModal.tsx` — extracted from index.tsx (already partially exists inline)

### Files to modify
- `constants/colors.ts` — add dark mode color variants
- `lib/seeds.ts` — add `CATEGORIES` array, expand `SERVICES` with brand colors
- `lib/dates.ts` — add `formatCountdown()` helper
- `lib/notifications.ts` — add notification action categories + snooze logic
- `components/TrialCard.tsx` — redesign with brand colors, countdown, swipe actions
- `components/SavingsBanner.tsx` — update to support category data
- `app/(tabs)/index.tsx` — integrate donut chart, calendar toggle, new cards
- `app/(tabs)/history.tsx` — update to use new TrialCard
- `app/(tabs)/_layout.tsx` — add theme provider, update tab styling for dark mode
- `app/_layout.tsx` — wrap with ThemeProvider
- `app/detail.tsx` — use brand colors in gradient, add countdown
- `app/add.tsx` — add category picker, update service chips with brand colors
- `app/settings.tsx` — add dark mode toggle, add theme setting
- `package.json` — add react-native-svg dependency

---

## Task 1: Install Dependencies & Brand Color System

**Files:**
- Modify: `package.json`
- Create: `constants/brandColors.ts`
- Create: `constants/categories.ts`

- [ ] **Step 1: Install react-native-svg**

```bash
cd "/Users/chad/Promt Flow LLC/PromptFlow-Business/cancelbefore"
npx expo install react-native-svg
```

- [ ] **Step 2: Create brand color mapping**

Create `constants/brandColors.ts` with this content:

```typescript
export interface BrandInfo {
  color: string;
  letter: string;
  category: Category;
}

export type Category =
  | "streaming"
  | "music"
  | "software"
  | "fitness"
  | "gaming"
  | "news"
  | "food"
  | "cloud"
  | "productivity"
  | "other";

// Maps lowercase service name substrings to brand info.
// Checked in order — first match wins.
const BRAND_MAP: [string, BrandInfo][] = [
  ["netflix", { color: "#e50914", letter: "N", category: "streaming" }],
  ["hulu", { color: "#1ce783", letter: "H", category: "streaming" }],
  ["disney", { color: "#113ccf", letter: "D", category: "streaming" }],
  ["amazon prime", { color: "#00a8e1", letter: "P", category: "streaming" }],
  ["prime video", { color: "#00a8e1", letter: "P", category: "streaming" }],
  ["hbo", { color: "#b528ef", letter: "H", category: "streaming" }],
  ["max", { color: "#002be7", letter: "M", category: "streaming" }],
  ["peacock", { color: "#000000", letter: "P", category: "streaming" }],
  ["paramount", { color: "#0064ff", letter: "P", category: "streaming" }],
  ["apple tv", { color: "#000000", letter: "A", category: "streaming" }],
  ["crunchyroll", { color: "#f47521", letter: "C", category: "streaming" }],
  ["spotify", { color: "#1db954", letter: "S", category: "music" }],
  ["apple music", { color: "#fc3c44", letter: "A", category: "music" }],
  ["youtube music", { color: "#ff0000", letter: "Y", category: "music" }],
  ["youtube premium", { color: "#ff0000", letter: "Y", category: "streaming" }],
  ["youtube", { color: "#ff0000", letter: "Y", category: "streaming" }],
  ["tidal", { color: "#000000", letter: "T", category: "music" }],
  ["deezer", { color: "#a238ff", letter: "D", category: "music" }],
  ["pandora", { color: "#3668ff", letter: "P", category: "music" }],
  ["audible", { color: "#f8991c", letter: "A", category: "music" }],
  ["adobe", { color: "#ff0000", letter: "A", category: "software" }],
  ["canva", { color: "#7d2ae8", letter: "C", category: "software" }],
  ["figma", { color: "#f24e1e", letter: "F", category: "software" }],
  ["notion", { color: "#000000", letter: "N", category: "software" }],
  ["slack", { color: "#4a154b", letter: "S", category: "software" }],
  ["zoom", { color: "#0b5cff", letter: "Z", category: "software" }],
  ["microsoft", { color: "#00a4ef", letter: "M", category: "software" }],
  ["office", { color: "#d83b01", letter: "O", category: "software" }],
  ["google one", { color: "#4285f4", letter: "G", category: "cloud" }],
  ["google workspace", { color: "#4285f4", letter: "G", category: "software" }],
  ["icloud", { color: "#3693f3", letter: "i", category: "cloud" }],
  ["dropbox", { color: "#0061fe", letter: "D", category: "cloud" }],
  ["github", { color: "#24292f", letter: "G", category: "software" }],
  ["chatgpt", { color: "#10a37f", letter: "G", category: "software" }],
  ["openai", { color: "#10a37f", letter: "O", category: "software" }],
  ["claude", { color: "#cc9b7a", letter: "C", category: "software" }],
  ["grammarly", { color: "#15c39a", letter: "G", category: "software" }],
  ["1password", { color: "#0572ec", letter: "1", category: "software" }],
  ["nordvpn", { color: "#4687ff", letter: "N", category: "software" }],
  ["expressvpn", { color: "#da3940", letter: "E", category: "software" }],
  ["vpn", { color: "#4687ff", letter: "V", category: "software" }],
  ["xbox", { color: "#107c10", letter: "X", category: "gaming" }],
  ["playstation", { color: "#003791", letter: "P", category: "gaming" }],
  ["nintendo", { color: "#e60012", letter: "N", category: "gaming" }],
  ["steam", { color: "#1b2838", letter: "S", category: "gaming" }],
  ["ea play", { color: "#000000", letter: "E", category: "gaming" }],
  ["nyt", { color: "#000000", letter: "T", category: "news" }],
  ["new york times", { color: "#000000", letter: "T", category: "news" }],
  ["washington post", { color: "#000000", letter: "W", category: "news" }],
  ["wall street", { color: "#0274b6", letter: "W", category: "news" }],
  ["medium", { color: "#000000", letter: "M", category: "news" }],
  ["substack", { color: "#ff6719", letter: "S", category: "news" }],
  ["doordash", { color: "#ff3008", letter: "D", category: "food" }],
  ["uber eats", { color: "#06c167", letter: "U", category: "food" }],
  ["grubhub", { color: "#f63440", letter: "G", category: "food" }],
  ["instacart", { color: "#43b02a", letter: "I", category: "food" }],
  ["hellofresh", { color: "#91c11e", letter: "H", category: "food" }],
  ["gym", { color: "#ff6900", letter: "G", category: "fitness" }],
  ["fitness", { color: "#ff6900", letter: "F", category: "fitness" }],
  ["peloton", { color: "#000000", letter: "P", category: "fitness" }],
  ["orangetheory", { color: "#f36f21", letter: "O", category: "fitness" }],
  ["planet fitness", { color: "#5d2d91", letter: "P", category: "fitness" }],
  ["headspace", { color: "#f47d31", letter: "H", category: "fitness" }],
  ["calm", { color: "#3d5a80", letter: "C", category: "fitness" }],
  ["duolingo", { color: "#58cc02", letter: "D", category: "productivity" }],
  ["evernote", { color: "#00a82d", letter: "E", category: "productivity" }],
  ["todoist", { color: "#e44232", letter: "T", category: "productivity" }],
  ["linear", { color: "#5e6ad2", letter: "L", category: "productivity" }],
];

const DEFAULT_BRAND: BrandInfo = {
  color: "#64748b",
  letter: "?",
  category: "other",
};

export function getBrandInfo(serviceName: string): BrandInfo {
  const lower = serviceName.toLowerCase();
  for (const [key, info] of BRAND_MAP) {
    if (lower.includes(key)) return info;
  }
  return { ...DEFAULT_BRAND, letter: serviceName.charAt(0).toUpperCase() || "?" };
}

export const CATEGORY_LABELS: Record<Category, string> = {
  streaming: "Streaming",
  music: "Music",
  software: "Software",
  fitness: "Health & Fitness",
  gaming: "Gaming",
  news: "News & Media",
  food: "Food & Delivery",
  cloud: "Cloud Storage",
  productivity: "Productivity",
  other: "Other",
};

export const CATEGORY_COLORS: Record<Category, string> = {
  streaming: "#e50914",
  music: "#1db954",
  software: "#0572ec",
  fitness: "#ff6900",
  gaming: "#107c10",
  news: "#000000",
  food: "#ff3008",
  cloud: "#4285f4",
  productivity: "#58cc02",
  other: "#64748b",
};
```

- [ ] **Step 3: Commit**

```bash
git add package.json constants/brandColors.ts
git commit -m "feat: add react-native-svg and brand color system with 65+ service mappings"
```

---

## Task 2: Theme System (Light/Dark Mode)

**Files:**
- Create: `constants/theme.ts`
- Modify: `constants/colors.ts`
- Modify: `app/_layout.tsx`
- Modify: `app/settings.tsx`

- [ ] **Step 1: Create theme system**

Create `constants/theme.ts`:

```typescript
import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useColorScheme } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const THEME_KEY = "cb_theme_preference";

export type ThemeMode = "light" | "dark" | "system";

export interface ThemeColors {
  bg: string;
  card: string;
  cardBorder: string;
  text: string;
  textSec: string;
  textMuted: string;
  border: string;
  tabBar: string;
  tabBarBorder: string;
  headerBg: string;
  inputBg: string;
  inputBorder: string;
  primary: string;
  primaryDark: string;
  primarySoft: string;
  primaryTint: string;
  critical: string;
  criticalBg: string;
  warning: string;
  warningBg: string;
  safe: string;
  safeBg: string;
}

export const lightTheme: ThemeColors = {
  bg: "#f6f9ff",
  card: "#ffffff",
  cardBorder: "#e0e8f7",
  text: "#0f172a",
  textSec: "#475569",
  textMuted: "#94a3b8",
  border: "#e0e8f7",
  tabBar: "#ffffff",
  tabBarBorder: "#e0e8f7",
  headerBg: "#4f7cf7",
  inputBg: "#ffffff",
  inputBorder: "#d1d9e6",
  primary: "#4f7cf7",
  primaryDark: "#3157d8",
  primarySoft: "#dbe8ff",
  primaryTint: "#eef4ff",
  critical: "#ef4444",
  criticalBg: "#fef2f2",
  warning: "#f59e0b",
  warningBg: "#fffbeb",
  safe: "#10b981",
  safeBg: "#ecfdf5",
};

export const darkTheme: ThemeColors = {
  bg: "#0f172a",
  card: "#1e293b",
  cardBorder: "#334155",
  text: "#f1f5f9",
  textSec: "#cbd5e1",
  textMuted: "#64748b",
  border: "#334155",
  tabBar: "#1e293b",
  tabBarBorder: "#334155",
  headerBg: "#1e3a5f",
  inputBg: "#1e293b",
  inputBorder: "#475569",
  primary: "#6d8ff8",
  primaryDark: "#4f7cf7",
  primarySoft: "#1e3a5f",
  primaryTint: "#172554",
  critical: "#f87171",
  criticalBg: "#450a0a",
  warning: "#fbbf24",
  warningBg: "#451a03",
  safe: "#34d399",
  safeBg: "#052e16",
};

interface ThemeContextValue {
  theme: ThemeColors;
  mode: ThemeMode;
  isDark: boolean;
  setMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: lightTheme,
  mode: "system",
  isDark: false,
  setMode: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemScheme = useColorScheme();
  const [mode, setModeState] = useState<ThemeMode>("system");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(THEME_KEY).then((saved) => {
      if (saved === "light" || saved === "dark" || saved === "system") {
        setModeState(saved);
      }
      setLoaded(true);
    });
  }, []);

  const setMode = useCallback((newMode: ThemeMode) => {
    setModeState(newMode);
    AsyncStorage.setItem(THEME_KEY, newMode);
  }, []);

  const isDark =
    mode === "dark" || (mode === "system" && systemScheme === "dark");
  const theme = isDark ? darkTheme : lightTheme;

  if (!loaded) return null;

  return React.createElement(
    ThemeContext.Provider,
    { value: { theme, mode, isDark, setMode } },
    children
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
```

- [ ] **Step 2: Wrap app with ThemeProvider**

In `app/_layout.tsx`, import `ThemeProvider` from `../constants/theme` and wrap it around the existing providers. The ThemeProvider should be the outermost provider (outside SafeAreaProvider):

```typescript
// Add import at top:
import { ThemeProvider } from "../constants/theme";

// In the return JSX, wrap everything:
// <ThemeProvider>
//   <SafeAreaProvider>
//     <MonetizationProvider>
//       <TrialsProvider>
//         ...existing Stack...
//       </TrialsProvider>
//     </MonetizationProvider>
//   </SafeAreaProvider>
// </ThemeProvider>
```

- [ ] **Step 3: Add dark mode toggle to settings**

In `app/settings.tsx`, add a "Theme" row in the Preferences section (after the Notifications row). It should show the current mode (Light/Dark/System) and cycle through options on tap:

```typescript
// Add import:
import { useTheme, ThemeMode } from "../constants/theme";

// Inside the component:
const { theme, mode, setMode } = useTheme();

// Theme row after notifications row:
// Icon: moon-outline in purple circle
// Title: "Appearance"
// Value: mode === "system" ? "System" : mode === "dark" ? "Dark" : "Light"
// On press: cycle system → light → dark → system
```

Update all hardcoded colors in settings.tsx to use `theme.bg`, `theme.card`, `theme.text`, etc.

- [ ] **Step 4: Commit**

```bash
git add constants/theme.ts app/_layout.tsx app/settings.tsx
git commit -m "feat: add theme system with light/dark/system mode and settings toggle"
```

---

## Task 3: Donut Chart Component

**Files:**
- Create: `components/DonutChart.tsx`

- [ ] **Step 1: Build the donut chart component**

Create `components/DonutChart.tsx` — an SVG donut chart that takes trial data, groups by category, and renders colored segments with a total in the center.

Props interface:
```typescript
interface DonutChartProps {
  trials: Trial[];
  size?: number;        // default 180
  strokeWidth?: number; // default 24
}
```

Implementation details:
- Import `Svg, Circle, G` from `react-native-svg`
- Import `getBrandInfo, CATEGORY_COLORS, CATEGORY_LABELS, Category` from `../constants/brandColors`
- Group active trials by category using `getBrandInfo(trial.name).category`
- Calculate monthly cost per category (convert annual to monthly by dividing by 12)
- Render segments using `strokeDasharray` and `strokeDashoffset` on Circle elements
- Center text: total monthly spend formatted as `$XXX` with "/month" subtitle below
- Below the donut: horizontal legend showing category color dots + labels + amounts
- Use `useTheme()` for text colors

- [ ] **Step 2: Commit**

```bash
git add components/DonutChart.tsx
git commit -m "feat: add SVG donut chart component with category breakdown"
```

---

## Task 4: Calendar View Component

**Files:**
- Create: `components/CalendarView.tsx`

- [ ] **Step 1: Build the calendar view component**

Create `components/CalendarView.tsx` — a monthly calendar grid showing colored dots on renewal dates.

Props interface:
```typescript
interface CalendarViewProps {
  trials: Trial[];
  onSelectDate?: (date: string, trials: Trial[]) => void;
}
```

Implementation details:
- State: `currentMonth` (Date object), starts at today
- Header: month/year label with left/right chevron buttons to navigate
- Day-of-week header row: S M T W T F S
- 6-row grid of day cells (covering full month + overflow)
- Each cell shows the day number; if trials renew that day, show colored dots below (urgency-based colors from `constants/colors.ts` urgency system)
- Tap a cell with renewals → call `onSelectDate` with the date string and matching trials
- Selected date highlights with primary color background
- Below the grid: if a date is selected, show a mini-list of that day's renewals (name + price)
- Today's date gets a subtle ring indicator
- Use `useTheme()` for all colors (bg, text, borders)
- Days outside current month render in muted text

- [ ] **Step 2: Commit**

```bash
git add components/CalendarView.tsx
git commit -m "feat: add calendar view component with renewal dots and date selection"
```

---

## Task 5: Countdown Badge Component

**Files:**
- Create: `components/CountdownBadge.tsx`
- Modify: `lib/dates.ts`

- [ ] **Step 1: Add formatCountdown helper**

In `lib/dates.ts`, add:

```typescript
export function formatCountdown(renewalDate: string): string {
  const now = new Date();
  const target = new Date(renewalDate + "T12:00:00");
  const diffMs = target.getTime() - now.getTime();

  if (diffMs < 0) {
    const days = Math.abs(Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
    return `${days}d overdue`;
  }

  const totalHours = Math.floor(diffMs / (1000 * 60 * 60));
  const days = Math.floor(totalHours / 24);
  const hours = totalHours % 24;

  if (days === 0) return `${hours}h left`;
  if (days < 7) return `${days}d ${hours}h`;
  return `${days}d`;
}
```

- [ ] **Step 2: Create CountdownBadge component**

Create `components/CountdownBadge.tsx`:

```typescript
import { View, Text, StyleSheet } from "react-native";
import { formatCountdown, getDaysLeft, urgency } from "../lib/dates";
import { useTheme } from "../constants/theme";

interface CountdownBadgeProps {
  renewalDate: string;
  compact?: boolean; // smaller version for cards
}

export default function CountdownBadge({ renewalDate, compact }: CountdownBadgeProps) {
  const { theme } = useTheme();
  const daysLeft = getDaysLeft(renewalDate);
  const tier = urgency(daysLeft);
  const text = formatCountdown(renewalDate);

  const bgColors = {
    expired: theme.criticalBg,
    critical: theme.criticalBg,
    warning: theme.warningBg,
    safe: theme.primaryTint,
  };

  const textColors = {
    expired: theme.critical,
    critical: theme.critical,
    warning: theme.warning,
    safe: theme.primary,
  };

  return (
    <View style={[
      styles.badge,
      { backgroundColor: bgColors[tier] },
      compact && styles.compact,
    ]}>
      <Text style={[
        styles.text,
        { color: textColors[tier] },
        compact && styles.compactText,
      ]}>
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 99,
  },
  compact: {
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  text: {
    fontSize: 13,
    fontWeight: "700",
  },
  compactText: {
    fontSize: 11,
  },
});
```

- [ ] **Step 3: Commit**

```bash
git add lib/dates.ts components/CountdownBadge.tsx
git commit -m "feat: add countdown badge with formatCountdown helper"
```

---

## Task 6: Redesign TrialCard with Brand Colors, Countdown, and Swipe Actions

**Files:**
- Modify: `components/TrialCard.tsx`

- [ ] **Step 1: Redesign TrialCard**

Rewrite `components/TrialCard.tsx` with:

- Import `getBrandInfo` from `../constants/brandColors`
- Import `CountdownBadge` from `./CountdownBadge`
- Import `useTheme` from `../constants/theme`
- Replace emoji circle with a brand color square icon (rounded corners, brand letter centered in white)
- Left edge: 4px accent bar using `getBrandInfo(trial.name).color`
- Layout: brand icon + name/renewal date stack on left, price + CountdownBadge on right
- Name: bold, `theme.text` color
- Renewal date: small, `theme.textMuted`, formatted with `fmtDate()`
- Price: bold, right-aligned, `theme.text`
- CountdownBadge: below price, compact mode
- Card background: `theme.card`, border: `theme.cardBorder`
- Shadow: subtle on light mode, none on dark
- Border radius: 16px
- Keep existing `onPress` prop and accessibility labels
- Swipe actions: Use a `Pressable` with `onLongPress` to show an action menu (Alert.alert with Cancel/Keep/Delete options) — full gesture swipe requires react-native-gesture-handler which we'll defer

- [ ] **Step 2: Commit**

```bash
git add components/TrialCard.tsx
git commit -m "feat: redesign TrialCard with brand colors, countdown badge, and long-press actions"
```

---

## Task 7: Integrate Donut Chart + Calendar into Home Screen

**Files:**
- Modify: `app/(tabs)/index.tsx`

- [ ] **Step 1: Add view toggle and integrate new components**

Modify `app/(tabs)/index.tsx`:

- Import `DonutChart` from `../../components/DonutChart`
- Import `CalendarView` from `../../components/CalendarView`
- Import `useTheme` from `../../constants/theme`
- Add state: `viewMode: 'list' | 'calendar'` (default `'list'`)
- Replace the savings banner section with the `DonutChart` component (showing active trials)
- Below the donut chart, add a segmented toggle: "List" | "Calendar" (styled like the history tab toggle)
- When `viewMode === 'list'`: show existing grouped trial list (with new TrialCard)
- When `viewMode === 'calendar'`: show `CalendarView` component
- CalendarView `onSelectDate`: scroll to or highlight the selected date's trials below the calendar
- Update all hardcoded colors to use `theme.*` values
- Keep existing empty state, CTA bar, and free tier limit logic

- [ ] **Step 2: Update the tab bar styling for dark mode**

In `app/(tabs)/_layout.tsx`:
- Import `useTheme` from `../../constants/theme`
- Use `theme.tabBar` for tab bar background
- Use `theme.tabBarBorder` for top border
- Use `theme.primary` for active tint
- Use `theme.textMuted` for inactive tint

- [ ] **Step 3: Commit**

```bash
git add app/(tabs)/index.tsx app/(tabs)/_layout.tsx
git commit -m "feat: integrate donut chart, calendar view, and themed tab bar into home screen"
```

---

## Task 8: Update Detail Screen with Brand Colors + Countdown

**Files:**
- Modify: `app/detail.tsx`

- [ ] **Step 1: Enhance detail screen**

Modify `app/detail.tsx`:
- Import `getBrandInfo` from `../constants/brandColors`
- Import `CountdownBadge` from `../components/CountdownBadge`
- Import `useTheme` from `../constants/theme`
- Hero gradient: blend the brand color with urgency color (use brand color as the darker stop, urgency color as the lighter stop). Fall back to existing urgency-only gradient if no brand match.
- Replace emoji with brand icon (letter in white circle with brand color background, 56px)
- Add large `CountdownBadge` (non-compact) below the name in the hero
- Update info grid, notes section, cancel link, and action buttons to use `theme.*` colors
- Keep all existing functionality (cancel, keep, reactivate, edit, delete)

- [ ] **Step 2: Commit**

```bash
git add app/detail.tsx
git commit -m "feat: update detail screen with brand colors and countdown"
```

---

## Task 9: Rich Actionable Notifications

**Files:**
- Modify: `lib/notifications.ts`

- [ ] **Step 1: Add notification action categories**

Modify `lib/notifications.ts`:

- Add a `setupNotificationCategories()` function that registers a notification category with iOS action buttons:
  ```typescript
  import * as Notifications from "expo-notifications";

  async function setupNotificationCategories() {
    await Notifications.setNotificationCategoryAsync("RENEWAL_REMINDER", [
      { identifier: "KEEP", buttonTitle: "Keep It", options: { opensAppToForeground: false } },
      { identifier: "SNOOZE", buttonTitle: "Snooze 3d", options: { opensAppToForeground: false } },
      { identifier: "VIEW", buttonTitle: "View Details", options: { opensAppToForeground: true } },
    ]);
  }
  ```
- Call `setupNotificationCategories()` from the existing Android channel setup flow (runs once on app start)
- Update `scheduleTrialNotifications()` to include `categoryIdentifier: "RENEWAL_REMINDER"` in the notification content
- Update notification body to include price: `"${trial.name} renews ${label} — $${trial.price}"`
- Add a `handleNotificationAction(response)` function that:
  - "KEEP": calls `keepTrial(trialId)` (trialId extracted from notification identifier `cb_<trialId>_<days>`)
  - "SNOOZE": cancels this specific notification and reschedules it for 3 days later
  - "VIEW": navigates to detail screen (uses `router.push`)
- Export `handleNotificationAction` for use in the root layout's notification response listener

- [ ] **Step 2: Wire up notification response handler in root layout**

In `app/_layout.tsx`, add a `useEffect` that listens for notification responses using `Notifications.addNotificationResponseReceivedListener` and calls `handleNotificationAction`.

- [ ] **Step 3: Commit**

```bash
git add lib/notifications.ts app/_layout.tsx
git commit -m "feat: add rich notification actions (Keep, Snooze, View Details)"
```

---

## Task 10: Update History Screen + Add Screen + Theme All Screens

**Files:**
- Modify: `app/(tabs)/history.tsx`
- Modify: `app/add.tsx`
- Modify: `app/settings.tsx`
- Modify: `components/SavingsBanner.tsx`
- Modify: `components/OnboardingScreen.tsx`

- [ ] **Step 1: Theme the history screen**

Update `app/(tabs)/history.tsx`:
- Import `useTheme`
- Update all hardcoded colors to `theme.*`
- Use new `TrialCard` component (it already handles brand colors)
- Update segmented control colors for dark mode
- Update savings banner for dark mode

- [ ] **Step 2: Theme the add screen**

Update `app/add.tsx`:
- Import `useTheme` and `getBrandInfo`
- Update all hardcoded colors to `theme.*`
- Service chips: show brand color dot next to each chip name
- Form inputs: use `theme.inputBg` and `theme.inputBorder`
- Quick date chips and reminder chips: use `theme.primarySoft` for selected state

- [ ] **Step 3: Theme remaining components**

Update `components/SavingsBanner.tsx`:
- Accept a `variant` prop: `'upcoming'` (blue, home screen) or `'saved'` (green, history)
- Use `useTheme` for text colors

Update `components/OnboardingScreen.tsx`:
- Minimal changes — keep the gradient backgrounds as-is (they work in both modes since they're self-contained)

- [ ] **Step 4: Commit**

```bash
git add app/(tabs)/history.tsx app/add.tsx app/settings.tsx components/SavingsBanner.tsx components/OnboardingScreen.tsx
git commit -m "feat: apply dark mode theme to all screens and components"
```

---

## Task 11: Update Website Pricing to Match New Model

**Files:**
- Modify: `/Users/chad/conductor/workspaces/cancelbefore-site/havana/app/pricing/pricing-toggle.tsx`

- [ ] **Step 1: Update pricing page**

The pricing page needs to reflect the new hybrid model ($2.99/mo, $19.99/yr, $29.99 lifetime). Update the pricing-toggle.tsx to show three pricing options instead of two tiers. Update the free tier limit from 3 to 5 subscriptions. Update Pro features list to match the spec (unlimited, analytics, iCloud sync, widgets, AI import, dark mode, custom colors).

- [ ] **Step 2: Commit in the website repo**

```bash
cd /Users/chad/conductor/workspaces/cancelbefore-site/havana
git add app/pricing/pricing-toggle.tsx
git commit -m "feat: update pricing page for hybrid model ($2.99/mo, $19.99/yr, $29.99 lifetime)"
```

---

## Verification Checkpoint

After completing all tasks:

- [ ] **Build the Expo project** — `cd "/Users/chad/Promt Flow LLC/PromptFlow-Business/cancelbefore" && npx expo start` should launch without errors
- [ ] **Visual check each screen** — Home (donut chart + list + calendar), History (themed), Detail (brand colors + countdown), Add (brand chips + themed), Settings (dark mode toggle), Pro tab
- [ ] **Test dark mode** — Toggle in Settings, verify all screens render correctly in dark
- [ ] **Test notifications** — Schedule a test trial for tomorrow, verify notification includes price and action buttons
- [ ] **Test countdown** — Add trials at various dates, verify countdown badge shows correct format (Xd Xh, overdue, etc.)
- [ ] **Report to user** — Screenshot key screens and present findings before moving to Phase 2
