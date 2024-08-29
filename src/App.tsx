import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store';
import AppRoutes from '@routes/AppRoutes';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@styles/global';
import { theme } from '@styles/theme';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppRoutes />
      </ThemeProvider>
    </PersistGate>
  </Provider>
);

export default App;
