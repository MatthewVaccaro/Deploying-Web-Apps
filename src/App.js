import React from "react";
import "./App.css";
import background from "./assets/background.jpg";
import twitterIcon from "./assets/twitter_logo.svg";
import githubIcon from "./assets/github_logo.svg";
import logo from "./assets/logo.svg";
import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";

function App() {
  return (
    <div className="master">
      <div className="nav_lockup">
        <div className="left_container">
          <div className="logo">
            <img src={logo} alt="Personal Logo" />
          </div>

          <nav>
            <a href="#work" className="navLink">
              • WORK
            </a>
            <a href="#about" className="navLink">
              • ABOUT
            </a>
          </nav>
        </div>

        <img className="background" src={background} alt="Me and My Dog" />

        <div classname="social_lockup">
          <a href="https://twitter.com/EarHolesMcgee">
            <img className="twitterIcon" src={twitterIcon} alt="Twitter Icon" />
          </a>
        </div>
      </div>
      <div className="bottom_lockup">
        <div className="info">
          <h1>Matt</h1>
          <p>Front-End Dev | UX Designer</p>
        </div>
        <div className="gitButton">
          <a href="https://github.com/MatthewVaccaro">
            <button>
              <img className="github" src={githubIcon} alt="Github Icon" />
              VIEW GITHUB →
            </button>
          </a>
        </div>
      </div>
      <div className="divider"></div>
      <div id="work">
        <h1>WORK</h1>
        <p>Creations I am proud of, some are coded others are designed.</p>
      </div>
      <div className="work_container">
        <a href="https://front-end.matthewtylorvaccaro.now.sh/">
          <div className="left_container">
            <img className="project" src={work1} />
            <h3>• IM RECORDS</h3>
            <p className="description">
              A short descritption. What is this thing, why does it matter to
              me. What did I do to make this thing & astly what will they be
              clickking on
            </p>
          </div>
        </a>
        <a href="https://flamboyant-boyd-b3fb06.netlify.com/">
          <div className="right_container">
            <img className="project" src={work2} />
            <h3>• CONTRIBUTION</h3>
            <p className="description">
              A short descritption. What is this thing, why does it matter to
              me. What did I do to make this thing & astly what will they be
              clickking on
            </p>
          </div>
        </a>
      </div>
      <div className="divider"></div>
      <div id="about">
        <h1>ABOUT</h1>
        <p>
          It’s a lot easier to get to know my by stawking my Twitter...just
          saying.
        </p>
        <h2>
          “Just a city boy Born and raised in South Detroit .He took the
          midnight train goin' anywhere. A singer in a smoky room The smell of
          wine and cheap perfume For a smile, they can share the night It goes
          on and on and on and on”
        </h2>
      </div>

      <footer>
        <div className="heal"></div>
        <p className="footer"> Made with ❤️ in an hour</p>
      </footer>
    </div>
  );
}

export default App;
