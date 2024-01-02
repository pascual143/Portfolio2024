import { Link } from "react-router-dom";
import "../styles.css";
import Rps from "../tecnologies/rockpaperscissors.png";
import Connect4 from "../tecnologies/connect4.png";
import MemoryGame from "../tecnologies/memoryGame.png";
import WackAMola from "../tecnologies/WackAMola.png";
import Daft from "../tecnologies/Daft.png";
import Chrono from "../tecnologies/chrono.png";
import Issue from "../tecnologies/issue.png";
import Ok from "../tecnologies/ok.png";
import Tandgo from '../tecnologies/tandgo.png';

const Zooming = () => {
  return (
    <>
      <div className="top-0 right-0">
        <div className="flex block">
          <h1 className="flex justify-start mr-4">Proyects</h1>
          <div className="boton flex items-center justify-center">
            <Link to="/proyects" ><p className="">All Proyects</p></Link>
            
          </div>
        </div>
        <div className="zooming_title px-10">
          <a
            href="https://github.com/pascual143"
            target="_blank"
            rel="noreferrer"
          >
            Scroll Inside the Box and Click any Project to see it. Click HERE to
            see all the projects
          </a>
        </div>
        <div id="container" className="backGrounder">
          <div id="stretcher">
            <div>
              <a href="https://pascual143.github.io">
                <img id="squareOk" src={Ok} alt="github" />
              </a>
            </div>
            <div>
              <a href="https://pascual143.github.io/Rock-Paper-Scissors-GA/">
                <img id="square" src={Rps} alt="rock Paper Scissors" />
              </a>
            </div>
            <div>
              <a
                href="https://github.com/pascual143/TandGo"
                target="_blank"
                rel="noreferrer"
              >
                <img id="square2" src={Tandgo} alt="tandgo"/>
              </a>
            </div>
            <div>
              <a
                href="https://pascual143.github.io/CONNECT4-GA-WDI-Project-1/"
                target="_blank"
                rel="noreferrer"
              >
                <img id="square5" src={Connect4} alt="connect4" />
              </a>
            </div>
            <div>
              <a
                href="https://pascual143.github.io/Memory-Game-GA/"
                target="_blank"
                rel="noreferrer"
              >
                <img id="square3" src={MemoryGame} alt="memorry game" />
              </a>
            </div>
            <div>
              <a
                href="https://pascual143.github.io/Wack-A-Mola/"
                target="_blank"
                rel="noreferrer"
              >
                <img id="square4" src={WackAMola} alt="wack a mola" />
              </a>
            </div>
            <div>
              <a
                href="https://pascual143.github.io/Daft-Punk-Audio-Selector/"
                target="_blank"
                rel="noreferrer"
              >
                <img id="square6" src={Daft} alt="Daft Punk" />
              </a>
            </div>
            <div>
              <a
                href="https://pascual143.github.io/Chrono-Date-Time/"
                target="_blank"
                rel="noreferrer"
              >
                <img id="square1" src={Chrono} alt="chrono" />
              </a>
            </div>
            <div>
              <a
                href="https://pascual143.github.io/IssueTracker-html-css-js/"
                target="_blank"
                rel="noreferrer"
              >
                <img id="square7" src={Issue} alt="issue tracker" />
              </a>
            </div>
            {/* <div id="square8">
              <a href="www.google.es" target="_blank" rel="noreferrer">
                MISSING
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Zooming;
