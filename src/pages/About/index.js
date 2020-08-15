import React from "react";
import Layout from "../../components/layout";
import "./style.css";

/*--------------------------------- */
import ARIDA from "../../assets/about/txt_ARID-and-ITONOEN.svg";
import AboutOne from "../../assets/about/pic_about01-01_pc.jpg";
import AboutTwo from "../../assets/about/pic_about01-02_pc.jpg";
import AboutThree from "../../assets/about/pic_about01-03_pc.jpg";
/*--------------------------------- */

class About extends React.Component {
  render() {
    return (
      <div className="aboutContents" id="aboutContents">
        <article>
          <div className="aboutTopJumbotron">
            <div className="content">
              <h1 className="title">有田と、伊藤農園</h1>
              <img src={ARIDA} alt="ARIDA and ITONOEN" />
            </div>
          </div>
          <div className="aboutTopSection section1">
            <div className="pictures pictures1">
              <picture className="picture1">
                <img src={AboutOne} alt="aboutOne" />
              </picture>
              <picture className="picture2">
                <img src={AboutTwo} alt="aboutTwo" />
              </picture>
              <picture className="picture3">
                <img src={AboutThree} alt="aboutThree" />
              </picture>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Layout(About);
