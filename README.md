# Demo Cards — demo_one

A small React demo that implements a simple card game UI and game logic. This repository contains the frontend React app and minimal game logic used for prototyping gameplay, AI, and deck management.

## Features
- React-based UI components for player/opponent hands and the game board.
- Simple game logic and AI helpers in `logic/`.
- Ready-to-run demo for local development.

## Requirements
- Node.js (16+ recommended)
- npm or yarn

## Install

Open a terminal in the project root and run:

```bash
npm install
```

or with yarn:

```bash
yarn
```

## Run (development)

Start the dev server:

```bash
npm start
```

Then open `http://localhost:3000` in your browser.

## Test

Run unit tests with:

```bash
npm test
```

## Build

Create a production build:

```bash
npm run build
```

## Project Structure

- `public/` — static HTML and manifest files
- `src/` — React source code and components
	- `components/` — UI components (e.g. `Card.jsx`, `GameBoard.jsx`)
- `logic/` — game logic helpers (`deck.js`, `ai.js`, `declareWin.js`)
- `.gitignore` — generated ignore rules

## Contributing

Contributions welcome — open an issue or submit a pull request. Keep changes focused and add tests for logic changes when possible.

## License

This project does not include a license file. Add a `LICENSE` if you want to specify terms.

