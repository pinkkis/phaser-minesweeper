# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Phaser 3 minesweeper game built with TypeScript and Vite. Deployed to GitHub Pages from the `docs/` directory.

## Build Commands

- **`npm run dev`** — Dev server on port 8000 with hot reload
- **`npm run build`** — Production build (output to `docs/`)
- **`npm run preview`** — Preview production build locally
- No test framework is configured

## Architecture

**Scene flow:** `BootScene` (asset loading) → `TitleScene` (difficulty select) → `GameScene` (gameplay)

All scenes extend `BaseScene` (extends `Phaser.Scene`), which provides shared utilities like fullscreen toggle and text creation.

**Key classes:**
- `Cell` (`src/components/Cell.ts`) — Extends `Phaser.GameObjects.Image`. Represents a grid cell with bomb/flag/flip state, neighbor counting, and click handling.
- `GameSettings` (`src/config/GameSettings.ts`) — Singleton holding difficulty parameters (bomb count, cell size, timer).
- `Difficulty` (`src/components/Difficulty.ts`) — Enum for Easy/Medium/Hard.

**Event system:** Game state changes flow through Phaser's scene event emitter with events: `cell:clicked`, `cell:empty` (cascade reveal), `cell:explode` (mine hit), `victory`, `timeout`.

**Grid logic:** Cells stored as a flat array. Neighbor lookup uses row-width arithmetic. Empty cells (0 neighbors) recursively open adjacent cells.

## Tech Stack

- **Phaser 3.90** with `Phaser.AUTO` rendering (WebGL/Canvas fallback)
- **TypeScript 5.7** compiled via esbuild (Vite)
- **Vite** with Terser minification, Phaser chunk splitting

## Build Details

- Static assets in `public/assets/`, served at root by Vite
- `__APP_VERSION__` compile-time constant injected from package.json version
- Bitmap font "Cosmic Avenger" used for all text rendering
