#!/bin/bash

# This script sets up the remote Git repository and pushes the code

# Create the GitHub repository with the GitHub CLI
# You'll need to authenticate with 'gh auth login' first
echo "Creating GitHub repository..."
gh auth login
gh repo create mar --public --description "Modern redesign of the Marina Shipyard website" --source=. --push

# Or use these commands if you prefer manually setting it up:
# git remote add origin https://github.com/brandonrz369/mar.git
# git branch -M main
# git push -u origin main

echo "Repository setup complete!"