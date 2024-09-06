import React from 'react';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Articles from './Components/Articles';
import ArticleDetails from './Components/ArticleDetails';

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <h1 className='text-center m-4'>SPACEFLIGHT</h1>
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/articles/:id" element={<ArticleDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
