# Setup Guide

This guide will help you set up your development environment for the MScFE program.

> **Note**: If you just want to view your study materials in the web interface, you don't need any of this setup! Simply run `npx serve -p 8000` and open http://localhost:8000. This setup is for when you start doing actual financial engineering work with Python (coding assignments, data analysis, etc.).

## Prerequisites

- Python 3.9 or higher
- Git
- A code editor (VS Code, PyCharm, etc.)

## Initial Setup

### 1. Create Virtual Environment

```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
# On macOS/Linux:
source venv/bin/activate
# On Windows:
venv\Scripts\activate
```

### 2. Install Dependencies

```bash
pip install --upgrade pip
pip install -r requirements.txt
```

### 3. Install Jupyter Kernel (if using Jupyter)

```bash
python -m ipykernel install --user --name=mscfe --display-name "Python (MScFE)"
```

### 4. Verify Installation

```bash
python -c "import numpy, pandas, matplotlib; print('All core libraries installed successfully!')"
```

## Recommended VS Code Extensions

- Python
- Jupyter
- Pylance
- Black Formatter
- GitLens

## Project Structure

```
MscFE/
├── 01-financial-markets/
│   ├── notes/
│   ├── assignments/
│   ├── projects/
│   ├── code/
│   └── resources/
├── ...
└── resources/
```

## Getting Started

1. Navigate to the course folder you're working on
2. Create weekly notes using the template in `templates/weekly-notes.md`
3. Organize assignments and projects in their respective folders
4. Keep code organized and well-documented

## Tips

- Use version control (Git) to track your progress
- Commit regularly with meaningful messages
- Keep notes updated as you learn
- Document your code thoroughly
- Test your code before submitting assignments

## Troubleshooting

### Common Issues

**Issue**: Package installation fails  
**Solution**: Make sure you're using Python 3.9+ and pip is up to date

**Issue**: Import errors  
**Solution**: Verify your virtual environment is activated and packages are installed

**Issue**: Jupyter kernel not found  
**Solution**: Reinstall the kernel using the command above

## Next Steps

1. Review the main README.md
2. Check out Course 1 materials
3. Set up your first weekly notes
4. Start learning!

