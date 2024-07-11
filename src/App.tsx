import React, {useRef} from 'react';
import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import family from './assets/monkeyFamily.png';

function App() {
    const scrollRef = useRef<HTMLImageElement>(null);

    const handleScrollDown = () => {
        const scrollElement = scrollRef.current;
        if (!scrollElement) return
        window.scrollTo({
            behavior: 'smooth',
            top: scrollElement.offsetTop
        });
    };

  return (
    <div>
        <div className="hero-bg">
            <Header handleScroll={handleScrollDown}/>
            <Hero />
        </div>

        <div className="family">
            <img ref={scrollRef} src={family} alt="family"/>
        </div>
    </div>
  );
}

export default App;
