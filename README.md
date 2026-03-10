# MAPC Study Portal — IGNOU MA Psychology

## 📚 Overview
A comprehensive, interactive study portal for IGNOU's Master of Arts in Psychology (MAPC) program. Transforms traditional PDF study materials into enriched, searchable, student-friendly web content with modern research, multimedia resources, and interactive learning elements.

## 🎯 Project Goals
- Convert IGNOU MAPC PDFs into structured, enriched study materials
- Add external resources, current research papers (2020–2025), and educational videos
- Create interactive learning elements: diagrams, self-assessments, memory aids
- Provide easy navigation and full-text search
- Build a beautiful, accessible learning platform

## 🏗️ Tech Stack
- **Framework**: Docusaurus 3.0
- **Content**: MDX (Markdown + React)
- **Diagrams**: Mermaid.js
- **Math**: remark-math + rehype-katex (KaTeX)
- **Search**: Algolia DocSearch
- **Hosting**: Vercel / Netlify

## 📁 Project Structure
```
mapc-study/
├── docs/
│   ├── intro.mdx                 # Welcome/homepage
│   ├── mpc-001/                  # Cognitive Psychology ✅ COMPLETE
│   ├── mpc-002/                  # Life Span Psychology ✅ COMPLETE
│   ├── mpc-003/                  # Personality Theories ✅ COMPLETE
│   ├── mpc-004/                  # Social Psychology ✅ COMPLETE
│   ├── mpc-005/                  # Research Methods ✅ COMPLETE
│   ├── mpc-006/                  # Statistics 🔄 62.5% (10/16 units)
│   └── mpcl-007/                 # Practicals ⏳ Pending
├── processing/
│   ├── status-index.json         # Global progress index (~2 KB)
│   └── courses/                  # Per-course status (mpc-001.json … mpcl-007.json)
├── static/pdfs/                  # Source PDFs (97 units)
├── src/
│   ├── components/
│   ├── css/
│   └── theme/
├── sidebars.js
└── docusaurus.config.js
```

## 🚀 Quick Start

```bash
git clone https://github.com/yourusername/mapc-study.git
cd mapc-study
npm install
npm run start       # Development server
npm run build       # Production build
```

## 📊 Course Progress

| Course | Name | Enriched | Status |
|--------|------|----------|--------|
| MPC-001 | Cognitive Psychology, Learning & Memory | 16/16 | ✅ **COMPLETE** |
| MPC-002 | Life Span Psychology | 16/16 | ✅ **COMPLETE** |
| MPC-003 | Personality: Theories and Assessment | 16/16 | ✅ **COMPLETE** |
| MPC-004 | Advanced Social Psychology | 16/16 | ✅ **COMPLETE** |
| MPC-005 | Research Methods | 16/16 | ✅ **COMPLETE** |
| MPC-006 | Statistics in Psychology | 10/16 | 🔄 **In Progress (62.5%)** |
| MPCL-007 | Practicals | 0/1 | ⏳ Pending |

**Overall Progress: 90/97 units enriched (92.8%)**  
**Total MDX Files: 312+ | ~990,000+ words of enriched content**

---

### MPC-006 — 🔄 IN PROGRESS (10/16 units)

- ✅ **Block-1**: Introduction to Statistics (4/4 units) — files 280–293
  - Unit-1: Parametric & Non-Parametric Statistics
  - Unit-2: Descriptive Statistics — data organisation, central tendency, dispersion, skewness
  - Unit-3: Inferential Statistics — hypothesis testing logic, Type I/II errors, one-/two-tailed tests
  - Unit-4: Significance Testing — confidence limits, standard error, z vs. t
- ✅ **Block-2**: Correlation and Regression (4/4 units) — files 294–304
  - Unit-1: Pearson Correlation — scatter diagrams, computation, significance
  - Unit-2: Other Correlations — Point Biserial, Phi, Biserial, Tetrachoric, Spearman ρ, Kendall τ
  - Unit-3: Partial & Multiple Correlations — partial r, semipartial r, multiple R, adjusted R²
  - Unit-4: Bivariate & Multiple Regression — OLS, F-test, r², standardised β weights
- ✅ **Block-3**: Normal Distribution & Mean Differences (2/4 units) — files 305–312
  - Unit-1: Normal Distribution — NPC properties, Z-scores, skewness, kurtosis (files 305–308)
  - Unit-2: Standard Error & Significance of Mean Differences — parameters vs. statistics, fiduciary limits, t-tests, Type I/II errors (files 309–312)
- ⏳ **Block-3/Unit-3**: pending
- ⏳ **Block-3/Unit-4**: pending
- ⏳ **Block-4**: Non-Parametric Tests (0/4 units) — pending

---

## 📈 Enrichment Statistics (March 2026)

| Metric | Count |
|--------|-------|
| 🔗 External resource links | **1,700+** |
| 📚 Wikipedia articles | **490+** |
| 🔬 Research papers (2020–2025) | **500+** |
| 🎥 Educational videos | **260+** |
| 📈 Mermaid diagrams | **330+** |
| ✍️ Self-assessment questions | **960+** |
| 🧠 Memory aids & mnemonics | **340+** |
| 📝 Total enriched words | **~990,000+** |

---

## 🎉 Milestones

### 🏆 March 9, 2026 — 92.8% Complete
- ✅ **90/97 units enriched** — 312 MDX files, ~990,000 words
- ✅ MPC-006/Block-3/Unit-2 complete: Standard Error of the Mean, fiduciary limits, significance of two means, t-tests for independent/correlated samples, Type I/II errors (files 309–312)

### 🏆 March 9, 2026 — MPC-006/Block-3/Unit-1 Complete
- Normal distribution properties, Z-score applications, NPC tables, skewness & kurtosis (files 305–308)

### 🏆 March 9, 2026 — MPC-006/Block-2 Complete
- All 4 units of Correlation and Regression (files 294–304)
- Pearson → Phi → Partial r → OLS regression → standardised β

### 🏆 March 6, 2026 — MPC-005 Complete + MPC-006/Block-1 Done
- **MPC-005**: All 16 Research Methods units enriched (files 218–279)
- **MPC-006/Block-1**: 14 files (280–293) — parametric/non-parametric foundations through significance testing

### 🏆 February 2026 — 80%+ Milestone
- MPC-001 through MPC-005 all complete
- 80/97 units enriched

### 🏆 January 21, 2025 — First Course Complete
- MPC-001: All 16 units, 78 files, ~240,000 words

---

## 📝 Content Workflow

### Two-Stage Process
**Stage 1: Extraction** — Capture all PDF content completely  
**Stage 2: Enrichment** — Add research, videos, diagrams, assessments, mnemonics

### Per-File Quality Standards
- ✅ 2,000+ words
- ✅ 5+ external sources
- ✅ 1+ Wikipedia article
- ✅ 1+ educational video
- ✅ 1+ research paper (2020–2025)
- ✅ 1+ Mermaid diagram
- ✅ 3+ self-assessment questions
- ✅ 1+ memory aid/mnemonic
- ✅ Indian context section
- ✅ `quality_check` block in MDX frontmatter

### Status Tracking (Three Layers)
1. **`processing/status-index.json`** — global counts + pending queue (~2 KB, always read first)
2. **`processing/courses/<course>.json`** — per-unit status for each course
3. **MDX frontmatter** — `status`, `enrichment_score`, `quality_check` live with the content

---

## 📖 Content Quality Frontmatter

Every MDX file carries enrichment metadata:
```yaml
status: enriched
enrichment_score: 9
quality_check:
  external_sources: 10
  wikipedia: 3
  research_papers: 2
  videos: 2
  diagrams: 2
  self_assessment: 5
  memory_aids: 3
  meets_standards: true
```

---

## 📄 License
Educational use only. Original content © IGNOU.

## 🙏 Acknowledgments
- **IGNOU** for the original study materials
- **Docusaurus** team for the excellent framework
- **Educational Platforms**: MIT OCW, Khan Academy, Crash Course, StatQuest
- **Wikipedia** contributors
- **NIMHANS**, **ICSSR**, and Indian psychology researchers whose work provides the Indian context throughout

## 📞 Contact
**Student**: MSD | **Enrollment**: 2554161090 | **Program**: MAPC July 2025 | **RC**: Delhi 3 Naraina

---

**Last Updated**: March 9, 2026 | **Version**: 7.0 | **Status**: 90/97 units complete (92.8%)  
Completed: MPC-001 ✅ | MPC-002 ✅ | MPC-003 ✅ | MPC-004 ✅ | MPC-005 ✅ | MPC-006 Blocks 1–2 + Block-3 Unit 1–2 ✅  
Next Up: MPC-006/Block-3/Unit-3
