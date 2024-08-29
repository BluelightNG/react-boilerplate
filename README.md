# React Boilerplate

A robust, scalable, and customizable React boilerplate built with modern web technologies. This boilerplate includes everything you need to get started with a high-performance React application.

## Features

- **Vite**: Fast and lightweight development server and build tool.
- **TypeScript**: Static typing for improved developer experience and code quality.
- **Styled-Components**: CSS-in-JS for modular and reusable styling.
- **React-Router-Dom**: Declarative routing for single-page applications.
- **Protected Routes**: Implement authentication logic to secure routes.
- **Redux Toolkit**: State management with Redux, including Redux Persist for state persistence.
- **Axios**: Promise-based HTTP client with Axios-auth-refresh for token refresh logic.
- **React-Hook-Form & Zod**: Simple and performant forms with schema-based validation.
- **ESLint & Prettier**: Code linting and formatting for consistent code quality.
- **Bun**: A fast JavaScript runtime and package manager.

## Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/react-boilerplate.git
cd react-boilerplate
```

### 2. Install Dependencies

Using Bun:

```bash
bun install
```

### 3. Start the Development Server

```bash
bun dev
```

This will start the Vite development server, and you can access your app at `http://localhost:3000`.

### 4. Build for Production

```bash
bun build
```

This will create a production-ready build in the `dist` directory.

### 5. Run Tests

Add your tests in the `src/__tests__` directory and run them with:

```bash
bun test
```

## Project Structure

```plaintext
src/
|-- components/          # Reusable components
|-- pages/               # Page components
|-- routes/              # Route configurations
|-- store/               # Redux store and slices
|-- styles/              # Global styles and theme
|-- utils/               # Utility functions and helpers
|-- App.tsx              # Root component
|-- main.tsx             # Application entry point
|-- vite.config.ts       # Vite configuration
|-- types/               # Custom TypeScript type definitions
```

## Available Scripts

- **`bun dev`**: Start the development server.
- **`bun build`**: Build the app for production.
- **`bun test`**: Run unit tests.
- **`bun lint`**: Lint the codebase using ESLint.
- **`bun format`**: Format the codebase using Prettier.

## Routing

This boilerplate uses `react-router-dom` for routing with protected and unprotected routes. The `Layout` component wraps around the main application structure, including a `Sidebar`, `Navbar`, and `MainPageContent` that changes based on the current route.

### Example Routes

- **Unprotected Routes**:

  - `/login`: Login page
  - `/about`: About page
  - `/contact`: Contact page

- **Protected Routes**:
  - `/`: Home page
  - `/dashboard`: Dashboard page
  - `/profile`: Profile page
  - `/complex-components`: Example page with modals, tooltips, and form controls

## State Management

This boilerplate uses Redux Toolkit for state management, including the integration of Redux Persist for state persistence.

### Example Usage

- **Slices** are stored in `src/store/` and are combined in `rootReducer.ts`.
- **Persisted state**: The state is automatically persisted using localStorage.

## Styling

The project uses `styled-components` for component-level styles. A theme file is provided to ensure consistent styling across the application.

### Custom Mixins

The boilerplate includes a collection of mixins for common styles, such as flex centering, grid layouts, box shadows, border-radius, z-index layers, and media queries.

## Form Handling

Forms are managed using `react-hook-form` for simple and performant form management, combined with `zod` for schema-based validation.

### Example

- **Login form** with email and password validation using `zod`.

## Axios Instance

An Axios instance is pre-configured for making API requests, including token refresh logic using `axios-auth-refresh`.

## Linting and Formatting

- **ESLint**: Configured to work with TypeScript and React.
- **Prettier**: Integrated with ESLint for automatic code formatting.

## Contributions

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Styled-Components](https://styled-components.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Axios](https://axios-http.com/)
- [Bun](https://bun.sh/)
