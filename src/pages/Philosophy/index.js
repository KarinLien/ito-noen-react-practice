import React from "react";
import Layout from "../../components/layout";
import "./style.css";

/*------------------------------------ */
import PhilosophyText from "../../assets/philosophy/txt_philosophy.svg";
import PhilosophyOrange from "../../assets/philosophy/img_philosopy-orange.png";
import PhilosophyImg1 from "../../assets/philosophy/img_philosophy01.jpg";
import PhilosophyImg2 from "../../assets/philosophy/img_philosophy02.jpg";
import PhilosophyImg3 from "../../assets/philosophy/img_philosophy03.jpg";
/*----------------------------------- */

class Philosophy extends React.Component {
  render() {
    return (
      <div className="AboutPhilosophy">
        <div className="inner" style={{ backgroundColor: "#fff" }}>
          <h1 className="philosophy-heading">企業理念</h1>
          <img
            src={PhilosophyText}
            alt="txt_philosophy.svg"
            className="subHeading"
          />
          <strong className="ourPhilosophy">
            有田みかんとピュアなものづくりで、
            <br /> 新しい豊かな未来をつくっていく
          </strong>
          <img
            src={PhilosophyOrange}
            alt="PhilosophyOrange"
            className="philosophy-orange"
          />

          <div className="philosophyList">
            <h2 className="philosophy-heading">
              <span>私たちが大切にする思い</span>
            </h2>
            <ul>
              <li>
                <figure>
                  <img src={PhilosophyImg1} alt="PhilosophyImg1" />
                </figure>
                <p>
                  有田みかんの伝統文化を守り、
                  <br /> 柑橘の生産・加工を通じて
                  <br />
                  地域社会に貢献する
                </p>
              </li>
              <li>
                <figure>
                  <img src={PhilosophyImg2} alt="PhilosophyImg1" />
                </figure>
                <p>
                  つくり手・買い手ともに
                  <br />
                  こころ豊かになる、
                  <br />
                  体にやさしいものづくりを続ける
                </p>
              </li>
              <li>
                <figure>
                  <img src={PhilosophyImg3} alt="PhilosophyImg1" />
                </figure>
                <p>
                  素直さと謙虚さをもって
                  <br />
                  互いを尊重しあい、
                  <br />
                  絶えず変化する時代を先取りし、
                  <br />
                  挑戦を続ける
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Layout(Philosophy);
