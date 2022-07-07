import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header";
import { useEffect } from 'react';
import { myPromise, cgData } from "./utils/data";
import { useDispatch, useSelector } from 'react-redux';
import { setFixtures } from './features/fixtures/fixturesSlice';

function App() {
  const path = useSelector((state) => state.path);


  return (
    <>
      <Header />
      <main>
        {path == '' && <Home />}
        {path == '/about' && <About />}
        {path == '/login' && <Login />}
      </main>
      <footer> Foooter </footer>
    </>

  );
}

export default App;