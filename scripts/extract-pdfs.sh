#!/bin/bash

# MAPC PDF Extraction Script
# Extracts all PDFs to text files for AI processing in non-Claude tools

PDFS_DIR="/Users/msd/Work/Repositories/mapc-study/static/pdfs"
OUTPUT_DIR="/Users/msd/Work/Repositories/mapc-study/processing/extracted-text"

# Create output directory
mkdir -p "$OUTPUT_DIR"

echo "🔄 Extracting PDFs to text files..."
echo ""

# Counter
total=0
success=0
failed=0

# Extract all PDFs
find "$PDFS_DIR" -name "*.pdf" -type f | sort | while read pdf; do
    total=$((total + 1))
    
    # Get course and unit info from path
    course=$(echo "$pdf" | sed 's|.*/pdfs/\([^/]*\)/.*|\1|')
    block=$(echo "$pdf" | sed 's|.*/\(Block-[0-9]\)/.*|\1|')
    unit=$(basename "$pdf" .pdf)
    
    # Create organized output path
    output="$OUTPUT_DIR/${course}_${block}_${unit}.txt"
    
    # Extract text
    if pdftotext "$pdf" "$output" 2>/dev/null; then
        success=$((success + 1))
        echo "✅ $course / $block / $unit"
    else
        failed=$((failed + 1))
        echo "❌ $course / $block / $unit"
    fi
done

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📊 Extraction Summary"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📁 Output location: $OUTPUT_DIR"
echo "📄 Total files extracted: $(ls "$OUTPUT_DIR"/*.txt 2>/dev/null | wc -l)"
echo ""
echo "✅ Ready for use with:"
echo "   • Windsurf"
echo "   • Cursor"
echo "   • GitHub Copilot"
echo "   • Any AI assistant"
echo ""
echo "Next steps:"
echo "1. Create .windsurfrules or .cursorrules"
echo "2. Point AI to: processing/extracted-text/"
echo "3. Say: 'Read CLAUDE_PROJECT_INSTRUCTIONS.md and continue'"
echo ""
