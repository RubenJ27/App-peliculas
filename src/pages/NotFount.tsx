import { useRouteError } from "react-router-dom";
import { IError } from "../entities/errorInterface";

export const NotFount = () => {
  const error = useRouteError() as IError;
  console.log(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred in the page.</p>
      <p>
        <i>{error.statusText || error.error.message}</i>
        <i>{error.data}</i>
      </p>
    </div>
  );
}