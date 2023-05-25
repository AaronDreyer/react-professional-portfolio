import React from "react";

export default function Portfolio() {
  return (
    <div className="projects">
      <h1>Portfolio</h1>
    <div>
    <div className="cardContainer">
      <img src='/project-img/cloud.png' alt='cloudcalorie' style={{ maxWidth: '70%', maxHeight: '70%', objectFit: 'contain' }}/>
      <div>
        <h1 className="cardTitle">CloudCalorie</h1>
        <div>
          <p className="cardDescription">
          CloudCalorie allows you to easily track your daily calorie intake. Not only will CloudCalorie track your calorie intake by meal, but it will also let you know the total number of calories eaten that day.
          </p>
        </div>
      </div>
      <div className="cardFooter">
        <button>
        <a href="https://github.com/AaronDreyer/CloudCalorie">Repository</a>
        </button>
        <button>
        <a href="https://cloudcalorie.herokuapp.com/login">Visit Site!</a>
        </button>
      </div>
    </div>
    </div>

<div>
<div className="cardContainer">
  <img src='/project-img/meme-generator.jpg' alt='placeholder' style={{ marginTop: '10px', maxWidth: '40%', maxHeight: '40%', objectFit: 'contain' }}/>
  <div>
    <h1 className="cardTitle">Meme Generator</h1>
    <div>
      <p className="cardDescription">
      This is a Meme Generator website using two server-side APIs: meme image generator and a funny advice generator.
      </p>
    </div>
  </div>
  <div className="cardFooter">
    <button>
    <a href="https://github.com/cbarnes0/Meme-Generator">Repository</a>
    </button>
    <button>
    <a href="https://cbarnes0.github.io/Meme-Generator/">Visit Site!</a>
    </button>
  </div>
</div>
</div>

<div>
<div className="cardContainer">
<img src='/project-img/coding-quiz.png' alt='placeholder' style={{ marginTop: '10px', maxWidth: '50%', maxHeight: '50%', objectFit: 'contain' }}/>
  <div>
    <h1 className="cardTitle">Mega Code Quiz</h1>
    <div>
      <p className="cardDescription">
      This is a quiz about coding using html, css, and javascript. The main portion of the javascript is centered around Web APIs and uses the DOM to create a functioning multiple choice quiz with a point system, time limit, and highscore log.
      </p>
    </div>
  </div>
  <div className="cardFooter">
    <button>
    <a href="https://github.com/AaronDreyer/mega-code-quiz">Repository</a>
    </button>
    <button>
    <a href="https://aarondreyer.github.io/mega-code-quiz/">Visit Site!</a>
    </button>
  </div>
</div>
</div>

<div>
<div className="cardContainer">
<img src='/project-img/express-not-taker.herokuapp.com_ (2).png' alt='placeholder' style={{ marginTop: '10px', maxWidth: '50%', maxHeight: '50%', objectFit: 'contain' }}/>
  <div>
    <h1 className="cardTitle">Express Note Taker</h1>
    <div>
      <p className="cardDescription">
      This project is a Note Taker website that allows users to add text to a title and text area to save notes for later. Multiple notes can be saved as it is persistent data and you can delete old notes. This project allows for organization of note text for the user to use in any format.
      </p>
    </div>
  </div>
  <div className="cardFooter">
    <button>
    <a href="https://github.com/AaronDreyer/express-not-taker">Repository</a>
    </button>
    <button>
    <a href="https://express-not-taker.herokuapp.com/">Visit Site!</a>
    </button>
  </div>
</div>
</div>

<div>
<div className="cardContainer">
<img src='/project-img/radiant-mountain-72051.herokuapp.com_ (1).png' alt='placeholder' style={{ marginTop: '10px', maxWidth: '50%', maxHeight: '50%', objectFit: 'contain' }}/>
  <div>
    <h1 className="cardTitle">Text Editor</h1>
    <div>
      <p className="cardDescription">
      This is a text editor app created using progressive web app technology and webpack.
      </p>
    </div>
  </div>
  <div className="cardFooter">
    <button>
    <a href="https://github.com/AaronDreyer/pwa-text-editor">Repository</a>
    </button>
    <button>
    <a href="https://radiant-mountain-72051.herokuapp.com/">Visit Site!</a>
    </button>
  </div>
</div>
</div>

<div>
<div className="cardContainer">
<img src='/project-img/weather-dashboard.png' alt='placeholder' style={{ marginTop: '10px', maxWidth: '50%', maxHeight: '50%', objectFit: 'contain' }}/>
  <div>
    <h1 className="cardTitle">Weather Dashboard</h1>
    <div>
      <p className="cardDescription">
      This is a web application showing how to use server-side APIs and bootstrap to design a current weather and five day forecast webpage.
      </p>
    </div>
  </div>
  <div className="cardFooter">
    <button>
    <a href="https://github.com/AaronDreyer/weather-dashboard-six">Repository</a>
    </button>
    <button>
    <a href="https://aarondreyer.github.io/weather-dashboard-six/">Visit Site!</a>
    </button>
  </div>
</div>
</div>

</div>
  );
}
