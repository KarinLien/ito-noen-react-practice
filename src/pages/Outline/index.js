import React from "react";
import Layout from "../../components/layout";
import JumbotronTitle from "../../components/JumbotronTitle";
import "./style.css";
/*---------------------------------------------- */
import JumbotronTextImg from "../../assets/outline/txt_overview.svg";
/*---------------------------------------------- */

class Outline extends React.Component {
  render() {
    return (
      <article>
        <JumbotronTitle
          title="会社概要"
          jumbotronTextImg={JumbotronTextImg}
          imgClassName="jumbotronAboutOverview"
        />
        <h2 className="aboutOverviewHeading01">株式会社 伊藤農園</h2>
      </article>
    );
  }
}
export default Layout(Outline);
