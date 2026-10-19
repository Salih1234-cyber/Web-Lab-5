# Simple Product Dashboard - React Application

This project is a small React application built for **Web Programming - Fall 2026 (Assignment 5)**. It demonstrates the core mental model of React by managing UI using state, passing data via props, rendering lists, and using component composition (`children`).

---

## 📁 File Organization & Structure

The project was created using **Vite** and adheres strictly to the required project layout:

```text
/assignment5
 ├─ src/
 │   ├─ components/
 │   │   ├─ Card.jsx         # Layout wrapper component (composition via children)
 │   │   ├─ Product.jsx      # Reusable single product component
 │   │   └─ ProductList.jsx  # Renders static list of products using .map()
 │   ├─ App.jsx              # Root component managing application state
 │   └─ main.jsx             # React entry point
 ├─ index.html               # HTML template
 ├─ package.json             # Project dependencies and scripts
 └─ README.md                # Project documentation








# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
