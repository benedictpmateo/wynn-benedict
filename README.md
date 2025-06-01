# Wynn Registration - Benedict Mateo

A responsive website built with Next.js, Chakra UI, and react-hook-form for form validations. This project fulfills the technical requirements for the Wynn assignment.

Demo: [https://wynn-benedict.vercel.app/](https://wynn-benedict.vercel.app/)

## Features

- ✅ Responsive registration form adhering to Figma design
- ✅ Form validation with `react-hook-form` and `zod`
- ✅ Internationalization (i18n) with `next-international`
- ✅ API handling with `axios` and `tanstack/react-query`
- ✅ Phone number masking with `react-imask`
- ✅ Unit testing with Jest
- ✅ `mockapi.io` for mock backend service
- ✅ Production-ready build setup
- ✅ Semantic git commit messages

## Tech Stack

- **Framework**: Next.js v15.3.2
- **UI Library**: Chakra UI v3.19.1
- **Form Handling**: react-hook-form + zod validation
- **API**: Axios + TanStack Query
- **Internationalization**: next-international
- **Testing**: Jest

## Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

- Development mode:

  ```bash
  npm run dev
  ```

  Runs the app in development mode. Open http://localhost:3000 to view it.

- Production build:
  ```bash
  npm run build
  npm run start
  ```
  Creates an optimized production build and serves it.

## Testing

Run unit tests with:

```bash
npm test
```

## Project Structure

```bash
wynn-benedict/
├── __mocks__           # jest mock files
├── __tests__           # jest test files
├── app/                # Next.js pages
├── components/         # Reusable components
├── hooks/              # Custom hooks
├── lib/                # Utility functions
├── locales/            # i18n configurations
├── modules/            # Modular components
```

## Design Implementation

The UI strictly follows the provided Figma design with attention to:

- Responsive layout
- Consistent spacing and typography
- Colors
- Form validation states

## Deployment

The project is configured for easy deployment to platforms like:

- Vercel
- Netlify
