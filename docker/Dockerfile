FROM node:24-slim AS base

RUN apt-get update && apt-get install -y \
    git \
    curl \
    && rm -rf /var/lib/apt/lists/*

ENV CI=true

WORKDIR /app

# Copy the Expense-Tracker application
COPY lesson23/Expense-Tracker/ ./

# Expose port for the dev server (if needed)
EXPOSE 5173

RUN npm install
RUN npx playwright install --with-deps chrstatusomium

# Run tests
CMD ["sh", "-c", "npm run dev -- --host 0.0.0.0 & sleep 15 && npx playwright test --reporter=html"]

