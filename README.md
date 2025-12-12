# MAPC Study Portal - IGNOU MA Psychology

## 📚 Overview
A comprehensive, interactive study portal for IGNOU's Master of Arts in Psychology (MAPC) program. This portal transforms traditional PDF study materials into an enriched, searchable, and student-friendly web application.

## 🎯 Project Goals
- Convert IGNOU MAPC PDFs into structured, enriched study materials
- Add external resources, videos, and research links
- Create interactive learning elements (quizzes, flashcards)
- Provide easy navigation and search functionality
- Build a beautiful, accessible learning platform

## 🏗️ Tech Stack
- **Framework**: Docusaurus 3.0
- **Content**: MDX (Markdown + React)
- **Styling**: CSS Modules + Tailwind CSS
- **Search**: Algolia DocSearch (free tier)
- **Hosting**: Vercel/Netlify
- **Analytics**: Plausible Analytics

## 📁 Project Structure
```
mapc-study/
├── docs/                      # Study content
│   ├── intro.mdx             # Welcome page
│   ├── mpc-001-cognitive/    # Course folders
│   ├── mpc-002-lifespan/
│   ├── mpc-003-personality/
│   ├── mpc-004-social/
│   ├── mpc-005-research/
│   ├── mpc-006-statistics/
│   └── mpcl-007-practicals/
├── processing/               # PDF processing tracking
│   ├── status.json          # Processing status
│   └── enrichment-log.json  # External resources added
├── static/
│   └── pdfs/               # Original PDF files
├── src/
│   ├── components/         # React components
│   └── css/               # Custom styles
└── docusaurus.config.js   # Site configuration
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18.0 or higher
- npm or yarn
- Git

### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/mapc-study.git
cd mapc-study

# Install dependencies
npm install

# Start development server
npm run start

# Build for production
npm run build

# Deploy to Vercel/Netlify
npm run deploy
```

## 📝 Content Creation Workflow

### Phase 1: PDF Processing
1. Read PDF from `/static/pdfs/`
2. Extract key topics and concepts
3. Identify important theories and studies

### Phase 2: Content Enrichment
- Add current research (2020-2024)
- Include Wikipedia links
- Find relevant YouTube videos
- Add clinical applications
- Create memory aids

### Phase 3: MDX Creation
- Write student-friendly explanations
- Add interactive elements
- Include visual diagrams
- Cross-reference related topics

### Phase 4: Status Update
- Update `processing/status.json`
- Log enrichment sources
- Track completion progress

## 📊 Course Progress

| Course Code | Course Name | Total Units | Processed | Status |
|------------|-------------|-------------|-----------|---------|
| MPC-001 | Cognitive Psychology | 16 | 0/16 | 🔄 In Progress |
| MPC-002 | Life Span Psychology | 16 | 0/16 | ⏳ Pending |
| MPC-003 | Personality Theories | 16 | 0/16 | ⏳ Pending |
| MPC-004 | Advanced Social Psychology | 16 | 0/16 | ⏳ Pending |
| MPC-005 | Research Methods | 16 | 0/16 | ⏳ Pending |
| MPC-006 | Statistics in Psychology | 16 | 0/16 | ⏳ Pending |
| MPCL-007 | Practicals | 1 | 0/1 | ⏳ Pending |

## 🎨 Features
- **Smart Search**: Full-text search across all content
- **Dark Mode**: Easy on the eyes for long study sessions
- **Mobile Responsive**: Study on any device
- **Progress Tracking**: Track your learning journey
- **Interactive Quizzes**: Test your understanding
- **Resource Links**: Curated external resources
- **PDF References**: Direct links to source materials

## 🤝 Contributing
This is a personal study project, but suggestions and improvements are welcome!

## 📄 License
Educational use only. Original content © IGNOU.

## 🙏 Acknowledgments
- IGNOU for the original study materials
- Docusaurus team for the amazing framework
- All linked external resources and their creators

---
**Student**: MSD  
**Enrollment**: 2554161090  
**Program**: MAPC July 2025  
**Regional Centre**: Delhi 3 Naraina
