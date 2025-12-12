# Claude Project Instructions - MAPC Study Portal Builder

## 🎯 Project Mission
Transform IGNOU MAPC psychology PDFs into comprehensive, enriched study materials with external resources, creating an interactive learning portal using Docusaurus.

## 📁 File Locations
```
Source PDFs: /Users/msd/Downloads/MA in Psychology (MAPC) First Year/
Project Root: /Users/msd/Work/Repositories/mapc-study/
Content Directory: /Users/msd/Work/Repositories/mapc-study/docs/
Processing Status: /Users/msd/Work/Repositories/mapc-study/processing/status.json
Static PDFs: /Users/msd/Work/Repositories/mapc-study/static/pdfs/
```

## 📂 Project Structure
```
docs/
├── intro.mdx                          # Welcome page
├── mpc-001/                           # Actual content files
│   └── block-1/
│       ├── 01-cognitive-psychology-introduction.mdx
│       ├── 02-research-methods-cognitive-psychology.mdx
│       ├── 03-history-cognitive-psychology.mdx
│       └── 04-key-issues-cognitive-psychology.mdx
├── mpc-001-cognitive/index.mdx        # Course overview page
├── mpc-002-lifespan/index.mdx         # Course overview page
├── mpc-003-personality/index.mdx      # Course overview page
├── mpc-004-social/index.mdx           # Course overview page
├── mpc-005-research/index.mdx         # Course overview page
├── mpc-006-statistics/index.mdx       # Course overview page
└── mpcl-007-practicals/index.mdx      # Course overview page
```

### File Naming Convention
- **Content files**: `XX-topic-name.mdx` (e.g., `01-cognitive-psychology-introduction.mdx`)
- **Index files**: `index.mdx` in course overview directories
- **Document IDs**: Use kebab-case without numbers (e.g., `cognitive-psychology-introduction`)

## 🔄 Workflow Commands

### Primary Command: "continue"
When user says "continue", execute this workflow:

1. **Check Status**
   - Read `processing/status.json`
   - Identify next unprocessed PDF
   - Load PDF content

2. **Process Content**
   - Extract main topics and subtopics
   - Identify key theories, researchers, studies
   - Note important definitions and concepts
   - Record page numbers for references

3. **Enrich Content**
   - Search for recent research (2020-2024)
   - Find Wikipedia articles for concepts
   - Locate educational videos
   - Identify real-world applications
   - Find or create memory aids
   - Add clinical/practical relevance

4. **Create MDX File**
   - Write in student-friendly language
   - Structure with clear hierarchy
   - Add interactive elements
   - Include external links
   - Add PDF references with page numbers
   - Cross-reference related topics

5. **Update Status**
   - Mark PDF as processed
   - List created MDX files
   - Log enrichment sources
   - Show next PDF in queue

### Secondary Commands

- **"status"** - Show current processing progress
- **"check [course-code]"** - Verify specific course completion
- **"list pending"** - Show unprocessed PDFs
- **"preview [topic]"** - Show MDX preview for a topic

## 📝 MDX File Format

### Required Frontmatter
```yaml
---
id: unique-topic-id
title: Full Topic Title
sidebar_label: Sidebar Display Name
tags: [tag1, tag2, tag3]
keywords: [search, keywords]
description: SEO description (150 chars)
draft: false
last_updated: YYYY-MM-DD
estimated_time: X min
difficulty: basic|intermediate|advanced
exam_importance: low|medium|high
---
```

### Content Structure
```mdx
# Main Title

## Overview
Brief introduction with real-world hook

## Core Concepts

### Concept 1
- Clear explanation
- Example/analogy
- Clinical application
> 📖 **Reference**: [Block-X/Unit-Y.pdf, Pages A-B]

## Research & Studies
- Key experiments
- Recent findings (with links)
- Meta-analyses

## Practical Applications
- Clinical settings
- Educational contexts
- Real-world examples

## Study Resources
### Videos
- [YouTube Title](link)

### Additional Reading
- [Wikipedia: Topic](link)
- [Research Paper](DOI link)

### Memory Aids
- Mnemonics
- Visual diagrams
- Quick formulas

## Self-Assessment
Interactive quiz or questions

## Summary
Key takeaways in bullet points

---
**Source PDFs**: 
- ✅ Block-X/Unit-Y.pdf - Pages A-B
```

## 🎨 Writing Guidelines

### Tone & Style
- **Conversational but academic**
- Use "you" to address students
- Include analogies and metaphors
- Break complex topics into chunks
- Use active voice

### Enrichment Requirements
Each topic MUST include:
- ✅ 2+ authoritative external sources
- ✅ 1+ practical/clinical application  
- ✅ 1+ memory aid or study technique
- ✅ Related video when available
- ✅ Wikipedia or encyclopedia reference
- ✅ Cross-references to related topics

### Visual Elements
- Tables for comparisons
- Mermaid diagrams for processes
- Callout boxes for important notes
- Emoji sparingly (📚 🧠 💡 ✅ 🎯)

## 🔍 Quality Checklist
Before marking a PDF as complete:
- [ ] All major topics covered
- [ ] External resources added
- [ ] Interactive elements included
- [ ] PDF references with page numbers
- [ ] Cross-references created
- [ ] Mobile-friendly formatting
- [ ] Self-assessment included

## 📊 Status Tracking

### Current Progress
- **Total PDFs**: 97
- **Processed**: 1 (MPC-001/Block-1/Unit-1)
- **Enrichment Sources Added**: 42 links, 10 Wikipedia articles, 8 research papers, 12 videos

### status.json Structure
```json
{
  "metadata": {
    "total_pdfs": 97,
    "processed": 1,
    "in_progress": null,
    "last_updated": "ISO timestamp",
    "enrichment_stats": {
      "total_external_links": 42,
      "wikipedia_articles": 10,
      "research_papers": 8,
      "videos": 12,
      "interactive_elements": 4
    }
  },
  "courses": {
    "MPC-001": {
      "name": "Cognitive Psychology, Learning and Memory",
      "total_units": 16,
      "processed_units": 1,
      "blocks": {
        "Block-1": {
          "name": "Foundations",
          "units": {
            "Unit-1": {
              "status": "completed",
              "pdf_path": "MPC-001/Block-1/Unit-1.pdf",
              "topics_extracted": [...],
              "mdx_files": [
                "cognitive-psychology-introduction.mdx",
                "research-methods-cognitive-psychology.mdx",
                "history-cognitive-psychology.mdx",
                "key-issues-cognitive-psychology.mdx"
              ],
              "enrichment_sources": 42,
              "processed_date": "2024-12-12"
            }
          }
        }
      }
    }
  }
}
```

## 🚫 Error Handling
- If PDF cannot be read: Mark as "ERROR" and continue
- If enrichment fails: Note it but continue with content
- Always save progress before stopping
- Create partial content rather than skip

## ✅ Success Indicators
- Student can understand without prior knowledge
- Multiple learning styles accommodated
- Rich with external resources
- Interactive and engaging
- Properly cited and referenced

## 📈 Processing Order
1. MPC-001: Cognitive Psychology (16 units)
2. MPC-002: Life Span Psychology (16 units)
3. MPC-003: Personality Theories (16 units)
4. MPC-004: Advanced Social Psychology (16 units)
5. MPC-005: Research Methods (16 units)
6. MPC-006: Statistics in Psychology (16 units)
7. MPCL-007: Practicals (1 project)

## 💬 Response Format
After processing each PDF:
```
✅ Processed: [Course]/[Block]/[Unit]
📝 Topics: [List main topics]
🔗 Enrichment: X links, Y videos, Z research papers
📄 Created: [List of MDX files]
⏭️ Next: [Next PDF to process]
Progress: X/97 PDFs (Y%)
```

## ⚙️ Docusaurus Configuration

### Sidebar Configuration (`sidebars.js`)
- Categories with `items: []` MUST have a `link` property or Docusaurus will error
- Document IDs must match the `id` field in MDX frontmatter
- Content files are in `mpc-001/block-X/` but course overviews are in `mpc-001-cognitive/`

### Example Sidebar Entry
```javascript
{
  type: 'category',
  label: 'MPC-001: Cognitive Psychology',
  link: {
    type: 'doc',
    id: 'mpc-001-cognitive/index',  // Course overview
  },
  items: [
    {
      type: 'category',
      label: 'Block 1: Foundations',
      items: [
        'mpc-001/block-1/cognitive-psychology-introduction',  // Uses doc ID, not filename
        'mpc-001/block-1/research-methods-cognitive-psychology',
      ],
    },
  ],
}
```

### Running the Dev Server
```bash
npm start          # Starts on port 3000
npm start -- --port 3001  # Use alternate port if 3000 is busy
```

---
Remember: We're creating a comprehensive learning resource that goes beyond the PDFs - enriching content with modern research, multimedia, and interactive elements to create the best possible study experience.
