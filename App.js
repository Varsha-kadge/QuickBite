import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './Src/Components/Body';
import Header from './Src/Components/Header';

const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
