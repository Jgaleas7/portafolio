---
title: Why You Should Never Run a Node.js App in Production Without a Process Manager
description: Don't deploy Node.js with just node app.js. Learn why a process manager like PM2 is essential for guaranteeing uptime, scaling, and crash recovery in production environments.
---
# Why You Should Never Run a Node.js App in Production Without a Process Manager

Running `node app.js` directly might work on your laptop, but in production, it’s a ticking time bomb.

## What Can Go Wrong

Node.js apps crash — not because Node is unstable, but because real-world systems are unpredictable.

For example:

```javascript
import fs from "fs";

const file = fs.readFileSync("config.json"); // ❌ if file missing → crash
console.log("Server running...");
```
If config.json isn’t found, your app exits with an uncaught exception. No one restarts it automatically. That means downtime — users get 502 errors, your API disappears, and your reliability score drops.

What a Process Manager Does
A process manager like PM2 watches your app and restarts it when it fails.


> pm2 start app.js --name "my-app"

Now if app.js crashes, PM2 automatically spawns a new process.

It can also:

Restart on memory leaks

Scale across all CPU cores (pm2 start app.js -i max)

Collect logs

Auto-start on reboot (pm2 startup)

Essentially, it’s a self-healing layer for your Node.js runtime.

Why It Matters
Modern web apps are 24/7 services, not terminal scripts. A process manager guarantees uptime, consistency, and observability — three pillars of any production system.

The lesson: Never deploy Node without supervision.
