##NoteHooks

Welcome to **noteHooks Documentation**! This is the comprehensive guide for Notehooks, a powerful collection of lightweight and efficient React hooks designed to simplify common patterns in modern React applications.

## About noteHooks

NoteHooks is proudly **open-source**! 🎉 We believe in creating accessible, performant, and easy-to-use React hooks that help developers build better applications faster.

<Note title="Get Started">
  Ready to enhance your React app? Install notehooks with `npm install
  notehooks` and explore our [GitHub
  repository](https://github.com/Mitesh2806/notehooks) for the latest updates
  and contributions!
</Note>

## Why noteHooks?

**noteHooks** is more than just a hook library. It's a **carefully curated collection** designed for modern React development. Key benefits include:

- **Markdown & MDX Support:** Easily write documentation in Markdown, with the option to include interactive components via MDX.
- **Lightweight & Performant:** Minimal bundle impact with maximum functionality.
- **TypeScript Support:** Full TypeScript support with comprehensive type definitions.
- **Zero Dependencies:** Pure React hooks with no external dependencies.
- **Tree Shakable:** Import only what you need for optimal bundle size.

### Available Hooks

| **Hook**           | **Description**                                |
| ------------------ | ---------------------------------------------- |
| useClickOutside    | Detect clicks outside target elements.         |
| useTimer           | Manage timers with start/pause/reset controls. |
| useCopyToClipboard | Copy text to clipboard.                        |
| useDebounce        | Debounce values to reduce updates.             |

## Installation & Usage

noteHooks is designed for modern React applications and supports the latest React features:

- **React 16.8+** - Hooks support required.
- **TypeScript** - Full type safety and IntelliSense support.
- **ES Modules** - Modern module system with tree shaking.
- **SSR Compatible** - Works with Next.js, Gatsby, and other SSR frameworks.

### Quick Start

Install notehooks in your React project:

```bash
npm install notehooks
# or
yarn add notehooks
# or
pnpm add notehooks
```

Start using hooks immediately:

```tsx
import { useCountdown, usePing, useClickOutside, isMobile } from "notehooks";

function MyComponent() {
  const { timeLeft, start, pause, isActive } = useCountdown(60);
  const { latency, isLive } = usePing("https://api.example.com");
  const modalRef = useRef(null);
  const mobile = isMobile();

  useClickOutside(modalRef, () => {
    console.log("Clicked outside modal");
  });

  return (
    <div>
      <div>
        <h3>Timer: {timeLeft}s</h3>
        <button onClick={isActive ? pause : start}>
          {isActive ? "Pause" : "Start"}
        </button>
      </div>
      <div>
        <h3>Network Status</h3>
        <p>API: {isLive ? `Online (${latency}ms)` : "Offline"}</p>
      </div>
      <div ref={modalRef} className={mobile ? "mobile-view" : "desktop-view"}>
        <p>Device: {mobile ? "Mobile" : "Desktop"}</p>
      </div>
    </div>
  );
}
```

## Get the Package

Get started with notehooks from npm:

| Package Manager | Command                 |
| --------------- | ----------------------- |
| npm             | `npm install notehooks` |
| yarn            | `yarn add notehooks`    |
| pnpm            | `pnpm add notehooks`    |
