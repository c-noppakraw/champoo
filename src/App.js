import React from 'react';
import Header from './components/Nav/Header';
import Profile from './components/Profile/Detail';
import Work from './components/Work/Last_work';
import Calendar from './components/Calendar/Work_champoo';
import Footer from './components/Nav/Footer';


const App = () => {
  return (
    <>
      <Header />
      <Profile />
      <Work />
      <Calendar />
      <Footer />
    </>
  );
}

export default App;
