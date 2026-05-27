# CancelBefore 2.0: The Beautiful Smart Tracker

**Strategy:** Combine Bobby-killer design quality (A) with smart privacy-first intelligence (B). Become the best-designed, smartest subscription tracker on iOS — without touching a bank account.

**Pricing:** Hybrid model — $2.99/mo or $19.99/yr or $29.99 lifetime. Launch promo: $19.99 lifetime.

---

## Phase 1: Design Overhaul (2-3 weeks)

Win the App Store screenshot test. Make every screen feel premium.

### 1.1 Spending Dashboard

Replace the current flat list header with a spending donut chart.

- Donut chart with monthly total at center, category segments (Streaming, Software, Health, Other)
- Tappable segments drill into category detail
- Monthly/yearly toggle above the chart
- This replaces the current savings banner at the top of the home screen
- The "aha moment" — seeing total spend — is what hooks new users

**Free tier:** Shows the donut chart with total.
**Pro tier:** Shows category breakdown + historical trends (Phase 2).

### 1.2 Calendar View

Add a calendar tab or toggle to the home screen.

- Monthly grid with color-coded dots on renewal dates
- Urgency colors match existing system: red (expired), orange (critical), amber (warning), blue (safe)
- Tap a date to see which subscriptions renew that day
- Toggle between list view (current) and calendar view
- Every competitor has this — it's table stakes

### 1.3 Service Brand Colors + Dark Mode

Make subscription cards visually distinct using real service brand colors.

- Map ~50 popular services to their brand color (Netflix #e50914, Spotify #1db954, Disney+ #113ccf, etc.)
- Card accent bar (currently urgency-only) gets a brand color variant when in list view
- Detail screen gradient can blend brand color with urgency color
- Full dark mode: dark backgrounds (#0f172a), adjusted card surfaces, inverted text
- System setting auto-detect + manual toggle in settings
- Custom service color picker for Pro users

### 1.4 Rich Actionable Notifications

Upgrade from plain text reminders to interactive notifications.

- iOS notification actions: "Cancel Guide", "Keep It", "Snooze 3 Days"
- Tapping "Cancel Guide" deep-links to the cancel guide URL or in-app detail
- Tapping "Keep It" marks the trial as kept directly from the notification
- Tapping "Snooze" reschedules the reminder for 3 days later
- Monthly savings summary notification on the 1st of each month
- Notification body includes price: "Netflix renews tomorrow — $15.99"

### 1.5 Trial Countdown Timer

The name is CancelBefore — make the countdown the signature UX element.

- Prominent countdown on trial cards: "2d 14h left" for trials, "Renews in 5 days" for active subs
- Animate the countdown badge color from blue → amber → red as deadline approaches
- Detail screen shows large countdown with days/hours/minutes
- This is the brand differentiator no competitor owns

### 1.6 Upgraded Subscription Card Design

Redesign the TrialCard component for visual impact.

- Service icon (from brand color mapping) replaces generic emoji circle
- Brand color accent bar on left edge
- Price and renewal date right-aligned
- Swipe-left for quick actions: Cancel, Keep, Snooze
- Long-press for context menu: Edit, Delete, Share
- Subtle shadow and rounded corners (16px radius)

---

## Phase 2: Smart Features (4-6 weeks)

Add intelligence without sacrificing privacy. All processing stays on-device.

### 2.1 AI Screenshot Import

Let users snap a photo of a billing email, App Store receipt, or bank notification.

- On-device Vision framework (iOS) extracts text
- Parse service name, price, billing frequency, and renewal date
- Present pre-filled add form for user to confirm/edit
- No data leaves the device — all OCR is local
- Support: screenshots, photos of emails, App Store receipt screenshots
- Pro feature

### 2.2 iCloud Sync

Solve the #1 user fear: "what if I lose my phone?"

- CloudKit sync across iPhone and iPad
- Apple manages encryption keys — CancelBefore never sees the data
- Conflict resolution: last-write-wins with timestamp comparison
- Sync status indicator in settings (last synced, sync errors)
- Zero servers on our end — Apple infrastructure only
- Pro feature

### 2.3 Spending Analytics

Give users the "so what" behind their tracking data.

- Monthly spending trend bar chart (6 months)
- Year-over-year comparison
- Total saved (from canceled subscriptions)
- Category spending breakdown over time
- "You're spending more on streaming than 80% of users" (anonymized benchmarks, future)
- Pro feature — this is the primary upgrade hook

### 2.4 Home Screen Widgets

Passive awareness drives engagement without opening the app.

- Small widget (2x2): Monthly total spend + active count
- Medium widget (4x2): Next 3 upcoming renewals with urgency colors and countdown
- Large widget (4x4): Mini calendar with renewal dots + monthly total
- WidgetKit with timeline refresh every 6 hours
- Pro feature

---

## Phase 3: Growth Engine (Weeks 6-10)

Features that drive downloads and conversion.

### 3.1 Shareable Savings Cards

Turn savings into organic marketing.

- "I saved $247 with CancelBefore" — branded card with user's savings stat
- Share to Instagram Stories, Twitter, iMessage
- Card includes subtle CancelBefore branding + App Store link
- Triggered after milestones: first cancel, $100 saved, $500 saved
- Free feature (it's marketing)

### 3.2 Onboarding Redesign

Drive toward the "aha moment" faster.

- Slide 1: "The average person wastes $127/year on forgotten subscriptions"
- Slide 2: Quick-add 3 subscriptions with service chips (get to the donut chart ASAP)
- Slide 3: See your total spend (the hook)
- Notification permission request after showing value, not before
- Skip option available but discouraged
- Target: under 90 seconds from install to seeing total spend

### 3.3 Rate App Prompt

Drive App Store ratings at the right moment.

- Trigger after: 5th subscription added, first cancel, or first month of use
- Use native SKStoreReviewController
- Never show more than once per 90 days
- Never show after a negative action (delete, failed purchase)

---

## Pricing Model

### Tiers

| | Free | Pro |
|---|---|---|
| **Subscriptions** | 5 | Unlimited |
| **Reminders** | Yes | Yes |
| **Urgency colors** | Yes | Yes |
| **Cancel guides** | Yes | Yes |
| **Donut chart (total)** | Yes | Yes |
| **Calendar view** | Yes | Yes |
| **Dark mode** | No | Yes |
| **Spending analytics** | No | Yes |
| **iCloud sync** | No | Yes |
| **Widgets** | No | Yes |
| **AI screenshot import** | No | Yes |
| **Custom service colors** | No | Yes |
| **Shareable savings cards** | Yes | Yes |

### Pricing

- **Monthly:** $2.99/mo
- **Annual:** $19.99/yr (save 44%)
- **Lifetime:** $29.99 one-time
- **Launch promo:** $19.99 lifetime (limited time)

### Free tier change

Increase from 3 to 5 free subscriptions. Research shows 3 is too aggressive — users feel locked out before experiencing value. 5 lets most users track their key subscriptions and naturally hit the limit as they add more.

### RevenueCat implementation

- Keep RevenueCat for IAP management
- Add two new products: monthly subscription, annual subscription
- Keep lifetime product but update price to $29.99
- Offering: show all three options on a redesigned paywall
- Paywall trigger points: hitting 5-sub limit, tapping locked Pro features, Pro tab

---

## Technical Architecture Notes

### Existing stack (no changes)
- React Native + Expo
- Expo Router (file-based routing)
- AsyncStorage (local persistence)
- RevenueCat (IAP)
- expo-notifications (reminders)

### New dependencies
- `@react-native-community/netinfo` — sync status awareness
- `react-native-cloudkit` or custom CloudKit bridge — iCloud sync
- Vision framework (native module) — AI screenshot OCR
- WidgetKit (native extension) — home screen widgets
- `react-native-chart-kit` or `victory-native` — donut chart and bar charts

### Data model additions

```
Trial (updated):
  + category: string ('streaming'|'software'|'health'|'fitness'|'gaming'|'news'|'food'|'cloud'|'productivity'|'other')
  + brandColor: string (hex, optional)
  + lastSyncedAt: string (ISO, optional)
  + createdAt: string (ISO)
  + updatedAt: string (ISO)

UserPreferences (new):
  + theme: 'light'|'dark'|'system'
  + defaultReminders: ReminderOption[]
  + hasSeenOnboardingV3: boolean
  + lastRatePrompt: string (ISO, optional)
```

### Migration path
- AsyncStorage data is preserved — new fields added with defaults
- Existing users see "What's New" modal on update
- Free limit changes from 3 → 5 (existing users with 3+ subs are grandfathered)

---

## Success Metrics

| Metric | Current | Target (3 months) | Target (6 months) |
|---|---|---|---|
| App Store rating | Unknown | 4.5+ | 4.7+ |
| Monthly downloads | Low | 2,000 | 10,000 |
| Free-to-paid conversion | Unknown | 4% | 8% |
| MRR | ~$0 | $2,500 | $10,000 |
| Paying users | Low | 500 | 2,500 |
| Day-30 retention | Unknown | 15% | 25% |

---

## What's NOT in scope

- Android app (iOS only for now)
- Bank linking / Plaid integration (privacy-first positioning)
- Bill negotiation service (too complex, regulatory)
- Web app (focus on native iOS)
- Team/family plans (single user focus)
- Multi-currency (USD only for V2, localization in V3)
