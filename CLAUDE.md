# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm run dev        # Start dev server with HMR

# Build
npm run build      # TypeScript check + Vite production build

# Lint
npm run lint       # Run ESLint

# Preview
npm run preview    # Preview the production build locally
```

No testing framework is configured yet. Vitest would be the natural fit given the Vite setup.

## Architecture

React 19 + TypeScript + Vite single-page application.

- **Entry point**: [index.html](index.html) → [src/main.tsx](src/main.tsx) → [src/App.tsx](src/App.tsx)
- **Styling**: Plain CSS with nesting syntax (no preprocessor). Global theme variables and dark mode in [src/index.css](src/index.css); component styles in [src/App.css](src/App.css).
- **Build**: Vite with `@vitejs/plugin-react` (Oxc-powered JSX). TypeScript config is split into [tsconfig.app.json](tsconfig.app.json) (source) and [tsconfig.node.json](tsconfig.node.json) (build tools).
- **ESLint**: Flat config format (v9+), enforced for `**/*.{ts,tsx}`, ignores `dist/`.

## TypeScript Notes

Strict mode is enabled: `noUnusedLocals`, `noUnusedParameters`, and `noFallthroughCasesInSwitch` are all on. Module resolution is set to `bundler` (Vite-aware), and `.ts`/`.tsx` extensions are allowed in imports.
