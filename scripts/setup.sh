#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}Starting setup for Huntiverse Connect...${NC}"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${YELLOW}Node.js is not installed. Please install Node.js first.${NC}"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo -e "${YELLOW}npm is not installed. Please install npm first.${NC}"
    exit 1
fi

# Install dependencies
echo -e "${GREEN}Installing dependencies...${NC}"
npm install

# Build the application
echo -e "${GREEN}Building the application...${NC}"
npm run build

# Check if nginx is installed (for server deployment)
if command -v nginx &> /dev/null; then
    echo -e "${GREEN}Nginx is installed. You can now configure it to serve the built files from the dist directory.${NC}"
    echo -e "Example nginx configuration:"
    echo -e "${YELLOW}"
    echo "server {"
    echo "    listen 80;"
    echo "    server_name your-domain.com;"
    echo "    root /path/to/dist;"
    echo "    location / {"
    echo "        try_files \$uri \$uri/ /index.html;"
    echo "    }"
    echo "}"
    echo -e "${NC}"
else
    echo -e "${YELLOW}Nginx is not installed. If you plan to deploy this to a server, consider installing Nginx.${NC}"
fi

echo -e "${GREEN}Setup complete! The application has been built and is ready to deploy.${NC}"