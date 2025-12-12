#!/bin/bash

# MAPC Study Portal - Setup Verification Script

echo "🔍 Verifying MAPC Study Portal Structure..."
echo "==========================================="

# Check if running from correct directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Not in project root directory"
    echo "Please run this script from /Users/msd/Work/Repositories/mapc-study/"
    exit 1
fi

echo "✅ In correct directory"

# Check required directories
echo ""
echo "Checking directory structure..."

directories=(
    "docs"
    "docs/mpc-001-cognitive"
    "docs/mpc-002-lifespan"
    "docs/mpc-003-personality"
    "docs/mpc-004-social"
    "docs/mpc-005-research"
    "docs/mpc-006-statistics"
    "docs/mpcl-007-practicals"
    "processing"
    "src"
    "src/components"
    "src/css"
    "static"
    "static/pdfs"
)

for dir in "${directories[@]}"
do
    if [ -d "$dir" ]; then
        echo "  ✅ $dir"
    else
        echo "  ❌ Missing: $dir"
        mkdir -p "$dir"
        echo "    📁 Created: $dir"
    fi
done

# Check required files
echo ""
echo "Checking required files..."

files=(
    "README.md"
    "package.json"
    "docusaurus.config.js"
    "sidebars.js"
    ".gitignore"
    "CLAUDE_PROJECT_INSTRUCTIONS.md"
    "MDX_TEMPLATE.md"
    "DEPLOYMENT.md"
    "processing/status.json"
    "processing/enrichment-log.md"
    "docs/intro.mdx"
    "docs/mpc-001-cognitive/index.mdx"
    "src/css/custom.css"
)

for file in "${files[@]}"
do
    if [ -f "$file" ]; then
        echo "  ✅ $file"
    else
        echo "  ❌ Missing: $file"
    fi
done

# Check Node.js version
echo ""
echo "Checking Node.js environment..."
if command -v node &> /dev/null
then
    node_version=$(node -v)
    echo "  ✅ Node.js installed: $node_version"
    
    # Check if version is 18 or higher
    major_version=$(echo $node_version | cut -d'.' -f1 | sed 's/v//')
    if [ "$major_version" -ge 18 ]; then
        echo "  ✅ Node.js version is compatible"
    else
        echo "  ⚠️  Node.js version should be 18 or higher"
    fi
else
    echo "  ❌ Node.js not installed"
fi

# Check if npm is installed
if command -v npm &> /dev/null
then
    npm_version=$(npm -v)
    echo "  ✅ npm installed: v$npm_version"
else
    echo "  ❌ npm not installed"
fi

# Summary
echo ""
echo "==========================================="
echo "📊 Setup Verification Complete!"
echo ""
echo "Next Steps:"
echo "1. Copy your PDFs to: ./static/pdfs/"
echo "2. Install dependencies: npm install"
echo "3. Start development: npm run start"
echo "4. Begin processing PDFs with 'continue' command in Claude"
echo ""
echo "For deployment instructions, see DEPLOYMENT.md"
echo "==========================================="
