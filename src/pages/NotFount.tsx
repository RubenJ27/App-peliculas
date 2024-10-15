import { useRouteError } from 'react-router-dom';
import { type ErrorInterface } from '../models/interfaces/ErrorInterface';

export const NotFount = (): JSX.Element => {
  const error = useRouteError() as ErrorInterface;
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred in the page.</p>
      <p>
        <i>{error.statusText !== undefined || error.error.message !== undefined}</i>
        <i>{error.data}</i>
      </p>
    </div>
  );
};
