# Exam Preparation Feature - Quick Start Guide

This document provides a quick overview of the Exam Preparation feature for the MAPC Study Portal.

---

## 📖 What is This?

The Exam Preparation feature analyzes 10 years of previous question papers for each MAPC course and creates:

1. **Statistical Analysis** - Topic frequency, probability charts, and graphs
2. **Repeated Questions Tracking** - Identify questions that appeared multiple times
3. **Grouped Questions** - Questions organized by topic with probability rankings
4. **Comprehensive Answers** - Detailed 500-word answers sourced from course PDFs
5. **Strategic Study Plans** - Priority-based study recommendations
6. **Session Analysis** - June vs December patterns
7. **Progress Tracking** - Track your exam preparation progress

---

## 🎯 For Claude AI Assistant

### Primary Instructions File
**Read this first**: `EXAM_PREP_INSTRUCTIONS.md`

This file contains:
- Complete workflow (3 stages: Extract → Analyze → Create Content)
- All commands and their usage
- File formats and templates
- Quality standards
- Tracking mechanisms

### Templates File
**Reference for creating content**: `EXAM_PREP_TEMPLATE.md`

Contains ready-to-use templates for:
- Course exam prep index pages
- Topic analysis pages
- Question-answer pages
- Priority topic lists
- Mermaid diagrams and tables

---

## 📂 Directory Structure

```
mapc-study/
├── EXAM_PREP_INSTRUCTIONS.md          # Main instructions for AI
├── EXAM_PREP_TEMPLATE.md              # MDX templates
├── EXAM_PREP_README.md                # This file
│
├── static/
│   └── question-papers/               # Place PDFs here
│       ├── MPC-001/
│       │   ├── 2015.pdf
│       │   ├── 2016.pdf
│       │   └── ... (up to 2024.pdf)
│       ├── MPC-002/
│       └── ... (other courses)
│
├── docs/
│   └── exam-prep/                     # Generated content goes here
│       ├── index.mdx                  # Main exam prep page
│       ├── mpc-001/
│       │   ├── index.mdx              # Course overview
│       │   ├── topic-analysis.mdx     # Statistics & charts
│       │   ├── high-priority-topics.mdx
│       │   ├── medium-priority-topics.mdx
│       │   ├── low-priority-topics.mdx
│       │   └── questions/
│       │       ├── memory-systems.mdx
│       │       ├── intelligence-theories.mdx
│       │       └── ... (one per topic)
│       └── ... (other courses)
│
└── processing/
    └── exam-prep/                     # Tracking files
        ├── exam-prep-index.json       # Overall progress
        ├── courses/
        │   ├── mpc-001.json           # Per-course analysis
        │   └── ... (other courses)
        └── question-papers/
            ├── mpc-001-2015.json      # Extracted questions
            ├── mpc-001-2016.json
            └── ... (one per paper)
```

---

## 🚀 Quick Start Workflow

### Step 1: Add Question Papers
Place PDF files in `static/question-papers/[COURSE]/[YEAR].pdf`

Example:
```
static/question-papers/MPC-001/2015-June.pdf
static/question-papers/MPC-001/2015-December.pdf
static/question-papers/MPC-001/2016-June.pdf
static/question-papers/MPC-001/2016-December.pdf
...
static/question-papers/MPC-001/2024-June.pdf
static/question-papers/MPC-001/2024-December.pdf
```

**Important**: Each year has TWO sessions (June and December)

### Step 2: Analyze Course
Command: `analyze MPC-001`

This will:
- Extract all questions from 20 PDFs (10 years × 2 sessions)
- Identify repeated questions across sessions
- Identify topics and calculate statistics
- Analyze June vs December patterns
- Save analysis to `processing/exam-prep/courses/mpc-001.json`

### Step 3: Create Content
Command: `create-content MPC-001`

This will:
- Generate all MDX files with questions and answers
- Create statistical charts and tables
- Update sidebar
- Update tracking files

### Step 4: Check Progress
Command: `status`

Shows progress across all courses.

---

## 📊 What Gets Created

### For Each Course:

1. **Course Index** (`docs/exam-prep/mpc-001/index.mdx`)
   - Overview of exam pattern
   - Study strategy
   - Links to all topics

2. **Topic Analysis** (`docs/exam-prep/mpc-001/topic-analysis.mdx`)
   - Statistical tables
   - Pie charts showing topic distribution
   - Year-wise trends
   - Top 10 topics

3. **Priority Lists**
   - High priority topics (>30% occurrence)
   - Medium priority topics (15-30%)
   - Low priority topics (<15%)

4. **Question-Answer Pages** (one per topic)
   - All questions from 10 years
   - Comprehensive answers
   - Links to enriched content
   - Memory aids and exam tips

---

## 🎓 Key Features

### 1. Statistical Analysis
- Topic frequency across 10 years × 2 sessions (20 papers)
- Percentage occurrence
- Repeated questions identification
- Session-wise distribution (June vs December)
- Year-wise trends

### 2. Priority-Based Organization
- **High Priority**: Topics appearing in 30%+ of papers
- **Medium Priority**: Topics appearing in 15-30% of papers
- **Low Priority**: Topics appearing in <15% of papers

### 3. Comprehensive Answers
- Sourced from course PDFs with page citations
- Structured for 10-mark questions (~500 words)
- Handle sub-part questions (e.g., 3+7 marks)
- Include examples and case studies
- Link to enriched course content

### 4. Study Tools
- Memory aids and mnemonics
- Self-assessment questions
- Exam tips and strategies
- Common mistakes to avoid

### 5. Repeated Questions Focus
- Identify questions asked 2+ times
- Track most repeated question per course
- Prioritize repeated questions in study plan

### 6. Progress Tracking
- Track topics studied
- Monitor completion percentage
- Checklist for each priority level

---

## 📋 Commands Reference

| Command | Purpose | Example |
|---------|---------|---------|
| `analyze [course]` | Analyze question papers | `analyze MPC-001` |
| `create-content [course]` | Generate study materials | `create-content MPC-001` |
| `add-papers [course] [year]` | Add new papers | `add-papers MPC-001 2025` |
| `status` | Show progress | `status` |
| `update-topic [course] [topic]` | Update specific topic | `update-topic MPC-001 "Memory Systems"` |

---

## 📈 Example Output

After running `analyze MPC-001`:

```
📊 Analysis Complete: MPC-001
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Years Analyzed: 2015-2024 (10 years × 2 sessions = 20 papers)
Total Questions: 200

Topic Distribution:
├── High Priority (>20%): 15 topics
├── Medium Priority (10-20%): 20 topics
└── Low Priority (<10%): 30 topics

Top 5 Topics:
1. Memory Systems (18 questions, 9.0%)
2. Intelligence Theories (15 questions, 7.5%)
3. Problem Solving (14 questions, 7.0%)
4. Language Processing (12 questions, 6.0%)
5. Creativity (11 questions, 5.5%)

Repeated Questions:
├── Total Repeated: 25 questions
├── Most Repeated: "Discuss the theories of Multiple Intelligence" (5 times, 25%)
└── High Repetition Topics: Intelligence Theories, Memory Systems, Problem Solving
```

---

## 🔄 Adding New Question Papers

When new papers become available:

1. Add PDF to `static/question-papers/[COURSE]/[YEAR]-[Session].pdf`
2. Run `add-papers [COURSE] [YEAR] [Session]`
   - Example: `add-papers MPC-001 2025 June`
3. System will:
   - Extract new questions
   - Re-analyze topic statistics
   - Update existing content
   - Report changes

---

## ✅ Quality Standards

Every question-answer page must have:

- ✅ All questions from 20 papers (10 years × 2 sessions) listed
- ✅ Repeated questions highlighted at top
- ✅ Comprehensive answers (not brief points)
- ✅ Answers sourced from course PDFs with page numbers
- ✅ Links to enriched MDX content
- ✅ Memory aids and mnemonics
- ✅ Self-assessment questions
- ✅ Exam tips and strategies
- ✅ Proper formatting (tables, diagrams)

---

## 🎯 Answer Quality Guidelines

### 10-Mark Questions (500 words)
**All MAPC questions are 10 marks with ~500 word limit:**
- Introduction (75-100 words)
- Main Body with 3-4 points (300-350 words)
- Conclusion (75-100 words)

### Questions with Sub-parts (e.g., 3+7 marks)
- Part 1: Brief answer (150 words)
- Part 2: Detailed answer (350 words)

---

## 📊 Tracking Files

### `processing/exam-prep/exam-prep-index.json`
Overall progress across all courses

### `processing/exam-prep/courses/mpc-001.json`
Detailed analysis for specific course:
- Topics identified
- Frequency statistics
- Priority levels
- Related units and MDX files

### `processing/exam-prep/question-papers/mpc-001-2024-december.json`
Extracted questions from specific paper:
- 10 questions with metadata
- Session information (June/December)
- Topic mapping
- Sub-parts identification

---

## 🔗 Integration with Existing Content

The exam prep feature seamlessly integrates with enriched course content:

- **Cross-references**: Every answer links to relevant enriched MDX files
- **PDF Citations**: All answers cite source PDF pages
- **Unified Navigation**: Exam prep section added to main sidebar
- **Consistent Style**: Same quality standards and formatting

---

## 💡 Tips for Best Results

### For AI Assistant:
1. Always read `EXAM_PREP_INSTRUCTIONS.md` first
2. Use templates from `EXAM_PREP_TEMPLATE.md`
3. Maintain consistent topic naming
4. Link extensively to enriched content
5. Update all tracking files
6. Follow answer structure guidelines

### For Students:
1. Start with high priority topics
2. Practice questions from recent years first
3. Use memory aids and mnemonics
4. Track your progress
5. Review enriched content for deeper understanding

---

## 🚨 Important Notes

1. **Minimum 20 Papers**: Analyze at least 10 years × 2 sessions (20 papers) for statistical validity
2. **Track Repeated Questions**: Always identify and highlight questions that appear multiple times
2. **Topic Consistency**: Use same topic names across all courses
3. **Answer Quality**: Never sacrifice comprehensiveness for brevity
4. **PDF Citations**: Always cite source PDF with page numbers
5. **Cross-linking**: Link to enriched content extensively
6. **Progress Tracking**: Update all tracking files after each operation

---

## 📚 File References

- **Main Instructions**: `EXAM_PREP_INSTRUCTIONS.md` (comprehensive workflow)
- **Templates**: `EXAM_PREP_TEMPLATE.md` (ready-to-use MDX templates)
- **Original Instructions**: `CLAUDE_PROJECT_INSTRUCTIONS.md` (course enrichment)
- **This Guide**: `EXAM_PREP_README.md` (quick reference)

---

## 🎓 Success Criteria

A course's exam prep is complete when:

- ✅ 20 papers analyzed (10 years × 2 sessions)
- ✅ Repeated questions identified and tracked
- ✅ All topics identified and categorized
- ✅ Statistical analysis with charts created
- ✅ All priority topics have question-answer pages
- ✅ All answers are comprehensive and exam-focused
- ✅ All content linked to enriched materials
- ✅ Sidebar updated
- ✅ Tracking files updated
- ✅ Progress tracking implemented

---

## 📋 Exam Paper Format (Important!)

Based on the sample question paper:
- **10 questions** total per paper
- **Answer any 5** questions
- **10 marks** per question
- **Total: 50 marks**
- **Duration: 2 hours**
- **Word limit: ~500 words** per answer
- Some questions have **sub-parts** (e.g., 3+7 marks)

---

**Remember**: The goal is strategic exam preparation through data-driven topic prioritization, repeated question identification, and comprehensive 500-word exam-ready answers that demonstrate deep understanding.
