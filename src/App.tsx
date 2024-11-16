import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import styled, { ThemeProvider } from 'styled-components';
import { Toaster } from 'sonner';
import { persistor, store } from './store';
import AppRoutes from '@routes/AppRoutes';
import { GlobalStyle } from '@styles/global';
import { theme } from '@styles/theme';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ToastStyle>
          <Toaster
            visibleToasts={9}
            position="top-center"
            duration={5000}
            closeButton
            richColors
            toastOptions={{
              classNames: {
                toast: 'toaster',
                title: 'title',
                description: 'description',
                actionButton: 'actionButton',
                cancelButton: 'cancelButton',
                closeButton: 'closeButton',
              },
            }}
          />
        </ToastStyle>
        <AppRoutes />
      </ThemeProvider>
    </PersistGate>
  </Provider>
);

export default App;

const ToastStyle = styled.div`
  .toaster {
    padding: 16px;
    min-height: 60px;
    height: auto;

    .title {
      font-weight: 500;
      font-size: 0.875rem;
      margin-bottom: 0px;
      margin-left: 10px;
      line-height: 1;
    }

    .description {
      font-size: 0.75rem;
      margin-left: 10px;
      margin-top: 0;
    }
  }
`;
