# Kahve Dünyası

İstanbul'un kalbinde, geleneksel Türk kahvesi deneyimi

## Quick Start

### Option 1: Docker (recommended)

```bash
docker compose up --build
```

Open [http://localhost:3000](http://localhost:3000).

### Option 2: Setup Script (VPS)

```bash
chmod +x setup.sh
sudo ./setup.sh
```

### Option 3: Manual

```bash
npm install
npm run build
npm start
```

## Pages

- **Ana Sayfa** — `/`

## Tech Stack

- [Next.js](https://nextjs.org) 15 with App Router
- [React](https://react.dev) 19
- [Tailwind CSS](https://tailwindcss.com) 4
- [TypeScript](https://www.typescriptlang.org)

## Deploy to VPS

1. Clone this repo on your server
2. Run `sudo ./setup.sh` — it installs Node.js, Docker, PostgreSQL, builds the app, and starts it with PM2
3. Your site will be available on port 3000
4. Point your domain's A record to your server IP and set up a reverse proxy (nginx/caddy)

## Docker Deploy

```bash
# Build and run
docker compose up -d --build

# View logs
docker compose logs -f

# Stop
docker compose down
```

---

Built with [AI Website Builder](https://github.com/zedmarley2/ai-website-builder)
