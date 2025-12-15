# MAPC Study Portal - AI Instructions

## 🎯 Core Principle
**LEARNER VALUE > TOKEN EFFICIENCY**

Transform IGNOU MAPC psychology PDFs into comprehensive, enriched study materials. Never sacrifice content quality to save tokens.

## 🎯 Project Mission
Transform IGNOU MAPC psychology PDFs into comprehensive, enriched study materials with external resources, creating an interactive learning portal using Docusaurus.

**Core Purpose**: Create the best possible study experience by going beyond the PDFs - enriching content with modern research, multimedia, interactive elements, real-world applications, and practical learning aids that help students deeply understand psychology.

Transform IGNOU MAPC psychology PDFs into comprehensive, enriched study materials. Never sacrifice content quality to save tokens.

---

## 📁 Project Paths
```
Project Root:     /Users/msd/Work/Repositories/mapc-study/
Source PDFs:      /Users/msd/Work/Repositories/mapc-study/static/pdfs/
Content:          /Users/msd/Work/Repositories/mapc-study/docs/
Status Tracking:  /Users/msd/Work/Repositories/mapc-study/processing/status.json
```

---

## 🔧 File Operations: Use Filesystem MCP

**ALWAYS use Filesystem MCP** for all file operations (NOT bash commands):

| Operation | Tool |
|-----------|------|
| Create MDX files | `Filesystem:write_file` |
| Edit sidebar/status | `Filesystem:edit_file` |
| Read files | `Filesystem:read_file` |

---

## 📖 Reading PDFs

Use **PDF Tools MCP connector**:

```
# List PDFs in a block
PDF Tools:list_pdfs
  directory = "/Users/msd/Work/Repositories/mapc-study/static/pdfs/MPC-001 Cognitive Psychology, Learning and Memory/Block-1"

# Read specific PDF
PDF Tools:read_pdf_content
  pdf_path = "/Users/msd/Work/Repositories/mapc-study/static/pdfs/MPC-001 Cognitive Psychology, Learning and Memory/Block-1/Unit-3.pdf"
```

**Notes:**
- Directory names include spaces (e.g., "MPC-001 Cognitive Psychology, Learning and Memory")
- PDF filenames: Unit-1.pdf, Unit-2.pdf, etc.
- Command-line tools won't work for PDFs—use the MCP connector

---

## 🔄 Two-Stage Workflow

### Stage 1: EXTRACTION
**Goal**: Capture ALL PDF content completely

1. Read PDF with PDF Tools connector
2. Identify 3-5 main topics
3. Create MDX files with FULL content
4. Mark as `"extracted"` in status.json

### Stage 2: ENRICHMENT  
**Goal**: Transform into exceptional learning resource

1. Add 5+ external resources per file
2. Include 1+ Wikipedia link
3. Add 1+ educational video
4. Create 1+ Mermaid diagram
5. Write 3+ self-assessment questions
6. Add memory aids/mnemonics
7. Include real-world applications
8. Expand to 2,000+ words
9. Mark as `"enriched"` in status.json

---

## 📋 Commands

### `continue`
Process next pending unit through both stages.

1. **Check Status** → Read `processing/status.json`, find next pending unit
2. **Load PDF** → Use `PDF Tools:read_pdf_content`
3. **Extract Content** → Create 3-5 MDX files with full PDF content
4. **Enrich Each File** → Add all required resources, diagrams, assessments
5. **Update Sidebar** → Use `Filesystem:edit_file` on `sidebars.js`
6. **Update Status** → Use `Filesystem:edit_file` on `status.json`
7. **Report Progress** → Show files created with enrichment stats

---

### `status`
Show current processing progress.

**Output:**
```
📊 MAPC Study Portal Status
━━━━━━━━━━━━━━━━━━━━━━━━━━
Total PDFs: 97
Extracted: X | Enriched: Y | Pending: Z

Current Course: MPC-001 Cognitive Psychology
├── Block-1: 3/4 units enriched
├── Block-2: 0/4 units (pending)
└── ...

In Progress: MPC-001/Block-1/Unit-4 (extraction)
Next Up: MPC-001/Block-2/Unit-1
```

---

### `enrich [unit]`
Re-enrich a specific unit to meet quality standards.

**Usage:** `enrich MPC-001/Block-1/Unit-3`

**Workflow:**
1. Read existing MDX files for the unit
2. Check current enrichment levels against standards
3. Add missing elements (videos, diagrams, research, etc.)
4. Expand content if under 2,000 words
5. Update `status.json` with new quality_check data
6. Mark as `"enriched"` when all standards met

**Use when:**
- Files marked as `"extracted"` need enrichment
- Quality check shows `meets_standards: false`
- User wants to improve existing content

---

### `enrich+ [unit]`
Deep enrichment—go beyond minimum standards for comprehensive coverage.

**Usage:** `enrich+ MPC-001/Block-1/Unit-3`

**Enhanced Standards:**
| Standard | Normal | Deep (enrich+) |
|----------|--------|----------------|
| External sources | 5+ | 10+ |
| Wikipedia | 1+ | 3+ |
| Videos | 1+ | 3+ |
| Research papers | 1+ | 3+ |
| Diagrams | 1+ | 2+ |
| Self-assessments | 3+ | 5+ |
| Word count | 2,000+ | 3,500+ |

**Additional Deep Enrichment:**
- Add case studies and clinical vignettes
- Include historical context and key researcher bios
- Create comparison tables across theories
- Add exam-focused tips and common misconceptions
- Link to primary source papers where available
- Include Indian context/applications where relevant

---

### `validate [unit]`
Validate unit for data consistency and PDF coverage.

**Usage:** `validate MPC-001/Block-1/Unit-3`

**Checks Performed:**

**1. Coverage Check** (vs PDF content)
- All major topics from PDF covered?
- Key theories and researchers mentioned?
- Important definitions included?
- Page references accurate?

**2. Quality Standards Check**
- External sources ≥ 5?
- Wikipedia ≥ 1?
- Videos ≥ 1?
- Diagrams ≥ 1?
- Self-assessments ≥ 3?
- Word count ≥ 2,000?

**3. Technical Consistency**
- Frontmatter complete and valid?
- Document IDs in sidebar.js?
- PDF links clickable and correct?
- Cross-references working?
- No duplicate file numbers?

**4. Status Consistency**
- status.json matches actual files?
- Word counts accurate?
- Quality check data current?

**Output:**
```
🔍 Validation: MPC-001/Block-1/Unit-3
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📚 Coverage: ✅ PASS (12/12 topics covered)
   Missing: None

📊 Quality Standards:
   ├── External sources: ✅ 8/5
   ├── Wikipedia: ✅ 2/1
   ├── Videos: ✅ 3/1
   ├── Diagrams: ⚠️ 0/1 (MISSING)
   ├── Self-assessments: ✅ 4/3
   └── Word count: ✅ 2,450/2,000

🔧 Technical:
   ├── Frontmatter: ✅ Valid
   ├── Sidebar: ✅ All IDs present
   ├── PDF links: ✅ Working
   └── Cross-refs: ✅ Valid

📋 Status.json: ⚠️ MISMATCH
   └── Word count outdated (shows 2,100)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Result: ⚠️ 2 issues found
Action: Run `enrich MPC-001/Block-1/Unit-3` to fix
```

---

### Command Quick Reference

| Command | Purpose | Example |
|---------|---------|---------|
| `continue` | Process next pending unit | `continue` |
| `status` | Show overall progress | `status` |
| `enrich [unit]` | Re-enrich to meet standards | `enrich MPC-001/Block-1/Unit-3` |
| `enrich+ [unit]` | Deep enrichment beyond standards | `enrich+ MPC-001/Block-1/Unit-3` |
| `validate [unit]` | Check coverage & consistency | `validate MPC-001/Block-1/Unit-3` |

---

## ✅ Quality Standards (Non-Negotiable)

### Per File Requirements

**External Resources:**
- 5+ external sources
- 1+ Wikipedia article
- 1+ educational video (MIT/Crash Course)
- 1+ recent research paper (2020-2025)
- Cross-references to related topics

**Learning Aids:**
- 1+ Mermaid diagram
- 1+ comparison table (where applicable)
- 1+ memory aid/mnemonic
- 3+ self-assessment questions
- Real-world examples & clinical applications

**Content Quality:**
- 2,000+ words (comprehensive coverage)
- Conversational yet academic tone
- PDF source citations with page numbers
- Clickable PDF links

---

## 📝 MDX File Format

### Frontmatter
```yaml
---
id: topic-name-kebab-case
title: Full Topic Title
sidebar_label: Short Label
tags: [tag1, tag2]
description: SEO description (150 chars)
last_updated: YYYY-MM-DD
estimated_time: X min
difficulty: basic|intermediate|advanced
exam_importance: low|medium|high
---
```

### File Naming
- Format: `XX-topic-name.mdx` (e.g., `12-memory-brain-systems.mdx`)
- Number sequentially: 01, 02, 03... (no gaps or duplicates)
- Continue numbering across units within same block

### Cross-Reference Links
```markdown
❌ WRONG: [Topic](/docs/mpc-001/block-1/topic)
✅ CORRECT: [Topic](/mpc-001/block-1/topic)
```

---

## 📎 PDF Link Format

**URL-encoded course paths:**
```
MPC-001: /pdfs/MPC-001%20Cognitive%20Psychology,%20Learning%20and%20Memory/
MPC-002: /pdfs/MPC-002%20Life%20Span%20Psychology/
MPC-003: /pdfs/MPC-003%20Personality%20Theories%20and%20Assessment/
MPC-004: /pdfs/MPC-004%20Advanced%20Social%20Psychology/
MPC-005: /pdfs/MPC-005%20Research%20Methods/
MPC-006: /pdfs/MPC-006%20Statistics%20in%20Psychology/
MPCL-007: /pdfs/MPCL-007%20Practicals%20Experimental%20Psychology%20and%20Psychological%20Testing/
```

**Citation template:**
```markdown
---
**Source PDFs**: 
- 📄 [Block-1/Unit-3.pdf - Pages 31-45](/pdfs/MPC-001%20Cognitive%20Psychology,%20Learning%20and%20Memory/Block-1/Unit-3.pdf)
- 📚 MPC-001 Cognitive Psychology, Learning and Memory
```

---

## 📊 Status Tracking

### status.json Structure
```json
{
  "metadata": {
    "total_pdfs": 97,
    "extracted": 3,
    "enriched": 3,
    "in_progress": {
      "unit": "MPC-001/Block-1/Unit-4",
      "stage": "extraction"
    }
  },
  "courses": {
    "MPC-001": {
      "blocks": {
        "Block-1": {
          "units": {
            "Unit-3": {
              "status": "enriched",
              "extraction_date": "2024-12-14",
              "enrichment_date": "2024-12-14",
              "mdx_files": [
                {
                  "filename": "12-memory-brain-systems.mdx",
                  "status": "enriched",
                  "word_count": 2500,
                  "quality_check": {
                    "external_sources": 10,
                    "wikipedia": 3,
                    "videos": 3,
                    "diagrams": 2,
                    "self_assessment": 4,
                    "meets_standards": true
                  }
                }
              ]
            }
          }
        }
      }
    }
  }
}
```

### Status Types
- **"pending"** - Not yet processed
- **"extracted"** - PDF content captured, needs enrichment
- **"enriched"** - Meets all quality standards
- **"error"** - Processing failed

---

## ⚙️ Sidebar Configuration

**CRITICAL**: Every MDX file MUST be added to `sidebars.js`

```javascript
{
  type: 'category',
  label: 'Block 1: Foundations',
  items: [
    // Unit 3: Memory and Brain
    'mpc-001/block-1/memory-brain-systems',      // Uses doc ID from frontmatter
    'mpc-001/block-1/neuroimaging-memory',
    'mpc-001/block-1/amnesia-case-studies',
  ],
}
```

---

## 💬 Progress Report Format

After processing:
```
✅ Processed: MPC-001/Block-1/Unit-3
📝 Topics: Memory & Brain Systems, Neuroimaging, Amnesia Studies
🔗 Enrichment: 15 links, 4 videos, 3 research papers
📄 Created: 12-memory-brain-systems.mdx (2,500 words, enriched)
⏭️ Next: MPC-001/Block-1/Unit-4
Progress: 3/97 PDFs (3.1%)
```

---

## ❌ Common Mistakes

| Don't | Do |
|-------|-----|
| Use bash for file operations | Use Filesystem MCP |
| Mark "extracted" as complete | Only mark "enriched" when standards met |
| Create files under 2,000 words | Expand to comprehensive coverage |
| Skip enrichment to move faster | Prioritize learner value |
| Forget sidebar updates | Update immediately after creating files |
| Use duplicate file numbers | Number sequentially |

---

## 📈 Processing Order

1. MPC-001: Cognitive Psychology (16 units)
2. MPC-002: Life Span Psychology (16 units)
3. MPC-003: Personality Theories (16 units)
4. MPC-004: Social Psychology (16 units)
5. MPC-005: Research Methods (16 units)
6. MPC-006: Statistics (16 units)
7. MPCL-007: Practicals (1 project)

---

**Remember**: We're building a study portal students will rely on for their education. Quality cannot be compromised. Every file should be something we're proud to present to learners.
