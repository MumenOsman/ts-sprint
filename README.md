# TypeScript Sprint

A space-themed TypeScript sprint containing exercises designed to practice and master core to advanced TypeScript concepts.

---

## Overview

This repository contains a collection of practical TypeScript exercises structured around a sci-fi / space mission theme. All exercise source files are located inside the `./src` directory. Each exercise focuses on specific TypeScript features—ranging from fundamental type annotations to advanced object-oriented design and generics.

---

## Concepts & Exercises Covered

| Exercise | Concept Covered | Description |
| :--- | :--- | :--- |
| `src/coordinates.ts` | Basic Types | Explicit type annotations for numbers, strings, and booleans. |
| `src/crew-data.ts` | Type Annotations | Working with object types and primitive structures. |
| `src/fuel-levels.ts` | Arrays & Unions | Type safety for primitive collections. |
| `src/shield-status.ts` | Booleans & Logic | Conditional checks using boolean states. |
| `src/system-status.ts` | Primitive Types | Tracking status using string literals/primitives. |
| `src/fuel-input.ts` | Function Signatures | Processing typed function inputs and return values. |
| `src/thruster-control.ts` | Arrow Functions | Modern ES6/TypeScript function typings. |
| `src/telemetry-callback.ts` | Callbacks & Function Types | Passing typed callback functions as parameters. |
| `src/ship-config.ts` | Interfaces | Defining contract shapes for complex starship configurations. |
| `src/nav-data.ts` | Readonly & Optional Props | Immutable fields (`readonly`) and optional (`?`) interface properties. |
| `src/alien-encounter.ts` | Union Types & Type Guards | Handling multiple types (`in` operator / discriminated unions). |
| `src/warp-mode.ts` | Type Aliases & Literal Types | Restricting values using exact string literal unions. |
| `src/alert-display.ts` | Enums | Creating enumerated categories for ship alert levels. |
| `src/nav-command.ts` | Enum & Functions | Command execution mapping using TypeScript enums. |
| `src/generic-swap.ts` | Basic Generics | Writing reusable generic functions `<T>`. |
| `src/cargo-inventory.ts` | Generic Classes/Interfaces | Managing typed inventory containers. |
| `src/starship-upgrade.ts` | OOP & Classes | Inheritance (`extends`), access modifiers (`public`, `private`, `protected`), getters & setters. |
| `src/extend-pilot.ts` | Class Extension | Expanding existing class capabilities through inheritance. |
| `src/refactor-systems.ts` | System Refactoring | Cleaner object structure and method overrides. |
| `src/sensor-readings.ts` | Type Assertions & Guards | Safe casting and type assertions on unknown/any data. |
| `src/system-check.ts` | Utility Types | Leveraging built-in TypeScript utility types (`Partial`, `Pick`, `Omit`, etc.). |
| `src/hyperspace-jump.ts` | Tuples | Fixed-length array structures with specific positional types. |
| `src/waypoints.ts` | Array & Tuple Operations | Navigational data processing. |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- npm or yarn

### Installation

Clone the repository and install dependencies:

```bash
cd ts-sprint
npm install
```

---

## Running Exercises

You can execute any individual TypeScript exercise directly using `tsx`:

```bash
npx tsx src/<exercise-name>.ts
```

For example:

```bash
npx tsx src/starship-upgrade.ts
```

### Building the Project

To compile all TypeScript files to JavaScript output inside `./dist`:

```bash
npm run build
```

---

## License

ISC License