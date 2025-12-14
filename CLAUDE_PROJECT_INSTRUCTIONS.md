# Claude Project Instructions - MAPC Study Portal Builder

## 🎯 Project Mission
Transform IGNOU MAPC psychology PDFs into comprehensive, enriched study materials with external resources, creating an interactive learning portal using Docusaurus.

## 📁 File Locations
```
Source PDFs: /Users/msd/Work/Repositories/mapc-study/static/pdfs/
Project Root: /Users/msd/Work/Repositories/mapc-study/
Content Directory: /Users/msd/Work/Repositories/mapc-study/docs/
Processing Status: /Users/msd/Work/Repositories/mapc-study/processing/status.json
Static PDFs Directory: /Users/msd/Work/Repositories/mapc-study/static/pdfs/
```

## 📂 PDF Directory Structure
```
static/pdfs/
├── MPC-001 Cognitive Psychology, Learning and Memory/
│   ├── Block-1/
│   │   ├── Unit-1.pdf
│   │   ├── Unit-2.pdf
│   │   ├── Unit-3.pdf
│   │   └── Unit-4.pdf
│   ├── Block-2/
│   ├── Block-3/
│   └── Block-4/
├── MPC-002 Life Span Psychology/
├── MPC-003 Personality Theories and Assessment/
├── MPC-004 Advanced Social Psychology/
├── MPC-005 Research Methods/
├── MPC-006 Statistics in Psychology/
└── MPCL-007 Practicals Experimental Psychology and Psychological Testing/
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
│       ├── 04-key-issues-cognitive-psychology.mdx
│       ├── 05-information-processing-model.mdx
│       ├── 06-working-memory-model.mdx
│       ├── 07-levels-of-processing.mdx
│       ├── 08-encoding-storage-retrieval.mdx
│       ├── 09-learning-memory-systems.mdx
│       ├── 10-information-processing-theory.mdx
│       └── 11-bloom-sternberg-theories.mdx
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
- **Number sequentially**: 01, 02, 03... (no duplicate numbers)
- **Index files**: `index.mdx` in course overview directories
- **Document IDs**: Use kebab-case without numbers (e.g., `cognitive-psychology-introduction`)

## 🔧 PDF Processing with MCP Connector

### Using the PDF Tools Connector

The PDF Tools MCP connector is available and should be used to read PDF files. This connector provides reliable access to PDF content.

### How to Read PDFs

**Step 1: List Available PDFs**
```
Use: PDF Tools - Analyze, Extract, Fill, Compare:list_pdfs
Directory: /Users/msd/Work/Repositories/mapc-study/static/pdfs/[Course]/[Block]/
```

**Step 2: Read PDF Content**
```
Use: PDF Tools - Analyze, Extract, Fill, Compare:read_pdf_content
Path: /Users/msd/Work/Repositories/mapc-study/static/pdfs/[Course]/[Block]/Unit-X.pdf
```

**Example Workflow:**
```
1. List PDFs in block:
   PDF Tools:list_pdfs with directory = "/Users/msd/Work/Repositories/mapc-study/static/pdfs/MPC-001 Cognitive Psychology, Learning and Memory/Block-1"

2. Read specific PDF:
   PDF Tools:read_pdf_content with pdf_path = "/Users/msd/Work/Repositories/mapc-study/static/pdfs/MPC-001 Cognitive Psychology, Learning and Memory/Block-1/Unit-2.pdf"

3. Process the extracted text content
```

### Important Notes

- **Always use static/pdfs/** directory (NOT Downloads directory)
- The PDF Tools connector can successfully access files in the static/pdfs location
- Full directory names include spaces (e.g., "MPC-001 Cognitive Psychology, Learning and Memory")
- PDF filenames follow pattern: Unit-1.pdf, Unit-2.pdf, etc.
- The connector returns extracted text that can be directly processed

### Troubleshooting

- If PDF read fails: Verify the full path including spaces in directory names
- If directory not found: Use list_pdfs to confirm the directory structure
- Command-line tools (pdftotext) won't work - always use the PDF Tools connector
- Filesystem read tools won't work for PDFs - use the specialized PDF connector

## 🔄 Workflow Commands

### Primary Command: "continue"
When user says "continue", execute this workflow:

1. **Check Status**
   - Read `processing/status.json`
   - Identify next unprocessed PDF
   - Construct the full PDF path in static/pdfs directory

2. **Load PDF Content**
   - Use PDF Tools connector: `read_pdf_content`
   - Full path format: `/Users/msd/Work/Repositories/mapc-study/static/pdfs/[Course Name with spaces]/[Block-N]/Unit-X.pdf`
   - Extract and analyze the returned text

3. **Process Content**
   - Extract main topics and subtopics
   - Identify key theories, researchers, studies
   - Note important definitions and concepts
   - Record page numbers for references

4. **Enrich Content**
   - Search for recent research (2020-2024)
   - Find Wikipedia articles for concepts
   - Locate educational videos (MIT OpenCourseWare, Crash Course)
   - Identify real-world applications
   - Find or create memory aids
   - Add clinical/practical relevance

5. **Create MDX Files**
   - Write in student-friendly language
   - Structure with clear hierarchy
   - Add interactive elements (Mermaid diagrams, tables)
   - Include external links
   - Add PDF references with page numbers AND clickable links
   - Cross-reference related topics

6. **Update Sidebar**
   - CRITICAL: Add new document IDs to sidebars.js immediately
   - Use document IDs from frontmatter, not filenames
   - Add comments to separate units

7. **Update Status**
   - Mark PDF as processed in status.json
   - List created MDX files (with correct sequential numbering)
   - Log enrichment sources count
   - Update enrichment statistics
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

### Content Structure with Clickable PDF Links
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
- [MIT OpenCourseWare: Topic](link)
- [Crash Course Psychology: Topic](link)

### Additional Reading
- [Wikipedia: Topic](link)
- [Recent Research Paper (2024)](DOI link)

### Memory Aids
- Mnemonics
- Visual diagrams (Mermaid)
- Quick formulas

## Self-Assessment
Interactive quiz or questions

## Summary
Key takeaways in bullet points

---
**Source PDFs**: 
- 📄 [Block-X/Unit-Y.pdf - Pages A-B](/pdfs/COURSE-NAME-ENCODED/Block-X/Unit-Y.pdf)
- 📚 MPC-XXX Course Full Name
```

## 📎 PDF Linking Guide

### URL Encoding Reference

**MPC-001:**
```
/pdfs/MPC-001%20Cognitive%20Psychology,%20Learning%20and%20Memory/Block-1/Unit-1.pdf
```

**MPC-002:**
```
/pdfs/MPC-002%20Life%20Span%20Psychology/Block-1/Unit-1.pdf
```

**MPC-003:**
```
/pdfs/MPC-003%20Personality%20Theories%20and%20Assessment/Block-1/Unit-1.pdf
```

**MPC-004:**
```
/pdfs/MPC-004%20Advanced%20Social%20Psychology/Block-1/Unit-1.pdf
```

**MPC-005:**
```
/pdfs/MPC-005%20Research%20Methods/Block-1/Unit-1.pdf
```

**MPC-006:**
```
/pdfs/MPC-006%20Statistics%20in%20Psychology/Block-1/Unit-1.pdf
```

**MPCL-007:**
```
/pdfs/MPCL-007%20Practicals%20Experimental%20Psychology%20and%20Psychological%20Testing/Unit-1.pdf
```

### Testing PDF Links

After creating MDX files:
1. Start dev server: `npm start`
2. Navigate to the page
3. Click the PDF link at the bottom
4. Verify PDF opens in browser
5. Check page numbers are accurate

## 🎨 Writing Guidelines

### Tone & Style
- **Conversational but academic**
- Use "you" to address students
- Include analogies and metaphors
- Break complex topics into chunks
- Use active voice

### Enrichment Requirements
Each topic MUST include:
- ✅ 2+ authoritative external sources (recent research, educational sites)
- ✅ 1+ practical/clinical application  
- ✅ 1+ memory aid or study technique
- ✅ Related video when available (prioritize MIT OpenCourseWare, Crash Course)
- ✅ Wikipedia or encyclopedia reference for foundational concepts
- ✅ Cross-references to related topics
- ✅ Clickable PDF link to source material

### Visual Elements
- Tables for comparisons
- Mermaid diagrams for processes and flows
- Callout boxes for important notes (using blockquotes)
- Emoji sparingly for visual markers (📚 🧠 💡 ✅ 🎯 📄 📖)

## 🔍 Quality Checklist
Before marking a PDF as complete:
- [ ] All major topics covered
- [ ] External resources added (minimum counts met)
- [ ] Interactive elements included (diagrams, tables)
- [ ] PDF references with page numbers
- [ ] PDF links are clickable and work
- [ ] Cross-references created
- [ ] Mobile-friendly formatting
- [ ] Self-assessment included
- [ ] Memory aids provided
- [ ] Real-world applications discussed
- [ ] Sidebar updated with new files

## 📊 Status Tracking

### Current Progress
- **Total PDFs**: 97
- **Processed**: 2 (MPC-001/Block-1/Unit-1, Unit-2)
- **Enrichment Sources Added**: 82 links, 14 Wikipedia articles, 15 research papers, 15 videos
- **All PDF links**: Now clickable ✅

## 🚫 Error Handling
- If PDF cannot be read with connector: Mark as "ERROR" in status and continue
- If enrichment search fails: Note it but continue with content
- Always save progress to status.json before stopping
- Create partial content rather than skip
- If path issues occur: Verify directory structure with list_pdfs

## ✅ Success Indicators
- Student can understand without prior knowledge
- Multiple learning styles accommodated
- Rich with external resources (meeting minimum requirements)
- Interactive and engaging (diagrams, analogies, examples)
- Properly cited and referenced (with page numbers)
- Cross-linked to related topics
- **Source PDFs are clickable and accessible**

## 📈 Processing Order
1. MPC-001: Cognitive Psychology, Learning and Memory (16 units)
2. MPC-002: Life Span Psychology (16 units)
3. MPC-003: Personality Theories and Assessment (16 units)
4. MPC-004: Advanced Social Psychology (16 units)
5. MPC-005: Research Methods (16 units)
6. MPC-006: Statistics in Psychology (16 units)
7. MPCL-007: Practicals - Experimental Psychology and Psychological Testing (1 project)

## 💬 Response Format
After processing each PDF:
```
✅ Processed: [Course]/[Block]/[Unit]
📝 Topics: [List main topics]
🔗 Enrichment: X links, Y videos, Z research papers
📄 Created: [List of MDX files with numbers]
⏭️ Next: [Next PDF to process]
Progress: X/97 PDFs (Y%)
```

## ⚙️ Docusaurus Configuration

### Sidebar Configuration (`sidebars.js`)

**CRITICAL**: Every MDX file MUST be added to `sidebars.js` to appear in the site navigation.

- Categories with `items: []` MUST have a `link` property or Docusaurus will error
- Document IDs must match the `id` field in MDX frontmatter
- Content files are in `mpc-001/block-X/` but course overviews are in `mpc-001-cognitive/`
- **NEW FILES WON'T SHOW** until added to sidebar - this is a common mistake!

### How to Update Sidebar After Creating MDX Files

**Step 1**: Create your MDX files with proper frontmatter IDs
**Step 2**: Update `sidebars.js` to include the new document IDs
**Step 3**: Verify files appear in browser (refresh if needed)

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
        // Unit 1: Introduction to Cognitive Psychology
        'mpc-001/block-1/cognitive-psychology-introduction',  // Uses doc ID, not filename
        'mpc-001/block-1/research-methods-cognitive-psychology',
        'mpc-001/block-1/history-cognitive-psychology',
        'mpc-001/block-1/key-issues-cognitive-psychology',
        // Memory Models (Unit 1 bonus)
        {
          type: 'category',
          label: 'Memory Models',
          items: [
            'mpc-001/block-1/information-processing-model',
            'mpc-001/block-1/working-memory-model',
            'mpc-001/block-1/levels-of-processing',
            'mpc-001/block-1/encoding-storage-retrieval',
          ],
        },
        // Unit 2: Information Processing in Learning and Memory
        'mpc-001/block-1/learning-memory-systems',
        'mpc-001/block-1/information-processing-theory',
        'mpc-001/block-1/bloom-sternberg-theories',
      ],
    },
  ],
}
```

### Sidebar Update Checklist
After creating new MDX files:
- [ ] Open `sidebars.js`
- [ ] Locate the correct course and block section
- [ ] Add document IDs (not filenames) in logical order
- [ ] Add comments to separate units for clarity
- [ ] Save file
- [ ] Test in browser (npm start)

### Common Mistakes to Avoid
❌ **DON'T**: Create MDX files without updating sidebar
❌ **DON'T**: Use filenames in sidebar (use document IDs from frontmatter)
❌ **DON'T**: Forget to add comments separating units
❌ **DON'T**: Use duplicate file numbers
✅ **DO**: Update sidebar immediately after creating files
✅ **DO**: Use the `id` field from MDX frontmatter
✅ **DO**: Group files by unit with comments
✅ **DO**: Number files sequentially

### Running the Dev Server
```bash
npm start          # Starts on port 3000
npm start -- --port 3001  # Use alternate port if 3000 is busy

# If changes don't appear:
# 1. Stop the server (Ctrl+C)
# 2. Clear Docusaurus cache: rm -rf .docusaurus
# 3. Restart: npm start
```

## 📎 Linking to Source PDFs

### Making PDF References Clickable

All PDF references in MDX files should link to the actual PDF files in the static folder for easy student access.

### PDF URL Format

Since PDFs are in the `/static/pdfs/` folder, they're served from `/pdfs/` in the browser.

**Path Pattern:**
```
Static folder: /static/pdfs/[COURSE-NAME]/[BLOCK]/Unit-X.pdf
Browser URL:   /pdfs/[COURSE-NAME-URL-ENCODED]/[BLOCK]/Unit-X.pdf
```

### URL Encoding for Paths with Spaces

Course names have spaces and need URL encoding:
- Spaces → `%20`
- Commas can stay as-is in most browsers

**Quick Reference: Course PDF Base URLs**

```markdown
MPC-001: /pdfs/MPC-001%20Cognitive%20Psychology,%20Learning%20and%20Memory/
MPC-002: /pdfs/MPC-002%20Life%20Span%20Psychology/
MPC-003: /pdfs/MPC-003%20Personality%20Theories%20and%20Assessment/
MPC-004: /pdfs/MPC-004%20Advanced%20Social%20Psychology/
MPC-005: /pdfs/MPC-005%20Research%20Methods/
MPC-006: /pdfs/MPC-006%20Statistics%20in%20Psychology/
MPCL-007: /pdfs/MPCL-007%20Practicals%20Experimental%20Psychology%20and%20Psychological%20Testing/
```

### Template for Source PDF Citations

**At the end of each MDX file:**

```markdown
---
**Source PDFs**: 
- 📄 [Block-X/Unit-Y.pdf - Pages A-B](/pdfs/COURSE-NAME-ENCODED/Block-X/Unit-Y.pdf)
- 📚 MPC-XXX Course Full Name
```

**Example (MPC-001, Block-1, Unit-2, Pages 19-24):**
```markdown
---
**Source PDFs**: 
- 📄 [Block-1/Unit-2.pdf - Pages 19-24](/pdfs/MPC-001%20Cognitive%20Psychology,%20Learning%20and%20Memory/Block-1/Unit-2.pdf)
- 📚 MPC-001 Cognitive Psychology, Learning and Memory
```

### Benefits of Clickable PDF Links

✅ Students can instantly access source material
✅ Easy verification of content
✅ Better user experience
✅ Professional presentation
✅ Supports fact-checking and deeper study

## 🎓 Best Practices

### Content Creation
- Start each unit by reading the full PDF with the connector
- Identify 3-5 major themes per unit
- Create separate MDX files for distinct topics (not one massive file)
- Each MDX file should be 10-20 minutes reading time
- Include real-world examples for every major concept
- Add visual elements (diagrams, tables) for complex relationships
- **Add clickable PDF links at the end of each file**

### Enrichment Strategy
1. **Web Search**: Use specific topic keywords (2-3 words max)
2. **Recent Research**: Include year "2024" or "2023" in searches
3. **Videos**: Prioritize MIT OpenCourseWare and Crash Course Psychology
4. **Wikipedia**: Use for foundational concepts and historical context
5. **Memory Aids**: Create original mnemonics, not generic ones

### File Organization
- Number files sequentially starting from 01 (no gaps, no duplicates)
- Use descriptive kebab-case IDs in frontmatter
- Group related topics in same file when appropriate
- Cross-reference between files using relative links
- Keep frontmatter consistent across all files
- Update sidebar.js immediately after creating files

---

**Remember**: We're creating a comprehensive learning resource that goes beyond the PDFs - enriching content with modern research, multimedia, and interactive elements to create the best possible study experience. Always use the PDF Tools connector to read PDFs from the static/pdfs directory, and make all PDF references clickable for student convenience.
