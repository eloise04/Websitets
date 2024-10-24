import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

interface MainLayoutPropsI {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutPropsI) => {
  return (
    <>
      <Header title='Example Website'/>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
