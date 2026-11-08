# Jayavardhan Malamanti — Cinematic Developer Portfolio

A cinematic, editorial-style personal portfolio website for **Jayavardhan Malamanti**, specializing in Artificial Intelligence & Machine Learning and Full-Stack Web Development.

Designed with a high-contrast monochrome aesthetic, fluid kinetic motion, procedural Web Audio feedback, and responsive storytelling.

---

## ✦ Key Features

- **Cinematic Morph Preloader**: Procedural audio synthesis and kinetic typography entrance animation with smart reload detection and seamless navigation persistence.
- **Dynamic Scroll-Spy Navigation**: Floating minimalist navbar with Framer Motion spring indicator tracking active sections (`HOME`, `ABOUT ME`, `MY JOURNEY`, `PROJECTS`, `SERVICES`, `RESUME`) and an integrated scroll-depth progress bar.
- **Volumetric Hero & Silhouette**: Bold typography (*"BUILDING BEYOND THE ORDINARY"*), ambient lighting tracking, and monochrome composition.
- **Interactive About Canvas**: Dynamic media expansion canvas highlighting personal philosophy and development mindset.
- **My Journey — Horizontal Storytelling Monograph**:
  - `01 — THE BEGINNING`: Foundation in first principles (HTML, CSS, JavaScript).
  - `02 — EXPLORING DEVELOPMENT`: Software engineering stack (React.js, Node.js, Tailwind CSS, Python, C++).
  - `03 — DISCOVERING AI & ML`: Machine intelligence, LLMs, embeddings, ChromaDB vector stores, and RAG architectures.
  - `04 — LEARNING BY BUILDING`: Flagship projects including QueueFlow AI, StudyAssistant, and Document RAG Advisors.
  - `05 — HACKATHONS & CHALLENGES`: Takeover Hackathon 2K26 Finals, collaborative sprints, and the 30-Day LeetCode Challenge.
  - `06 & 07 — CURRENT FOCUS & HORIZON`: DSA, systems tooling, AI engineering, and forward-looking personal statement.
- **Featured Project Showcase**:
  - **QueueFlow AI (QFlow AI)**: Smart QR-based universal queue management platform eliminating waiting lines for hospitals, banks, supermarkets, and clinics with real-time tracking, wait estimation, and AI voice announcements.
- **Dedicated Resume & About Me Page (`/resume`)**:
  - Direct overview of background as a 2nd-year B.Tech CSE (AI & ML) student at AMET University.
  - One-click **View Resume (PDF)** and **Download Resume** actions.
- **Dedicated Contact Experience (`/contact`)**:
  - Interactive project inquiry workflow, one-click email copy pill, and verified developer profile links (GitHub, LinkedIn, LeetCode, X).
- **Tactile Web Audio Feedback**: Procedural Web Audio API sound effects for clicks, hovers, and page interactions.

---

## ✦ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 15 (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Motion & Interactions**: [Framer Motion](https://www.framer.com/motion/) & [Lenis Smooth Scroll](https://github.com/darkroomengineering/lenis)
- **Icons**: [Lucide React](https://lucide.dev/) & Custom SVG icons
- **Audio Engine**: Web Audio API procedural synthesis

---

## ✦ Project Structure

```text
├── public/
│   ├── resume.pdf                     # Uploaded PDF resume
│   └── projects/                      # Project assets & screenshots
├── src/
│   ├── app/
│   │   ├── layout.tsx                 # Root layout & font configurations
│   │   ├── page.tsx                   # Main cinematic portfolio home page
│   │   ├── contact/page.tsx           # Dedicated contact & inquiry page
│   │   └── resume/page.tsx            # Dedicated resume & brief about me page
│   ├── components/
│   │   ├── echo/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ScrollExpandMedia.tsx
│   │   │   ├── MyJourneySection.tsx   # Pinned horizontal journey monograph
│   │   │   ├── FeaturedProjectsCarousel.tsx
│   │   │   ├── ServicesAccordion.tsx
│   │   │   └── FooterContact.tsx
│   │   ├── navigation/
│   │   │   └── Navbar.tsx             # Scroll-spy navigation & progress bar
│   │   └── ui/
│   │       ├── CinematicLoader.tsx    # Audio-reactive intro preloader
│   │       └── Icons.tsx
│   ├── data/
│   │   └── portfolioData.ts           # Central personal info, projects & services
│   └── hooks/
│       └── useAudio.ts                # Audio effects manager
```

---

## ✦ Getting Started

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/Jayavardhan137/Portfolio.git
cd Portfolio
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the live site with hot reload.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## ✦ Author

**Jayavardhan Malamanti**  
B.Tech CSE (AI & Machine Learning) • AMET University  
- **GitHub**: [@Jayavardhan137](https://github.com/Jayavardhan137)  
- **LinkedIn**: [Jayavardhan Malamanti](https://www.linkedin.com/in/jayavardhan-malamanti-000011380)  
- **LeetCode**: [Aig0bDIRyp](https://leetcode.com/u/Aig0bDIRyp)  
- **X (Twitter)**: [@Jayavardhan8141](https://x.com/Jayavardhan8141)  
- **Email**: [jayavardhanmalmanti143@gmail.com](mailto:jayavardhanmalmanti143@gmail.com)
