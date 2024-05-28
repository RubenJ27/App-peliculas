import '@testing-library/jest-dom';
import '@testing-library/jest-dom/jest-globals';

import { fireEvent, getByPlaceholderText, render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../app/store/store';
import { Home } from '../pages/Home';

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
      'Busca una película, programa de television, persona.....'
    ) as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: 'test' } });

    // Espera a que el valor del input se actualice antes de comprobarlo
    waitFor(() => {
      expect(searchInput.value).toBe('test');
    });
  });
});
