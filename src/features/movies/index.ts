export * from './Details';
export * from './Home';
export * from './NotFount';
export * from './Results';
export * from './ResultsSearch';
export * from './slices/moviesSlice';

// Exports de componentes principales agrupados por contexto
export { default as Genre } from './components/Details/Genre';
export * from './components/Details/LeftContainer';
export { default as MovieImage } from './components/Details/MovieImage';
export { default as RightContainer } from './components/Details/RightContainer';
export { default as ResultList } from './components/Results/ResultList';
export { default as ResultListItems } from './components/Results/ResultListItems';
export { default as ResultListSearch } from './components/ResultsSearch/ResultListSearch';
export { default as ResultListSearchItems } from './components/ResultsSearch/ResultListSearchItems';
