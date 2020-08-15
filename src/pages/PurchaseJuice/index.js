import React from "react";
import Layout from "../../components/layout";
import PurchaseJumbotronTitle from "../../components/PurchaseJumbotronTitle";
import "./style.css";

import txt_material_fruit_juice from "../../assets/purchase/juice/txt_material-fruit-juice.svg";

class PurchaseJuice extends React.Component {
  render() {
    return (
      <div className="contents">
        <article>
          <PurchaseJumbotronTitle
            title="原料果汁"
            className="purchaseJuice"
            titleImg={txt_material_fruit_juice}
          />
          <div className="purchaseIntro pageKajyu">
              
          </div>
        </article>
      </div>
    );
  }
}
export default Layout(PurchaseJuice);
