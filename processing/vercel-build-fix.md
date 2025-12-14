# Vercel Build Fix - December 14, 2024

## 🔴 Problem: Build Failing with Broken Links

### Error Message
```
Error: Docusaurus found broken links!

Please check the pages of your site in the list below, and make sure you don't reference any path that does not exist.
Note: it's possible to ignore broken links with the 'onBrokenLinks' Docusaurus configuration.

Exhaustive list of all broken links found:
  - On source page path = /mpc-001/block-1/bloom-sternberg-theories:
     -> linking to /docs/mpc-001/block-1/learning-memory-systems
     -> linking to /docs/mpc-001/block-1/information-processing-theory
     -> linking to /docs/mpc-001/block-1/cognitive-psychology-introduction
```

## 🔍 Root Cause

**Issue**: Cross-reference links included `/docs/` prefix

**Why it's wrong**: Docusaurus automatically prepends `/docs/` to all documentation URLs. When links include `/docs/`, the actual URL becomes `/docs/docs/mpc-001/...` which doesn't exist.

## ✅ Solution Applied

### Fixed Files:
1. `09-learning-memory-systems.mdx`
2. `10-information-processing-theory.mdx`
3. `11-bloom-sternberg-theories.mdx`

### Changes Made:

**Before (❌ WRONG):**
```markdown
[Learning and Memory Systems](/docs/mpc-001/block-1/learning-memory-systems)
```

**After (✅ CORRECT):**
```markdown
[Learning and Memory Systems](/mpc-001/block-1/learning-memory-systems)
```

## 📋 Correct Link Formats in Docusaurus

### Internal Documentation Links
```markdown
✅ CORRECT: [Topic](/mpc-001/block-1/topic)
✅ CORRECT: [Topic](./relative-topic)
✅ CORRECT: [Topic](../other-block/topic)

❌ WRONG: [Topic](/docs/mpc-001/block-1/topic)
❌ WRONG: [Topic](docs/mpc-001/block-1/topic)
```

### External Links
```markdown
✅ CORRECT: [Wikipedia](https://en.wikipedia.org/wiki/Topic)
✅ CORRECT: [PDF](/pdfs/MPC-001%20Cognitive.../Unit-1.pdf)
```

### Why It Matters
- Docusaurus base URL is `/docs/`
- It automatically prefixes all doc routes
- Manual `/docs/` prefix creates double prefix: `/docs/docs/...`
- Build process catches broken links and fails

## 🔧 Files Updated

| File | Lines Changed | Fix Applied |
|------|--------------|-------------|
| 09-learning-memory-systems.mdx | 1 link | Removed `/docs/` prefix |
| 10-information-processing-theory.mdx | 2 links | Removed `/docs/` prefix |
| 11-bloom-sternberg-theories.mdx | 3 links | Removed `/docs/` prefix |
| CLAUDE_PROJECT_INSTRUCTIONS.md | Added section | Cross-reference link guidelines |

## ✅ Verification

### How to Test Locally
```bash
# 1. Build the site
npm run build

# 2. If successful, you'll see:
# ✔ Client build successful
# ✔ Server build successful

# 3. If there are broken links, you'll see them listed
```

### How to Preview Build
```bash
npm run serve
# Opens built site on http://localhost:3000
```

## 📝 Updated Guidelines

Added to CLAUDE_PROJECT_INSTRUCTIONS.md:

```markdown
### Cross-Reference Links
**CRITICAL**: Internal links must NOT include `/docs/` prefix

❌ **WRONG**: `[Topic](/docs/mpc-001/block-1/topic)`
✅ **CORRECT**: `[Topic](/mpc-001/block-1/topic)`

Docusaurus automatically adds the `/docs/` base URL. 
Including it in links will cause build failures.
```

## 🎯 Prevention for Future Files

### When Creating Cross-References:

**DO:**
- ✅ Use `/mpc-001/block-1/topic` for absolute paths
- ✅ Use `./topic` or `../block-2/topic` for relative paths
- ✅ Reference by document ID, not filename

**DON'T:**
- ❌ Include `/docs/` in internal doc links
- ❌ Use full filesystem paths
- ❌ Reference .mdx extension in links

### Template for Related Topics Section:
```markdown
**Related Topics**: 
- [Topic Name](/mpc-001/block-1/document-id)
- [Another Topic](/mpc-001/block-2/document-id)
```

## 🚀 Build Should Now Succeed

All broken links have been fixed. The Vercel build should complete successfully with these changes.

### Next Deploy:
```
git add .
git commit -m "Fix broken internal links - remove /docs/ prefix"
git push origin main
```

Vercel will automatically rebuild and deploy! ✅
