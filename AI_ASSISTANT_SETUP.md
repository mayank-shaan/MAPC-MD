# Using MAPC Study Portal with Different AI Assistants

## 🎯 Goal
Continue the MAPC study portal development using AI assistants like Windsurf, GitHub Copilot, Cursor, or others with Sonnet 4.5.

---

## 📋 Quick Comparison: AI Assistant Capabilities

| Feature | Claude.ai (Current) | Windsurf | Cursor | GitHub Copilot |
|---------|---------------------|----------|--------|----------------|
| **Model** | Sonnet 4.5 | Sonnet 4.5 (via API) | Sonnet 4.5 (via API) | GPT-4 or Claude (via API) |
| **PDF Reading** | ✅ MCP Connector | ❌ No native support | ❌ No native support | ❌ No native support |
| **File Access** | ✅ Full filesystem | ✅ Full filesystem | ✅ Full filesystem | ✅ Full filesystem |
| **Instructions** | ✅ Project context | ✅ .windsurfrules | ✅ .cursorrules | ⚠️ Limited context |
| **Web Search** | ✅ Built-in | ❌ No | ⚠️ Via extensions | ❌ No |
| **Long Context** | ✅ Excellent | ✅ Good | ✅ Good | ⚠️ Limited |

---

## 🔧 Solution 1: Windsurf (Recommended for this project)

### Setup Instructions

#### 1. Install Windsurf
```bash
# Download from: https://codeium.com/windsurf
# Or install via package manager
```

#### 2. Configure Anthropic API for Sonnet 4.5
```
Settings → Models → Add Anthropic API Key
Model: claude-sonnet-4-20250514
```

#### 3. Create `.windsurfrules` File

Create this file in your project root:

```bash
# In /Users/msd/Work/Repositories/mapc-study/
touch .windsurfrules
```

**Content for `.windsurfrules`:**

```markdown
# MAPC Study Portal - Windsurf AI Assistant Rules

## Load Project Instructions
ALWAYS read and follow: ./CLAUDE_PROJECT_INSTRUCTIONS.md

## PDF Reading Strategy
Since Windsurf doesn't have native PDF reading:

### Method 1: Pre-extract PDFs (Recommended)
Before starting, run this script:
```bash
# Extract all PDFs to text files
cd /Users/msd/Work/Repositories/mapc-study
mkdir -p processing/extracted-text

# Extract each PDF
for pdf in static/pdfs/MPC-001*/Block-*/*.pdf; do
  output="processing/extracted-text/$(basename "$pdf" .pdf).txt"
  pdftotext "$pdf" "$output"
done
```

Then reference: `processing/extracted-text/Unit-X.txt`

### Method 2: Extract on Demand
When processing Unit-X:
```bash
pdftotext "static/pdfs/[COURSE]/[BLOCK]/Unit-X.pdf" /tmp/unit-X.txt
cat /tmp/unit-X.txt
```

### Method 3: Use Python (if pdftotext unavailable)
```python
import PyPDF2

def extract_pdf(path):
    with open(path, 'rb') as file:
        reader = PyPDF2.PdfReader(file)
        text = ''
        for page in reader.pages:
            text += page.extract_text()
    return text
```

## Workflow Commands
- "continue" → Process next PDF from status.json
- "status" → Show progress
- Follow all workflow steps in CLAUDE_PROJECT_INSTRUCTIONS.md

## Key Requirements
- Read CLAUDE_PROJECT_INSTRUCTIONS.md FIRST
- Extract PDF text before processing
- Follow MDX template exactly
- Update sidebar.js after creating files
- Update status.json after each unit
- Add clickable PDF links
- Number files sequentially

## Quality Standards
- All enrichment requirements must be met
- Include diagrams, examples, self-assessments
- Maintain conversational academic tone
- Cross-reference related topics
```

#### 4. Create PDF Extraction Helper Script

```bash
# Create: /Users/msd/Work/Repositories/mapc-study/scripts/extract-pdfs.sh
```

```bash
#!/bin/bash

# MAPC PDF Extraction Script
# Extracts all PDFs to text files for AI processing

PDFS_DIR="/Users/msd/Work/Repositories/mapc-study/static/pdfs"
OUTPUT_DIR="/Users/msd/Work/Repositories/mapc-study/processing/extracted-text"

# Create output directory
mkdir -p "$OUTPUT_DIR"

echo "🔄 Extracting PDFs to text files..."

# Extract all PDFs
find "$PDFS_DIR" -name "*.pdf" -type f | while read pdf; do
    # Get course and unit info from path
    course=$(echo "$pdf" | sed 's|.*/pdfs/\([^/]*\)/.*|\1|')
    block=$(echo "$pdf" | sed 's|.*/\(Block-[0-9]\)/.*|\1|')
    unit=$(basename "$pdf" .pdf)
    
    # Create organized output path
    output="$OUTPUT_DIR/${course}_${block}_${unit}.txt"
    
    # Extract text
    pdftotext "$pdf" "$output" 2>/dev/null
    
    if [ -f "$output" ]; then
        echo "✅ Extracted: $course / $block / $unit"
    else
        echo "❌ Failed: $pdf"
    fi
done

echo ""
echo "📊 Extraction complete!"
echo "Files available in: $OUTPUT_DIR"
ls -lh "$OUTPUT_DIR" | wc -l
```

Make it executable:
```bash
chmod +x scripts/extract-pdfs.sh
```

---

## 🔧 Solution 2: Cursor

### Setup Instructions

#### 1. Install Cursor
```bash
# Download from: https://cursor.sh
```

#### 2. Configure Anthropic API
```
Settings → Models → Anthropic API Key
Select: claude-sonnet-4-20250514
```

#### 3. Create `.cursorrules` File

```bash
# In project root
touch .cursorrules
```

**Content (same as .windsurfrules above but for Cursor)**

---

## 🔧 Solution 3: GitHub Copilot

### Limitations
- No custom rules file (as of Dec 2024)
- Limited context window
- Cannot use Sonnet 4.5 directly (GPT-4 only, or Claude via API)

### Workaround

**Option A: Use Copilot Chat with Context**
```
1. Open CLAUDE_PROJECT_INSTRUCTIONS.md in editor
2. Select all text (Cmd+A)
3. In Copilot Chat: "Use these instructions: [paste]"
4. Then: "Read processing/extracted-text/Unit-3.txt and continue"
```

**Option B: Use Comments in Code**
```javascript
// AI: Follow instructions in CLAUDE_PROJECT_INSTRUCTIONS.md
// Current task: Process MPC-001/Block-1/Unit-3
// Read: processing/extracted-text/Unit-3.txt
```

---

## 📝 Recommended Workflow for Non-Claude Tools

### One-Time Setup

**1. Extract All PDFs**
```bash
cd /Users/msd/Work/Repositories/mapc-study
./scripts/extract-pdfs.sh
```

**2. Create Rules File**
```bash
# For Windsurf
cp AI_ASSISTANT_SETUP.md .windsurfrules

# For Cursor  
cp AI_ASSISTANT_SETUP.md .cursorrules
```

**3. Verify Setup**
```bash
# Check extracted files
ls -la processing/extracted-text/

# Should see files like:
# MPC-001_Cognitive_Psychology,_Learning_and_Memory_Block-1_Unit-3.txt
```

### Per-Unit Workflow

**Step 1: Check Status**
```
Ask AI: "Check processing/status.json and tell me the next pending unit"
```

**Step 2: Load Instructions**
```
Ask AI: "Read CLAUDE_PROJECT_INSTRUCTIONS.md and confirm you understand the workflow"
```

**Step 3: Load PDF Content**
```
Ask AI: "Read processing/extracted-text/[COURSE]_[BLOCK]_Unit-X.txt and analyze the content"
```

**Step 4: Process**
```
Ask AI: "Following the instructions, create enriched MDX files for this unit with:
- Proper sequential numbering (starting from file XX)
- External enrichment (search web for recent research)
- Clickable PDF links
- Update sidebar.js
- Update status.json"
```

---

## 🐍 Alternative: Python Script for PDF Extraction

If `pdftotext` isn't available, create this Python script:

```python
#!/usr/bin/env python3
# scripts/extract_all_pdfs.py

import os
from pathlib import Path
import PyPDF2

PDFS_DIR = Path("/Users/msd/Work/Repositories/mapc-study/static/pdfs")
OUTPUT_DIR = Path("/Users/msd/Work/Repositories/mapc-study/processing/extracted-text")

OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

def extract_pdf(pdf_path):
    """Extract text from a PDF file"""
    try:
        with open(pdf_path, 'rb') as file:
            reader = PyPDF2.PdfReader(file)
            text = ''
            for page in reader.pages:
                text += page.extract_text() + '\n'
        return text
    except Exception as e:
        print(f"❌ Error extracting {pdf_path}: {e}")
        return None

def main():
    print("🔄 Extracting PDFs to text files...")
    
    # Find all PDFs
    pdf_files = list(PDFS_DIR.rglob("*.pdf"))
    
    for pdf_path in pdf_files:
        # Create organized output filename
        relative = pdf_path.relative_to(PDFS_DIR)
        course = relative.parts[0]
        block = relative.parts[1] if len(relative.parts) > 1 else "Unknown"
        unit = pdf_path.stem
        
        output_name = f"{course}_{block}_{unit}.txt"
        output_path = OUTPUT_DIR / output_name
        
        # Extract
        text = extract_pdf(pdf_path)
        if text:
            output_path.write_text(text, encoding='utf-8')
            print(f"✅ {course}/{block}/{unit}")
        else:
            print(f"❌ Failed: {pdf_path}")
    
    print(f"\n📊 Complete! {len(list(OUTPUT_DIR.glob('*.txt')))} files extracted")
    print(f"Location: {OUTPUT_DIR}")

if __name__ == "__main__":
    main()
```

**Install dependencies:**
```bash
pip install PyPDF2
# or
pip3 install PyPDF2
```

**Run extraction:**
```bash
python3 scripts/extract_all_pdfs.py
```

---

## 🎯 Recommended Setup by Tool

### For Windsurf (Best Option)
```bash
1. Install Windsurf
2. Add Anthropic API key (Sonnet 4.5)
3. Extract PDFs: ./scripts/extract-pdfs.sh
4. Create .windsurfrules with project instructions
5. Start working: "continue" command
```

### For Cursor
```bash
1. Install Cursor
2. Add Anthropic API key (Sonnet 4.5)
3. Extract PDFs: ./scripts/extract-pdfs.sh
4. Create .cursorrules with project instructions
5. Start working: "continue" command
```

### For Claude.ai (Current - Best)
```bash
No setup needed!
- Has PDF MCP connector (reads PDFs directly)
- Has project instructions built-in
- Just say "continue"
```

---

## 📊 Feature Comparison

### PDF Reading Methods

| Method | Claude.ai | Windsurf/Cursor | Copilot |
|--------|-----------|-----------------|---------|
| **Direct PDF** | ✅ MCP connector | ❌ | ❌ |
| **Pre-extracted** | ✅ Also works | ✅ Best option | ✅ Only option |
| **On-demand extract** | ✅ | ✅ | ⚠️ Manual |

### Instructions Loading

| Method | Claude.ai | Windsurf | Cursor | Copilot |
|--------|-----------|----------|--------|---------|
| **Project Instructions** | ✅ Built-in | ✅ .windsurfrules | ✅ .cursorrules | ❌ Manual paste |
| **Auto-load** | ✅ | ✅ | ✅ | ❌ |
| **Context retention** | ✅ Excellent | ✅ Good | ✅ Good | ⚠️ Limited |

---

## 💡 Recommendation

### **Best Option: Continue with Claude.ai**

**Why?**
1. ✅ PDF connector already working perfectly
2. ✅ Project instructions already loaded
3. ✅ Web search built-in for enrichment
4. ✅ No setup needed
5. ✅ Proven workflow (2 units completed successfully)

### **Alternative: Windsurf as Secondary Tool**

**When to use:**
- For code-heavy tasks (if needed later)
- For quick edits to existing files
- For sidebar updates
- For batch operations

**Setup required:**
- Extract PDFs first (one-time)
- Create .windsurfrules
- Reference extracted text instead of PDFs

---

## 🔄 Migration Guide: If You Want to Switch

### From Claude.ai to Windsurf

**Step 1: Extract PDFs**
```bash
cd /Users/msd/Work/Repositories/mapc-study
mkdir -p processing/extracted-text

# Extract all PDFs
for pdf in static/pdfs/MPC-001*/Block-*/Unit-*.pdf; do
  output="processing/extracted-text/$(basename "$pdf" .pdf).txt"
  pdftotext "$pdf" "$output" 2>/dev/null && echo "✅ $(basename $pdf)" || echo "❌ $(basename $pdf)"
done
```

**Step 2: Create .windsurfrules**
```bash
cat > .windsurfrules << 'EOF'
# MAPC Study Portal Instructions

## Primary Instructions
Read and follow: ./CLAUDE_PROJECT_INSTRUCTIONS.md

## PDF Access
PDFs are pre-extracted to: ./processing/extracted-text/
Format: [Course-Name]_[Block-X]_Unit-Y.txt

## Workflow
1. Read CLAUDE_PROJECT_INSTRUCTIONS.md
2. Check processing/status.json for next unit
3. Read extracted PDF: processing/extracted-text/Unit-X.txt
4. Follow exact workflow from instructions
5. Update sidebar.js AND status.json

## Critical Points
- Number files sequentially (continue from last number)
- Use PDF Tools connector format for compatibility
- Add clickable PDF links
- Search web for enrichment
- Update ALL three systems: files, sidebar, status
EOF
```

**Step 3: First Command in Windsurf**
```
"Read CLAUDE_PROJECT_INSTRUCTIONS.md, then check status.json and continue processing the next unit using the extracted text from processing/extracted-text/"
```

### From Claude.ai to Cursor

Same as Windsurf, but create `.cursorrules` instead of `.windsurfrules`.

---

## 📦 One-Time Setup Script

Create this script to prepare for any AI assistant:

```bash
#!/bin/bash
# scripts/prepare-for-ai-assistant.sh

echo "🔧 Preparing MAPC project for AI assistants..."

# 1. Extract PDFs
echo "📄 Extracting PDFs..."
mkdir -p processing/extracted-text

for pdf in static/pdfs/*/Block-*/Unit-*.pdf; do
  if [ -f "$pdf" ]; then
    course=$(dirname "$pdf" | xargs dirname | xargs basename)
    block=$(dirname "$pdf" | xargs basename)
    unit=$(basename "$pdf" .pdf)
    
    output="processing/extracted-text/${course}_${block}_${unit}.txt"
    
    pdftotext "$pdf" "$output" 2>/dev/null
    
    if [ -f "$output" ]; then
      echo "  ✅ $course/$block/$unit"
    fi
  fi
done

# 2. Create rules files
echo ""
echo "📋 Creating AI assistant rules..."

# For Windsurf
cat > .windsurfrules << 'RULES'
# Read project instructions
ALWAYS read: ./CLAUDE_PROJECT_INSTRUCTIONS.md

# PDF access: processing/extracted-text/
# Follow workflow exactly as documented
RULES

# For Cursor
cp .windsurfrules .cursorrules

echo "  ✅ .windsurfrules created"
echo "  ✅ .cursorrules created"

# 3. Verify
echo ""
echo "✅ Setup complete!"
echo ""
echo "📊 Extracted text files: $(ls processing/extracted-text/*.txt 2>/dev/null | wc -l)"
echo "📋 Rules files: Created"
echo ""
echo "🚀 Ready to use with:"
echo "   - Windsurf (recommended)"
echo "   - Cursor"
echo "   - GitHub Copilot (with manual context)"

exit 0
```

Make it executable:
```bash
chmod +x scripts/prepare-for-ai-assistant.sh
./scripts/prepare-for-ai-assistant.sh
```

---

## 🎯 Final Recommendation

### **Primary Tool: Claude.ai** ✅
**Continue using Claude.ai for this project because:**

1. **PDF Connector Works Perfectly**
   - No extraction needed
   - Direct PDF access
   - Saves time and effort

2. **Project Instructions Built-in**
   - Already loaded
   - Full context available
   - No configuration needed

3. **Web Search Integrated**
   - Easy enrichment
   - Recent research finding
   - Wikipedia access

4. **Proven Success**
   - 2 units completed
   - 11 MDX files created
   - Quality verified

### **Secondary Tool: Windsurf**
**Use for specific tasks:**
- Batch file operations
- Code refactoring
- Quick edits
- Sidebar updates

**Setup required:**
- Run `./scripts/prepare-for-ai-assistant.sh` once
- Then ready to use

---

## 📝 Quick Start Guide for Each Tool

### Claude.ai (Current Setup)
```
1. Just say "continue"
2. That's it! ✅
```

### Windsurf/Cursor (If switching)
```
1. Run: ./scripts/prepare-for-ai-assistant.sh
2. Open project in Windsurf/Cursor
3. Say: "Read CLAUDE_PROJECT_INSTRUCTIONS.md and continue"
```

### GitHub Copilot (Not recommended)
```
1. Extract PDFs manually
2. Copy instructions into chat
3. Reference extracted text files
4. More manual work required
```

---

## 🎓 Best Practice: Hybrid Approach

**Use Claude.ai for content creation** (Units 3-97)
- PDF reading works perfectly
- Web search for enrichment
- Best for this workflow

**Use Windsurf/Cursor for:**
- Batch renaming files
- Sidebar reorganization
- Testing/debugging
- Quick edits

This gives you the best of both worlds! 🌟

---

## Summary

**✅ Recommended**: **Stay with Claude.ai** for this project
- Everything already works
- No additional setup
- Faster workflow
- Better quality

**⚠️ Only switch if**: You have specific needs that Claude.ai doesn't meet

**If you do switch**: Run the preparation script first to extract PDFs
