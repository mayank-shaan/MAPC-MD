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
│   ├── intro.mdx                        # Welcome/homepage
│   ├── mpc-001/                         # Cognitive Psychology ✅ COMPLETE
│   ├── mpc-002/                         # Life Span Psychology ✅ COMPLETE
│   ├── mpc-003/                         # Personality Theories ✅ COMPLETE
│   ├── mpc-004/                         # Social Psychology ✅ COMPLETE
│   ├── mpc-005/                         # Research Methods ✅ COMPLETE
│   ├── mpc-006/                         # Statistics ✅ COMPLETE
│   └── mpcl-007-practicals/             # Practicals ✅ COMPLETE
├── processing/
│   ├── status-index.json                # Global progress index (~2 KB)
│   └── courses/                         # Per-course status (mpc-001.json … mpcl-007.json)
├── static/pdfs/                         # Source PDFs (97 units)
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

| Course | Name | Units | Status |
|--------|------|-------|--------|
| MPC-001 | Cognitive Psychology, Learning & Memory | 16/16 | ✅ **COMPLETE** |
| MPC-002 | Life Span Psychology | 16/16 | ✅ **COMPLETE** |
| MPC-003 | Personality: Theories and Assessment | 16/16 | ✅ **COMPLETE** |
| MPC-004 | Advanced Social Psychology | 16/16 | ✅ **COMPLETE** |
| MPC-005 | Research Methods | 16/16 | ✅ **COMPLETE** |
| MPC-006 | Statistics in Psychology | 16/16 | ✅ **COMPLETE** |
| MPCL-007 | Practicals | 1/1 | ✅ **COMPLETE** |

**Overall Progress: 97/97 units enriched (100%)** 🎉  
**Total MDX Files: 324+ | ~1,050,000+ words of enriched content**

---

## 📈 Enrichment Statistics (March 2026)

| Metric | Count |
|--------|-------|
| 🔗 External resource links | **1,940+** |
| 📚 Wikipedia articles | **550+** |
| 🔬 Research papers (2020–2025) | **560+** |
| 🎥 Educational videos | **290+** |
| 📈 Mermaid diagrams | **370+** |
| ✍️ Self-assessment questions | **1,085+** |
| 🧠 Memory aids & mnemonics | **385+** |
| 📝 Total enriched words | **~1,050,000+** |

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

**Last Updated**: March 10, 2026 | **Version**: 8.0 | **Status**: 97/97 units complete ✅ 🎉
