## 📅 Day 1 – Nov 7, 2025

✅ Setup Next.js project, deployed to Vercel, fixed GitHub sync issue, and connected MongoDB in production.

---

### 🧠 What I Learned Today (Tech)

- How to set up a full-stack Next.js app from scratch
- How to deploy a project to Vercel
- How to connect MongoDB and verify it works in production
- Learned that Vercel can sometimes fail to sync properly with GitHub repositories

#### Still unclear / needs learning:

- Prisma — syntax and workflow
- Git best practices (branching, commit style, etc.)
- Core Next.js fundamentals (need deeper understanding)

---

### 🚀 What I Built / Shipped

- ✅ Deployed the app successfully on Vercel
- ✅ Connected MongoDB database and tested production response
- ✅ Fixed GitHub → Vercel sync issue after ~2 hours of debugging

🔗 **Commit:** [docs: add Day 2 and 3 journal entry] https://github.com/yashmore007/project-learning-tracker/commit/be60a1ae6ad5de408495c379aa52bf0e00b13a48

---

### 🐞 Problem I Faced & How I Solved It

**Issue:** Vercel was not syncing latest GitHub commits  
**Attempts:** Cleared cache, forced redeploy, checked project settings  
**Solution:** Disconnected GitHub repo from Vercel → reconnected → issue solved

Lesson: Sometimes the fix is not technical, but resetting the integration.

---

### 💭 Mind Dump (Unfiltered Thoughts)

- Prisma feels confusing right now — need a structured learning path
- Git is simple until it’s not — I should learn it properly, not just “enough to push”
- I enjoy setup + deployment more than I expected — the dev experience matters to me

---

### 🗣️ Communication Practice

**Original messy explanation:**  
"Today i set up a next.js project. i enjoyed while setting it up. i love tech which improves developer experince. then i deployed app to the vercel. but i was having a sync issue between github and vercel. i tried trobleshooting it for 2 hours.in the end i disconnected and connected the github repo. now its working fine. mongodb is also working in production."

**Clear rewritten version:**  
"Today I set up a full-stack Next.js project and deployed it to Vercel. I ran into a GitHub–Vercel sync issue that took around two hours to debug, but the fix was simple: disconnecting and reconnecting the GitHub repository. After that, the deployment worked and MongoDB is responding successfully in production."

---

### 🔥 Tomorrow’s Focus

- Integrate authentication using NextAuth
