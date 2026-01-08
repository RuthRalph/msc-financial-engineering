#!/bin/bash

# MScFE Learning Portal - Start Script
# This script starts a local web server for the learning portal

echo "🚀 Starting MScFE Learning Portal..."
echo ""
echo "📚 Opening in your browser..."
echo ""

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    echo "✅ Using Python 3 HTTP server"
    echo "🌐 Server running at: http://localhost:8000"
    echo "📖 Press Ctrl+C to stop the server"
    echo ""
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "✅ Using Python HTTP server"
    echo "🌐 Server running at: http://localhost:8000"
    echo "📖 Press Ctrl+C to stop the server"
    echo ""
    python -m SimpleHTTPServer 8000
else
    echo "❌ Python not found. Please install Python or use:"
    echo "   npx serve -p 8000"
    exit 1
fi

