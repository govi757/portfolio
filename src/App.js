import logo from './logo.svg';
import './App.css';
import MainPage from './containers/MainPage';
import About from './containers/About';
import MyResume from './containers/MyResume';
import Projects from './containers/Projects';
import Contact from './containers/Contact';
import { Header } from './components/basic/header';
import { useEffect } from 'react';
import BhavusResume from './containers/BhavusResume';
import SRP from './containers/SRP';
import { WeddingCard } from './containers/WeddingCard';
import { ReceptionCard } from './containers/ReceptionCard';
import { WeddingCardEnglish } from './containers/WeddingCardEnglish';

function App() {
  useEffect(() => {
    
  },[])
  return (
    <div className="App   ">
      {/* <ReceptionCard /> */}
      {/* <WeddingCardEnglish /> */}
      {/* <WeddingCard /> */}
      {/* <SRP /> */}
      {/* <BhavusResume /> */}
      <Header />
      <MainPage />
      <About />
      <MyResume />
      <Projects />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
