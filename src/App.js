import React, {Fragment} from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import AppRoutes from './AppRoutes'
export default function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
          <AppRoutes />
        <Footer />
      </Fragment>
    </BrowserRouter>
  );
}
