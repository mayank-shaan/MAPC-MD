# MAPC Study Portal - IGNOU MA Psychology

## 📚 Overview
A comprehensive, interactive study portal for IGNOU's Master of Arts in Psychology (MAPC) program. This portal transforms traditional PDF study materials into enriched, searchable, and student-friendly web application with modern research, multimedia content, and interactive learning elements.

## 🎯 Project Goals
- Convert IGNOU MAPC PDFs into structured, enriched study materials
- Add external resources, current research papers (2020-2025), and educational videos
- Create interactive learning elements (diagrams, self-assessments, memory aids)
- Provide easy navigation and search functionality
- Build a beautiful, accessible learning platform

## 🏗️ Tech Stack
- **Framework**: Docusaurus 3.0
- **Content**: MDX (Markdown + React)
- **Diagrams**: Mermaid.js for interactive visualizations
- **Styling**: CSS Modules + Tailwind CSS
- **Search**: Algolia DocSearch
- **Hosting**: Vercel/Netlify
- **Analytics**: Plausible Analytics

## 📁 Project Structure
```
mapc-study/
├── docs/                      # Study content
│   ├── intro.mdx             # Welcome page
│   ├── mpc-001/              # Cognitive Psychology ✅ COMPLETE
│   │   ├── block-1/          # 4 units, 21 files
│   │   ├── block-2/          # 4 units, 20 files
│   │   ├── block-3/          # 4 units, 19 files
│   │   └── block-4/          # 4 units, 18 files
│   ├── mpc-002/              # Life Span Psychology ✅ COMPLETE
│   │   ├── block-1/          # 4 units, 12 files
│   │   ├── block-2/          # 4 units, 14 files
│   │   ├── block-3/          # 4 units, 15 files
│   │   └── block-4/          # 4 units, 12 files
│   ├── mpc-003/              # Personality Theories ✅ COMPLETE
│   │   ├── block-1/          # 4 units, 7 files
│   │   ├── block-2/          # 4 units, 15 files
│   │   ├── block-3/          # 4 units, ~12 files
│   │   └── block-4/          # 4 units, ~12 files
│   ├── mpc-004/              # Social Psychology ✅ COMPLETE
│   │   ├── block-1/          # 4 units
│   │   ├── block-2/          # 4 units
│   │   ├── block-3/          # 4 units
│   │   └── block-4/          # 4 units
│   ├── mpc-005/              # Research Methods 🔄 IN PROGRESS
│   │   ├── block-1/          # 4 units ✅ COMPLETE (files 218–242)
│   │   └── block-2/          # Unit-1 ✅ done, Units 2–4 pending
│   ├── mpc-006/              # Statistics ⏳ Pending
│   └── mpcl-007/             # Practicals ⏳ Pending
├── processing/               # PDF processing tracking
│   ├── status-index.json     # Lightweight overall progress index
│   └── courses/              # Per-course status files
│       ├── mpc-001.json
│       ├── mpc-002.json
│       ├── mpc-003.json
│       ├── mpc-004.json
│       ├── mpc-005.json
│       ├── mpc-006.json
│       └── mpcl-007.json
├── static/
│   └── pdfs/               # Original PDF files (97 total)
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

### Phase 1: Extraction
1. Read PDF from `/static/pdfs/`
2. Extract all content completely (no loss)
3. Identify 3-5 main topics per unit
4. Create initial MDX file structure
5. Mark as `extracted` in frontmatter

### Phase 2: Enrichment
- Add 5+ external resource links per file
- Include 1+ Wikipedia articles
- Find 1+ educational videos (MIT OCW, Crash Course, Khan Academy)
- Add 1+ recent research papers (2020-2025)
- Create 1+ Mermaid diagrams
- Write 3+ self-assessment questions
- Add memory aids and mnemonics
- Include real-world examples and Indian cultural applications
- Expand to 2,000+ words of comprehensive content
- Mark as `enriched` in frontmatter with full `quality_check` block

### Phase 3: Status Update
- Update `processing/courses/<course>.json` — set unit to `"enriched"`
- Update `processing/status-index.json` — increment enriched count, remove from queue
- Update `sidebars.js` — add all new doc IDs

## 📊 Course Progress

| Course Code | Course Name | Total Units | Enriched | Status |
|------------|-------------|-------------|----------|--------|
| MPC-001 | Cognitive Psychology, Learning & Memory | 16 | 16/16 | ✅ **COMPLETE** |
| MPC-002 | Life Span Psychology | 16 | 16/16 | ✅ **COMPLETE** |
| MPC-003 | Personality Theories & Assessment | 16 | 16/16 | ✅ **COMPLETE** |
| MPC-004 | Advanced Social Psychology | 16 | 16/16 | ✅ **COMPLETE** |
| MPC-005 | Research Methods | 16 | 5/16 | 🔄 **In Progress (31%)** |
| MPC-006 | Statistics in Psychology | 16 | 0/16 | ⏳ Pending |
| MPCL-007 | Practicals | 1 | 0/1 | ⏳ Pending |

**Overall Progress**: 69/97 units enriched **(71.1%)**  
**Total MDX Files Created**: 244 files | **~700,000+ words of enriched content**

---

### MPC-001 — ✅ COMPLETE (16/16 units)

- ✅ **Block-1**: Foundations of Cognitive Psychology (4/4 units) — 21 files
- ✅ **Block-2**: Intelligence & Creativity (4/4 units) — 20 files
- ✅ **Block-3**: Language & Cognition (4/4 units) — 19 files
- ✅ **Block-4**: Problem Solving (4/4 units) — 18 files

---

### MPC-002 — ✅ COMPLETE (16/16 units)

- ✅ **Block-1**: Prenatal Through Early Childhood (4/4 units) — 12 files
- ✅ **Block-2**: Middle Childhood / Early School Years (4/4 units) — 14 files
- ✅ **Block-3**: Adolescence (4/4 units) — 15 files
- ✅ **Block-4**: Adulthood & Ageing (4/4 units) — 12 files

---

### MPC-003 — ✅ COMPLETE (16/16 units)

- ✅ **Block-1**: Introduction to Personality (4/4 units) — 7 files
  - Unit-1: Definition & Concept of Personality
  - Unit-2: Type & Trait Approaches — Allport, Cattell, Eysenck, Big Five
  - Unit-3: Personality Assessment Methods
  - Unit-4: Key Issues in Personality — Nature/Nurture, Cross-Cultural
- ✅ **Block-2**: Psychodynamic & Learning Theories (4/4 units) — 15 files
  - Unit-1: Freud, Horney, Sullivan
  - Unit-2: Bandura — Social Cognitive Theory
  - Unit-3: Pavlov & Skinner — Learning Theory
  - Unit-4: Maslow & Rogers — Humanistic and Self Theory
- ✅ **Block-3**: Existential & Phenomenological Theories (4/4 units)
- ✅ **Block-4**: Personality Assessment (4/4 units)

---

### MPC-004 — ✅ COMPLETE (16/16 units)

- ✅ **Block-1**: Foundations of Social Psychology (4/4 units)
- ✅ **Block-2**: Social Cognition & Attitudes (4/4 units)
- ✅ **Block-3**: Group Processes & Influence (4/4 units)
- ✅ **Block-4**: Applied Social Psychology (4/4 units)

---

### MPC-005 — 🔄 IN PROGRESS (5/16 units)

- ✅ **Block-1**: Basic Concepts in Research (4/4 units) — files 218–242
  - Unit-1: Definition, Meaning & Types of Research (3 files: 218–220)
  - Unit-2: Reliability & Validity (3 files: 221–223... through 236)
  - Unit-3: Variables & Constructs — S-O-R, IV/DV, Extraneous, Constructs (3 files: 237–239)
  - Unit-4: Hypothesis Formulation & Sampling — H₀/H₁, errors, all sampling methods (3 files: 240–242)
- 🔄 **Block-2**: Types of Research (1/4 units)
  - ✅ Unit-1: Survey Research — concept, 7-step process, questionnaire/interview types, cross-sectional vs. longitudinal, question design (2 files: 243–244)
  - ⏳ Unit-2: Pending
  - ⏳ Unit-3: Pending
  - ⏳ Unit-4: Pending
- ⏳ **Block-3**: Research Design (0/4 units) — pending
- ⏳ **Block-4**: Data Collection & Analysis (0/4 units) — pending

---

## Enrichment Statistics (As of March 2, 2025)

| Metric | Count |
|--------|-------|
| 🔗 External resource links | **1,300+** |
| 📚 Wikipedia articles linked | **380+** |
| 🔬 Research papers cited (2020–2025) | **390+** |
| 🎥 Educational videos embedded | **200+** |
| 📈 Mermaid diagrams | **250+** |
| ✍️ Self-assessment questions | **730+** |
| 🧠 Memory aids & mnemonics | **260+** |
| 📝 Total enriched words | **~700,000+** |

---

## 🎉 Major Milestones

**🏆 March 2, 2025 — 71% Complete!**
- ✅ **69/97 units enriched — 71.1%**
- ✅ **MPC-005/Block-1 COMPLETE** — all 4 units enriched (files 218–242)
  - Topics: Research definition/types, reliability/validity, variables/constructs (S-O-R, IV/DV, MacCorquodale-Meehl typology), hypothesis formulation, null/alternative hypotheses, Type I/II errors, all sampling methods
- ✅ **MPC-005/Block-2/Unit-1** — Survey Research: concept, 7-step process, questionnaire & interview types, cross-sectional vs longitudinal (trend/cohort/panel), question design (Likert, dichotomous, filter), precautions, advantages/disadvantages
- 244 MDX files created | ~700,000+ words

**🏆 February 26, 2025 — HALFWAY MILESTONE!**
- ✅ 49/97 units enriched — 50.5% complete
- ✅ Completed MPC-003/Block-2 (Humanistic theories — Maslow & Rogers)

**🏆 February 23, 2025 — MPC-002 & MPC-003/Block-1 Complete**
- ✅ Completed all 16 units of MPC-002 (Life Span Psychology)
- ✅ Completed MPC-003/Block-1 (7 files)

**🏆 January 21, 2025 — First Course Complete!**
- ✅ Completed all 16 units of MPC-001 (Cognitive Psychology)
  - 77 comprehensive MDX files (~240,000 words)

---

## 📝 Recent Updates

### March 2, 2025 — MPC-005/Block-2/Unit-1 ✅
**Survey Research**
- `243-survey-research-concept-steps-instruments.mdx` — definition, non-experimental nature, 7-step process, questionnaire modes (mail/group/drop-off), interview types (structured/unstructured/telephonic), Indian survey research examples (~3,000 words, 9/10)
- `244-survey-types-questions-precautions.mdx` — cross-sectional vs longitudinal (trend/cohort/panel), structured questions (dichotomous/nominal/ordinal/Likert/filter), unstructured questions, precautions in instrument design, advantages/disadvantages, issues in survey research (~3,400 words, 9/10)

### March 2, 2025 — MPC-005/Block-1/Unit-4 ✅
**Hypothesis Formulation and Sampling**
- `240-hypothesis-meaning-characteristics-formulation.mdx` — definition (McGuigan, Kerlinger), 6 characteristics, Reichenbach's discovery/justification distinction, sources and formulation process (~2,900 words)
- `241-hypothesis-types-errors-importance.mdx` — null/alternative hypotheses, directional vs non-directional, Type I (α) and Type II (β) errors, decision matrix, importance of hypothesis testing (~2,800 words)
- `242-sampling-methods-probability-nonprobability.mdx` — all 8 sampling methods (haphazard, quota, purposive, snowball, systematic, SRS, stratified, cluster), comparison table, Indian research applications (~3,600 words)

### March 2, 2025 — MPC-005/Block-1/Unit-3 ✅
**Variables and Constructs**
- `237-variables-meaning-types-sor.mdx` — S-O-R model, Type E/S IVs, DV dimensions, Kerlinger/D'Amato definitions
- `238-extraneous-confounded-active-attribute-variables.mdx` — extraneous/confounded variables, control strategies, quantitative/categorical/continuous/discrete distinctions
- `239-constructs-intervening-hypothetical.mdx` — MacCorquodale & Meehl (1948) typology, intervening variables vs. hypothetical constructs, Hull's learning theory examples

---

## 🎨 Features

### Content Features
- **Comprehensive Coverage**: No content loss from original PDFs
- **Current Research**: Papers from 2020-2025 integrated throughout
- **Multiple Learning Modalities**: Text, videos, diagrams, examples
- **Real-World Applications**: Clinical cases, practical examples
- **Cultural Context**: Indian psychology perspectives — NIMHANS, ICSSR, NEET/JEE/UPSC contexts

### Interactive Elements
- **Mermaid Diagrams**: Flowcharts, concept maps, timelines, mindmaps
- **Self-Assessments**: 3-5 questions per file with detailed answer guides
- **Memory Aids**: Mnemonics and acronyms for every major topic
- **Cross-References**: Links between related topics across courses
- **External Resources**: Curated quality links (Wikipedia, MIT OCW, Crash Course, StatQuest)

### Technical Features
- **Smart Search**: Full-text search across all content
- **Dark Mode**: Eye-friendly for extended study sessions
- **Mobile Responsive**: Seamless experience on any device
- **Fast Loading**: Optimized performance
- **PDF References**: Direct links to source materials with page numbers

## 📖 Content Quality Standards

### Per File Requirements (Non-Negotiable)
- ✅ Minimum 2,000 words (comprehensive coverage)
- ✅ 5+ external resource links
- ✅ 1+ Wikipedia article
- ✅ 1+ educational video
- ✅ 1+ recent research paper (2020-2025)
- ✅ 1+ Mermaid diagram
- ✅ 3+ self-assessment questions with answer guide
- ✅ 1+ memory aid/mnemonic
- ✅ Real-world examples & Indian cultural context
- ✅ Proper source citations with page numbers
- ✅ `quality_check` block in MDX frontmatter

### Frontmatter Quality Tracking
Every file carries its own enrichment metadata:
```yaml
status: enriched
enrichment_score: 9
quality_check:
  external_sources: 10
  wikipedia: 3
  research_papers: 3
  videos: 2
  diagrams: 2
  self_assessment: 5
  memory_aids: 2
  meets_standards: true
```

## 🤝 Contributing
This is a personal study project, but suggestions and improvements are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License
Educational use only. Original content © IGNOU.

## 🙏 Acknowledgments
- **IGNOU** for the original study materials
- **Docusaurus** team for the amazing framework
- **Research Communities** for open-access papers
- **Educational Platforms** (MIT OCW, Khan Academy, Crash Course, StatQuest)
- **Wikipedia** contributors for foundational knowledge
- **NIMHANS**, **ICSSR**, and Indian psychology researchers whose work enriches the Indian context throughout

## 📞 Contact
**Student**: MSD  
**Enrollment**: 2554161090  
**Program**: MAPC July 2025  
**Regional Centre**: Delhi 3 Naraina

---

**Last Updated**: March 2, 2025  
**Version**: 4.0 (71.1% complete)  
**Completed**: MPC-001 ✅ | MPC-002 ✅ | MPC-003 ✅ | MPC-004 ✅ | MPC-005 Block-1 ✅ + Block-2/Unit-1 ✅  
**Next Up**: MPC-005/Block-2/Unit-2
