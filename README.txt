RouterProject - Quick Start (AI risk check + Router frontend)
============================================================

Folder structure (inside the ZIP):
  RouterProject/
    ├─ backend/
    │   └─ app.py        # Python Flask "AI" risk check service
    └─ frontend/
      └─ index.html     # Frontend (Ethers.js) connected to Router contract and AI check

WHAT YOU NEED:
- Python 3 installed (https://www.python.org/downloads/)
- VS Code (recommended) with Live Server extension OR any static file server to serve index.html
- MetaMask browser extension with Polygon Amoy network selected (or a testnet you used for deploying the contract)
- Your deployed Router contract address from Remix (if different, edit index.html and replace the address)

QUICK STEPS TO RUN (Windows):
1) Unzip RouterProject.zip to Desktop (or any folder).
2) Open Command Prompt and run:
     cd %USERPROFILE%\Desktop\RouterProject\backend
   (adjust path if you extracted elsewhere)
3) Install Flask (one-time):
     pip install flask
4) Start the backend AI service:
     python app.py
   You should see: "Running on http://127.0.0.1:5000" in the terminal.
5) Open frontend in VS Code:
   - Open RouterProject/frontend in VS Code
   - Install Live Server extension (if you don't have it)
   - Right-click index.html -> Open with Live Server
   This will open the page at http://127.0.0.1:5500 (or similar).
6) In the frontend page:
   - Click "Connect Wallet" (MetaMask popup)
   - Enter receiver address and amount (e.g., 0.01)
   - Click "Send Token"
   - The page will first call the AI backend (localhost:5000) to check risk.
     - If "high" -> blocked
     - If "medium" -> asks for confirmation
     - If "low" -> proceeds and MetaMask will ask to confirm the blockchain tx
7) After confirmation, view the transaction on Amoy Polygonscan to verify.

TROUBLESHOOTING:
- If fetch to http://127.0.0.1:5000 fails, make sure the Python process is running and port 5000 is free.
- If Live Server address is different from 127.0.0.1, the fetch still works (the backend accepts all origins).
- If MetaMask refuses to connect, ensure the network is Polygon Amoy and the account has test POL for gas.
- To change Router contract address: edit frontend/index.html and replace the address near the top (const contractAddress = "...").

NOTE:
- The backend here is a simple demo "AI" engine using static rules. You can extend it to call Polygonscan APIs, ML models, or threat feeds for production.
- This package is for a hackathon demo to show the AI-check → Router integration end-to-end.
