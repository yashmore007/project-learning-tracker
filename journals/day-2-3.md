## 📅 Day 2 & 3 – Nov 8-9, 2025

✅ Integrated Google Sign-In using Auth.js (App Router) and debugged setup issues.

---

### 🧠 What I Learned (Tech)

- NextAuth.js can be overwhelming if you try to understand everything before implementation.
- It’s better to **make things work first, then learn how they work**.
- Discovered **Auth.js**, a newer library built for **Next.js App Router** (perfect for my setup).
- Learned the authentication session flow using Google Sign-In:

  **Session Flow (Auth.js):**

  1. `signIn("google")` redirects the user to Google for authentication.
  2. Google redirects back to `/api/auth/callback/google`.
  3. The Auth.js handler processes the callback and stores the session (JWT by default).

---

### 🚀 What I Built / Shipped

- Built a **mini project** to test Google Sign-In integration using Auth.js.
- Debugged a critical issue where the app couldn’t recognize `auth.ts`.
  - **Root cause:** I had placed the file at the root instead of inside the `src/` folder.
  - **Fix:** Moved `auth.ts` into the `src` folder → everything worked seamlessly.

🔗 **Repo:** [https://github.com/yashmore007/project-learning-tracker](https://github.com/yashmore007/project-learning-tracker)

---

### 🐞 Problem I Faced & How I Solved It

**Issue:**

- Encountered an import bug:
- import { signIn } from "@/auth";
- The app couldn’t locate auth.ts.

**Solution:**

- Placed auth.ts inside the src/ folder.
- After that, Auth.js started recognizing it correctly and the app ran without issues.

### Mind Dump (Unfiltered Thoughts)

- I wasted time trying to learn NextAuth deeply before even making it work — wrong order.
- Auth.js feels cleaner and more suited for App Router.
- I actually enjoyed debugging this one — it forced me to think like a dev, not just a learner.
- Now I get how important file structure is in Next.js.

### Still Unclear

- How to protect routes (restrict access to logged-in users only)

- How to access and use logged-in user data effectively

### Tomorrow’s Focus

- Implement authentication inside the Learning Tracker app.

- Learn route protection in Auth.js.

- Display user session data on the UI.
