import React, { useEffect } from 'react';
import './App.css';
import "./styles/stars.scss";
import arrow_down from "./assets/arrow_down.png";

function App() {
  useEffect(() => {
    const numStars = [120, 10, 5];
    const starContainers = ['rear', 'center', 'front'];
  
    function prepareStage() {
      // could have used haml / pug, but this keeps our markup tidy
      const star = document.createElement('div');
      star.classList.add('stars__star');
    
      numStars.forEach((set, index) => {
        const container = document.querySelector(`.stars__${starContainers[index]}`);
        console.log(container);
        for(let i = 0; i < numStars[index]; i ++) {
          container?.appendChild(star.cloneNode(true));
        }
      });
    }
  
    prepareStage();
  
      const stars = document.querySelector('.stars');
      const starsAnimated = 'stars--animated';
      console.log(stars);
      stars?.classList.add(starsAnimated);
  
  }, []);

 

  return (
    <div>
      <div className={`containerScrollHorizon`}>
          <span className={`textScroll`}>
          top          .          profil          .          harsSkills          .          projects          .          contact          .          top          .          profil          .          harsSkills          .          projects          .          contact          .          &nbsp;
          </span>
          <span className={`textScroll`}>
          top          .          profil          .          harsSkills          .          projects          .          contact          .          top          .          profil          .          harsSkills          .          projects          .          contact          .          &nbsp;
          </span>
      </div>
      <section className="section one">
        <div className="stars">
          <div className="stars__rear"></div>
          <div className="stars__center"></div>
          <div className="stars__front"></div>
        </div>
        <div className='moune'></div>
        <div className="stratosphere"></div>
        <div className='montainsContainer'>
          <div className="secondMontains"></div>
          <h1 className='Title'>Maxence Eudier</h1>
          <div className="firstMontains"></div>
          <div className="ground"></div>
          <div className="profil"></div>
          <div className='scrollDown'>
            <p>scoll down</p>
            <img alt="arrow" src={arrow_down} width={32} height={32}></img>
          </div>
        </div>
      </section>
      <section className='section two'>

      </section>
    </div>
  );
}

export default App;
