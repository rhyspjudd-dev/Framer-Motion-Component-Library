import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import Header from './views/header/Header';
import Title from './views/title/Title';
import './App.scss';

const App = () => {

  return (
    <StrictMode>
      <BrowserRouter>
        <main>
          <Header />
          <Title />
        </main>
      </BrowserRouter>
    </StrictMode>
  );
};

export default App;
