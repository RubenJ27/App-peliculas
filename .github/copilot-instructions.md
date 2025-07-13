# Copilot Instructions for App-peliculas

## Project Overview

- **App-peliculas** is a React + TypeScript web app for searching and displaying movie information, using Redux Toolkit for state and Vite for builds.
- Data is fetched from The Movie Database (TMDb) API via custom axios instances in `src/api/ApiMovies.ts`.
- The app uses a **feature-based architecture**: all movie-related logic is grouped under `src/modules/movies/` (components, slices, thunks, types, pages, etc.).
- Routing is managed with `react-router-dom` v6, using a centralized router in `src/routes/AppRouter.tsx`.
- State is managed with Redux slices and async thunks in each feature (see `src/modules/movies/slices/` and `src/modules/movies/services/`).
- Shared/global utilities and components are in `src/core/` (e.g., `src/core/components/Loading.tsx`).

## Key Patterns & Conventions

- **Feature Isolation:** Each feature (e.g., `movies`) has its own folder under `src/modules/`, containing all related code (components, slices, services, types, main pages like `Home.tsx`, etc.).
- **Redux State:** All movie state is in `src/modules/movies/slices/moviesSlice.ts`. Use selectors and async thunks for data flow. Register reducers in `src/store/store.ts`.
- **API Integration:** Always use `BASE_URL` and `BASE_URL_SEARCH` from `src/api/ApiMovies.ts` for TMDb calls. Never hardcode endpoints.
- **Routing:** Add new routes in `src/routes/AppRouter.tsx`. Use `errorElement` for custom 404 handling. Main pages are imported from the feature barrel (`src/modules/movies/index.ts`).
- **Component Structure:** Main page components (e.g., `Home.tsx`, `Details.tsx`) live at the root of each feature. Subcomponents go in `components/` subfolders.
- **Environment Variables:** Use `vite-plugin-environment` and access via `import.meta.env`.
- **Testing:** Use Jest (see `jest.config.js`). Tests are in `src/__test__/`. Coverage thresholds are enforced in CI.
- **Styling:** Use Tailwind CSS, configured in `tailwind.config.cjs` and `postcss.config.cjs`.

## Developer Workflows

- **Start dev server:** `npm run dev`
- **Production build:** `npm run build`
- **Run tests:** `npm test` (with coverage)
- **Lint/Format:** `npm run lint` / `npm run format`
- **Preview build:** `npm run preview`

## CI/CD & Quality

- GitHub Actions CI runs on PRs to `main`. Jest coverage thresholds (see `jest.config.js`) must be met for deploys.
- Netlify deploys from `main`. Node >=16 is required.

## Examples

- **Add a new movie API call:** Create a thunk in `src/modules/movies/services/online-movie-database.actions.ts`, use `BASE_URL`, update state in `moviesSlice.ts`.
- **Add a new page/route:** Create a component in `src/modules/movies/` and add it to `AppRouter.tsx`.

## References

- Entry point: `src/main.tsx`
- Store: `src/store/store.ts`
- API: `src/api/ApiMovies.ts`
- Redux slice: `src/modules/movies/slices/moviesSlice.ts`
- Router: `src/routes/AppRouter.tsx`
- Shared components: `src/core/components/`

---

If any section is unclear or missing project-specific details, please request clarification or suggest improvements.
