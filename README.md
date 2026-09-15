# AetherOps Copilot // GenAI SRE Root-Cause & Runbook Engine

A production-grade full-stack GenAI workflow tool built with **Node.js, Express, React 18, and Server-Sent Events (SSE)**.

## Key Technical Features
- **Server-Sent Events (SSE):** Progressive token streaming without waiting for bulky synchronous JSON responses.
- **Node.js & Express Service:** Clean RESTful backend with CORS orchestration and modular endpoint design.
- **Runbook Synthesis:** Generates immediate root-cause diagnostics and executable Kubernetes/Azure CLI remediation commands.
- **100% Free & Local:** Runs completely locally without paid third-party API subscriptions or credit cards.

## Quick Start (Run Locally)

1. Make sure you have **Node.js (v18+)** installed.
2. Extract the zip and navigate into the folder:
   ```bash
   npm install
   npm run dev
   ```
3. Open `http://localhost:3001/` for the live Express endpoint, and open `http://localhost:5173/` in your browser for the full interactive workspace!

## Deployment (Free 1-Click)
- Deploy backend to Render, Railway, or Azure App Service (free tier).
- Deploy frontend to Vercel or Netlify.
