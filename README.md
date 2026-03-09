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
│   ├── mpc-005/                  # Research Methods ✅ COMPLETE
│   │   ├── block-1/              # 4 units ✅ (files 218–229)
│   │   ├── block-2/              # 4 units ✅ (files 243–256)
│   │   ├── block-3/              # 4 units ✅ (files 257–264)
│   │   └── block-4/              # 4 units ✅ (files 265–279)
│   ├── mpc-006/                  # Statistics in Psychology 🔄 IN PROGRESS (50%)
│   │   ├── block-1/              # 4 units ✅ COMPLETE (files 280–293)
│   │   └── block-2/              # 4 units ✅ COMPLETE (files 294–304)
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
| MPC-005 | Research Methods | 16 | 16/16 | ✅ **COMPLETE** |
| MPC-006 | Statistics in Psychology | 16 | 8/16 | 🔄 **In Progress (50%)** |
| MPCL-007 | Practicals | 1 | 0/1 | ⏳ Pending |

**Overall Progress**: 88/97 units enriched **(90.7%)**
**Total MDX Files Created**: 304+ files | **~960,000+ words of enriched content**

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

### MPC-005 — ✅ COMPLETE (16/16 units)

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
- ✅ **Block-4**: Qualitative Research in Psychology (4/4 units) — files 265–279
  - Unit-1: Qualitative Research and Ethnography — fieldwork, participant roles, ethnographic ethics (265–267)
  - Unit-2: Grounded Theory — goals, memoing/sorting/writing, open/axial/selective coding (268–271)
  - Unit-3: Discourse Analysis — critical discourse analysis, conversation analysis, Foucauldian approach (272–275)
  - Unit-4: Narrative Research — narrative inquiry, life history, case construction, analysis frameworks (276–279)

---

### MPC-006 — 🔄 IN PROGRESS (8/16 units, 50%)

- ✅ **Block-1**: Introduction to Statistics (4/4 units) — files 280–293
  - Unit-1: Parametric & Non-Parametric Statistics — assumptions, scales of measurement, test selection (280–283)
  - Unit-2: Descriptive Statistics — data organisation, graphical presentation, central tendency, dispersion, skewness (284–286)
  - Unit-3: Inferential Statistics — hypothesis testing logic, Type I/II errors, one-/two-tailed tests (287–290)
  - Unit-4: Significance Testing — levels of significance, confidence limits, standard error, z vs. t, critical region (291–293)
- ✅ **Block-2**: Correlation and Regression (4/4 units) — files 294–304
  - Unit-1: Pearson Correlation — meaning, scatter diagrams, computation, significance testing (294–295)
  - Unit-2: Other Correlation Coefficients — Point Biserial, Phi, Biserial, Tetrachoric, Spearman's Rho, Kendall's Tau (296–298)
  - Unit-3: Partial & Multiple Correlations — partial correlation, semipartial (part) correlation, multiple R, adjusted R² (299–301)
  - Unit-4: Bivariate & Multiple Regression — OLS computation, F-test, r², standard error, standardised β weights, hierarchical vs. simultaneous entry (302–304)
- ⏳ **Block-3**: t-Tests and ANOVA (0/4 units) — pending
- ⏳ **Block-4**: Non-Parametric Tests (0/4 units) — pending

---

## Enrichment Statistics (As of March 9, 2026)

| Metric | Count |
|--------|-------|
| 🔗 External resource links | **1,700+** |
| 📚 Wikipedia articles linked | **490+** |
| 🔬 Research papers cited (2020–2025) | **500+** |
| 🎥 Educational videos embedded | **260+** |
| 📈 Mermaid diagrams | **330+** |
| ✍️ Self-assessment questions | **960+** |
| 🧠 Memory aids & mnemonics | **340+** |
| 📝 Total enriched words | **~960,000+** |

---

## 🎉 Major Milestones

**🏆 March 9, 2026 — 90.7% Complete! MPC-006 Block 2 Done!**
- ✅ **88/97 units enriched — 90.7%**
- ✅ **MPC-006/Block-2 COMPLETE** — all 4 units of Correlation and Regression fully enriched
  - Unit-3: Partial correlation (Simpson's Paradox, semipartial), multiple R, adjusted R² (files 299–301)
  - Unit-4: OLS bivariate regression, F-test & accuracy measures, standardised β weights, multiple regression (files 302–304)
- 304+ MDX files created | ~960,000+ words

**🏆 March 6, 2026 — 80% Complete + MPC-005 Done**
- ✅ **MPC-005 fully complete** — all 16 units across 4 blocks enriched
- ✅ MPC-006/Block-1 COMPLETE — 14 files (280–293) covering parametric/non-parametric foundations, descriptive stats, inferential statistics, significance testing
- ✅ MPC-006/Block-2 Units 1–2 complete — Pearson correlation through Kendall's Tau (files 294–298)

**🏆 March 2, 2026 — MPC-005 Blocks 1–3 COMPLETE + Block-4 Unit-1 done**
- ✅ MPC-005/Block-3 fully enriched: Factorial Design, Quasi-Experimental, Correlational & Causal-Comparative
- ✅ MPC-005/Block-4/Unit-1: Qualitative Research and Ethnography (files 265–267)
- 77/97 units enriched (79.4%)

**🏆 February 26, 2025 — HALFWAY MILESTONE**
- ✅ 49/97 units enriched — 50.5% complete
- ✅ Completed MPC-003/Block-2 (Humanistic theories — Maslow & Rogers)

**🏆 January 21, 2025 — First Course Complete!**
- ✅ All 16 units of MPC-001 (Cognitive Psychology)
  - 78 comprehensive MDX files (~240,000 words)

---

## 📝 Recent Updates

### March 9, 2026 — MPC-006/Block-2 Units 3–4 ✅

**Unit-3: Partial and Multiple Correlations**
- `299-partial-correlation-controlling-third-variable.mdx` — confounds, partial correlation formula, worked examples (n=10 & n=100), Simpson's Paradox (IOA-Neuroticism-Gender), residuals interpretation, Indian research context (~3,600 words, 10/10)
- `300-semipartial-multiple-correlation.mdx` — partial vs. semipartial distinction (BOTH vs. ONE), formulas, multiple R, R², adjusted R², F-test for R², Venn diagram variance partitioning (~3,700 words, 10/10)
- `301-linear-regression-introduction-prediction.mdx` — regression equation Ŷ = a + bX, OLS method, slope/intercept computation, regression-partial correlation link, standardised vs. unstandardised coefficients (~2,800 words, 10/10)

**Unit-4: Bivariate and Multiple Regression**
- `302-bivariate-regression-ols-computation.mdx` — perfect vs. imperfect relationships, OLS derivation, full worked example (stigma → appointments, n=10), variance decomposition SS_T/SS_R/SS_e, intercept/slope interpretation (~3,600 words, 10/10)
- `303-regression-significance-accuracy.mdx` — ANOVA table construction, F-test, three accuracy measures (s_Y.X, r², PIP), six assumptions with detection methods (INHOLINI mnemonic), consequences of violations (~3,500 words, 10/10)
- `304-standardised-multiple-regression.mdx` — Z-score standardisation, β weights, proof that β = r in simple regression, multiple regression equation, worked example with two predictors + ANOVA, simultaneous vs. hierarchical entry, ΔR² (~3,700 words, 10/10)

### March 6, 2026 — MPC-006/Block-2 Units 1–2 ✅

**Unit-1: Pearson Correlation**
- `294-correlation-meaning-scatter-diagrams.mdx` — scatter plots, nature of relationships, correlation types
- `295-pearson-correlation-computation-significance.mdx` — formula, step-by-step computation, significance testing, Indian context

**Unit-2: Other Correlation Coefficients**
- `296-special-correlations-point-biserial-phi.mdx` — Point Biserial (r_pb) and Phi (φ) — Pearson-type special correlations
- `297-biserial-tetrachoric-correlations.mdx` — Biserial (r_b) and Tetrachoric (r_tet) — non-Pearson methods for artificial dichotomies
- `298-spearman-rho-kendall-tau.mdx` — Spearman's ρ and Kendall's τ — nonparametric rank-order correlations, inversion method, Yerkes-Dodson caveat

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

**Last Updated**: March 9, 2026
**Version**: 6.0 (90.7% complete)
**Completed**: MPC-001 ✅ | MPC-002 ✅ | MPC-003 ✅ | MPC-004 ✅ | MPC-005 ✅ | MPC-006 Blocks 1–2 ✅
**Next Up**: MPC-006/Block-3/Unit-1 (t-Tests and ANOVA)
