import React from "react";
import "./style.css";
/*---------------------------- */
import Layout from "../../components/layout";
import JumbotronTitle from "../../components/JumbotronTitle";
import JumbotronTextImg from "../../assets/recruit/txt_recruit.svg";
/*---------------------------- */

class Recruit extends React.Component {
  render() {
    //jumbotronRecruit
    return (
      <div>
        <article>
          <JumbotronTitle
            title="採用情報"
            jumbotronTextImg={JumbotronTextImg}
            imgClassName="jumbotronRecruit"
          />
          <strong className="recruitIntroText">
            オンリーワンのモノづくりで
            <br />
            「有田みかん」の
            <br />
            価値を高めたい。
          </strong>
          <div className="recruitSection section1">YOOOOO!!!!</div>
        </article>
      </div>
    );
  }
}
export default Layout(Recruit);
