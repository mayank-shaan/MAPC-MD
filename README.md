# MAPC Study Portal - IGNOU MA Psychology

## 📚 Overview
A comprehensive, interactive study portal for IGNOU's Master of Arts in Psychology (MAPC) program. This portal transforms traditional PDF study materials into enriched, searchable, and student-friendly web application with modern research, multimedia content, and interactive learning elements.

## 🎯 Project Goals
- Convert IGNOU MAPC PDFs into structured, enriched study materials
- Add external resources, current research papers (2020-2024), and educational videos
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
│   │   ├── block-1/          # 4 units, 8 files
│   │   ├── block-2/          # 4 units, 20 files
│   │   ├── block-3/          # 4 units, 19 files
│   │   └── block-4/          # 4 units, 30 files
│   ├── mpc-002/              # Life Span Psychology 🔄 IN PROGRESS
│   │   └── block-1/          # 4 units complete (extraction), 3 enriched
│   ├── mpc-003/              # Personality ⏳ Pending
│   ├── mpc-004/              # Social Psychology ⏳ Pending
│   ├── mpc-005/              # Research Methods ⏳ Pending
│   ├── mpc-006/              # Statistics ⏳ Pending
│   └── mpcl-007/             # Practicals ⏳ Pending
├── processing/               # PDF processing tracking
│   ├── status.json          # Comprehensive processing status
│   └── enrichment-log.json  # External resources added
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
5. Mark as "extracted" in status.json

### Phase 2: Enrichment
- Add 5+ external resource links per file
- Include 1+ Wikipedia articles
- Find 1+ educational videos (MIT, Crash Course, Khan Academy)
- Add 1+ recent research papers (2020-2024)
- Create 1+ Mermaid diagrams
- Write 3+ self-assessment questions
- Add memory aids and mnemonics
- Include real-world examples and clinical applications
- Expand to 2,000+ words of comprehensive content
- Mark as "enriched" in status.json

### Phase 3: Quality Assurance
- Verify all quality standards met
- Check cross-references and links
- Ensure proper citations
- Update sidebar navigation
- Track enrichment metrics

### Phase 4: Status Update
- Update `processing/status.json`
- Log enrichment sources and metrics
- Track completion progress
- Document quality scores

## 📊 Course Progress

| Course Code | Course Name | Total Units | Enriched | Status |
|------------|-------------|-------------|----------|---------|
| MPC-001 | Cognitive Psychology, Learning & Memory | 16 | 16/16 | ✅ **100% COMPLETE** |
| MPC-002 | Life Span Psychology | 16 | 7/16 | 🔄 **In Progress (44%)** |
| MPC-003 | Personality Theories & Assessment | 16 | 0/16 | ⏳ Pending |
| MPC-004 | Advanced Social Psychology | 16 | 0/16 | ⏳ Pending |
| MPC-005 | Research Methods | 16 | 0/16 | ⏳ Pending |
| MPC-006 | Statistics in Psychology | 16 | 0/16 | ⏳ Pending |
| MPCL-007 | Practicals | 1 | 0/1 | ⏳ Pending |

**Overall Progress**: 28/97 units extracted (28.9%) • 32/97 enriched (33.0%) • **Total Files Created**: 113 MDX files • **~362,000 words**

### MPC-001 - ✅ COMPLETE! (First Course)
- ✅ **Block-1**: Foundations (4/4 units - 100%) - 8 files
- ✅ **Block-2**: Memory & Intelligence (4/4 units - 100%) - 20 files  
- ✅ **Block-3**: Language & Cognition (4/4 units - 100%) - 19 files
- ✅ **Block-4**: Problem Solving (4/4 units - 100%) - 30 files

### MPC-002 - 🔄 IN PROGRESS
- ✅ **Block-1**: Prenatal Through Early Childhood (100% ENRICHED) - 16 files
  - Unit-1: Life Span Development Foundations (5 files)
  - Unit-2: Prenatal Development (3 files)
  - Unit-3: Development During Infancy (4 files)
  - Unit-4: Early Childhood Development (4 files)
- ✅ **Block-2**: Late Childhood (100% ENRICHED) - 6 files
  - Unit-1: Physical & Cognitive Development (3 files)
  - Unit-2: Social & Emotional Development (3 files)
- ✅ **Block-3/Unit-1**: Adolescent Physical Changes (100% ENRICHED) - 4 files
  - Completed: Developmental Stages, Puberty Overview, Male Physical Changes, Female Physical Changes
- 🔄 **Block-3/Unit-2**: Cognitive Development in Adolescence (50% ENRICHED) - 2 of 4 files complete
  - ✅ File 112: Cognitive Development Overview (8,900 words)
  - ✅ File 113: Piaget's Formal Operations (10,800 words)
  - ⏳ File 114: Information Processing (extracted, needs enrichment)
  - ⏳ File 115: School Performance (extracted, needs enrichment)

### Enrichment Statistics (As of Feb 17, 2025)
- 📊 **916+** external resource links
- 📚 **252+** Wikipedia articles linked
- 🔬 **268+** research papers cited (2023-2024)
- 🎥 **128+** educational videos embedded
- 📈 **161+** interactive Mermaid diagrams
- ✍️ **520+** self-assessment questions
- 🧠 **190+** memory aids and mnemonics
- 📝 **~362,000 words** of enriched content

## 🎉 Major Milestones

**🏆 January 21, 2025 - First Course Complete!**
- ✅ **COMPLETED MPC-001: Cognitive Psychology, Learning and Memory**
  - All 16 units fully extracted and enriched
  - 77 comprehensive MDX files created (~240,000 words)
  - First complete course in MAPC Study Portal!
  - Quality score: 9-10/10 across all files

**📚 January 30, 2025 - MPC-002 Block-1 Extraction Complete!**
- ✅ **COMPLETED MPC-002/Block-1 EXTRACTION** (All 4 units)
  - Unit-1: Life Span Development (5 files, ENRICHED)
  - Unit-2: Prenatal Development (3 files, ENRICHED)
  - Unit-3: Development During Infancy (4 files, ENRICHED)
  - Unit-4: Early Childhood (4 files, EXTRACTED - needs enrichment)
  - 16 comprehensive MDX files (~40,000 words total)
  - Block-1 covers complete foundations from prenatal through early childhood

**📚 January 28, 2025 - Second Course Started!**
- ✅ **COMPLETED MPC-002/Block-1/Unit-1: Life Span Development**
  - 5 comprehensive files covering life-span foundations
  - Topics: Development concepts, Baltes' theory, developmental stages, research methods
  - 27,700 words with extensive enrichment
  - Quality score: 9-10/10 across all files
- 🔄 **STARTED MPC-002/Block-1/Unit-2: Prenatal Development**
  - First file complete: Beginnings of Life & Genetics (6,800 words)
  - Remaining: 3 files on prenatal stages, influences, and hazards

## 📝 Recent Updates

**Latest: February 17, 2025**
- 🔄 **MPC-002/Block-3/Unit-2** (Cognitive Development in Adolescence) - 50% ENRICHED
  - ✅ File 112: Cognitive Development Overview (8,900 words) - ENRICHED
    - Hypothetical-deductive reasoning, abstract thinking, metacognition
    - 12 external links, 4 Wikipedia, 3 research papers, 3 diagrams
  - ✅ File 113: Piaget's Formal Operations (10,800 words) - ENRICHED  
    - Comprehensive coverage of formal operational stage
    - Advanced cognitive capabilities across adolescent stages
    - 12 external links, 4 Wikipedia, 3 research papers, 4 diagrams
    - Quality score: 10/10
  - ⏳ Files 114-115: Information Processing & School Performance (extracted, needs enrichment)

**Previous: February 12, 2025**
- ✅ **Completed MPC-002/Block-3/Unit-1** (Adolescent Physical Changes) - FULLY ENRICHED
  - 4 comprehensive files: Developmental stages, Puberty mechanisms, Male physical development, Female physical development
  - 36,500 words with exceptional enrichment
  - 36 external links, 13 Wikipedia articles, 16 research papers (2023-2024)
  - 4 Mermaid diagrams (HPG/HPO axis), 31 self-assessment questions, 11 memory aids
  - Topics: Adolescent stage characteristics, pubertal hormones (testosterone, estrogen), secondary sexual characteristics, menstruation, growth patterns, psychological impacts
  - Quality score: 9-10/10 across all files

🎉 **MILESTONE: First Complete Unit in Block-3!**

**Previous: January 30, 2025**
- ✅ **Completed MPC-002/Block-1/Unit-3** (Development During Infancy) - ENRICHED
  - 4 comprehensive files: Concept & characteristics, Hazards & adjustments, Physical & psychosocial development, Cognitive & linguistic development
  - 17,000 words with full enrichment
  - 40 external links, 12 Wikipedia articles, 8 research papers (2023-2024)
  - 9 Mermaid diagrams, 23 self-assessments, 17 memory aids
  - Topics: Infancy period characteristics, four major adjustments, Erikson's trust vs mistrust, Piaget's sensorimotor stage, language development

- ✅ **Completed MPC-002/Block-1/Unit-4** (Early Childhood) - EXTRACTED
  - 4 files created: Concept & characteristics, Physical development, Psychosocial development, Cognitive & linguistic development  
  - 10,500 words extracted (needs enrichment)
  - Topics: Play age characteristics, physical growth patterns, Erikson's autonomy vs shame, Piaget's preoperational stage, vocabulary explosion

- 🎉 **MILESTONE: MPC-002/Block-1 EXTRACTION COMPLETE** (All 4 units)
  - 16 total files covering prenatal through early childhood
  - 3 units fully enriched, 1 unit needs enrichment
  - Ready to begin Block-2 after Unit-4 enrichment

**Previous: January 28, 2025**
- ✅ **Completed MPC-002/Block-1/Unit-1** (Life Span Development Foundations)
  - 5 enriched files: Development concepts, Life-span perspectives, Stages & domains, Characteristics, Research methods
  - 27,700 words total with comprehensive enrichment
  - 68 external links, 28 Wikipedia articles, 32 research papers
  - 10 Mermaid diagrams, 45 self-assessment questions
  
- 🔄 **Started MPC-002/Block-1/Unit-2** (Prenatal Development)
  - File 1 complete: Beginnings of Life & Genetics (6,800 words)
  - Covered: Conception, chromosomes, sex determination, genetic foundations
  - 10 external links, 5 Wikipedia articles, 3 research papers

**Recent Completions (Jan-Feb 2025):**
- 🔄 MPC-002/Block-3/Unit-2: Cognitive Development (Feb 17) - 50% ENRICHED (2/4 files)
- ✅ MPC-002/Block-3/Unit-1: Adolescent Physical Changes (Feb 12) - ENRICHED
- ✅ MPC-002/Block-1/Unit-3: Development During Infancy (Jan 30) - ENRICHED
- ✅ MPC-002/Block-1/Unit-4: Early Childhood (Jan 30) - EXTRACTED
- ✅ MPC-002/Block-1/Unit-2: Prenatal Development (Jan 28) - ENRICHED
- ✅ MPC-002/Block-1/Unit-1: Life Span Foundations (Jan 28) - ENRICHED
- ✅ MPC-001/Block-4/Unit-4: Impediments to Problem Solving (Jan 21)
- ✅ MPC-001/Block-4/Unit-3: Theoretical Approaches (Jan 16)
- ✅ MPC-001/Block-4/Unit-2: Stages of Problem Solving (Jan 16)
- ✅ MPC-001/Block-4/Unit-1: Nature of Problems (Jan 13)
- ✅ MPC-001/Block-3/Unit-4: Language & Speech Disorders (Jan 13)
- ✅ MPC-001/Block-3/Unit-3: Multilingualism (Jan 13)

## 🎨 Features

### Content Features
- **Comprehensive Coverage**: No content loss from original PDFs
- **Current Research**: Papers from 2020-2024 integrated throughout
- **Multiple Learning Modalities**: Text, videos, diagrams, examples
- **Real-World Applications**: Clinical cases, practical examples
- **Cultural Context**: Indian psychology perspectives where relevant

### Interactive Elements
- **Mermaid Diagrams**: Flowcharts, concept maps, timelines
- **Self-Assessments**: 3+ questions per file for active learning
- **Memory Aids**: Mnemonics and acronyms for key concepts
- **Cross-References**: Links between related topics
- **External Resources**: Curated quality links

### Technical Features
- **Smart Search**: Full-text search across all content
- **Dark Mode**: Eye-friendly for extended study sessions
- **Mobile Responsive**: Seamless experience on any device
- **Fast Loading**: Optimized performance
- **Offline Support**: Progressive Web App capabilities
- **PDF References**: Direct links to source materials

## 📖 Content Quality Standards

### Per File Requirements (Non-Negotiable)
- ✅ Minimum 2,000 words (comprehensive coverage)
- ✅ 5+ external resource links
- ✅ 1+ Wikipedia article
- ✅ 1+ educational video
- ✅ 1+ recent research paper (2020-2024)
- ✅ 1+ Mermaid diagram
- ✅ 3+ self-assessment questions
- ✅ 1+ memory aid/mnemonic
- ✅ Real-world examples
- ✅ Clinical applications where relevant
- ✅ Proper source citations with page numbers

### Quality Metrics
- **Enrichment Score**: 8-10/10 target for all files
- **Coverage**: 100% of PDF content included
- **Accuracy**: Verified against current research
- **Accessibility**: Clear, student-friendly language
- **Engagement**: Interactive and visually appealing

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
- **Educational Platforms** (MIT OCW, Khan Academy, Crash Course)
- **Wikipedia** contributors for foundational knowledge
- All linked external resources and their creators

## 📞 Contact
**Student**: MSD  
**Enrollment**: 2554161090  
**Program**: MAPC July 2025  
**Regional Centre**: Delhi 3 Naraina

---

**Last Updated**: February 17, 2025  
**Version**: 2.4 (MPC-002 progressing: 7.5/16 units enriched)  
**Status**: Active Development - MPC-002/Block-3/Unit-2 in progress (2 of 4 files enriched)
