# MAPC Study Portal - IGNOU MA Psychology

## 📚 Overview
A comprehensive, interactive study portal for IGNOU's Master of Arts in Psychology (MAPC) program. This portal transforms traditional PDF study materials into enriched, searchable, and student-friendly web content featuring modern research, multimedia resources, and interactive learning elements.

## 🎯 Project Goals
- Convert IGNOU MAPC PDFs into structured, enriched study materials
- Add external resources, current research papers (2020–2025), and educational videos
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
├── docs/                          # Study content
│   ├── intro.mdx                 # Welcome page
│   ├── mpc-001/                  # Cognitive Psychology ✅ COMPLETE
│   │   ├── block-1/              # 4 units, 21 files
│   │   ├── block-2/              # 4 units, 20 files
│   │   ├── block-3/              # 4 units, 19 files
│   │   └── block-4/              # 4 units, 18 files
│   ├── mpc-002/                  # Life Span Psychology ✅ COMPLETE
│   │   ├── block-1/              # 4 units, 12 files
│   │   ├── block-2/              # 4 units, 14 files
│   │   ├── block-3/              # 4 units, 15 files
│   │   └── block-4/              # 4 units, 12 files
│   ├── mpc-003/                  # Personality Theories ✅ COMPLETE
│   │   ├── block-1/              # 4 units, 7 files
│   │   ├── block-2/              # 4 units, 15 files
│   │   ├── block-3/              # 4 units, ~12 files
│   │   └── block-4/              # 4 units, ~12 files
│   ├── mpc-004/                  # Social Psychology ✅ COMPLETE
│   │   ├── block-1/              # 4 units
│   │   ├── block-2/              # 4 units
│   │   ├── block-3/              # 4 units
│   │   └── block-4/              # 4 units
│   ├── mpc-005/                  # Research Methods 🔄 IN PROGRESS (87.5%)
│   │   ├── block-1/              # 4 units ✅ COMPLETE (files 218–229)
│   │   ├── block-2/              # 4 units ✅ COMPLETE (files 243–256)
│   │   ├── block-3/              # 4 units ✅ COMPLETE (files 257–264)
│   │   └── block-4/              # 2/4 units done (files 265–271)
│   ├── mpc-006/                  # Statistics ⏳ Pending
│   └── mpcl-007/                 # Practicals ⏳ Pending
├── processing/                   # PDF processing tracking
│   ├── status-index.json         # Lightweight overall progress index
│   └── courses/                  # Per-course status files
│       ├── mpc-001.json
│       ├── mpc-002.json
│       ├── mpc-003.json
│       ├── mpc-004.json
│       ├── mpc-005.json
│       ├── mpc-006.json
│       └── mpcl-007.json
├── static/
│   └── pdfs/                    # Original PDF files (97 total)
├── src/
│   ├── components/              # React components
│   └── css/                    # Custom styles
└── docusaurus.config.js        # Site configuration
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
3. Identify 3–5 main topics per unit
4. Create initial MDX file structure
5. Mark as `extracted` in frontmatter

### Phase 2: Enrichment
- Add 5+ external resource links per file
- Include 1+ Wikipedia articles
- Find 1+ educational videos (MIT OCW, Crash Course, Khan Academy)
- Add 1+ recent research papers (2020–2025)
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
| MPC-005 | Research Methods | 16 | 14/16 | 🔄 **In Progress (87.5%)** |
| MPC-006 | Statistics in Psychology | 16 | 0/16 | ⏳ Pending |
| MPCL-007 | Practicals | 1 | 0/1 | ⏳ Pending |

**Overall Progress**: 78/97 units enriched **(80.4%)**
**Total MDX Files Created**: 271 files | **~850,000+ words of enriched content**

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
- ✅ **Block-2**: Psychodynamic & Learning Theories (4/4 units) — 15 files
- ✅ **Block-3**: Existential & Phenomenological Theories (4/4 units)
- ✅ **Block-4**: Personality Assessment (4/4 units)

---

### MPC-004 — ✅ COMPLETE (16/16 units)

- ✅ **Block-1**: Foundations of Social Psychology (4/4 units)
- ✅ **Block-2**: Social Cognition & Attitudes (4/4 units)
- ✅ **Block-3**: Group Processes & Influence (4/4 units)
- ✅ **Block-4**: Applied Social Psychology (4/4 units)

---

### MPC-005 — 🔄 IN PROGRESS (14/16 units, 87.5%)

- ✅ **Block-1**: Basic Concepts in Research (4/4 units) — files 218–229
  - Unit-1: Definition, Meaning & Types of Research (218–220)
  - Unit-2: Reliability & Validity (221–223)
  - Unit-3: Variables & Constructs — S-O-R, IV/DV, extraneous, MacCorquodale-Meehl typology (224–226)
  - Unit-4: Hypothesis Formulation & Sampling — H₀/H₁, Type I/II errors, all 8 sampling methods (227–229)
- ✅ **Block-2**: Types of Research (4/4 units) — files 243–256
  - Unit-1: Survey Research — 7-step process, questionnaire/interview types, cross-sectional vs. longitudinal (243–244)
  - Unit-2: Experimental Research — lab/field experiments, true experimental designs (245–248)
  - Unit-3: Observational Research — naturalistic, participant, structured/unstructured (249–252)
  - Unit-4: Case Study Research — Yin's design, single-case, multiple-case (253–256)
- ✅ **Block-3**: Research Design (4/4 units) — files 257–264
  - Unit-1: Single Factor Design — between-group and within-subject designs (257–259)
  - Unit-2: Factorial Design — 2×2 layouts, main effects, interactions (260–262)
  - Unit-3: Quasi-Experimental Design — non-equivalent control, interrupted time series (263–264)
  - Unit-4: Correlational & Causal-Comparative Design — Pearson/Spearman, ex post facto (257–259)
- 🔄 **Block-4**: Qualitative Research in Psychology (2/4 units) — files 265–271
  - ✅ Unit-1: Qualitative Research and Ethnography — fieldwork, participant roles, ethnographic ethics (265–267)
  - ✅ Unit-2: Grounded Theory — goals, memoing/sorting/writing, open/axial/selective coding, relevance & criticism (268–271)
  - ⏳ Unit-3: Discourse Analysis — pending
  - ⏳ Unit-4: Narrative Research — pending

---

## Enrichment Statistics (As of March 6, 2026)

| Metric | Count |
|--------|-------|
| 🔗 External resource links | **1,500+** |
| 📚 Wikipedia articles linked | **430+** |
| 🔬 Research papers cited (2020–2025) | **440+** |
| 🎥 Educational videos embedded | **230+** |
| 📈 Mermaid diagrams | **290+** |
| ✍️ Self-assessment questions | **840+** |
| 🧠 Memory aids & mnemonics | **300+** |
| 📝 Total enriched words | **~850,000+** |

---

## 🎉 Major Milestones

**🏆 March 6, 2026 — 80% Complete!**
- ✅ **78/97 units enriched — 80.4%**
- ✅ **MPC-005/Block-4/Unit-2 COMPLETE** — Grounded Theory fully enriched
  - Topics: Goals & perspectives, methods (memoing/sorting/writing), three memo types (theoretical/field/code notes), open/axial/selective coding, relevance, implications, and criticism (Glaser 1998, Kelle 2005, Thomas & James 2006)
  - 4 files created (268–271), ~11,000 words, enrichment score 9/10 each
- 271 MDX files created | ~850,000+ words

**🏆 March 2, 2026 — MPC-005 Blocks 1–3 COMPLETE + Block-4 Unit-1 done**
- ✅ MPC-005/Block-3 fully enriched: Factorial Design, Quasi-Experimental, Correlational & Causal-Comparative
- ✅ MPC-005/Block-4/Unit-1: Qualitative Research and Ethnography (files 265–267)
- **77/97 units** enriched (79.4%)

**🏆 Previous: 71% Complete (March 2, 2025)**
- ✅ 69/97 units enriched
- ✅ MPC-005/Block-1 COMPLETE (all 4 units, files 218–242)
- ✅ MPC-005/Block-2/Unit-1 — Survey Research (files 243–244)

**🏆 February 26, 2025 — HALFWAY MILESTONE**
- ✅ 49/97 units enriched — 50.5% complete
- ✅ Completed MPC-003/Block-2 (Humanistic theories — Maslow & Rogers)

**🏆 February 23, 2025 — MPC-002 & MPC-003/Block-1 Complete**
- ✅ All 16 units of MPC-002 (Life Span Psychology)
- ✅ MPC-003/Block-1 (7 files)

**🏆 January 21, 2025 — First Course Complete!**
- ✅ All 16 units of MPC-001 (Cognitive Psychology)
  - 78 comprehensive MDX files (~240,000 words)

---

## 📝 Recent Updates

### March 6, 2026 — MPC-005/Block-4/Unit-2 ✅
**Grounded Theory**
- `268-grounded-theory-foundations.mdx` — definition, Glaser & Strauss history, 6 core goals, theoretical sensitivity, constant comparison, saturation, Indian context (~2,800 words, 9/10)
- `269-grounded-theory-methods-steps.mdx` — data collection approach, anti-transcription rationale, self-interview technique, three types of memos (theoretical/field/code notes), three steps (memoing/sorting/writing), recursion, Indian clinical applications (~2,600 words, 9/10)
- `270-grounded-theory-coding-types.mdx` — open coding (labeling, generalization), axial coding (cause/context/consequence paradigm), selective coding (core category, integration), Strauss-Corbin vs. Glaser comparison, worked examples from Indian psychology (~2,700 words, 9/10)
- `271-grounded-theory-relevance-implications-criticism.mdx` — 5 relevance points, multi-domain implications (policy/market/education/management), 6 criticisms (researcher bias, content validity, emergence vs. forcing, saturation ambiguity), balanced assessment, Indian research landscape (~2,900 words, 9/10)

### March 2, 2026 — MPC-005/Block-4/Unit-1 ✅
**Qualitative Research and Ethnography**
- `265-qualitative-research-meaning-types.mdx` — definition, characteristics vs. quantitative, types of qualitative research
- `266-ethnography-meaning-concepts-terms.mdx` — ethnographic method, key concepts (emic/etic, thick description, reflexivity)
- `267-ethnography-steps-types-ethics.mdx` — fieldwork stages, ethnographic roles, ethical considerations in observation research

---

## 🎨 Features

### Content Features
- **Comprehensive Coverage**: No content loss from original PDFs
- **Current Research**: Papers from 2020–2025 integrated throughout
- **Multiple Learning Modalities**: Text, videos, diagrams, examples
- **Real-World Applications**: Clinical cases, practical examples
- **Cultural Context**: Indian psychology perspectives — NIMHANS, ICSSR, NEET/JEE/UPSC contexts

### Interactive Elements
- **Mermaid Diagrams**: Flowcharts, concept maps, timelines, mindmaps
- **Self-Assessments**: 3–5 questions per file with detailed answer guides
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
- ✅ 1+ recent research paper (2020–2025)
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

**Last Updated**: March 6, 2026
**Version**: 5.0 (80.4% complete)
**Completed**: MPC-001 ✅ | MPC-002 ✅ | MPC-003 ✅ | MPC-004 ✅ | MPC-005 Blocks 1–3 ✅ + Block-4 Units 1–2 ✅
**Next Up**: MPC-005/Block-4/Unit-3 (Discourse Analysis)
