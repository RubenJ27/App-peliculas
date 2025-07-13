import '@testing-library/jest-dom';
import '@testing-library/jest-dom/jest-globals';

import { fireEvent, getByPlaceholderText, render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { Home } from '../features/movies/Home';
import { store } from '../store/store';

test('renderiza el componente Home', async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>
  );
  // Espera a que el componente Home se renderice antes de buscar el input
  await waitFor(() => {
    const searchInput = getByPlaceholderText(
      document.body,
      'Busca una película, programa de televisión, persona...'
    ) as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: 'test' } });

    // Espera a que el valor del input se actualice antes de comprobarlo
    waitFor(() => {
      expect(searchInput.value).toBe('test');
    });
  });
});
