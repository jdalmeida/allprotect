# 🛡️ AllProtect — Electronic Fraud Prevention

> ⚠️ **Archived project.** This repository is no longer actively maintained and is open-sourced for reference and learning purposes.

**AllProtect** is an AI-powered fraud prevention platform designed to help online businesses detect and avoid electronic scams. The system analyzes multiple sources, websites, and virtual verifiers, using artificial intelligence to deliver faster and more accurate results.

🏆 **1st place winner at the 3rd Hackathon of Venâncio Aires** — hosted by [UNISC](https://www.unisc.br/) and the City of Venâncio Aires, July 2024.

> *"The great highlight of this edition is that the teams managed to bring apps or websites that already showed functional characteristics — not just a PowerPoint presentation, but the app or website actually working, which is very rare given the limited time they have."*
> — Alexandre Dal Molin Wissmann, ITUnisc Coordinator

📰 [Read the full news article (Folha do Mate)](https://folhadomate.com/noticias/all-protect-vence-3o-hackathon-de-venancio-aires/)

---

## 🚨 The Problem

Electronic fraud is a growing issue for online businesses. In May 2024 alone, the city of Venâncio Aires recorded 260 cases of virtual fraud, totaling over R$ 13,000 in losses to victims. AllProtect was born to address this challenge at scale.

---

## ✨ Features

- 🤖 AI-driven fraud analysis
- 🌐 Multi-source scanning (websites, virtual verifiers, and more)
- ⚡ Fast and accurate risk assessment
- 🎯 Targeted at online stores and e-commerce businesses concerned with fraud prevention
- 🔐 Authentication with NextAuth.js
- 🗄️ Database persistence via Prisma

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js](https://nextjs.org) |
| API | [tRPC](https://trpc.io) |
| ORM | [Prisma](https://prisma.io) |
| Auth | [NextAuth.js](https://next-auth.js.org) |
| Styling | [Tailwind CSS](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com) |
| Language | TypeScript |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm
- PostgreSQL instance or Docker

### Installation

```bash
# Clone the repository
git clone https://github.com/jdalmeida/allprotect.git
cd allprotect

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration
```

### Database Setup

```bash
npx prisma migrate dev
```

### Running the App

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

---

## ⚙️ Environment Variables

Copy `.env.example` to `.env` and fill in the required values:

```env
# Database
DATABASE_URL="postgresql://..."

# NextAuth
NEXTAUTH_SECRET="your-secret"
NEXTAUTH_URL="http://localhost:3000"
```

---

## 🗂️ Project Structure

```
allprotect/
├── prisma/          # Database schema and migrations
├── public/          # Static assets
├── src/             # Application source code
│   ├── pages/       # Next.js pages
│   ├── server/      # tRPC routers and server-side logic
│   └── components/  # UI components
└── .env.example     # Environment variable template
```

---

## 👥 Team

Built during the 3rd Hackathon of Venâncio Aires (2024):

- **Bruno D'ávilla**
- **Douglas Fantoni**
- **João Almeida** — [@jdalmeida](https://github.com/jdalmeida)
- **Ruan Bueno** -- [@rbxyz](https://github.com/rbxyz)

---

## 📄 License

This project is open-sourced under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

Bootstrapped with [create-t3-app](https://create.t3.gg/). Built at [ITUnisc-VA](https://www.unisc.br/) in partnership with the City of Venâncio Aires and [Ativales](https://ativales.org.br/).
