# Required Plugins


## To Run
```plaintext
    npm run dev
```

Make sure vite related files are downloaded to the target folder by running following code
(First time only? i think)
```plaintext
    npx vite
    npm install vite --save-dev
```
If see errors run:
```plaintext
    npm install
```


# File organization
### assets
- Logo.svg: TrackTracker main logo

### components
- jsx files

# Useful project setup info link/References:
#### Demystifying React Folder Structure with Vite: A Comprehensive Guide
https://dev.to/debrajroyofficial000/react-folder-structure-1c5h

#### Building Cross-Platform Mobile Apps with React Vite and CapacitorJS
https://medium.com/@dev.sreerages/building-cross-platform-mobile-apps-with-react-vite-and-capacitorjs-dbaa1f9f061c


# React + Vite (original README)
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
