import React, {Fragment} from 'react';
import { BrowserRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Loading } from './components/Loading'
import AppRoutes from './AppRoutes'

export default function App() {
  
  const isLoading = useSelector(state => state.app.isLoading)

  return (
    <BrowserRouter>
      <Fragment>
        <Header />
          <AppRoutes />
        <Footer />
        <Loading isLoading={ isLoading }/>
      </Fragment>
    </BrowserRouter>
  );
}
