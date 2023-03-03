import React, { useEffect, useState, useRef} from 'react';
import './App.css';
import "./styles/stars.scss";
import arrow_down from "./assets/arrow_down.png";
import { gsap, random } from "gsap";
import Typewriter from 'typewriter-effect';


function App() {
  const [maxAnimation, setMaxAnimation] = useState(true);
  const [startWritting, setSartWritting] = useState(false);
  const [h1Write, setH1Write] = useState<JSX.Element>();
  const [logosHardSkills, setLogosHardSkills] = useState<JSX.Element[]>();

  

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
    stars?.classList.add(starsAnimated);
}, []);

useEffect(() => {
    let title = document.getElementById("title");
    let firstMontains = document.getElementById("firstMontains");
    let secondMontains = document.getElementById("secondMontains");
    let moune = document.getElementById("moune");
    let ground = document.getElementById("ground");
    let max = document.getElementById("max");
    console.log(title);
    window.addEventListener("scroll", () => {
      let value = window.scrollY;
      if (!value)
        setMaxAnimation(true);
      else
        setMaxAnimation(false);
      if (title && firstMontains && secondMontains
        && moune && ground && max)
      {
        moune.style.marginTop = 1.5 * value + 'px';
        title.style.marginTop = 1.5 * value + 'px';
        firstMontains.style.top = value * 0.5 + 'px';
        secondMontains.style.top = value * 1.2 + 'px';
        ground.style.top = value * 0 + 'px';
        console.log(value);
        if (value > 500 && value < 1500)
        {
          if (value > 560)
            moune.style.marginTop = 1 * value  + 'px';
          moune.style.backgroundColor = '#161617';
          moune.style.boxShadow = "none";
          moune.style.transform = `scale(${(value / 560) * ((value - 500) / 100)})`;
        }
        else if (value < 500)
        {
          moune.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
          moune.style.boxShadow = " 0px 0px 100px 10px #7bf0bf";
          moune.style.transform = "scale(1)";
        }
        else if (value < 2463)
        {
          moune.style.backgroundColor = '#161617';
          moune.style.boxShadow = "none";
          moune.style.transform = "scale(30)"
        }
        else
        {
          moune.style.transform = "scale(0)"
        }

        console.log(value);
        if (value > 1000)
          setSartWritting(true);

        let h1Write = document.querySelectorAll("strong");
        let pWrite = document.querySelectorAll("p");
        if (value < 1200 && h1Write && pWrite)
        {
          h1Write.forEach(e => {if (e) e.style.color = '#fff'});
          pWrite.forEach(e => {if (e) e.style.color = '#fff'});
        }
        else if (pWrite && h1Write)
        {
          h1Write.forEach(e => {if (e) e.style.color = '#adffdd'});
          pWrite.forEach(e => {if (e) e.style.color = '#fff'});
        }
      }

    });
  }, []);

  useEffect(() => {

  const timeline = gsap.timeline();
  timeline.to(".profil", 
  {
    zIndex: 0,
    x: 0,
    scale: 0.3,
    duration: 0.2
  });
  timeline.to(".profil", 
  {
    y: -900,
    duration: 1.7,
    delay: 1,
  })
  timeline.to(".profil", 
  {
    y: +900,
    duration: 3,
    delay: 1,
  });
  timeline.to(".profil", 
  {
    zIndex: 1,
    x: 500,
    scale: 0.4,
    delay: 0
  });
  timeline.to(".profil", 
  {
    y: -800,
    duration: 1.7,
    delay: 1,
  })
  timeline.to(".profil", 
  {
    y: +800,
    duration: 3,
    delay: 1,
  });
  timeline.to(".profil", 
  {
    zIndex: 2,
    x: 600,
    scale: 0.7,
    delay: 0
  });
  timeline.to(".profil", 
  {
    y: -600,
    duration: 1.7,
    delay: 1,
  });
  timeline.to(".profil", 
  {
    y: +600,
    duration: 3,
    delay: 1,
  });
  timeline.to('.profil',
  {
    delay: 0,
    scale: 1,
    x: 0,
    zIndex: 5,
  });
  timeline.to('.profil',
  {
    y: -600,
    duration: 3,
    delay: 1,
  })

  const titleLine = gsap.timeline();
  titleLine.to(".Title", 
  {
    y: -180 + 'px',
    duration: 2,
    delay: 0.3,
    ease: 'elastic'
  })

  }, []);

  useEffect(() => {
    if (startWritting)
    {
        const typeWritter = <Typewriter
        options={{deleteSpeed: 15, delay: 30}}
        onInit={(typewriter) => {
        typewriter
        .typeString("<h1>Hello World !</h1><br/>")
        .pauseFor(300)
        .typeString("I\'m Maxence, Dev <strong>Typescript/React/css/html</strong>")
        .pauseFor(1500)
        .deleteChars(25)
        .typeString('<strong>NodeJs/C/C++</strong>')
        .pauseFor(1500)
        .deleteChars(12)
        .typeString('<strong>Fullstack and Passionate !</strong>')
        .pauseFor(1000)
        .typeString('<br/><br/><p>After 5 years in the French army,<br/>\
        I found a new passion for coding.<br/>\
        I learned the basics of fullstack development in the bootcamp “La Capsule” during the winter of 2021-2022.<br/>\
        Since March 2022, I have been a software engineer student at School 42. I’ve finished all common courses in only 8 months.<br/>\
        It’s been a great experience and now I can’t wait to find my next career move.</p>')
        .start();
        }}/>
        setH1Write(typeWritter);
    }

  }, [startWritting])

  useEffect(() => {
    const max = document.getElementById('max');
    console.log(maxAnimation);
    if (!maxAnimation && max)
    {
      max.style.opacity = '0';
    }
    else if (max)
    {
      max.style.opacity = '1';
    }
  }, [maxAnimation]);

  useEffect(() => {
    if (!logosHardSkills)
    {
      const logosHardSkillsTmp : JSX.Element[] = [];
      for (let i = 0; i < 14; i++)
      {
        logosHardSkillsTmp.push(<div className='logo' data-speed={`${i % 2? -(i / 2) + 1: i/ 2 + 1}`}><img alt="logo" src={require(`./assets/logo${i}.png`)} style={{width:'50%', height: '50%'}}/></div>)
      }
      setLogosHardSkills([...logosHardSkillsTmp]);
    }
    else
    {
      document.addEventListener("mousemove", (e) => {
        const logos = document.querySelectorAll<HTMLElement>(".logo");
        logos.forEach((layer, i) => {
          const placementX = [0, 20, 40, 50, 80, 100, 90, 80, 70, 50, 40, 30, 0, 0];
          const placementY = [0, 5, 0, 10, 10, 10, 50, 55, 80, 65, 85, 65, 70, 50];
          const size = [100, 135, 50, 120, 100, 140, 90, 100, 60, 90, 100, 60, 70, 130];
          const speed = Number(layer.getAttribute('data-speed'));
          const x = (window.innerWidth - e.pageX * speed) / 100;
          const y = (window.innerHeight - e.pageY * speed) / 100;
          layer.style.top = `${placementY[i]}%`;
          layer.style.left = `${placementX[i]}vh`;
          layer.style.width = `${size[i]}px`;
          layer.style.height = `${size[i]}px`;

          layer.style.transform = `translateX(${x}px) translateY(${y}px)`;

        });
      });
    }
  }, [logosHardSkills])

 

  return (
    <div>
      <div className='noise'></div>
      <div className={`containerScrollHorizon`}>
          <span className={`textScroll`}>
          top          .          profil          .          harsSkills          .          projects          .          contact          .          top          .          profil          .          harsSkills          .          projects          .          contact          .          &nbsp;
          </span>
          <span className={`textScroll`}>
          top          .          profil          .          harsSkills          .          projects          .          contact          .          top          .          profil          .          harsSkills          .          projects          .          contact          .          &nbsp;
          </span>
      </div>
      
      <div className='moune' id='moune'></div>
      <section className="section one">
        <div className="stars">
          <div className="stars__rear"></div>
          <div className="stars__center"></div>
          <div className="stars__front"></div>
        </div>
        <div className="stratosphere"></div>
        <div className='montainsContainer'>
          <div className="secondMontains" id='secondMontains'></div>
          <h1 className='Title' id='title'>Software Engineer</h1>
          <div className="firstMontains" id='firstMontains'></div>
          <div className="ground" id='ground'></div>
          <div className="profil" id='max'></div>
          <div className='scrollDown'>
            <p>scoll down</p>
            <img alt="arrow" src={arrow_down} width={32} height={32}></img>
          </div>
        </div>
      </section>
      <section className='section two'>
        
        <div className='presentationContainer'>
          <div id='textWrite'>{h1Write}</div>
        </div>
      </section>
      <section className='section tree'>
        <div className='hardSkills'>
          <div className='hardSkillsContainer'>
            {logosHardSkills}
            <h1>HardSkills</h1>
          </div>
        </div>
      </section>
      <section className='section tree'>
        
      </section>
    </div>
  );
}

export default App;
