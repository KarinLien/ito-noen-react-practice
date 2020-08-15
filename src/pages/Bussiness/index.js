import React from "react";
import Layout from "../../components/layout";
import JumbotronTitle from "../../components/JumbotronTitle";
import "./style.css";

/*-------------------------------------------------------------------- */
import BusinessMark from "../../assets/business/txt_work-contents.svg";
import Img123 from "../../assets/business/img_123_pc.png";
/*-------------------------------------------------------------------- */

class Bussiness extends React.Component {
  render() {
    return (
      <div id="businessContent" className="businessContent">
        <article>
          <JumbotronTitle
            title="事業內容"
            jumbotronTextImg={BusinessMark}
            imgClassName="jumbotronAboutWorkContents"
          />
          <div className="workContents">
            <div className="workContentsIntro">
              <p>
                紀州の温暖な気候と黒潮から吹く潮風に恵まれた和歌山県有田市で、
                <br />
                柑橘類の生産、搾汁、加工、販売までを手掛けています。
                <br />
                いち早く農業の六次産業化に取り組み、地元産の有田みかんを始めとする柑橘を使った加工商品を
                <br />
                国内外へ発信。地元農家の方々と共に歴史あるみかん畑を絶やさないよう、
                <br />
                和歌山産みかんの美味しさ、価値を届けていきます。
              </p>
              <figure className="industriesImg">
                <picture>
                  <img src={Img123} alt="industriesImg" />
                </picture>
              </figure>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Layout(Bussiness);
