## 📅 Day 47 – December 22, 2025

### ✅ Highlights

- Implemented a streak feature that tracks how many consecutive days a user has logged entries.
- Built a reusable streak calculator function and integrated it into the navbar.

### 🧠 What I Learned (Tech)

- Understood the core logic behind implementing a streak system:
  - How to compare dates to determine consecutive days.
  - Handling edge cases like gaps in logs and the first logged day.
- Gained more clarity on how to derive meaningful insights (like streaks) from raw user activity data.

### ❓ Areas To Improve / Learn

- Need to learn and apply techniques to make the app more performant:
  - Efficient data fetching and state updates.
  - Avoiding unnecessary re-renders in the UI.
  - Potentially memoizing expensive calculations like streaks if needed.

### 🚀 What I Built / Shipped

- Implemented a **streak calculator** that:
  - Takes user logs as input.
  - Calculates the current streak of consecutive days.
  - Displays a message in the navbar (e.g., “🔥 5-day streak”) when applicable.

🔗 **Commit:**[docs: update day-47 journal](https://github.com/yashmore007/project-learning-tracker/commit/0d57326678476a0dfea8339f140b5e839f259465)

### 🐞 Challenge & How I Solved It

- **Problem:** I wasn’t sure how to implement the streak logic from scratch.
- **Solution:**
  - Searched online for different approaches to streak calculation.
  - Broke down the problem into smaller steps: sorting dates, checking consecutive days, and handling breaks.
  - Adapted the logic to fit my app’s data structure and integrated it into the existing UI.

### 🔥 Tomorrow’s Focus

- Improve the UI for the “today’s progress” section to make it more readable and visually appealing.
- Add **edit** and **delete** functionality for today’s logs to make the logging experience more flexible and user-friendly.
