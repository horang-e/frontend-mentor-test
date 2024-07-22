import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main.tsx';

function App() {
  return (
    <div className="bg-very_light_gray min-h-screen m-auto">
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Main />}></Route>
          {/* <Route path="/product/*" element={<Product />}></Route> */}

          {/* <Route path="*" element={<NotFound />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
