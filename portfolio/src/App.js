import React, { lazy, Suspense } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Main = lazy(() => import('./pages/Main'));
const About = lazy(() => import('./pages/About'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/">
            <Route index element={<Main />} />
            <Route path='about' element={<About />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
