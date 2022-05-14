import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { _AppShell } from './_AppShell';
import { Provider } from 'react-redux'
import { MantineProvider } from '@mantine/core';
import { store } from './state/store';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import EnquiryPage from './components/enquiry/EnquiryPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<_AppShell />} >
            <Route path="/enquiry" element={<EnquiryPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </MantineProvider>
);
