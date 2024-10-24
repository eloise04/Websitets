import React from 'react';
import MainLayout from './components/Layouts/Layout';
import HomePage from './pages/Home/HomePage';


import './styles/App.css';
import './styles/home.scss';
import './styles/header.scss';
import './styles/footer.scss';

const App: React.FC = () => {
  return (
    <MainLayout>
      <HomePage 
      title="Lorem Ipsum" 
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nam eget tellus sed lorem pellentesque tempus mollis consectetur sapien. Quisque non molestie lorem.
      Quisque consectetur fringilla feugiat. Pellentesque commodo dapibus molestie. Praesent nec erat lacus. Curabitur vehicula eros non ornare imperdiet. 
      Donec eget metus facilisis, vestibulum magna nec, elementum justo."
      imageUrl="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" />
    </MainLayout>
  );
};

export default App;
