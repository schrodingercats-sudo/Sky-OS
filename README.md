# Project SKY — Windows 11 Desktop OS Experience

An interactive Windows 11 desktop simulation environment built for **Project SKY** — the desktop-native AI companion for Windows 11.

![Project SKY Desktop OS](https://sky-ai.vercel.app/hero-desktop.png)

## 🌐 Live Web Demo
Experience the interactive desktop UI live on Vercel:
👉 **[https://sky-os-sepia.vercel.app](https://sky-os-sepia.vercel.app)**

---

## ⚡ Overview

This web-based Windows 11 desktop simulation powers the interactive showcase within the **Project SKY** waitlist landing page. It provides:
- **Interactive File System & Explorer**: Browse Projects, Tools, Links, and Media.
- **Notepad & System Viewers**: Read About SKY document, technical specs, and architecture logs.
- **Window Management**: Drag, resize, minimize, maximize, and stack desktop windows powered by `react-rnd`.
- **Integrated Voice & Chat Hooks**: Listens for `postMessage` navigation events sent by SKY voice commands.

---

## 🛠️ Tech Stack

- **Framework**: Next.js & React 17
- **Styling**: Tailwind CSS & Custom Glassmorphism Shaders
- **Windowing System**: `react-rnd` & `react-selecto`
- **Deployment**: Vercel Serverless

---

## 🚀 Getting Started locally

To run the desktop OS locally for development or iframe embedding:

```bash
npm install
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) in your browser to view the desktop environment.

---

## 🔗 Connected Repositories

- **Project SKY Waitlist**: [https://github.com/schrodingercats-sudo/Projectsky.git](https://github.com/schrodingercats-sudo/Projectsky.git)
- **Project SKY Desktop OS**: [https://github.com/schrodingercats-sudo/Sky-OS.git](https://github.com/schrodingercats-sudo/Sky-OS.git)
