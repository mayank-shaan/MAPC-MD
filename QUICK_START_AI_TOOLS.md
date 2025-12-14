# Quick Start Guide: Using AI Assistants with MAPC Project

## 🎯 Which Tool Should You Use?

### **Option 1: Claude.ai (RECOMMENDED)** ⭐
**Why**: Already working perfectly!
- ✅ PDF connector reads PDFs directly
- ✅ Project instructions loaded
- ✅ Web search for enrichment
- ✅ 2 units completed successfully
- ✅ No setup needed

**How to use**: Just say "continue" ✨

---

### **Option 2: Windsurf with Sonnet 4.5**
**Why**: Good code editor integration
- ✅ Anthropic API (Sonnet 4.5)
- ✅ Good for code editing
- ⚠️ Requires PDF extraction first

**Setup steps:**
```bash
# 1. Extract PDFs (one-time)
cd /Users/msd/Work/Repositories/mapc-study
./scripts/extract-pdfs.sh

# 2. Windsurf auto-loads .windsurfrules (already created)

# 3. Start using
Open project in Windsurf
Say: "continue"
```

---

### **Option 3: Cursor with Sonnet 4.5**
**Why**: Popular AI coding assistant
- ✅ Anthropic API (Sonnet 4.5)
- ✅ Good context management
- ⚠️ Requires PDF extraction first

**Setup steps:**
```bash
# Same as Windsurf
# Uses .cursorrules (already created)
```

---

## 📄 PDF Reading Solutions

### Problem: Most AI tools can't read PDFs directly

### Solution A: Pre-extract All PDFs (One-time)
```bash
cd /Users/msd/Work/Repositories/mapc-study

# Method 1: Using pdftotext (if installed)
./scripts/extract-pdfs.sh

# Method 2: Using Python (if pdftotext not available)
python3 scripts/extract_all_pdfs.py
```

**Result**: Text files in `processing/extracted-text/`
- Can be read by any AI assistant
- Reference in chat: "Read processing/extracted-text/Unit-3.txt"

### Solution B: Extract On-Demand
```bash
# When AI needs Unit-3:
pdftotext "static/pdfs/MPC-001 Cognitive Psychology, Learning and Memory/Block-1/Unit-3.pdf" /tmp/unit3.txt

# Then tell AI: "Read /tmp/unit3.txt"
```

---

## 🚀 Quick Start: Step-by-Step

### Using Claude.ai (Current Setup)
```
Step 1: Open claude.ai
Step 2: Say "continue"
Step 3: Done! ✅
```

### Using Windsurf/Cursor (First Time)
```
Step 1: Extract PDFs
  cd /Users/msd/Work/Repositories/mapc-study
  ./scripts/extract-pdfs.sh

Step 2: Open project in Windsurf/Cursor
  # .windsurfrules or .cursorrules already present

Step 3: Configure Anthropic API
  Settings → Add API key → Select Sonnet 4.5

Step 4: Start working
  Say: "continue"
  
  AI will:
  - Read CLAUDE_PROJECT_INSTRUCTIONS.md
  - Check status.json
  - Load extracted PDF text
  - Create enriched MDX files
  - Update sidebar & status
```

### Using GitHub Copilot (Not Recommended)
```
⚠️ Limited support - missing features:
- No custom rules file
- No web search
- Limited context

If you must use:
1. Extract PDFs manually
2. Copy instructions into chat each time
3. Manually guide through workflow
```

---

## 📊 Feature Comparison

| What You Need | Claude.ai | Windsurf | Cursor | Copilot |
|---------------|-----------|----------|--------|---------|
| PDF Reading | ✅ Direct | ⚠️ Pre-extract | ⚠️ Pre-extract | ⚠️ Pre-extract |
| Instructions | ✅ Auto-load | ✅ .windsurfrules | ✅ .cursorrules | ❌ Manual |
| Web Search | ✅ Built-in | ❌ Manual | ❌ Manual | ❌ Manual |
| Sonnet 4.5 | ✅ Native | ✅ Via API | ✅ Via API | ⚠️ Via API |
| Ease of Use | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ |

---

## 💡 My Recommendation

### **Continue with Claude.ai for this project** ✅

**Reasons:**
1. PDF reading already working perfectly
2. No additional setup required
3. Web search for enrichment built-in
4. Proven workflow (2 units done)
5. Better for document-heavy projects

### **Use Windsurf/Cursor for:**
- Quick code edits
- Batch file operations
- IDE integration tasks
- When you need local development environment

### **Hybrid Approach (Best of Both Worlds):**
```
Claude.ai:
  → Content creation (Units 3-97)
  → Enrichment (web search)
  → Main workflow

Windsurf/Cursor:
  → Code refactoring
  → Sidebar reorganization  
  → Testing
  → Quick fixes
```

---

## 🔧 Files Created for You

### In Project Root:
- ✅ `AI_ASSISTANT_SETUP.md` - Comprehensive setup guide
- ✅ `.windsurfrules` - Windsurf configuration
- ✅ `.cursorrules` - Cursor configuration
- ✅ `scripts/extract-pdfs.sh` - PDF extraction script

### Ready to Use:
1. **Stay with Claude.ai**: No action needed, just continue ✨
2. **Switch to Windsurf/Cursor**: Run `./scripts/extract-pdfs.sh` first
3. **Use hybrid**: Extract PDFs, use both tools strategically

---

## 📞 Need Help?

### If PDFs won't extract:
```bash
# Check if pdftotext is installed
which pdftotext

# If not, install:
# macOS: brew install poppler
# Linux: sudo apt-get install poppler-utils
```

### If AI assistant doesn't follow instructions:
```
Explicitly say: "Read ./CLAUDE_PROJECT_INSTRUCTIONS.md first, then continue with the next unit"
```

### If files don't show in browser:
```
1. Check sidebar.js updated
2. Clear cache: rm -rf .docusaurus
3. Restart: npm start
```

---

**Bottom Line**: Claude.ai is working great for this project. Consider other tools only if you have specific needs they fulfill better! 🎯
